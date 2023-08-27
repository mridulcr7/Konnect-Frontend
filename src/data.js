import { AiFillHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

export const navData = [
    {
        id: 1,
        name: "Home",
        icon: <AiFillHome />,
        url: "/",
    },
    {
        id: 2,
        name: "Explore",
        icon: <MdExplore />,
        url: "/explore",
    },
    {
        id: 3,
        name: "Friends",
        icon: <GoPeople />,
        url: "/friends",
    },
    {
        id: 4,
        name: "Messages",
        icon: <BiSolidMessageSquareDetail />,
        url: "/messages",
    },
    {
        id: 5,
        name: "Settings",
        icon: <DiAptana />,
        url: "/settings",
    },
];


export const postData = [
    {
        id: 1, 
        name: ""
    }
]