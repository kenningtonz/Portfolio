"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
	faUser,
	faEnvelope,
	faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTheme } from "@/lib/classes/theme";

const Header: React.FC<{ isScrolled?: boolean; isAnimated: boolean }> = ({
	isScrolled,
	isAnimated,
}) => {
	const { toggleTheme, theme } = useTheme();

	function animate() {
		if (!isAnimated) {
			return "visible";
		} else {
			if (isScrolled) {
				return "visible";
			} else {
				return "hidden";
			}
		}
	}

	return (
		<motion.header
			animate={animate()}
			variants={{
				hidden: { backgroundColor: "#FFFFFF00" },
				visible: { backgroundColor: theme === "dark" ? "#2B1C12" : "#FFFFFF" },
			}}
			className={`z-30 flex items-center justify-between  ${
				isAnimated && "fixed"
			} min-h-16 w-full p-4`}
		>
			<motion.a
				className='flex items-center gap-4'
				animate={animate()}
				variants={{ hidden: { y: -100 }, visible: { y: 0 } }}
				href='/'
			>
				<motion.img
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.9 }}
					src='/logo.png'
					alt='Logo'
					width={50}
					height={50}
				/>
				<span className='text-4xl font-display dark:text-white text-brown '>
					Kennedy Adams
				</span>
			</motion.a>

			<div className='flex items-center gap-4'>
				<motion.button
					onClick={() => {
						window.location.href = "/#about";
					}}
					role='link'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<FontAwesomeIcon
						className='text-2xl dark:text-white text-brown '
						icon={faUser}
					/>
				</motion.button>
				<motion.button
					role='link'
					onClick={() => {
						window.location.href = "/#contact";
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<FontAwesomeIcon
						className='text-2xl dark:text-white text-brown '
						icon={faEnvelope}
					/>
				</motion.button>
				{/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}>
                    <FontAwesomeIcon className="text-2xl dark:text-white text-brown " icon={faCircleHalfStroke} />
                </motion.button> */}
			</div>
		</motion.header>
	);
};

export default Header;
