"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<footer className='w-full bg-brown p-4 pt-20 text-white flex justify-between '>
			<p>&copy; {new Date(Date.now()).getFullYear()} Kennedy Adams</p>
			<p>Created with Next.js & Typescript</p>
			<span className='flex gap-2'>
				<button
					className='px-1'
					role='link'
					aria-label='linkedin'
					onClick={() => {
						window.location.href = "https://www.linkedin.com/in/kennedy-mm-adams/";
					}}
				>
					<FontAwesomeIcon className='text-xl text-white' icon={faLinkedin} />
				</button>
				<button
					className='px-1'
					aria-label='email'
					role='link'
					onClick={() => {
						window.location.href = "mailto:kennedymmadams@gmail.com";
					}}
				>
					<FontAwesomeIcon className='text-xl  text-white ' icon={faEnvelope} />
				</button>
			</span>
		</footer>
	);
};

export default Footer;
