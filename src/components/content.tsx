import Link from "next/link";
import { getWellnessCategory } from "../_classes/wellness";
import { getProjectsByCategory } from "../_classes/project";
import { WellnessE } from "../_classes/enums";
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
import { ProjectE, Tools } from "@/_classes/enums";

import { ProjectInfo } from "@/_classes/project";

export const Content: React.FC<{ wellnessE: WellnessE; direction: number }> = ({
	wellnessE,
	direction,
}) => {
	const textAlignment = direction == 0 ? "sm:text-left" : "sm:text-right";
	let wellnessCategory = getWellnessCategory(wellnessE);
	let projects = getProjectsByCategory(wellnessCategory!.enum);

	return (
		<section className='flex flex-wrap p-5 font-display my-2 w-full	 items-stretch gap-2'>
			<h2
				className={`text-4xl font-bold text-center  basis-full ${textAlignment}`}
			>
				{wellnessCategory!.name}
			</h2>
			<p className={`text-lg text-center ${textAlignment}  basis-full`}>
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
								// onClick={() => {
								// 	window.location.href = `/${project.slug}`;
								// }}
								className={`grow basis-1/4 hover:scale-110 flex  bg-white rounded p-2 flex-col items-center gap-2 	shadow-drop-${wellnessCategory?.color.name}`}
							>
								<img src={project.logo} alt='Logo' width={100} height={100} />
								<h3 className='text-xl font-medium '>{project.name}</h3>
								<p className='text-center'>{project.oneLiner}</p>
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
