import React from "react"
import Tools from "../_classes/tools"

const Card: React.FC<{ title?: string, content?: string, image?: string, tools?: Tools[] }> = ({ title, content, image, tools }) => {
    return (
        <section className="p-2 drop-shadow-md rounded flex flex-col content-stretch">
            {image && <img className="rounded-inner" src={image} alt="Logo" />}
            {title && <h2 className="text-center">{title}</h2>}
            {content && <p>{content}</p>}
            {tools && <ul className="list-none flex gap-1 flex-wrap">
                {tools.map((tool) => {
                    return (
                        <li>{tool}</li>
                    )
                })}
            </ul>}
        </section>
    )
}

export default Card


