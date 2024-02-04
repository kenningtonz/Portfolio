import Link from "next/link"
import { WellnessCategory } from "../_classes/wellness"

export const Content: React.FC<{ wellnessCategory: WellnessCategory }> = (props) => {
    return (
        <section className="flex flex-col p-5 font-display 	">
            <h2 className="text-4xl font-bold ">{props.wellnessCategory.name}</h2>
            {props.wellnessCategory.projects.map((project) => {
                return (
                    <Link href={`/${project.slug}`} className="hover:scale-110" target="_blank">
                        <div className="flex bg-white rounded p-2 flex-col items-center gap-2	">
                            <img src={project.image} alt="Logo" width={100} height={100} />
                            <h3 className="">{project.name}</h3>
                        </div>
                    </Link>

                )
            })}

        </section>
    )
}