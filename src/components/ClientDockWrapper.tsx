// components/ClientDockWrapper.tsx
"use client";

import Dock from "@/components/Dock";
import { BsCashStack } from "react-icons/bs";
import {
  VscAccount,
  VscFolder,
  VscHome,
  VscMail,
  VscMortarBoard,
  VscSymbolMethod,
} from "react-icons/vsc";

export default function ClientDockWrapper() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About Me",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <VscSymbolMethod size={18} />,
      label: "Other Skills",
      onClick: () => scrollToSection("other"),
    },
    {
      icon: <VscMortarBoard size={18} />,
      label: "Education and Experience",
      onClick: () => scrollToSection("edaex"),
    },
    {
      icon: <VscFolder size={18} />,
      label: "My Projects",
      onClick: () => scrollToSection("project"),
    },
    {
  icon: (
    <div className="bg-blue-500 text-white p-1 rounded">
      <BsCashStack size={18} />
    </div>
  ),
  label: "KiotViet Price",
  onClick: () => scrollToSection("kiotviet"),
},

    {
      icon: <VscMail size={18} />,
      label: "Contact Me",
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      className="fixed z-50"
    />
  );
}
