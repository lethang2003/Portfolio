
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// import Navbar from "@/components/GooeyNav";
import Particles from "@/components/Particles";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// import AnimatedList from "@/components/AnimatedList";

import ProjectsPage from "./projects/page";

import ContactSection from "@/components/ContactSection";
import AboutPage from "./about/page";
import OtherPage from "./other/page";
import EduAndExpPage from "./eduandexp/page";
import ClientDockWrapper from "@/components/ClientDockWrapper";

export const metadata: Metadata = {
  title: "Le Thang | Portfolio",
  description: "Introducing my portfolio, showcasing my skills and projects.",
  icons: {
    icon: "/thang_avt.jpg",
   
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



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

       <ClientDockWrapper/>
      </body>
    </html>
  );
}
