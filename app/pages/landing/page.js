import Front from "../home/page";
import Ricky from "./Ricky.js";

export default function Land() {
    

    return (
        <div className="min-h-screen-minus-navbar pt-[2%] max-w-screen overflow-x-hidden bg-zinc-950">
            <Ricky/>
            <div className="text-white flex justify-center text-3xl">
                Welcome To<span className="text-green-400 ml-2">Spec</span><span className="text-green-950">Code</span>
            </div>
            <Front />
        </div>
    );
}