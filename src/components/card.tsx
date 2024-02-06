import React from "react"
import { Tools } from "../_classes/enums"

const Card: React.FC<{ title?: string, content?: string, image?: string, tools?: Tools[], className?: string }> = ({ title, content, image, tools, className }) => {
    return (
        <section className={`p-2 drop-shadow-lg rounded flex flex-col content-stretch ${className}`} >
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


