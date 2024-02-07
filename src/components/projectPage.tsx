
import Link from "next/link"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import Card from "./card"
import { ProjectInfo, getProjectByEnum } from "../_classes/project";

import { getWellnessCategory } from "../_classes/wellness";
import { colors } from "@/_data/colorsDynamic";

export default function Page({ projectInfo }: { projectInfo: ProjectInfo }) {
    let project = getProjectByEnum(projectInfo.project);
    let category = getWellnessCategory(project!.category);
    // let color = colors[category!.color.name].bg;
    let colorBG = `bg-${category!.color.name}-300 dark:bg-${category!.color.name}-600`;
    let colorBGInv = `dark:bg-${category!.color.name}-300 bg-${category!.color.name}-600`;


    return (
        <main className={`grid grid-flow-row auto-rows-max grid-cols-3 p-4 gap-5  h-full ${colorBGInv} `}>
            <header className={`col-span-3 flex justify-between items-center ${colorBGInv}`}>
                <span className="flex items-center p-1">
                    <Image
                        src={project!.logo}
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <h1 className="text-4xl dark:text-brown text-white">{project!.name}</h1>
                </span>

                <span className="flex justify-center items-center gap-2">
                    <h2 className="dark:text-brown text-white text-lg" >{category && category.name}</h2>
                    <FontAwesomeIcon className="dark:text-brown text-white text-lg" icon={category && category.icon} />
                </span>
            </header>
            <Card className={`sm:col-span-1 col-span-3 dark:text-white text-brown ${colorBG}`} image={projectInfo.image} />
            <Card className={`sm:col-span-2 col-span-3 dark:text-white text-brown ${colorBG}`} title={project!.name} content={projectInfo.description} tools={projectInfo.tools} />

            <Link className="col-span-3 justify-self-center	" href={projectInfo.link}><button className={` rounded p-2 h-10 dark:text-white text-brown ${colorBG}`}>Open in new tab</button></Link>
            {projectInfo.githubLink && <Link className="col-span-3" href={projectInfo.githubLink}>   <button className={`basis-5/12 grow rounded p-1 h-10 dark:text-white text-brown${colorBG}`}>View on GitHub</button></Link>}
            <Card className={`sm:col-span-1 col-span-3 dark:text-white text-brown ${colorBG}`} title="Objective" content={projectInfo.objective} />
            <Card className={`sm:col-span-1 col-span-3 dark:text-white text-brown ${colorBG}`} title="Purpose" content={projectInfo.purpose} />
            <Card className={`sm:col-span-1 col-span-3 dark:text-white text-brown ${colorBG}`} title="Approach" content={projectInfo.approach} />

        </main>
    );


}



