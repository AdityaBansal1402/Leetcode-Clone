import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className="sticky top-0 z-20 bg-zinc-950 border-b-[1px] border-b-slate-400 p-3 text-white h-12">
            <div className="flex space-x-[5%] items-center">
                <Link href="/pages/problems">Problems</Link>
                <div>Discuss</div>
                <div>About</div>
            </div>
        </div>
    </div>
  );
}
