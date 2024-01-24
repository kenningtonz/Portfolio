import Image from 'next/image'


export default function Home() {


  return (
    <main className="flex min-h-screen items-center justify-center gap-2 p-24 bg-brown">
 
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
             <div>
        <h1 className="text-4xl font-display text-white ">Kennedy Adams</h1>
        <h2 className="text-2xl font-display text-white ">Full Stack Developer focusing on Wellness</h2>
      </div>

    </main>
  )
}
