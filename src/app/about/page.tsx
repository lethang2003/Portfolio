"use client";
import GradientText from "@/components/GradientText";
import ProfileCard from "@/components/ProfileCard";
import ScrambledText from "@/components/ScrambledText";
import ShinyText from "@/components/ShinyText";
import StarBorder from "@/components/StarBorder";
import GlitchText from "@/components/GlitchText";
export default function AboutPage () {
//   const handleAnimationComplete = () => {
//     console.log('Animation completed!');
//   };
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <div className="flex flex-col items-center gap-6 mt-10">
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className="custom-class"
          >
            About Me
          </GlitchText>

          {/* Phần này là 2 thành phần nằm ngang nhau */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 px-4">
            {/* ScrambledText bên trái */}
            <div className="text-left">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class text-4xl"
              >
              <p>I&apos;m a developer</p>
              </GradientText>
              <span className="text-4xl font-semibold">Le Phan Hung Thang</span>
              <br />

              <ScrambledText>
                I am working as a Front-end Developer, focusing on user
                interface development. Besides, I am actively improving my
                knowledge of Back-end technologies to become a Full-stack
                Developer.
              </ScrambledText>
              <ScrambledText>
                I understand about Object-Oriented Programming (OOP), Data
                Structures & Algorithms, Prompt Engineering (ChatGPT, Claude AI,
                GitHub Copilot, etc.)
              </ScrambledText>
              <br />
             {/* Front-end skills */}
          <div>
            <ShinyText
              text="Front-end Skills"
              disabled={false}
              speed={3}
              className="text-xl md:text-2xl font-semibold mb-2"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "ReactJS",
                "NextJS",
                "React Native",
                "Bootstrap CSS",
                "Tailwind CSS",
                "Material UI",
                "AntDesign",
              ].map((skill) => (
                <StarBorder
                  key={skill}
                  as="button"
                  color="cyan"
                  speed="5s"
                  className="px-3 py-1"
                >
                  {skill}
                </StarBorder>
              ))}
            </div>
          </div>

          {/* Back-end skills */}
          <div className="mt-6">
            <ShinyText
              text="Back-end Skills"
              disabled={false}
              speed={3}
              className="text-xl md:text-2xl font-semibold mb-2"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {["ExpressJS", "NodeJS", "NestJS", "RESTful API"].map((skill) => (
                <StarBorder
                  key={skill}
                  as="button"
                  color="cyan"
                  speed="5s"
                  className="px-3 py-1"
                >
                  {skill}
                </StarBorder>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Profile card */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <ProfileCard
            avatarUrl="thang_avt.jpg"
            name="Le Thang"
            title="Software Engineer"
            handle="lethang2003"
            status="Online"
            contactText="Contact"
            onContactClick={scrollToContact}
          />
        </div>
      </div>
      </div>
  );
}