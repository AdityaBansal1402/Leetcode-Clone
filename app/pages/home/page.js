"use client";
import { useEffect } from 'react';
import './mycss.css';

export default function Front() {
  useEffect(() => {
    const boxy = document.querySelector(".boxy");

    const handleMouseMove = (e) => {
        rotateElement(e, boxy);
    };

    const handleMouseEnter = () => {
        boxy.addEventListener("mousemove", handleMouseMove);
        boxy.style.transition = "transform 0.1s ease";
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
    <div className="min-h-screen-minus-navbar w-screen flex justify-center bg-zinc-950">
        <div className="flex mt-[5%] w-screen justify-center">
            <div className="relative max-w-[900px] max-h-[700px] w-[90%] h-[60%] bg-zinc-950 rounded-md boxy flex ">
                <div className="absolute inset-0 flex justify-center p-[4%]">
                    <div className='text-white'>
                    <div className='leetcode'>
                      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode">
                              <path  d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"/>
                              <path  d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"/>
                      </svg>
                    </div>
                    <div className='text-white mt-28'>
                      Welcome To LeetCode
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
