"use client";
import ProjectCard from "@/components/ProjectCard";
import GlitchText from "@/components/GlitchText";
import BlurText from "@/components/BlurText";

export default function ProjectsPage() {
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto space-y-16 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none delay-1000"></div>

      {/* Header Section */}
      <div className="relative flex flex-col justify-center items-center z-10 text-center mb-20">
         <BlurText
  text="My Projects"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight"
/>
        {/* <GlitchText
          speed={1}
          enableShadows
          enableOnHover
          className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          My Projects
        </GlitchText> */}
       
        
        {/* <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mx-auto rounded-full"></div> */}
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore my portfolio of web applications and software solutions that showcase my skills in full-stack development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-stretch">
          <div className="flex justify-center">
            <ProjectCard
              title="Homifyme"
              role="Frontend & Backend Dev"
              demoLink="https://homifyme-frontend.onrender.com"
              githubFrontend="https://github.com/lethang2003/HomifyMe-Frontend"
              githubBackend="https://github.com/lethang2003/Homifyme-Backend"
              description="E-commerce website for boarding houses with login via cookie, filtering, searching, map integration, and payments. Powered by REST API."
              technologies={[
                "ReactJS",
                "NodeJS",
                "ExpressJS",
                "Tailwind CSS",
                "MongoDB",
                "Google Maps API",
                "JWT",
              ]}
            />
          </div>

          <div className="flex justify-center">
            <ProjectCard
              title="MultiCourse"
              role="Fullstack Developer"
              demoLink="https://multi-course.onrender.com/"
              github="https://github.com/lethang2003/MultiCourse"
              description="Multi-role learning platform with student & tutor dashboards, course listing, cart, order system, and authentication."
              technologies={[
                "ReactJS",
                "NodeJS",
                "ExpressJS",
                "Tailwind CSS",
                "Ant Design",
                "MongoDB",
                "JWT",
              ]}
            />
          </div>

          <div className="flex justify-center lg:col-span-2">
            <ProjectCard
              title="ShoeSense"
              role="Java Web Dev"
              github="https://github.com/lethang2003/ShoeSense"
              description="Java EE shoe store web app with admin/customer roles, product management, authentication, and SQL Server backend. Deployed as WAR file."
              technologies={[
                "Java EE",
                "Servlet",
                "JSP",
                "JSTL",
                "Maven",
                "SQL Server",
              ]}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 text-center mt-20">
        <div className="inline-flex items-center gap-3 text-gray-400">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <span className="text-sm font-medium">More projects coming soon</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}