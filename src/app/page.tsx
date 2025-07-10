"use client";

import ProfileCard from "@/components/ProfileCard";
import SplitText from "@/components/SplitText";
import Threads from "@/components/Threads";
import TrueFocus from "@/components/TrueFocus";

export default function HomePage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden mt-[120px]">
      {/* Threads ở dưới */}
      <div className="absolute inset-0 -z-10">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Nội dung chính nằm trên Threads */}
      <div className="max-w-6xl mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center mt-20">
          <SplitText
            text="My Portfolio"
            className="text-6xl md:text-9xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div className="mt-10">
          <TrueFocus
            sentence="Font-end  Back-end  Full-stack"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
      </div>
      
           

      

    </div>

    

    
  );
}
