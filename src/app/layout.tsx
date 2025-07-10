"use client";
// app/layout.tsx
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// import Navbar from "@/components/GooeyNav";
import Particles from "@/components/Particles";
import {
  VscAccount,
  VscArchive,
  VscFolder,
  VscHome,
  VscMail,
  VscMortarBoard,
  VscRepo,
  VscSettingsGear,
  VscSymbolMethod,
} from "react-icons/vsc";
import Dock from "@/components/Dock";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { useRouter } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import ScrambledText from "@/components/ScrambledText";
import GlitchText from "@/components/GlitchText";
import GradientText from "@/components/GradientText";
import GooeyNav from "@/components/GooeyNav";
// import AnimatedList from "@/components/AnimatedList";
import StarBorder from "@/components/StarBorder";
import ShinyText from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import FuzzyText from "@/components/FuzzyText";
import RotatingText from "@/components/RotatingText";
import ProjectsPage from "./projects/page";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import AboutPage from "./about/page";
import OtherPage from "./other/page";
import EduAndExpPage from "./eduandexp/page";

// export const metadata: Metadata = {
//   title: "My Portfolio",
//   description: "Giới thiệu bản thân và dự án",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

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
      icon: <VscMail size={18} />,
      label: "Contact Me",
 onClick: () => scrollToSection("contact"),
    },
  ];

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <html lang="vi">
      <body
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable}`}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div
          style={{
            position: "fixed",
            top: 10,
            left: 1050,
            right: 0,
            width: "100%",
            zIndex: 1000,

            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // tuỳ chọn, để tạo bóng
          }}
        >
          {/* <GooeyNav
            items={itemss}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          /> */}
        </div>
        <main id="home" className="flex-1">{children}</main>

       <div id="about" className="">
        <AboutPage />
       </div>

   
             <div id="other"><OtherPage/></div>

      <div id="edaex" className="">
        <EduAndExpPage />
      </div>

<div id="project" className="flex flex-col items-center gap-6 mt-[300px]">

   {/* <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className="custom-class"
          >
            My Projects
          </GlitchText> */}

          <div>
            <ProjectsPage />
          </div>
        {/* <RotatingText
  texts={['My', 'Coding', 'Project']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 text-white font-semibold text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-5xl"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/> */}


</div>

<div id="contact" className="flex flex-col items-center gap-6 mt-[200px]">

<ContactSection/>

</div>


        <Footer />

        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className="fixed z-50"
        />
      </body>
    </html>
  );
}
