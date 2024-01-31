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
       
        {children}</body>
    </html>
  )
}
