"use client"
import eyes from "../../../public/eyes.png";
import Image from "next/image";
import rick from "../../../public/rick.png";
import { useEffect, useState, useRef } from "react";

const Ricky = () => {
    const [degree, setDegree] = useState(0);
    const anchorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!anchorRef.current) return;
            
            const rect = anchorRef.current.getBoundingClientRect();
            const anchorX = rect.left + rect.width / 2;
            const anchorY = rect.top + rect.height / 2;
            
            const x = e.clientX;
            const y = e.clientY;
            const ang = angle(x, y, anchorX, anchorY);
            setDegree(ang);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        return deg;
    }

    return (
        <div className="mb-[2%] flex flex-col justify-center items-center">
            <div className="relative max-h-72 max-w-72">
                <Image
                    ref={anchorRef}
                    src={rick}
                    alt="Rick"
                    layout="responsive"
                    className="rotate-[0deg]"
                />
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full">
                        <div className="absolute" style={{ top: '40%', left: '40%', width: '10%', height: 'auto', transform: `rotate(${degree}deg)` }}>
                            <Image
                                src={eyes}
                                alt="Eyes"
                                layout="responsive"
                                className="rounded-full"
                            />
                        </div>
                        <div className="absolute" style={{ top: '40%', left: '55%', width: '10%', height: 'auto', transform: `rotate(${degree}deg)` }}>
                            <Image
                                src={eyes}
                                alt="Eyes"
                                layout="responsive"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ricky;