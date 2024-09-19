import Link from "next/link";
export default function Problems() {
  let i=1;
    return (
      <div className="min-h-screen-minus-navbar bg-zinc-950 flex justify-center">
        <div className="flex flex-col w-[90%] p-[2%] h-max max-h-screen-minus-navbar bg-white mt-3 mb-3 border-2 border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-900 from-25% via-zinc-950 via-75% to-zinc-900">
          <div className="flex text-slate-100 border-b mb-4">
            <div className="basis-3/12">Question name</div>
            <div className="basis-5/12">Description...</div>
            <div className="basis-2/12">Diff</div>
            <div className="basis-2/12">Status</div>
          </div>
          <Link href="/pages/problems/2sum">
            <div className="flex text-slate-400 border-b-[1px] border-slate-600 mb-2 hover:scale-[102%]">
              <div className="basis-3/12">2Sum</div>
              <div className="basis-5/12">Given a set of numbers find all the sets that...</div>
              <div className="basis-2/12 text-green-600">Easy</div>
              <div className="basis-2/12 text-gray-700">Not Attempted</div>
            </div>
          </Link>  
        </div>
      </div>
    );
  }
