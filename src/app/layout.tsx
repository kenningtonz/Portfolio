import type { Metadata } from 'next'
import { fredoka } from '@/app/ui/fonts'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const metadata: Metadata = {
  title: 'Kennedy Adams',
  description: 'Portfolio of Kennedy Adams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={'${fredoka.className} antialiased'}>
        <header className="flex items-center bg-brown " >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={24}
            priority
          />
          <h1 className="text-4xl font-display text-white">Kennedy Adams</h1>
          <Link href="/projects">Projects</Link>
          <Link href="/about">
          <FontAwesomeIcon icon="fa-solid fa-user"/></Link>
          <Link href="/contact">Contact</Link>

        </header>
        {children}</body>
    </html>
  )
}
