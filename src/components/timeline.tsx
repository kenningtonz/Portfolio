import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { timelineEventsHighlight } from "../_data/timelineEvents"
import { colors } from "../_data/colorsDynamic"

const Timeline = () => {
    return (
        <ul className="flex flex-col justify-center items-center  dark:text-white text-brown text-base pb-8 sm:text-lg">
            {
                timelineEventsHighlight.map((event) => {
                    // const colorBG = colors[event.color].bg
                    // const colorText = colors[event.color].text
                    const color = colors[event.color].color
                    const colorBG = `bg-${event.color}-200 dark:bg-${event.color}-600`;
                    const colorBGInv = `dark:bg-${event.color}-200 bg-${event.color}-600`;
                    const colorText = `text-${event.color}-300 dark:text-${event.color}-600`;

                    return (
                        <li key={event.id} className="flex mx-4 sm:m-4  relative sm:flex-row flex-col">

                            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                                <p className="w-4/5 text-gray-500 ">{event.date}</p>
                                <div className={`${colorBG} w-px h-full translate-x-5 translate-y-10 opacity-80`}></div>
                                {/* <img src={event.icon} alt="icon" className="w-10 p1 rounded-lg z-20" /> */}
                                {/* <div className={``}>
                                    <FontAwesomeIcon icon={event.icon} />
                                </div> */}
                                <img src={event.icon} alt="icon" className={`${colorBG} w-10 p-1 rounded z-20`} />

                                <div className={`${colorBG} h-px w-8 translate-y-5 opacity-80`}></div>
                            </div>
                            <div className={`border-${color}  border-2 rounded px-8 py-4 w-full text-center z-10 sm:w-96 ${colorBG} `}>
                                <h3 className="text-xl font-medium">{event.title}</h3>
                                <p className="mb-6 sm:mb-8 sm:text-xs" >{event.location} <span className="sm:hidden">| {event.date}</span></p>
                                {/* <p className="mb-4 text-left ">{event.description}</p> */}
                                <img src={event.icon} alt="icon" className={`${colorBG} w-8 absolute left-2 top-2 sm:hidden p-1 rounded z-20`} />
                                {/* <div >
                                    <FontAwesomeIcon icon={event.icon} className={`${colorText} w-8 absolute left-4 top-4 sm:hidden p-1 rounded z-20`} />
                                </div> */}
                                {/* <img src={event.icon} alt="icon" className="w-8 absolute left-4 top-4 sm:hidden p1 rounded-lg z-20" /> */}
                            </div>
                            <span className="flex justify-around">
                                <div className={` bg-${event.color}-200 w-0.5 h-6 opacity-60 sm:hidden`}></div>
                                <div className={` bg-${event.color}-200 w-0.5 h-6 opacity-60 sm:hidden`}></div>
                            </span>

                        </li>
                    )
                })

            }
        </ul>
    )
}

export default Timeline


