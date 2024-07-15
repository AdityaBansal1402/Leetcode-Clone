"use client";
import { useEffect } from 'react';
import avtar from "../../../public/banner.png"
import Image from 'next/image';
import './mycss.css';

export default function Front() {
  useEffect(() => {
    const boxy = document.querySelector(".boxy");

    const handleMouseMove = (e) => {
        rotateElement(e, boxy);
    };

    const handleMouseEnter = () => {
        boxy.addEventListener("mousemove", handleMouseMove);
        boxy.style.transition = "transform 0.3s ease";
    };

    const handleMouseLeave = () => {
        boxy.removeEventListener("mousemove", handleMouseMove);
        boxy.style.transition = "transform 0.9s ease";
        boxy.style.setProperty("--rotateX", "0deg");
        boxy.style.setProperty("--rotateY", "0deg");
    };

    boxy.addEventListener("mouseenter", handleMouseEnter);
    boxy.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        boxy.removeEventListener("mouseenter", handleMouseEnter);
        boxy.removeEventListener("mouseleave", handleMouseLeave);
        boxy.removeEventListener("mousemove", handleMouseMove);
    };
}, []);

function rotateElement(event, element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top; 
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;
    const offsetX = ((x - middleX) / middleX) * 25;
    const offsetY = ((y - middleY) / middleY) * 25;
    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}

return (
        <div className="flex mt-[5%] w-screen justify-center resize-x mb-[5%]">
        <div className={`relative w-[60%] max-h-[70%] pb-[29.2%] bg-zinc-950 h-3 rounded-md boxy flex `}>
          <div className="relative w-full bg-zinc-950 rounded-md flex items-center justify-center">
            <div className="text-white p-[2%] relative translate-y-[50%]">
            <Image
                    src={avtar}
                    alt="Banner"
                    layout="responsive"
                    className='rounded-lg'
                    />
            </div>
                </div>
            </div>
        </div>
);
}
