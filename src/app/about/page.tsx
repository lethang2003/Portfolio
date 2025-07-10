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
            <div className=" text-center md:text-left">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class text-4xl"
              >
                Hello, I'm <br />
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
              <div>
                <ShinyText
                  text="Front-end Skills"
                  disabled={false}
                  speed={3}
                  className="custom-class text-2xl font-semibold mb-2"
                />
                <br />
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                >
                  ReactJS
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class ml-2"
                  color="cyan"
                  speed="5s"
                >
                  NextJS
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class ml-2"
                  color="cyan"
                  speed="5s"
                >
                  React Native
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class ml-2"
                  color="cyan"
                  speed="5s"
                >
                  Bootstrap CSS
                </StarBorder>
                <StarBorder
                  as="button"
                  className="custom-class ml-2"
                  color="cyan"
                  speed="5s"
                >
                  Tailwind CSS
                </StarBorder>
                <br />
                <StarBorder
                  as="button"
                  className="custom-class mt-2"
                  color="cyan"
                  speed="5s"
                >
                  Material UI
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class ml-2 mt-2"
                  color="cyan"
                  speed="5s"
                >
                  AntDeign
                </StarBorder>
              </div>

              <br />
              <div className="">
                <ShinyText
                  text="Back-end Skills"
                  disabled={false}
                  speed={3}
                  className="custom-class text-2xl font-semibold mb-2"
                />
                <br />
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                >
                  ExpressJS
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class ml-2"
                  color="cyan"
                  speed="5s"
                >
                  NodeJS
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class ml-2"
                  color="cyan"
                  speed="5s"
                >
                  NestJS
                </StarBorder>

                <StarBorder
                  as="button"
                  className="custom-class ml-2"
                  color="cyan"
                  speed="5s"
                >
                  RESTful API
                </StarBorder>
              </div>

             
            </div>

            

            {/* ProfileCard bên phải */}
            <ProfileCard />
          </div>
        </div>
  )}