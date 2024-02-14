'use client';
import React from "react"
import { Tools } from "../_classes/enums"
import { Chips } from "./chips"
import { motion } from "framer-motion"

function openInNewTab(url: string) {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    }
}

const Card: React.FC<{ projectLink?: string, githubLink?: string, customContent?: React.ReactNode, title?: string, content?: string, image?: string, tools?: Tools[], className?: string, date?: string }> = ({ customContent, title, content, image, tools, className, date, projectLink, githubLink }) => {
    return (
        <section className={`p-2 drop-shadow-lg rounded flex flex-col content-stretch ${className}`} >

            {image && <img className="rounded-inner object-cover" src={image} alt="Logo" />}
            {title && <h2 className="text-center text-xl font-semibold">{title}</h2>}
            {content && <p className="p-2">{content}</p>}
            {tools &&
                <>
                    <Chips chips={tools} />
                </>}
            {projectLink &&
                <span className="flex gap-1 justify-center p-1">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        role="link"
                        onClick={() => openInNewTab(projectLink)}
                        className={` rounded p-2 h-10 text-white  bg-brown`}>
                        Open in new tab
                    </motion.button>
                    {githubLink && <motion.button
                        role="link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { openInNewTab(githubLink) }}
                        className={` rounded p-2 h-10 text-white  bg-brown`}>View on GitHub</motion.button>}
                </span>}
            {customContent && customContent}
        </section>
    )
}

export default Card


