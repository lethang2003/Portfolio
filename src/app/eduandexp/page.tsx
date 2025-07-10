"use client";
import FuzzyText from "@/components/FuzzyText";
import SpotlightCard from "@/components/SpotlightCard";

export default function EduAndExpPage() {
    return (
          <div className="flex flex-col items-center gap-6 mt-[300px]">
          <FuzzyText>Education and Experience</FuzzyText>

          {/* Phần này là 2 thành phần nằm ngang nhau */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 px-4">
            {/* ScrambledText bên trái */}
            <div className=" text-center md:text-start">
              <SpotlightCard
                className="custom-spotlight-card  mb-10"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h1 className="font-semibold text-2xl hover:text-gray-200 cursor-default mb-2">
                  FPT University (2021-2025){" "}
                </h1>
                <p className="text-gray-300 italic">
                  Graduated with Bachelor of Software Engineering.
                </p>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h1 className="font-semibold text-2xl  hover:text-gray-200 cursor-default mb-2">
                  Intern at FPT Software (Jan.2024 - Apr.2024)
                </h1>
                <p className="text-gray-300 italic">
                  Studied real life project management process Agile/Scrum.
                </p>
                <p className="text-gray-300 italic">
                  Trained on technical skills and build a micro-services project
                  with multiple services that resemble the real world.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
    )
}