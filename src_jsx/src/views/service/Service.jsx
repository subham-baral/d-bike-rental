import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Banner from '../../sections/common/Banner';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ServiceInner from '../../sections/service/ServiceInner';
import ProcessInner from '../../sections/process/ProcessInner';
import ServiceInnerTwo from '../../sections/service/ServiceInnerTwo';
import LetsTalk from '../../sections/common/LetsTalk';
const Service = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { breadcrumb: 'Services' }), _jsx(SlidingTextOne, {}), _jsx(ServiceInner, { sectionClass: 'services-one' }), _jsx(ProcessInner, { sectionClass: 'services-page-process' }), _jsx(ServiceInnerTwo, { sectionClass: 'services-four' }), _jsx(LetsTalk, {}), _jsx(ServiceInner, { sectionClass: 'services-two' })] }));
};
export default Service;
