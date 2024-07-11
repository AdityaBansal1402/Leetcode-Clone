import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className="sticky top-0 z-20 bg-zinc-950 p-3 text-white h-12">
            <div className="flex space-x-[5%] items-center justify-center">
                <Link href="/pages/problems">Problems</Link>
                <div>Discuss</div>
                <div>About</div>
            </div>
        </div>
    </div>
  );
}
