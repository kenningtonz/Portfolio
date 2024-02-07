import React from "react"
import { Tools } from "../_classes/enums"

const Card: React.FC<{ title?: string, content?: string, image?: string, tools?: Tools[], className?: string }> = ({ title, content, image, tools, className }) => {
    return (
        <section className={`p-2 drop-shadow-lg rounded flex flex-col content-stretch ${className}`} >
            {image && <img className="rounded-inner" src={image} alt="Logo" />}
            {title && <h2 className="text-center text-xl font-semibold">{title}</h2>}
            {content && <p className="p-2">{content}</p>}
            {tools &&
                <>
                    <h3 className="px-2 text-lg font-medium">Tools</h3>
                    <ul className=" px-2 list-none flex gap-1 flex-wrap">
                        {tools.map((tool) => {
                            return (
                                <li>{tool}</li>
                            )
                        })}
                    </ul> </>}
        </section>
    )
}

export default Card


