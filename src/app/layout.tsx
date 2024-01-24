import type { Metadata } from 'next'
import { fredoka } from '@/app/ui/fonts'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false



export const metadata: Metadata = {
  title: 'Kennedy Adams',
  description: 'Portfolio of Kennedy Adams',
}

// const [isScrolled, setIsScrolled] = useState(false);
// ${isScrolled ? `appearance-none`:``}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${fredoka.className} antialiased'}>
          <header className={`flex items-center justify-between bg-brown fixed min-h-16 w-full p-4  `} >
          <div className="flex items-center gap-4">
            <Link href="/projects">  <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              priority
            /></Link>
            <h1 className="text-4xl font-display text-white ">Kennedy Adams</h1>
          </div>
          <div className='flex items-center gap-4'>
            <Link href="/about"><FontAwesomeIcon className="text-white hover:scale-150" icon={faUser} /></Link>
            <Link href="/contact"><FontAwesomeIcon className="text-white hover:scale-150" icon={faEnvelope} /></Link>
            <FontAwesomeIcon className="text-white hover:scale-150" icon={faCircleHalfStroke} />
          </div>
        </header>
        {children}</body>
    </html>
  )
}
