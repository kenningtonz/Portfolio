
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
        <main className={`flex flex-wrap content-start p-4 gap-5  h-screen ${colorBGInv} `}>
            <header className={`flex basis-full justify-between items-center ${colorBGInv}`}>
                <span className="flex items-center p-1">
                    {/* <Image
                        src={project!.logo}
                        alt="Logo"
                        width={50}
                        height={50}
                    /> */}
                    <h1 className="text-4xl dark:text-brown text-white">{project!.name}</h1>
                </span>

                <span className="flex justify-center items-center">
                    <h2>{category && category.name}</h2>
                    <FontAwesomeIcon icon={category && category.icon} />
                </span>
            </header>
            <Card className={`basis-full sm:basis-5/12 dark:text-white text-brown ${colorBG}`} image={projectInfo.image} />
            <Card className={`basis-6/12 grow dark:text-white text-brown${colorBG}`} title={project!.name} content={projectInfo.description} tools={projectInfo.tools} />

            <Link href={projectInfo.link}><button className={`basis-5/12 grow rounded p-2 h-10 dark:text-white text-brown${colorBG}`}>Open in new tab</button></Link>

            {projectInfo.githubLink && <Link href={projectInfo.githubLink}>   <button className={`basis-5/12 grow rounded p-1 h-10 dark:text-white text-brown${colorBG}`}>View on GitHub</button></Link>}


            <Card className={`basis-3/12 grow dark:text-white text-brown${colorBG}`} title="Objective" content={projectInfo.objective} />
            <Card className={`basis-3/12 grow dark:text-white text-brown${colorBG}`} title="Purpose" content={projectInfo.purpose} />
            <Card className={`basis-3/12 grow dark:text-white text-brown${colorBG}`} title="Approach" content={projectInfo.approach} />

        </main>
    );


}



