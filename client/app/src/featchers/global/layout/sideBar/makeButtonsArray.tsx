
import SideBarButtons from '../../types/sideBarButtons';
import { RiDashboardFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";






const makeBottons: SideBarButtons[] = [
    {
        to: "dashboard/home",
        icon: <i> <RiDashboardFill /></i>,
        title: "Dashboard"
    },
    {
        to: "dashboard/profile",
        icon: <i> <MdAccountCircle /></i>,
        title: "Profile",
        subBtn: ["Passwords", "Mail", "Accounts"]
    },
    {
        to: "dashboard/features",
        icon: <i className="fa-solid fa-bag-shopping"> </i>,
        title: "Features",
        subBtn: ["Pages", "Elements", "Portofilio"]
    },
    {
        to: "dashboard/revenue",
        icon: <i className="fa-solid fa-square-poll-vertical"> </i>,
        title: "Revenue"
    },
    {
        to: "dashboard/analytics",
        icon: <i> <IoMdAnalytics /></i>,
        title: "Analytics"
    },
    {
        to: "dashboard/calendar",
        icon: <i> <FaCalendarAlt /></i>,
        title: "Calendar"
    },
    {
        to: "dashboard/wallets",
        icon: <i className="fa-solid fa-wallet"> </i>,
        title: "Wallets",
        span: "New"
    },
    {
        to: "dashboard/contens/settings",
        icon: <i> <IoMdSettings /></i>,
        title: "Settings"
    },
]

export default makeBottons