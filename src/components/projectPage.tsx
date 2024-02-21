import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Card from "./card";
import { ProjectInfo, getProjectByEnum } from "../_classes/project";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Project } from "../_classes/project";

import { getWellnessCategory } from "../_classes/wellness";
import { Chips } from "./chips";

function openInNewTab(url: string) {
	const newWindow = window.open(url, "_blank");
	if (newWindow) {
		newWindow.focus();
	}
}

export default function Page({ project }: { project: Project }) {
	// let project = getProjectByEnum(projectInfo.project);
	let category = getWellnessCategory(project.category);
	// let category = project.category;
	let projectInfo = project.info;
	// let color = colors[category!.color.name].bg;
	let colorBG = `bg-${category!.color.name}-200`;
	let colorBGDark = `bg-${category!.color.name}-600`;

	return (
		<section
			className={`items-center grid grid-flow-row auto-rows-max grid-cols-3 p-4 gap-5  sm:rounded  ${colorBG} text-brown overflow-auto sm:max-h-[600px] max-h-full  `}
		>
			<header className={`col-span-3 flex justify-between items-center pt-4`}>
				<span className='flex items-center p-1 gap-2'>
					<h1 className='text-4xl  '>{project!.name}</h1>
					<Image src={project!.logo} alt='Logo' width={50} height={50} />
				</span>

				<span className='flex justify-center items-center gap-2'>
					<h2 className=' text-lg'>{category && category.name}</h2>
					<FontAwesomeIcon className=' text-lg' icon={category && category.icon} />
				</span>
			</header>

			{/* <Card
				className={`sm:col-span-1 col-span-3   bg-white`}
				image={projectInfo.image}
			/> */}
			<Chips chips={projectInfo.tools} className='sm:col-span-1 col:span-3  ' />

			{projectInfo.image != "" ? (
				<img
					className='rounded-inner object-cover sm:col-span-1 col-span-3  max-h-[200px] w-full drop-shadow-lg object-top	'
					src={projectInfo.image}
					alt='Logo'
				/>
			) : null}

			<span className=' flex gap-2 justify-center p-1 sm:col-span-1 col:span-3 '>
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
				className={`sm:col-span-3 col-span-3  text-brown bg-white`}
				content={projectInfo.description}
			/>
			<Card
				className={`sm:col-span-3 col-span-3 bg-white `}
				title='Objective'
				content={projectInfo.challenge}
			/>
			<Card
				className={`sm:col-span-3 col-span-3 bg-white `}
				title='The Process'
				customContent={
					<>
						<h3 className=' text-l font-semibold'>{projectInfo.process[0]}</h3>
						<p className='pl-2'>{projectInfo.process[1]}</p>
						<h3 className='text-l font-semibold'>{projectInfo.process[2]}</h3>
						<p className='pl-2 '>{projectInfo.process[3]}</p>
						{projectInfo.process[4] && (
							<h3 className='text-l font-semibold'>{projectInfo.process[4]}</h3>
						)}
						{projectInfo.process[5] && (
							<p className='pl-2 '>{projectInfo.process[5]}</p>
						)}
						{projectInfo.process[6] && (
							<h3 className=' text-l font-semibold'>{projectInfo.process[6]}</h3>
						)}
						{projectInfo.process[7] && (
							<p className='pl-2 '>{projectInfo.process[7]}</p>
						)}
					</>
				}
			/>
		</section>
	);
}
