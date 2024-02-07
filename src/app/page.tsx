"use client";
import { Suspense } from 'react';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Timeline from '../components/timeline';
import Card from '@/components/card';
import Loading from '@/components/loading';
import { Projects } from '@/components/projects';
import Link from 'next/link';

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position of the window
    if (scrollPosition > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    if (isScrolled) {
      console.log("scrolled")
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <Header isScrolled={isScrolled} isAnimated={true} />

      <main className="flex-col flex min-h-screen ">
        <section className=" flex flex-wrap items-center justify-center gap-2 p-24 dark:bg-brown  h-dvh">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
          <div className=''>
            <h1 className="text-4xl font-display dark:text-white text-brown ">Kennedy Adams</h1>
            <h2 className="text-2xl font-display  dark:text-white text-brown ">Full Stack Developer focusing on Wellness</h2>
          </div>

        </section>
        {/* <Loading /> */}
        {/* <p>Wellness is dimensions of wellbeing that work together so you can thrive, instead of survive.</p>
        <p >Using my experience to make it easier for others to work on themselves.</p> */}
        <Projects />
        <section id="about" className="  dark:text-white text-brown flex flex-col items-center w-full justify-center gap-2 p-10 dark:bg-brown bg-white">
          {/* <h2>About</h2> */}
          <FontAwesomeIcon className=" dark:text-white text-brown p-4 text-4xl" icon={faUser} />
          <h2 className="text-3xl dark:text-white text-brown"> Who is Kennedy Adams?</h2>
          <article className='flex flex-col  gap-4 mb-4 items-center p-4 dark:text-white text-brown'>

            <p className='text-xl  text-center'>
              I’m just a <strong>human</strong>, with probably the most interesting past you’ll hear.
            </p>
            <p className=' text-xl text-center'>Years ago, my therapist told me <strong>"your life is</strong> <motion.span initial={{ backgroundColor: "#FFFFFF" }} whileHover={{ backgroundColor: "#FFFFFF00" }} className='mx-1'> fucked </motion.span> but it's <strong>about to get better"</strong>. I didn't know or believe it at the time, but he was right. </p>
            <p className=' text-xl text-center'>After years of helping myself, I'm ready to <strong className='text-2xl'>help others</strong>.</p>
            <p className=' text-xl text-center'>I want use to my experience to make it easier for others to work on themselves.</p>
            <Image src={"/kennedy.jpg"} alt="kennedy" width={200} height={200} className='rounded  ' />
          </article>

          <h2 className='text-center dark:text-white text-brown text-3xl p-2'>Highlights</h2>
          <Timeline />

        </section>
        <section id="contact" className=" flex flex-col items-center w-full  gap-2 p-24 dark:bg-brown h-dvh bg-white dark:text-white text-brown">
          <FontAwesomeIcon className="   text-3xl" icon={faEnvelope} />
          <h2 className="text-3xl "> Want to work with me?</h2>
          <button className='rounded p-2 h-10 text-white dark:text-brown bg-yellow-400'><Link href={"mailto:kennedymmadams@gmail.com"}> Email Me</Link></button>
        </section>
      </main>
    </>

  )
}
