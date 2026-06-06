"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const CarListingRight = () => {
    const [valueRange, setValueRange] = useState(50);
    const min = 100;
    const max = 500;
    const percentage = ((valueRange - min) / (max - min)) * 100;
    // State for all checkboxes
    const [categories, setCategories] = useState({
        skipper: true,
        skipper2: false,
        skipper3: false,
        skipper4: false,
        skipper5: false,
        skipper6: false,
        skipper7: false,
    });
    const [features, setFeatures] = useState({
        feature1: false,
        feature2: false,
        feature3: false,
        feature4: false,
        feature5: false,
        feature6: false,
        feature7: false,
    });
    const [fuelTypes, setFuelTypes] = useState({
        f_type1: false,
        f_type2: false,
        f_type3: false,
        f_type4: false,
        f_type5: false,
        f_type6: false,
    });
    const [selectedRating, setSelectedRating] = useState('');
    // Handlers
    const handleCategoryChange = (name) => {
        setCategories(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };
    const handleFeatureChange = (name) => {
        setFeatures(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };
    const handleFuelTypeChange = (name) => {
        setFuelTypes(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };
    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const search = form.search.value;
        if (search) {
            form.reset();
        }
        ;
    };
    return (_jsx("div", { className: "col-xl-3", children: _jsx("div", { className: "car-listing-page-one__right", children: _jsxs("div", { className: "car-listing__sidebar", children: [_jsx("div", { className: "car-listing__search car-listing__sidebar-single", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: 'search', placeholder: "Search" }), _jsx("button", { type: "submit", children: _jsx("i", { className: "fa fa-search" }) })] }) }), _jsxs("div", { className: "car-listing__price-ranger car-listing__sidebar-single", children: [_jsx("h3", { className: "car-listing__sidebar-title", children: "Filter Price" }), _jsx("div", { className: "price-ranger", children: _jsxs("div", { className: "ranger-min-max-block", children: [_jsx("input", { type: "range", min: min, max: max, value: valueRange, onChange: (e) => setValueRange(Number(e.target.value)), style: {
                                                // 1. Removes default browser styling
                                                WebkitAppearance: 'none',
                                                appearance: 'none',
                                                width: '100%',
                                                height: '8px',
                                                borderRadius: '5px',
                                                outline: 'none',
                                                // 2. Your dynamic gradient
                                                background: `linear-gradient(to right, #FFB51D ${percentage}%, #ddd ${percentage}%)`
                                            }, 
                                            // Use a className or styled-component to target the thumb handle
                                            className: "custom-range-slider" }), _jsxs("div", { className: "d-flex justify-content-between valuRange", children: [_jsxs("div", { className: "d-flex values", children: [_jsx("span", { children: valueRange }), _jsx("span", { children: "-" }), _jsx("span", { children: max })] }), _jsx("button", { children: "Filter" })] })] }) })] }), _jsxs("div", { className: "car-listing__category car-listing__sidebar-single", children: [_jsx("h3", { className: "car-listing__sidebar-title", children: "Categories" }), _jsxs("ul", { className: "list-unstyled", children: [_jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "skipper1", id: "skipper", checked: categories.skipper, onChange: () => handleCategoryChange('skipper') }), _jsxs("label", { htmlFor: "skipper", children: [_jsx("span", {}), "All"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "200" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "skipper2", id: "skipper2", checked: categories.skipper2, onChange: () => handleCategoryChange('skipper2') }), _jsxs("label", { htmlFor: "skipper2", children: [_jsx("span", {}), "sport cars"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "50" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "skipper3", id: "skipper3", checked: categories.skipper3, onChange: () => handleCategoryChange('skipper3') }), _jsxs("label", { htmlFor: "skipper3", children: [_jsx("span", {}), "sedan"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "100" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "skipper4", id: "skipper4", checked: categories.skipper4, onChange: () => handleCategoryChange('skipper4') }), _jsxs("label", { htmlFor: "skipper4", children: [_jsx("span", {}), "luxury cars"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "150" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "skipper5", id: "skipper5", checked: categories.skipper5, onChange: () => handleCategoryChange('skipper5') }), _jsxs("label", { htmlFor: "skipper5", children: [_jsx("span", {}), "Minibus"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "80" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "skipper6", id: "skipper6", checked: categories.skipper6, onChange: () => handleCategoryChange('skipper6') }), _jsxs("label", { htmlFor: "skipper6", children: [_jsx("span", {}), "Coupes"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "60" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "skipper7", id: "skipper7", checked: categories.skipper7, onChange: () => handleCategoryChange('skipper7') }), _jsxs("label", { htmlFor: "skipper7", children: [_jsx("span", {}), "Trucks"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "90" }) })] })] })] }), _jsxs("div", { className: "car-listing__category car-listing__sidebar-single", children: [_jsx("h3", { className: "car-listing__sidebar-title", children: "Car Features" }), _jsxs("ul", { className: "list-unstyled", children: [_jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "feature1", id: "feature1", checked: features.feature1, onChange: () => handleFeatureChange('feature1') }), _jsxs("label", { htmlFor: "feature1", children: [_jsx("span", {}), "All"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "200" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "feature2", id: "feature2", checked: features.feature2, onChange: () => handleFeatureChange('feature2') }), _jsxs("label", { htmlFor: "feature2", children: [_jsx("span", {}), "sport cars"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "50" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "feature3", id: "feature3", checked: features.feature3, onChange: () => handleFeatureChange('feature3') }), _jsxs("label", { htmlFor: "feature3", children: [_jsx("span", {}), "sedan"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "100" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "feature4", id: "feature4", checked: features.feature4, onChange: () => handleFeatureChange('feature4') }), _jsxs("label", { htmlFor: "feature4", children: [_jsx("span", {}), "luxury cars"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "150" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "feature5", id: "feature5", checked: features.feature5, onChange: () => handleFeatureChange('feature5') }), _jsxs("label", { htmlFor: "feature5", children: [_jsx("span", {}), "Minibus"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "80" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "feature6", id: "feature6", checked: features.feature6, onChange: () => handleFeatureChange('feature6') }), _jsxs("label", { htmlFor: "feature6", children: [_jsx("span", {}), "Coupes"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "60" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "feature7", id: "feature7", checked: features.feature7, onChange: () => handleFeatureChange('feature7') }), _jsxs("label", { htmlFor: "feature7", children: [_jsx("span", {}), "Trucks"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "90" }) })] })] })] }), _jsxs("div", { className: "car-listing__category car-listing__tuel-type car-listing__sidebar-single", children: [_jsx("h3", { className: "car-listing__sidebar-title", children: "Fuel Type" }), _jsxs("ul", { className: "list-unstyled", children: [_jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "f_type1", id: "f_type1", checked: fuelTypes.f_type1, onChange: () => handleFuelTypeChange('f_type1') }), _jsxs("label", { htmlFor: "f_type1", children: [_jsx("span", {}), "Diesel"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "20" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "f_type2", id: "f_type2", checked: fuelTypes.f_type2, onChange: () => handleFuelTypeChange('f_type2') }), _jsxs("label", { htmlFor: "f_type2", children: [_jsx("span", {}), "Gasoline"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "25" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "f_type3", id: "f_type3", checked: fuelTypes.f_type3, onChange: () => handleFuelTypeChange('f_type3') }), _jsxs("label", { htmlFor: "f_type3", children: [_jsx("span", {}), "Petrol"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "29" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "f_type4", id: "f_type4", checked: fuelTypes.f_type4, onChange: () => handleFuelTypeChange('f_type4') }), _jsxs("label", { htmlFor: "f_type4", children: [_jsx("span", {}), "Electric"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "40" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "f_type5", id: "f_type5", checked: fuelTypes.f_type5, onChange: () => handleFuelTypeChange('f_type5') }), _jsxs("label", { htmlFor: "f_type5", children: [_jsx("span", {}), "Ethanol"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "20" }) })] }), _jsxs("li", { children: [_jsxs("div", { className: "checked-box", children: [_jsx("input", { type: "checkbox", name: "f_type6", id: "f_type6", checked: fuelTypes.f_type6, onChange: () => handleFuelTypeChange('f_type6') }), _jsxs("label", { htmlFor: "f_type6", children: [_jsx("span", {}), "Hybrid"] })] }), _jsx("div", { className: "counts-box", children: _jsx("p", { children: "27" }) })] })] })] }), _jsxs("div", { className: "car-listing__rating car-listing__sidebar-single", children: [_jsx("h3", { className: "car-listing__sidebar-title", children: "Reviews" }), _jsx("div", { className: "car-listing__rating-box", children: _jsxs("ul", { className: "list-unstyled", children: [_jsxs("li", { children: [_jsx("input", { type: "radio", id: "fivestar", name: "rating", checked: selectedRating === 'fivestar', onChange: () => handleRatingChange('fivestar') }), _jsxs("label", { htmlFor: "fivestar", children: [_jsx("i", {}), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" })] })] }), _jsxs("li", { children: [_jsx("input", { type: "radio", id: "fourstar", name: "rating", checked: selectedRating === 'fourstar', onChange: () => handleRatingChange('fourstar') }), _jsxs("label", { htmlFor: "fourstar", children: [_jsx("i", {}), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star gray" })] })] }), _jsxs("li", { children: [_jsx("input", { type: "radio", id: "threestar", name: "rating", checked: selectedRating === 'threestar', onChange: () => handleRatingChange('threestar') }), _jsxs("label", { htmlFor: "threestar", children: [_jsx("i", {}), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star gray" }), _jsx("span", { className: "fas fa-star gray" })] })] }), _jsxs("li", { children: [_jsx("input", { type: "radio", id: "twostar", name: "rating", checked: selectedRating === 'twostar', onChange: () => handleRatingChange('twostar') }), _jsxs("label", { htmlFor: "twostar", children: [_jsx("i", {}), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star gray" }), _jsx("span", { className: "fas fa-star gray" }), _jsx("span", { className: "fas fa-star gray" })] })] }), _jsxs("li", { children: [_jsx("input", { type: "radio", id: "onestar", name: "rating", checked: selectedRating === 'onestar', onChange: () => handleRatingChange('onestar') }), _jsxs("label", { htmlFor: "onestar", children: [_jsx("i", {}), _jsx("span", { className: "fas fa-star" }), _jsx("span", { className: "fas fa-star gray" }), _jsx("span", { className: "fas fa-star gray" }), _jsx("span", { className: "fas fa-star gray" }), _jsx("span", { className: "fas fa-star gray" })] })] })] }) })] }), _jsxs("div", { className: "car-listing__google-map car-listing__sidebar-single", children: [_jsx("h3", { className: "car-listing__sidebar-title", children: "Google Map" }), _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd", className: "car-listing__google-map-box", allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" })] })] }) }) }));
};
export default CarListingRight;
