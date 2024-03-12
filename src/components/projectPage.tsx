import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Card from "./card";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Project } from "@/lib/classes/project";

import { ProcessTimeline } from "@/components/timeline/processTimeline";
import { getWellnessCategory } from "@/lib/classes/wellness";
import Chips from "@/components/chips";
import { openInNewTab } from "@/lib/utils";

export default function Page({ project }: { project: Project }) {
	let category = getWellnessCategory(project.category);
	let projectInfo = project.info;
	let colorBG = `bg-${category!.color.name}`;

	return (
		<section
			className={`items-center grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-3 p-4 gap-5 h-full  sm:rounded  ${colorBG} text-brown    `}
		>
			<header
				className={`sm:col-span-3 col-span-1 flex justify-between items-center pt-4 sm:flex-row flex-col`}
			>
				<span className='flex items-center p-1 gap-2'>
					<h1 className='text-4xl  '>{project!.name}</h1>
					<Image src={project!.logo} alt='Logo' width={50} height={50} />
				</span>

				<span className='flex justify-center items-center gap-2'>
					<h2 className=' text-lg'>{category && category.name}</h2>
					<FontAwesomeIcon className=' text-lg' icon={category && category.icon} />
				</span>
			</header>
			<Chips chips={projectInfo.tools} className='col-span-1   ' />

			{projectInfo.image != "" ? (
				<img
					className='rounded-inner object-cover col-span-1  max-h-[200px] w-full drop-shadow-lg object-top	'
					src={projectInfo.image}
					alt='Logo'
				/>
			) : null}

			<span className=' flex gap-2 justify-center p-1 col-span-1 '>
				{projectInfo.link ? (
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						role='link'
						onClick={() => openInNewTab(projectInfo.link!)}
						className={` rounded py-2 px-4 h-14 text-white text-3xl bg-brown`}
					>
						<FontAwesomeIcon icon={faUpRightFromSquare} />
					</motion.button>
				) : null}
				{projectInfo.githubLink ? (
					<motion.button
						role='link'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => {
							openInNewTab(projectInfo.githubLink!);
						}}
						className={` rounded py-2 px-4 h-14 text-white text-3xl bg-brown`}
					>
						<FontAwesomeIcon icon={faGithub} />
					</motion.button>
				) : null}
			</span>
			<Card
				className={`sm:col-span-3 col-span-1 bg-white text-brown `}
				content={projectInfo.description}
			/>
			<Card
				className={`sm:col-span-3 col-span-1 bg-white `}
				title='Objective'
				content={projectInfo.challenge}
			/>
			<div className=' sm:col-span-3 col-span-1'>
				<h2 className='text-center text-xl font-semibold'>Process</h2>
				<ProcessTimeline
					processes={projectInfo.process}
					color={category!.color.name}
				/>
			</div>
		</section>
	);
}
