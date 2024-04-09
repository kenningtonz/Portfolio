import Link from "next/link";
import { getWellnessCategory } from "@/lib/classes/wellness";
import { getProjectsByCategory } from "@/lib/classes/project";
import { WellnessE } from "@/lib/classes/enums";
import { motion } from "framer-motion";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/dialog";

import Page from "../components/projectPage";

export const Content: React.FC<{ wellnessE: WellnessE; direction: number }> = ({
	wellnessE,
	direction,
}) => {
	const textAlignment = direction == 0 ? "sm:text-left" : "sm:text-right";
	let wellnessCategory = getWellnessCategory(wellnessE);
	let projects = getProjectsByCategory(wellnessCategory!.enum);

	return (
		<section className='2xl:pl-10 flex flex-col p-4  w-full   justify-stretch gap-2'>
			<h2 className={`res-text-4xl  font-semibold text-center  ${textAlignment}`}>
				{wellnessCategory!.name}
			</h2>
			<p className={`res-text-lg text-center ${textAlignment} `}>
				{wellnessCategory!.description}
			</p>
			{projects.map((project) => {
				return (
					<Dialog key={project.slug}>
						<DialogTrigger className='w-full'>
							<motion.div
								key={project.slug}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`grow basis-1/4 hover:scale-110 flex  bg-white rounded p-2 flex-col items-center gap-1 	shadow-drop-${wellnessCategory?.color.name}`}
							>
								<img
									src={project.logo}
									alt='Logo'
									width={80}
									height={80}
									className='2xl:w-32'
								/>
								<h3 className='res-text-xl font-medium '>{project.name}</h3>
								<p className='res-text-base text-center'>{project.oneLiner}</p>
							</motion.div>
						</DialogTrigger>
						<DialogContent>
							<Page project={project} />
						</DialogContent>
					</Dialog>
				);
			})}
		</section>
	);
};
