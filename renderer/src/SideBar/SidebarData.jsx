import * as AiIcons from "react-icons/ai";  
import * as IoIcons from "react-icons/io5";
import * as MDIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Statistics',
        path: '/Statistics',
        icon: <IoIcons.IoStatsChart  />,
        cName: 'nav-text'
    },
    {
        title: 'Tasks',
        path: '/Tasks',
        icon: <IoIcons.IoList  />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/Settings',
        icon: <MDIcons.MdPowerSettingsNew  />,
        cName: 'nav-text'
    },
    {
        title: 'Credits',
        path: "/Credits",
        icon: <MDIcons.MdStar  />,
        cName: 'nav-text'
    }
]