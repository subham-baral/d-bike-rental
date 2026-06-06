"use client";
import { useContext } from 'react';
import GorentContext from './GorentContext';
const useGorentContext = () => {
    const context = useContext(GorentContext);
    if (context === null) {
        throw new Error("useGorentContext must be used within a ContextProvider");
    }
    return context;
};
export default useGorentContext;
