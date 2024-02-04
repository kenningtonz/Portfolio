import Link from "next/link"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Card from "../_components/card"

import { wellnessCategories } from "../_data/data";

function getCategory(projectSlug: string) {
    for (const category of wellnessCategories) {
        const project = category.getProject(projectSlug);
        if (project) {
            return category;
        }
    }
}

// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())

//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }

export default function Page({ params }: { params: { slug: string } }) {
    const category = getCategory(params.slug);
    const project = category?.getProject(params.slug);
    if (!project) {
        return <h1>Project not found</h1>
    } else {
        return (
            <main className="flex flex-wrap p-5 font-display">
                <header>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <h1 className="">{project.name}</h1>
                    <h2>{category && category.name}</h2>
                    <FontAwesomeIcon icon={category && category.icon} />
                </header>
                <Card image={project.image} />
                <Card title={project.name} content={project.description} tools={project.tools} />
                <button>Open in new tab</button>
                <button>View on GitHub</button>
                <Card title="Objective" content={project.objective} />
                <Card title="Purpose" content={project.purpose} />
                <Card title="Approach" content={project.approach} />


            </main>
        )
    }

}

