import Link from "next/link"
import { getWellnessCategory } from "../_classes/wellness"
import { getProjectsByCategory } from "../_classes/project";
import { WellnessE } from '../_classes/enums';


export const Content: React.FC<{ wellnessE: WellnessE, direction: number }> = ({ wellnessE, direction }) => {
    const textAlignment = direction == 0 ? "sm:text-left" : "sm:text-right";
    let wellnessCategory = getWellnessCategory(wellnessE);
    let projects = getProjectsByCategory(wellnessCategory!.enum);

    return (
        <section className="flex flex-wrap p-5 font-display my-2 w-full	 items-stretch gap-2">
            <h2 className={`text-4xl font-bold text-center  basis-full ${textAlignment}`}>{wellnessCategory!.name}</h2>
            <p className={`text-lg text-center ${textAlignment}  basis-full`}>{wellnessCategory!.description}</p>
            {projects.map((project) => {
                return (
                    <Link key={project.slug} href={`/projects/${project.slug}`} className=" grow basis-1/4 hover:scale-110">
                        <div className="flex  bg-white rounded p-2 flex-col items-center gap-2 	">
                            <img src={project.logo} alt="Logo" width={100} height={100} />
                            <h3 className="text-xl">{project.name}</h3>
                        </div>
                    </Link>

                )
            })}

        </section>
    )
}