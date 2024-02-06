import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { timelineEventsHighlight } from "../_data/timelineEvents"
import { colors } from "../_data/colorsDynamic"

const Timeline = () => {
    return (
        <ul className="flex flex-col justify-center items-center  dark:text-white text-brown text-base pb-8 sm:text-lg">
            {
                timelineEventsHighlight.map((event) => {
                    const colorBG = colors[event.color].bg
                    const colorText = colors[event.color].text
                    const color = colors[event.color].color
                    return (
                        <li key={event.id} className="flex m-4 relative">
                            <div className={` ${colorBG} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}></div>
                            <div className={` ${colorBG} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}></div>

                            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                                <p className="w-4/5 text-gray-500 ">{event.date}</p>
                                <div className={`${colorBG} w-px h-full translate-x-5 translate-y-10 opacity-30`}></div>
                                {/* <img src={event.icon} alt="icon" className="w-10 p1 rounded-lg z-20" /> */}
                                <div className={`${colorText} w-10 p-1 rounded z-20`}>
                                    <FontAwesomeIcon icon={event.icon} />
                                </div>
                                <div className={`${colorBG} h-px w-8 translate-y-5 opacity-30`}></div>
                            </div>
                            <div className={`border-${color}  border rounded px-8 py-4 w-full text-center z-10 sm:w-96 ${colorBG} `}>
                                <h3 className="text-xl font-medium">{event.title}</h3>
                                <p className="mb-6 sm:mb-8 sm:text-xs" >{event.location} <span className="sm:hidden">| {event.date}</span></p>
                                {/* <p className="mb-4 text-left ">{event.description}</p> */}
                                <div className={`${colorText} w-8 absolute left-4 top-4 sm:hidden p-1 rounded z-20`} >
                                    <FontAwesomeIcon icon={event.icon} className={`${colorText} w-8 absolute left-4 top-4 sm:hidden p-1 rounded z-20`} />
                                </div>
                                {/* <img src={event.icon} alt="icon" className="w-8 absolute left-4 top-4 sm:hidden p1 rounded-lg z-20" /> */}
                            </div>
                        </li>
                    )
                })

            }
        </ul>
    )
}

export default Timeline


