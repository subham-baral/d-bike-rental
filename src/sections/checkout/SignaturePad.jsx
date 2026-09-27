"use client";

import React, { useRef, useEffect, useState } from 'react';
import SignaturePadLib from 'signature_pad';

const SignaturePad = ({ value, onChange, onClear, error }) => {
  const canvasRef = useRef(null);
  const padInstanceRef = useRef(null);
  const containerRef = useRef(null);
  const onChangeRef = useRef(onChange);
  const onClearRef = useRef(onClear);
  const [isEmpty, setIsEmpty] = useState(!value);

  // Keep callback refs updated without re-triggering canvas mount
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onClearRef.current = onClear;
  }, [onClear]);

  // Mount SignaturePad ONCE on canvas mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = container.getBoundingClientRect();
    const width = rect.width || 400;
    const height = 200;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);

    const signaturePad = new SignaturePadLib(canvas, {
      minWidth: 1.5,
      maxWidth: 3.5,
      penColor: '#0E426A',
      throttle: 0,
    });

    padInstanceRef.current = signaturePad;

    // Load initial signature if already present
    if (value) {
      signaturePad.fromDataURL(value, { ratio });
      setIsEmpty(false);
    }

    signaturePad.addEventListener('endStroke', () => {
      const empty = signaturePad.isEmpty();
      setIsEmpty(empty);
      if (!empty && onChangeRef.current) {
        onChangeRef.current(signaturePad.toDataURL('image/png'));
      }
    });

    // Handle container resize cleanly without losing current strokes
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current || !padInstanceRef.current) return;
      const newRect = containerRef.current.getBoundingClientRect();
      const currentWidth = canvasRef.current.width / ratio;
      // Only resize if width changed by more than 8px (avoids mobile viewport micro-shifts)
      if (Math.abs(newRect.width - currentWidth) < 8) return;

      const data = padInstanceRef.current.toData();
      const newWidth = newRect.width;

      canvas.width = newWidth * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${newWidth}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(ratio, ratio);
      padInstanceRef.current.clear();

      if (data && data.length > 0) {
        padInstanceRef.current.fromData(data);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      signaturePad.off();
    };
  }, []); // Run only once on mount

  // Sync external clearing
  useEffect(() => {
    if (!value && padInstanceRef.current && !padInstanceRef.current.isEmpty()) {
      padInstanceRef.current.clear();
      setIsEmpty(true);
    }
  }, [value]);

  const handleClear = (e) => {
    e.preventDefault();
    if (padInstanceRef.current) {
      padInstanceRef.current.clear();
      setIsEmpty(true);
      if (onChangeRef.current) onChangeRef.current('');
      if (onClearRef.current) onClearRef.current();
    }
  };

  const handleUndo = (e) => {
    e.preventDefault();
    if (padInstanceRef.current) {
      const data = padInstanceRef.current.toData();
      if (data && data.length > 0) {
        data.pop();
        padInstanceRef.current.fromData(data);
        const empty = padInstanceRef.current.isEmpty();
        setIsEmpty(empty);
        if (onChangeRef.current) {
          onChangeRef.current(empty ? '' : padInstanceRef.current.toDataURL('image/png'));
        }
      }
    }
  };

  return (
    <div className="signature-pad-wrapper">
      <div className="signature-header">
        <div className="signature-title-area">
          <label className="signature-label">
            Renter Electronic Signature <span className="req">*</span>
          </label>
          <span className="signature-hint">
            Draw your signature using your finger, stylus, or mouse
          </span>
        </div>
        <div className="signature-actions">
          <button
            type="button"
            onClick={handleUndo}
            disabled={isEmpty}
            className="sig-btn sig-btn-undo"
            title="Undo last stroke"
          >
            <i className="fas fa-undo-alt"></i> Undo
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={isEmpty}
            className="sig-btn sig-btn-clear"
            title="Clear signature"
          >
            <i className="fas fa-eraser"></i> Clear
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`canvas-container ${error ? 'has-error' : ''} ${!isEmpty ? 'is-signed' : ''}`}
      >
        <canvas ref={canvasRef} className="signature-canvas" />

        {/* Subtle baseline indicator */}
        <div className="signature-baseline">
          <span className="baseline-text">Sign Above This Line</span>
        </div>

        {/* Status chip */}
        <div className={`signature-status ${!isEmpty ? 'status-valid' : ''}`}>
          {!isEmpty ? (
            <span>
              <i className="fas fa-check-circle"></i> Signature Captured
            </span>
          ) : (
            <span>
              <i className="fas fa-pen-nib"></i> Awaiting Signature
            </span>
          )}
        </div>
      </div>

      {error && <div className="sig-error-msg">{error}</div>}

      <style jsx>{`
        .signature-pad-wrapper {
          width: 100%;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .signature-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 10px;
        }
        .signature-label {
          font-weight: 600;
          font-size: 15px;
          color: #131222;
          margin: 0;
          display: block;
        }
        .signature-label .req {
          color: #ee4325;
        }
        .signature-hint {
          display: block;
          font-size: 12px;
          color: #868689;
          margin-top: 2px;
        }
        .signature-actions {
          display: flex;
          gap: 8px;
        }
        .sig-btn {
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .sig-btn:hover:not(:disabled) {
          background: #e2e8f0;
          color: #0e426a;
        }
        .sig-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .sig-btn-clear:hover:not(:disabled) {
          background: #fee2e2;
          color: #dc2626;
          border-color: #fca5a5;
        }
        .canvas-container {
          position: relative;
          width: 100%;
          height: 200px;
          background: #ffffff;
          border: 2px dashed #cbd5e1;
          border-radius: 12px;
          overflow: hidden;
          touch-action: none;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .canvas-container.is-signed {
          border-color: #10b981;
          border-style: solid;
        }
        .canvas-container.has-error {
          border-color: #ef4444;
          background-color: #fffaf0;
        }
        .signature-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          cursor: crosshair;
        }
        .signature-baseline {
          position: absolute;
          bottom: 36px;
          left: 20px;
          right: 20px;
          border-bottom: 1px dashed #cbd5e1;
          pointer-events: none;
          z-index: 1;
          text-align: center;
        }
        .baseline-text {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #94a3b8;
          background: #ffffff;
          padding: 0 10px;
          position: relative;
          top: 8px;
        }
        .signature-status {
          position: absolute;
          bottom: 10px;
          right: 14px;
          z-index: 3;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(241, 245, 249, 0.85);
          color: #64748b;
          font-weight: 500;
          pointer-events: none;
        }
        .signature-status.status-valid {
          background: #ecfdf5;
          color: #059669;
          font-weight: 600;
        }
        .sig-error-msg {
          color: #ef4444;
          font-size: 12.5px;
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
      `}</style>
    </div>
  );
};

export default SignaturePad;
