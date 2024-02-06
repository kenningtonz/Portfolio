import Link from "next/link"
import { getWellnessCategory } from "../_classes/wellness"
import { getProjectsByCategory } from "../_classes/project";
import { WellnessE } from '../_classes/enums';


export const Content: React.FC<{ wellnessE: WellnessE }> = ({ wellnessE }) => {
    let wellnessCategory = getWellnessCategory(wellnessE);
    let projects = getProjectsByCategory(wellnessCategory!.enum);

    return (
        <section className="flex flex-col p-5 font-display 	">
            <h2 className="text-4xl font-bold ">{wellnessCategory!.name}</h2>
            {projects.map((project) => {
                return (
                    <Link key={project.slug} href={`/projects/${project.slug}`} className="hover:scale-110">
                        <div className="flex bg-white rounded p-2 flex-col items-center gap-2	">
                            <img src={project.logo} alt="Logo" width={100} height={100} />
                            <h3 className="">{project.name}</h3>
                        </div>
                    </Link>

                )
            })}

        </section>
    )
}