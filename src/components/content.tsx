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
		<section className='flex flex-col p-4  w-full   justify-stretch gap-2'>
			<h2 className={`text-4xl font-semibold text-center  ${textAlignment}`}>
				{wellnessCategory!.name}
			</h2>
			<p className={`text-lg text-center ${textAlignment} `}>
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
								<img src={project.logo} alt='Logo' width={80} height={80} />
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
