"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll } from "framer-motion";
import Header from "@/components/header";
import { TimelineHighlight } from "@/components/timeline/highlightsTimeline";
import { timelineEvents } from "@/lib/classes/timelineEvents";
import Footer from "@/components/footer";
import SplashScreen from "@/components/loading";

import { Projects } from "@/components/projects";
import Link from "next/link";

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
			console.log("scrolled");
		}
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<SplashScreen />
			<Header isScrolled={isScrolled} isAnimated={true} />

			<main className='flex-col flex min-h-screen '>
				<section className=' flex flex-wrap content-center sm:text-left text-center items-center justify-center gap-2 p-12 bg-brown h'>
					<motion.img
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						src='/logo.png'
						alt='Logo'
						width={100}
						height={100}
						className={"cursor-pointer"}
						onClick={() => {
							window.location.href = "/#projects";
						}}
					/>
					{/* <Image src='/logo.png' alt='Logo' width={100} height={100} /> */}
					<div className=''>
						<h1 className='text-4xl font-display text-white '> Kennedy Adams</h1>
						<h2 className='text-2xl font-display text-white '>Front End Developer</h2>
						<p className='text-lg font-display text-white '>
							A passion for Wellness.
						</p>
					</div>
				</section>
				<section className='bg-brown text-center p-2 text-white flex justify-center'>
					<motion.svg
						xmlns='http://www.w3.org/2000/svg'
						width='38.971'
						height='54.411'
						viewBox='0 0 38.971 54.411'
						className={"cursor-pointer"}
						onClick={() => {
							window.location.href = "/#projects";
						}}
						variants={{
							visible: {
								scale: [0.95, 1.05, 0.95],
								transition: { repeat: Infinity },
							},
							hidden: { opacity: 0 },
						}}
						animate={isScrolled ? "hidden" : "visible"}
						transition={{ ease: "easeInOut", duration: 2 }}
					>
						<motion.path
							d='M15.412,0h8.159c.552,0,1,.448,1,1v12.851c0,.683.669,1.165,1.316.949l11.765-3.922c.825-.275,1.584.562,1.229,1.357l-18.579,41.584c-.353.791-1.477.789-1.828-.004L.088,12.227c-.351-.794.407-1.628,1.231-1.353l11.777,3.926c.648.216,1.316-.266,1.316-.949V1C14.412.448,14.859,0,15.412,0Z'
							fill='#fff'
							strokeWidth='0'
							// style={{ opacity: isScrolled ? 0 : 1 }}
						/>
					</motion.svg>
					{/* <h2 className='text-3xl dark:text-white text-brown text-center'>
						Wellness Projects
					</h2>
					<p className='text-center'>
						dimensions of wellbeing that work together so you can thrive, instead of
						survive.
					</p> */}
				</section>

				<Projects />

				<section
					id='about'
					className='  dark:text-white text-brown-dark flex flex-col items-center w-full justify-center gap-2 p-10 dark:bg-brown bg-white'
				>
					{/* <h2>About</h2> */}
					<FontAwesomeIcon className=' p-4 text-4xl' icon={faUser} />
					<h2 className='text-3xl text-center'> Who is Kennedy Adams?</h2>
					<article className='flex flex-col  gap-4 mb-4 items-center p-4 '>
						<p className='text-xl  text-center'>
							I’m just a <strong>human</strong>, with probably the most interesting
							past you’ll hear.
						</p>
						<p className=' text-xl text-center'>
							Years ago, my therapist told me <strong>"your life is</strong>{" "}
							<motion.span
								initial={{ backgroundColor: "#FFFFFF" }}
								whileHover={{ backgroundColor: "#FFFFFF00" }}
								className='mx-1'
							>
								{" "}
								fucked{" "}
							</motion.span>{" "}
							but it's <strong>about to get better"</strong>. I didn't know or believe
							it at the time, but he was right.{" "}
						</p>
						<p className=' text-xl text-center'>
							After years of helping myself, I'm ready to{" "}
							<strong className='text-2xl'>help others</strong>.
						</p>
						<p className=' text-xl text-center'>
							I want use to my experience to make it easier for others to work on
							themselves.
						</p>
						<Image
							src={"/kennedy.jpg"}
							alt='kennedy'
							width={200}
							height={200}
							className='rounded  '
						/>
					</article>

					<h2 className='text-center dark:text-white text-brown-dark text-3xl p-2'>
						My Journey
					</h2>
					<TimelineHighlight
						events={timelineEvents.filter((event) => event.highlight == true)}
					/>

					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						role='link'
						onClick={() => {
							window.location.href = "/more";
						}}
						className='bg-yellow-500 text-brown-dark py-2 px-4 text-lg rounded  font-semibold'
					>
						View More
					</motion.button>
				</section>
				<section
					id='contact'
					className=' flex flex-col items-center w-full  gap-2 px-24 dark:bg-brown py-48 bg-white dark:text-white text-brown-dark'
				>
					<FontAwesomeIcon className='   text-3xl' icon={faEnvelope} />
					<h2 className='text-3xl  text-center'> Want to work with me?</h2>
					<div className='flex gap-4 mt-4'>
						<motion.button
							className='rounded py-2 px-4 h-12  flex gap-1 bg-yellow-500'
							role='link'
							aria-label='email'
							onClick={() => {
								window.location.href = "mailto:kennedymmadams@gmail.com";
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<FontAwesomeIcon
								className='text-3xl  text-brown-dark '
								icon={faEnvelope}
							/>
						</motion.button>

						<motion.button
							className='rounded py-2 px-4 h-12  items-center flex gap-1 bg-yellow-500'
							role='link'
							aria-label='linkedin'
							onClick={() => {
								window.location.href = "https://www.linkedin.com/in/kennedy-mm-adams/";
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<FontAwesomeIcon
								className='text-3xl text-brown-dark'
								icon={faLinkedin}
							/>
						</motion.button>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
