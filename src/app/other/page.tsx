"use client";
import RotatingText from "@/components/RotatingText";
import StarBorder from "@/components/StarBorder";
import Image from "next/image";

export default function OtherPage() {
  return (
      <div className="mt-[150px] sm:mt-[200px] md:mt-[300px] flex flex-col items-center gap-6">
                <div className="flex items-center justify-center text-center">    
                  {/* <ShinyText
                      text="Tech Stack"
                      disabled={false}
                      speed={3}
                      className="custom-class text-6xl font-bold mb-2"
                    /> */}
                    <RotatingText
      texts={['Programming languages', 'Markup & Styling Languages', 'UI/UX Design']}
      mainClassName="px-2 sm:px-2 md:px-3  text-white font-semibold text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold text-6xl"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
                    </div>
                    <br />
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 mt-6">
                         <StarBorder
                      as="button"
                      className="custom-class"
                      color="cyan"
                      speed="5s"
                    >
                         <Image
    src="/docker_igg-Photoroom.png"
      alt="figma logo"
      width={58}
      height={50}
      className="rounded-lg shadow"
    />
                      
                      Docker
                    </StarBorder>
    
                    <StarBorder
                      as="button"
                      className="custom-class ml-2"
                      color="cyan"
                      speed="5s"
                    >
                                        <Image
    src="/github-img-Photoroom.png"
      alt="figma logo"
      width={50}
      height={40}
      className="rounded-lg shadow mb-[9px] ml-[6px] "
    />
                      GitHub
                    </StarBorder>
    
                    <StarBorder
                      as="button"
                      className="custom-class ml-2"
                      color="cyan"
                      speed="5s"
                    >
                      <Image
    src="/figma_image-Photoroom.png"
      alt="figma logo"
      width={60}
      height={60}
      className="rounded-lg shadow"
    />
    
                      Figma
                    </StarBorder>
    
                     <StarBorder
                      as="button"
                      className="custom-class ml-2"
                      color="cyan"
                      speed="5s"
                    >
                      <Image
    src="/jvs_logo.png"
      alt="figma logo"
      width={60}
      height={60}
      className="rounded-lg shadow ml-2"
    />
    
                      JavaScript
                    </StarBorder>
                       <StarBorder
                      as="button"
                      className="custom-class ml-2"
                      color="cyan"
                      speed="5s"
                    >
                      <Image
    src="/ts_logo.png"
      alt="figma logo"
      width={60}
      height={60}
      className="rounded-lg shadow ml-2 mb-2 mt-[9px]"
    />
    
                      TypeScript
                    </StarBorder>
                    <StarBorder
                      as="button"
                      className="custom-class ml-2"
                      color="cyan"
                      speed="5s"
                    >
                      <Image
    src="/html_logo.png"
      alt="figma logo"
      width={60}
      height={60}
      className="rounded-lg shadow"
    />
    
                      HTML
                    </StarBorder>
                       <StarBorder
                      as="button"
                      className="custom-class ml-2"
                      color="cyan"
                      speed="5s"
                    >
                      <Image
    src="/css.png"
      alt="figma logo"
      width={60}
      height={60}
      className="rounded-lg shadow"
    />
    
                      CSS
                    </StarBorder>
                    </div>
                 
                  </div>
  )}