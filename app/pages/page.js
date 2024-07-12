import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-black -z-10'>
      <div className="sticky top-0 z-20 bg-zinc-950 p-3 text-white h-12 opacity-10 backdrop-filter backdrop-blur-lg">
            <div className="flex space-x-[5%] items-center justify-center">
                <Link href="/pages/problems">Problems</Link>
                <div>Discuss</div>
                <div>About</div>
            </div>
        </div>
    </div>
  );
}
