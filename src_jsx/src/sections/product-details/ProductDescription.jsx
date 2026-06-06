"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import reviewImg from "../../assets/images/shop/review-1-1.jpg";
import reviewImg2 from "../../assets/images/shop/review-1-2.jpg";
const ProductDescription = () => {
    const [isActiveTab, setActiveTab] = useState(1);
    // Sample reviews data
    const reviews = [
        {
            id: 1,
            name: "Kevin martin",
            date: "20 Oct, 2025 . 4:00 pm",
            rating: 5,
            image: reviewImg,
            comment: "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text."
        },
        {
            id: 2,
            name: "Martin Kellis",
            date: "20 Oct, 2025 . 4:00 pm",
            rating: 5,
            image: reviewImg2,
            comment: "It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim."
        }
    ];
    const handleSubmitReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const review = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        console.log(review);
        // Optionally reset form
        form.reset();
    };
    const renderStars = (count) => {
        return Array.from({ length: count }, (_, index) => (_jsx("i", { className: "icon-star" }, index)));
    };
    return (_jsx("section", { className: "product-description", children: _jsx("div", { className: "container", children: _jsx("div", { className: "product-details__description", children: _jsxs("div", { className: "product-details__main-tab-box tabs-box", children: [_jsxs("ul", { className: "tab-buttons clearfix list-unstyled", children: [_jsx("li", { onClick: () => setActiveTab(1), className: `tab-btn ${isActiveTab === 1 ? 'active-btn' : ''}`, children: _jsx("span", { children: "Description" }) }), _jsx("li", { onClick: () => setActiveTab(2), className: `tab-btn ${isActiveTab === 2 ? 'active-btn' : ''}`, children: _jsx("span", { children: "Additional information" }) }), _jsx("li", { onClick: () => setActiveTab(3), className: `tab-btn ${isActiveTab === 3 ? 'active-btn' : ''}`, children: _jsxs("span", { children: ["Reviews (", reviews.length, ")"] }) })] }), _jsxs("div", { className: "tabs-content", children: [_jsx("div", { className: `tab ${isActiveTab === 1 ? 'active-tab' : ''}`, children: _jsx("div", { className: "product-details__tab-content-inner", children: _jsxs("div", { className: "product-details__description-content", children: [_jsx("p", { className: "product-details__description-text-1", children: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences" }), _jsx("div", { className: "product-description__list", children: _jsxs("ul", { className: "list-unstyled", children: [_jsx("li", { children: _jsxs("p", { children: [_jsx("span", { className: "icon-right-arrow" }), " Nam at elit nec neque suscipit gravida."] }) }), _jsx("li", { children: _jsxs("p", { children: [_jsx("span", { className: "icon-right-arrow" }), " Aenean egestas orci eu maximus tincidunt."] }) }), _jsx("li", { children: _jsxs("p", { children: [_jsx("span", { className: "icon-right-arrow" }), " Curabitur vel turpis id tellus cursus laoreet."] }) })] }) }), _jsx("p", { className: "product-details__description-text-2", children: "Quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo" })] }) }) }), _jsx("div", { className: `tab ${isActiveTab === 2 ? 'active-tab' : ''}`, children: _jsx("div", { className: "product-details__tab-content-inner", children: _jsxs("div", { className: "product-details__additional-information-content", children: [_jsx("p", { className: "product-details__additional-information-text-1", children: "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the middle of text." }), _jsx("p", { className: "product-details__additional-information-text-2", children: "Quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo" })] }) }) }), _jsx("div", { className: `tab ${isActiveTab === 3 ? 'active-tab' : ''}`, children: _jsxs("div", { className: "product-details__tab-content-inner", children: [_jsx("div", { className: "review-one", children: _jsxs("div", { className: "comments-area", children: [_jsx("div", { className: "review-one__title", children: _jsxs("h3", { children: [reviews.length, " Reviews"] }) }), reviews.map((review) => (_jsx("div", { className: "comment-box", children: _jsxs("div", { className: "comment", children: [_jsx("div", { className: "author-thumb", children: _jsx("figure", { className: "thumb", children: _jsx("img", { src: review.image, alt: review.name }) }) }), _jsxs("div", { className: "review-one__content", children: [_jsxs("div", { className: "review-one__content-top", children: [_jsx("div", { className: "info", children: _jsxs("h2", { children: [review.name, " ", _jsx("span", { children: review.date })] }) }), _jsx("div", { className: "reply-btn", children: renderStars(review.rating) })] }), _jsx("div", { className: "review-one__content-bottom", children: _jsx("p", { children: review.comment }) })] })] }) }, review.id)))] }) }), _jsx("div", { className: "review-form-one", children: _jsxs("div", { className: "review-form-one__inner", children: [_jsx("h3", { className: "review-form-one__title", children: "Add a review" }), _jsxs("div", { className: "review-form-one__rate-box", children: [_jsx("p", { className: "review-form-one__rate-text", children: "Rate this product?" }), _jsx("div", { className: "review-form-one__rate", children: renderStars(5) })] }), _jsxs("form", { onSubmit: handleSubmitReview, className: "review-form-one__form contact-form-validated", children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsx("div", { className: "review-form-one__input-box text-message-box", children: _jsx("textarea", { name: "message", placeholder: "Write a comment", required: true }) }) }) }), _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "review-form-one__input-box", children: _jsx("input", { type: "text", placeholder: "Your name", name: "name", required: true }) }) }), _jsx("div", { className: "col-xl-6 col-lg-6", children: _jsx("div", { className: "review-form-one__input-box", children: _jsx("input", { type: "email", placeholder: "Email address", name: "email", required: true }) }) })] }), _jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-12", children: _jsxs("button", { type: "submit", className: "thm-btn review-form-one__btn", children: ["Submit a review", _jsx("span", { children: _jsx("i", { className: "icon-diagonal-arrow" }) })] }) }) })] }), _jsx("div", { className: "result" })] }) })] }) })] })] }) }) }) }));
};
export default ProductDescription;
