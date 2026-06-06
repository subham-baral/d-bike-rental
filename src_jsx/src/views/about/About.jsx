import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Banner from '../../sections/common/Banner';
import AboutInner from '../../sections/about/AboutInner';
import TeamInner from '../../sections/about/TeamInner';
import TestimonianInner from '../../sections/about/TestimonianInner';
import LetsTalk from '../../sections/common/LetsTalk';
import BlogOne from '../../sections/blog/BlogOne';
import ServiceInner from '../../sections/service/ServiceInner';
import BookingInner from '../../sections/booking/BookingInner';
import ListingInner from '../../sections/about/ListingInner';
const About = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { breadcrumb: 'About Us' }), _jsx(AboutInner, {}), _jsx(ServiceInner, { sectionClass: 'services-one' }), _jsx(BookingInner, {}), _jsx(ListingInner, {}), _jsx(TeamInner, {}), _jsx(TestimonianInner, {}), _jsx(LetsTalk, {}), _jsx(BlogOne, {})] }));
};
export default About;
