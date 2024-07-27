"use client";
import cover from "../../assets/wallpaper.jpg";
import guts from "../../assets/guts.jpg";
import myamoto from "../../assets/myamoto.jpg";
import guts2 from "../../assets/guts2.jpg";
import Image from "next/image";
import styles from "./Cover.module.css";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css";

const Cover = function Cover() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        const clearNextTimeout = function clearNextTimeout() {
          clearTimeout(timeout);
        }
        const nextTimeout = function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        })
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return(
    <>
      <div ref={sliderRef} className="keen-slider w-full h-[600px]">
        <div className="keen-slider__slide number-slide1">
          <Image src={myamoto} layout="fill" objectFit="cover" alt="Cover image" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={cover} layout="fill" objectFit="cover" alt="Cover image" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={guts} layout="fill" objectFit="cover" alt="Cover image" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={guts2} layout="fill" objectFit="cover" alt="Cover image" />
        </div>
        </div>        
        
        <div className="absolute inset-0 bg-black opacity-70 h-[600px]"/>
        <div className="flex flex-col">
            
          <div className="absolute inset-0 flex items-center justify-normal ml-16 mb-12">
            <h1 className={styles.animatedText}>Get your hands on the Best High quality comics Ever</h1>
          </div>
          <div className="absolute inset-0 flex items-center justify-normal ml-16 pt-72">
            <h1 className={styles.animatedText2}>Need custom art work ? reach us.</h1>
          </div>
        
          <div className="absolute inset-0 flex items-center justify-normal ml-16 pt-96 flex-row gap-3">
            <button className="border-white text-white w-20 h-11 rounded-md border-2 duration-500 hover:bg-white hover:text-black ">Email</button>
            <button className="border-white text-white w-20 h-11 rounded-md border-2 duration-500 hover:bg-white hover:text-black ">Instagram</button>
          </div>
       </div>

      </>
  )
}

export default Cover;
