"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimelineProject } from "@/lib/classes/timelineEvents";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Chips from "@/components/chips";
import { openInNewTab } from "@/lib/utils";

const TimelineProjectItem = ({
	event,
	isLastEvent,
}: {
	event: TimelineProject;
	isLastEvent: boolean;
}) => {
	const [detailsOpen, setDetailsOpen] = useState(false);
	const color = "green";
	return (
		<li
			key={event.title}
			className='flex mx-4 sm:m-4  sm:flex-row flex-col w-full sm:w-auto'
		>
			<div className='hidden items-start w-48 pt-0.5 sm:flex text-brown'>
				<p className='w-4/5 pt-1'>
					{event.date.toLocaleDateString("en-CA", {
						year: "numeric",
						month: "long",
					})}
				</p>
				{isLastEvent ? null : (
					<div
						aria-hidden='true'
						className={`bg-${color}-600 w-0.5 h-full translate-x-5 translate-y-10 opacity-80`}
					></div>
				)}
				<div
					aria-hidden='true'
					className={`bg-${color}-600 w-12 h-10 p-1 rounded-round z-20`}
				/>
				<div
					aria-hidden='true'
					className={`bg-${color}-600 h-0.5 w-8 translate-y-5 opacity-80`}
				></div>
			</div>

			<div className={` w-full text-center z-10 sm:w-96  `}>
				<div
					className={`  bg-${color}-600 w-full text-center px-8 pt-4   text-white  ${
						detailsOpen ? "rounded-t" : "rounded"
					}`}
				>
					<h3 className='text-xl font-medium'>{event.title}</h3>
					<p className='italic'>{event.role}</p>
					{event.teamSize != 1 ? (
						<p className='text-sm'>Team Size: {event.teamSize}</p>
					) : null}

					<p className='text-sm sm:hidden'>
						{event.date.toLocaleDateString("en-CA", {
							year: "numeric",
							month: "long",
						})}
					</p>
					<div className=' flex gap-2 justify-center p-1  '>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							role='link'
							onClick={() => openInNewTab(event.link)}
							className={` rounded  px-2 h-8 text-brown-dark text-xl bg-${color}-200`}
						>
							<FontAwesomeIcon icon={faItchIo} />
						</motion.button>

						<motion.button
							role='link'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => {
								openInNewTab(event.githubLink);
							}}
							className={` rounded  px-2 h-8 text-brown-dark text-xl bg-${color}-200`}
						>
							<FontAwesomeIcon icon={faGithub} />
						</motion.button>
					</div>
					<button
						onClick={() => setDetailsOpen(!detailsOpen)}
						className={`w-full rounded text-brown-dark text-lg flex justify-center items-center hover:underline pt-4`}
					>
						{detailsOpen ? "Hide" : "View"} Details
						{detailsOpen ? (
							<FontAwesomeIcon icon={faChevronUp} />
						) : (
							<FontAwesomeIcon icon={faChevronDown} />
						)}
					</button>
				</div>
				<AnimatePresence initial={false}>
					{detailsOpen && (
						<motion.section
							key='content'
							initial='collapsed'
							animate='open'
							exit='collapsed'
							variants={{
								open: { opacity: 1, height: "auto" },
								collapsed: { opacity: 0, height: 0 },
							}}
							transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
						>
							<div className={` rounded-b bg-${color} p-4 `}>
<Chips chips={event.tools} />
								<p className='text-base'>{event.excerpt}</p>
								<p> Duration: {event.duration}</p>
								<h3>Objective</h3>
								<p className='text-sm text-left'>{event.process[1]}</p>
								<h3>Approach</h3>
								<p className='text-sm text-left'>{event.process[3]}</p>
							</div>
						</motion.section>
					)}
				</AnimatePresence>
			</div>

			{isLastEvent ? null : (
				<span
					aria-hidden='true'
					className='flex justify-around sm:hidden opacity-80 '
				>
					<div className={` bg-${color}-600 w-0.5 h-6 `}></div>
					<div className={` bg-${color}-600  w-0.5 h-6 `}></div>
				</span>
			)}
		</li>
	);
};

export const TimelineProjects: React.FC<{ events: Array<TimelineProject> }> = ({
	events,
}) => {
	events.sort((a, b) => {
		if (a.date && b.date) {
			return b.date.getTime() - a.date.getTime();
		}
		return 0;
	});
	const lastEvent = events[events.length - 1];
	return (
		<ul className='flex flex-col justify-stretch  items-center  text-brown text-base  sm:text-lg p-8'>
			{events.map((event) => {
				return (
					<TimelineProjectItem event={event} isLastEvent={event === lastEvent} />
				);
			})}
		</ul>
	);
};
