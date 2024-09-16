import { HomeIcon, TrendingUpIcon, BuildingIcon, MonitorIcon, GlobeIcon, WalletIcon, BellIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Macro from "./pages/Macro.jsx";
import Companies from "./pages/Companies.jsx";
import Tech from "./pages/Tech.jsx";
import Panorama from "./pages/Panorama.jsx";
import PersonalFinance from "./pages/PersonalFinance.jsx";
import Latest from "./pages/Latest.jsx";
import EconomicIndicators from "./pages/macro/EconomicIndicators.jsx";
import MonetaryPolicy from "./pages/macro/MonetaryPolicy.jsx";
import FiscalPolicy from "./pages/macro/FiscalPolicy.jsx";
import EarningsReports from "./pages/companies/EarningsReports.jsx";
import MergersAcquisitions from "./pages/companies/MergersAcquisitions.jsx";
import IPOs from "./pages/companies/IPOs.jsx";

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
    subItems: [
      { title: "Economic Indicators", to: "/macro/economic-indicators", page: <EconomicIndicators /> },
      { title: "Monetary Policy", to: "/macro/monetary-policy", page: <MonetaryPolicy /> },
      { title: "Fiscal Policy", to: "/macro/fiscal-policy", page: <FiscalPolicy /> },
    ],
  },
  {
    title: "Companies",
    to: "/companies",
    icon: <BuildingIcon className="h-4 w-4" />,
    page: <Companies />,
    subItems: [
      { title: "Earnings Reports", to: "/companies/earnings-reports", page: <EarningsReports /> },
      { title: "Mergers & Acquisitions", to: "/companies/mergers-acquisitions", page: <MergersAcquisitions /> },
      { title: "IPOs", to: "/companies/ipos", page: <IPOs /> },
    ],
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
