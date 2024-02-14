
import Link from "next/link"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import Card from "./card"
import { ProjectInfo, getProjectByEnum } from "../_classes/project";

import { getWellnessCategory } from "../_classes/wellness";


export default function Page({ projectInfo }: { projectInfo: ProjectInfo }) {
    let project = getProjectByEnum(projectInfo.project);
    let category = getWellnessCategory(project!.category);
    // let color = colors[category!.color.name].bg;
    let colorBG = `bg-${category!.color.name}-200`;
    let colorBGDark = `bg-${category!.color.name}-600`;


    return (
        <main className={`grid grid-flow-row auto-rows-max grid-cols-3 p-4 gap-5  h-dvh ${colorBG} text-brown `}>
            <header className={`col-span-3 flex justify-between items-center `}>
                <span className="flex items-center p-1 gap-2">
                    <Image
                        src={project!.logo}
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <h1 className="text-4xl  ">{project!.name}</h1>
                </span>

                <span className="flex justify-center items-center gap-2">
                    <h2 className=" text-lg" >{category && category.name}</h2>
                    <FontAwesomeIcon className=" text-lg" icon={category && category.icon} />
                </span>
            </header>
            <Card className={`sm:col-span-1 col-span-3   bg-white`} image={projectInfo.image} />
            <Card className={`sm:col-span-2 col-span-3  text-brown bg-white`} content={projectInfo.description} tools={projectInfo.tools} projectLink={projectInfo.link} githubLink={projectInfo.githubLink} />
            <Card className={`sm:col-span-3 col-span-3 bg-white `} title="Objective" content={projectInfo.challenge} />
            <Card className={`sm:col-span-3 col-span-3 bg-white `}
                title="The Process"
                customContent={
                    <>
                        <h3 className="text-l font-semibold">{projectInfo.process[0]}</h3>
                        <p className="pl-2">{projectInfo.process[1]}</p>
                        <h3 className="text-l font-semibold">{projectInfo.process[2]}</h3>
                        <p className="pl-2">{projectInfo.process[3]}</p>
                        {projectInfo.process[4] && <h3 className="text-l font-semibold">{projectInfo.process[4]}</h3>}
                        {projectInfo.process[5] && <p className="pl-2">{projectInfo.process[5]}</p>}
                        {projectInfo.process[6] && <h3 className="text-l font-semibold">{projectInfo.process[6]}</h3>}
                        {projectInfo.process[7] && <p className="pl-2">{projectInfo.process[7]}</p>}
                    </>
                } />



        </main>
    );


}



