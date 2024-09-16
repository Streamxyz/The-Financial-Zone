import { HomeIcon, TrendingUpIcon, BuildingIcon, MonitorIcon, GlobeIcon, WalletIcon, BellIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Macro from "./pages/Macro.jsx";
import Companies from "./pages/Companies.jsx";
import Tech from "./pages/Tech.jsx";
import Panorama from "./pages/Panorama.jsx";
import PersonalFinance from "./pages/PersonalFinance.jsx";
import Latest from "./pages/Latest.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Macro",
    to: "/macro",
    icon: <TrendingUpIcon className="h-4 w-4" />,
    page: <Macro />,
  },
  {
    title: "Companies",
    to: "/companies",
    icon: <BuildingIcon className="h-4 w-4" />,
    page: <Companies />,
  },
  {
    title: "Tech",
    to: "/tech",
    icon: <MonitorIcon className="h-4 w-4" />,
    page: <Tech />,
  },
  {
    title: "Panorama",
    to: "/panorama",
    icon: <GlobeIcon className="h-4 w-4" />,
    page: <Panorama />,
  },
  {
    title: "Personal Finance",
    to: "/personal-finance",
    icon: <WalletIcon className="h-4 w-4" />,
    page: <PersonalFinance />,
  },
  {
    title: "Latest",
    to: "/latest",
    icon: <BellIcon className="h-4 w-4" />,
    page: <Latest />,
  },
];
