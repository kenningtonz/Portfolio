"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";

const draw = {
	hidden: { pathLength: 0, opacity: 0, scale: 1.05 },
	visible: (i: number) => {
		const delay = i / 3;
		return {
			pathLength: 1,

			opacity: 1,
			transition: {
				pathLength: { delay, duration: 0.4, bounce: 0 },
				opacity: { delay, duration: 0.01 },
				ease: "linear",
			},
		};
	},
};

export default function SplashScreen() {
	const [show, setShow] = useState(true);
	const splashRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			setShow(false);
		}, 4500);
	}, []);

	if (!show) return null;

	return (
		<motion.div
			animate={{ opacity: 0 }}
			transition={{ delay: 3.5, duration: 1 }}
			className='splashScreen'
		>
			{/* <Image src="/loader.gif" alt="Logo" width={400} height={400}  className='m-auto' priority /> */}
			<motion.svg
				initial='hidden'
				animate='visible'
				viewBox='-10 -10 110 110'
				preserveAspectRatio={"xMidYMid meet"}
			>
				<motion.g
					initial={{ opacity: 0, scale: 1.05 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.5 }}
				>
					<path
						d='M21.66,21.202l14.322,8.28.008-.012c.562-.976,1.03-2.014,1.385-3.098h3.722c.687,0,1.241-.554,1.241-1.241v-7.858c0-.687-.554-1.241-1.241-1.241h-3.722c-.356-1.088-.823-2.122-1.385-3.093l-.004-.012-14.326,8.275Z'
						fill='#c5ecac'
						stroke='#c5ecac'
						strokeWidth={0.2}
					/>
					<path
						d='M21.66,37.744c1.158,0,2.291-.12,3.383-.347l1.857,3.222c.343.596,1.104.798,1.696.455l6.807-3.929c.591-.343.794-1.1.455-1.696l-1.865-3.226c.753-.844,1.419-1.762,1.989-2.742l.008-.012-14.33-8.267-.012,16.542h.012Z'
						fill='#aef7ff'
						stroke='#aef7ff'
						strokeWidth={0.2}
					/>
					<path
						d='M7.918,5.259l6.807-3.929c.591-.343,1.352-.141,1.696.455l1.857,3.222c1.092-.227,2.225-.347,3.383-.347v16.542L7.334,12.93l.004-.008c.571-.98,1.237-1.898,1.989-2.742l-1.865-3.226c-.339-.596-.136-1.352.455-1.696Z'
						fill='#fcbc5d'
						stroke='#fcbc5d'
						strokeWidth={0.2}
					/>
					<path
						d='M21.66,4.659c1.158,0,2.291.12,3.383.347l1.857-3.222c.343-.596,1.104-.798,1.696-.455l6.807,3.929c.591.343.794,1.1.455,1.696l-1.865,3.226c.753.844,1.423,1.762,1.993,2.746l.004.012-14.33,8.263V4.659Z'
						fill='#ffdc5e'
						stroke='#ffdc5e'
						strokeWidth={0.2}
					/>
					<path
						d='M9.328,32.223l-1.865,3.226c-.339.596-.136,1.352.455,1.696l6.807,3.929c.591.343,1.352.141,1.696-.455l1.857-3.222c1.088.227,2.217.347,3.371.347h.012v-16.542s-14.33,8.263-14.33,8.263l.004.012c.571.984,1.241,1.902,1.993,2.746Z'
						fill='#d4bbfc'
						stroke='#d4bbfc'
						strokeWidth={0.2}
					/>
					<path
						d='M2.223,26.371h3.722c.356,1.084.823,2.122,1.385,3.093l.004.012,14.326-8.275L7.339,12.922l-.004.008c-.562.976-1.03,2.01-1.39,3.102h-3.722c-.687,0-1.241.554-1.241,1.241v7.858c0,.687.554,1.241,1.241,1.241Z'
						fill='#faab99'
						stroke='#faab99'
						strokeWidth={0.2}
					/>
				</motion.g>

				<motion.path
					d='M21.67,4.495c1.158,0,2.29.12,3.382.347l1.856-3.22c.343-.595,1.104-.798,1.695-.455l6.805,3.927c.591.343.794,1.1.455,1.695l-1.864,3.225c.752.843,1.422,1.761,1.993,2.745l.004.012'
					fill='none'
					stroke='#ffdc5e'
					strokeMiterlimit='10'
					strokeWidth='2'
					variants={draw}
					custom={0}
				/>
				<motion.path
					d='M35.994,12.771c.562.971,1.029,2.005,1.385,3.092h3.721c.686,0,1.24.554,1.24,1.24v7.855c0,.686-.554,1.24-1.24,1.24h-3.721c-.356,1.083-.823,2.121-1.385,3.096'
					fill='none'
					stroke='#c5ecac'
					strokeMiterlimit='10'
					strokeWidth='2'
					variants={draw}
					custom={1}
				/>
				<motion.path
					d='M35.994,29.295l-.008.012c-.57.98-1.236,1.898-1.988,2.741l1.864,3.225c.339.595.136,1.352-.455,1.695l-6.805,3.927c-.591.343-1.352.141-1.695-.455l-1.856-3.22c-1.091.227-2.224.347-3.382.347'
					fill='none'
					stroke='#aef7ff'
					strokeMiterlimit='10'
					strokeWidth='2'
					variants={draw}
					custom={2}
				/>
				<motion.path
					d='M21.67,37.567h-.012c-1.153,0-2.282-.12-3.369-.347l-1.856,3.22c-.343.595-1.104.798-1.695.455l-6.805-3.927c-.591-.343-.794-1.1-.455-1.695l1.864-3.225c-.752-.843-1.422-1.761-1.993-2.745l-.004-.012'
					fill='none'
					stroke='#d4bbfc'
					strokeMiterlimit='10'
					strokeWidth='2'
					variants={draw}
					custom={3}
				/>
				<motion.path
					d='M7.346,29.291c-.562-.971-1.029-2.009-1.385-3.092h-3.721c-.686,0-1.24-.554-1.24-1.24v-7.855c0-.686.554-1.24,1.24-1.24h3.721c.36-1.091.827-2.125,1.389-3.1l.004-.008'
					fill='none'
					stroke='#faab99'
					strokeMiterlimit='10'
					strokeWidth='2'
					variants={draw}
					custom={4}
				/>
				<motion.path
					d='M7.354,12.755c.57-.98,1.236-1.897,1.988-2.741l-1.864-3.224c-.339-.595-.136-1.352.455-1.695l6.805-3.927c.591-.343,1.352-.141,1.695.455l1.856,3.22c1.091-.227,2.224-.347,3.382-.347'
					fill='none'
					stroke='#fcbc5d'
					strokeMiterlimit='10'
					strokeWidth='2'
					variants={draw}
					custom={5}
				/>

				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 3 }}
					d='M11.211,23.857v-3.374c0-.228.185-.414.414-.414h5.315c.282,0,.482-.277.392-.544l-1.622-4.866c-.114-.341.233-.655.561-.508l17.198,7.684c.327.146.326.611-.001.756l-17.199,7.604c-.328.145-.673-.168-.56-.509l1.623-4.87c.089-.268-.11-.544-.392-.544h-5.315c-.228,0-.414-.185-.414-.414Z'
					fill='#fff'
				/>
			</motion.svg>
		</motion.div>
	);
}
// export  function Loading() {
//     return (

//     )
// }
