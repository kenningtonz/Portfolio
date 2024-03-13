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

			{projectInfo.image != "" ? (
				<img
					className={`rounded object-cover col-span-1  max-h-[200px] w-full object-top shadow-drop-${
						category!.color.name
					} `}
					src={projectInfo.image}
					alt='Logo'
				/>
			) : null}
			<section
				className={`  col-span-1 bg-white text-brown h-full p-2 px-3 shadow-drop-${
					category!.color.name
				} ${
					projectInfo.image != "" ? "sm:col-span-2" : "sm:col-span-3"
				} rounded flex flex-col content-stretch `}
			>
				<p className='p-2'>{projectInfo.description}</p>
			</section>
			<section
				className={`text-center  sm:col-span-3 col-span-1 bg-white text-brown h-full p-2 px-3 shadow-drop-${
					category!.color.name
				} rounded flex flex-col content-stretch `}
			>
				<h2 className='text-xl font-semibold'>Objective</h2>
				<p className='p-2'>{projectInfo.challenge}</p>
			</section>

			<span className=' flex gap-2 justify-center p-1 col-span-1 sm:col-span-3 '>
				{projectInfo.link ? (
					<motion.button
						whileHover={{ scale: 1.1 }}
						aria-label={`project link`}
						whileTap={{ scale: 0.9 }}
						role='link'
						onClick={() => openInNewTab(projectInfo.link!)}
						className={` rounded py-2 px-4 h-14 text-white text-3xl bg-${
							category!.color.name
						}-dark`}
					>
						<FontAwesomeIcon icon={faUpRightFromSquare} />
					</motion.button>
				) : null}
				{projectInfo.githubLink ? (
					<motion.button
						role='link'
						aria-label={`github link`}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => {
							openInNewTab(projectInfo.githubLink!);
						}}
						className={` rounded py-2 px-4 h-14 text-white text-3xl bg-${
							category!.color.name
						}-dark`}
					>
						<FontAwesomeIcon icon={faGithub} />
					</motion.button>
				) : null}
			</span>

			<Chips chips={projectInfo.tools} className='sm:col-span-3 col-span-1  ' />

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
