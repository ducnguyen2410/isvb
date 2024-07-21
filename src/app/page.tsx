"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import background1 from "@/public/background1.jpg";
import gif1 from "@/public/gif1 (1).gif";
import gif2 from "@/public/gif1 (2).gif";
import image1 from "@/public/cupid-removebg-preview.png";
import image3 from "@/public/stoplight-removebg-preview.png";
import image4 from "@/public/text-removebg-preview.png";
import image5 from "@/public/vibe2-removebg-preview.png";
import image6 from "@/public/vibe3-removebg-preview.png";
import image7 from "@/public/vibe_window.jpg";
import image8 from "@/public/wainbow-removebg-preview.png";
import image11 from "@/public/i1.jpg";
import image22 from "@/public/i2.jpg";
import image33 from "@/public/i3.jpg";
import image44 from "@/public/i4.jpg";
import image55 from "@/public/i5.jpg";
import image66 from "@/public/i6.jpg";
import image77 from "@/public/i7.jpg";
import image88 from "@/public/i8.jpg";
import Matter from "matter-js";
import p5 from "p5";
import { random } from "gsap";
import telegram from "@/public/Telegram_2019_Logo.svg-removebg-preview.png";
import twitter from "@/public/twitter.webp";
import dex from "@/public/dexx.png";

//@ts-ignore
export default function Home() {
  const [vibe, setVibe] = useState(false);

  useEffect(() => {
    const scene = document.querySelector(".scene") as HTMLElement | null;

    const CreateDiv = () => {
      if (scene) {
        for (let i = 0; i < 30; i++) {
          const div = document.createElement("div");
          div.className = "hell";
          scene.appendChild(div);
        }
      }
    };

    CreateDiv();

    const stars = document.querySelectorAll(".hell");

    stars.forEach((star) => {
      if (star instanceof HTMLElement) {
        let x = `${Math.random() * 200}vmax`;
        let y = `${Math.random() * 100}vh`;
        let z = `${Math.random() * 200 - 100}vmin`;
        let rx = `${Math.random() * 360}deg`;

        star.style.setProperty("--x", x);
        star.style.setProperty("--y", y);
        star.style.setProperty("--z", z);
        star.style.setProperty("--rx", rx);

        let delay = `${Math.random() * 1.5}s`;
        star.style.animationDelay = delay;
      }
    });
  }, []);

  useEffect(() => {
    if (vibe) {
      const mainClass = document.querySelector(".scene");
      const headerClass = document.querySelector(".header");
      const introClass = document.querySelector(".intro");
      const imgTop = document.querySelectorAll(".imgtop");
      const quote = document.querySelector(".quote");
      const gg2 = document.querySelector(".gg2");
      const ca = document.querySelector(".ca");
      const texts = document.querySelectorAll(".header > span");
      if (
        mainClass instanceof HTMLElement &&
        headerClass instanceof HTMLElement &&
        introClass instanceof HTMLElement &&
        quote instanceof HTMLElement &&
        gg2 instanceof HTMLElement &&
        ca instanceof HTMLElement
      ) {
        mainClass.style.opacity = "1";
        headerClass.style.opacity = "1";
        introClass.style.opacity = "1";
        ca.style.opacity = "1";
        texts.forEach((te) => {
          if (te instanceof HTMLElement) {
            te.style.display = "none";
          }
        });
        imgTop.forEach((imgTo) => {
          if (imgTo instanceof HTMLElement) {
            imgTo.style.opacity = "1";
          }
        });
        setTimeout(() => {
          gg2.style.opacity = "1";
        }, 2500);
      }
    }
  }, [vibe]);

  const activateEnergy = () => {
    setVibe(true);
  };

  return (
    <div className="h-screen overflow-auto relative">
      <main className="scene flex flex-col gap-[100px]"></main>
      <div className="header w-full flex flex-col items-center mt-[20vh] absolute top-[0] left-[0]">
        <div className="intro relative w-[100%] flex justify-center">
          <Image src={background1} alt="" className="background1" />
          <Image src={gif1} alt="" className="gif1" />
          <Image src={gif2} alt="" className="gif2" />
          <span className="ticker">ISSA VIBE</span>
        </div>
        <div className="ca">
          <span>CA: Coming soon!</span>
        </div>
        <span className="text-[#41E2BA] mt-[100px] font-special text-[1.3em] uppercase tracking-[3px] ">
          It is kinda dark and less energy here
        </span>
        <span
          className="plug-in font-special text-[1.2em] mt-[20px] uppercase font-bold tracking-[4px]"
          onClick={activateEnergy}
        >
          Vibe it up
        </span>
        {vibe && (
          <div className="socials">
            <a href="" target="_blank">
              <Image alt="Telegram" src={telegram} />
            </a>
            <a href="" target="_blank">
              <Image alt="Twitter" src={twitter} />
            </a>
            <a href="" target="_blank">
              <Image alt="Dex" src={dex} />
            </a>
          </div>
        )}
      </div>
      <Image src={image1} alt="" className="imgtop imgg1" />
      <Image src={image3} alt="" className="imgtop imgg2" />
      <Image src={image4} alt="" className="imgtop imgg3" />
      <Image src={image5} alt="" className="imgtop imgg4" />
      <Image src={image7} alt="" className="imgtop imgg6" />
      <Image src={image8} alt="" className="imgtop imgg7" />
      {vibe && (
        <div>
          <div className="flex flex-col items-center">
            <div className="w-[10px] h-[45vh] bg-black relative straight-line"></div>
            <div className="gg2 w-[90vw] h-[100vh] main-content">
              <span>Positive minds, positive vibes.</span>
              <span>Give this world a good energy.</span>
              <span>Good vibes only attract positive outcomes.</span>
              <span>Nobody can control the dream they have.</span>
              <span>You make my life better.</span>
              <span>Just me, $VIBE and the night</span>
              <div className="item item1">
                <Image src={image11} alt="" className="img" />
              </div>
              <div className="item item2">
                <Image src={image22} alt="" className="img" />
              </div>
              <div className="item item3">
                <Image src={image33} alt="" className="img" />
              </div>
              <div className="item item4">
                <Image src={image44} alt="" className="img" />
              </div>
              <div className="item item5">
                <Image src={image55} alt="" className="img" />
              </div>
              <div className="item item6">
                <Image src={image66} alt="" className="img" />
              </div>
              <div className="item item7">
                <Image src={image77} alt="" className="img" />
              </div>
              <div className="item item8">
                <Image src={image88} alt="" className="img" />
              </div>
            </div>
          </div>
          <div className="quote mb-[50px] h-[20vh] flex items-center justify-center">
            <span className="text-[2em] tracking-[3px] text-[#A85751] uppercase font-[600] italic">
              When you make it? Issa vibe baby!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
