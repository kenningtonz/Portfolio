"use client";
import React from "react";
import { useState } from "react";
import { TimelineEvent } from "@/lib/classes/timelineEvents";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

const TimelineItem: React.FC<{
	event: TimelineEvent;
	isLastEvent: boolean;
}> = ({ event, isLastEvent }) => {
	const [detailsOpen, setDetailsOpen] = useState(false);
	const color = event.getTypeColor();
	const colorBG = `bg-${event.getTypeColor()}`;
	return (
		<li key={event.title} className='flex mx-4 sm:m-4  sm:flex-row flex-col'>
			<div className='hidden items-start w-48 pt-0.5 sm:flex text-brown'>
				<p className='w-4/5 pt-1'>
					{event.dateStart
						? `${event.dateStart.toLocaleDateString("en-CA", {
								year: "numeric",
								month: "long",
						  })}`
						: null}
					{event.dateEnd && event.dateStart ? " - " : null}
					{event.dateEnd
						? `${event.dateEnd.toLocaleDateString("en-CA", {
								year: "numeric",
								month: "long",
						  })}`
						: null}
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

			<div
				className={`   w-full text-center z-10 sm:w-96 rounded overflow-hidden  `}
			>
				<div
					className={`bg-${color}-600 ${
						detailsOpen ? "rounded-t" : "rounded"
					} px-8 pt-4 w-full text-center text-white  z-20 transition-all`}
				>
					<h3 className='text-xl font-medium'>{event.title}</h3>
					<p className=' italic'> {event.location}</p>
					<p className='sm:hidden text-xs'>
						{event.dateStart
							? `${event.dateStart.toLocaleDateString("en-CA", {
									year: "numeric",
									month: "long",
							  })}`
							: null}
						{event.dateEnd && event.dateStart ? " - " : null}
						{event.dateEnd
							? `${event.dateEnd.toLocaleDateString("en-CA", {
									year: "numeric",
									month: "long",
							  })}`
							: null}
					</p>
					<button
						onClick={() => setDetailsOpen(!detailsOpen)}
						className={`w-full rounded text-brown-dark text-base flex justify-center items-center hover:underline pt-4`}
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
							<motion.ul
								className={`list-disc  px-8 rounded-b bg-${color} px-4 py-4 z-10`}
							>
								{event.points.map((point) => {
									return (
										<li className='text-sm text-left' key={point}>
											{point}
										</li>
									);
								})}
							</motion.ul>
						</motion.section>
					)}
				</AnimatePresence>
			</div>

			{isLastEvent ? null : (
				<span
					aria-hidden='true'
					className='flex justify-around sm:hidden opacity-80 '
				>
					<div className={` ${colorBG} w-0.5 h-6 `}></div>
					<div className={` ${colorBG} w-0.5 h-6 `}></div>
				</span>
			)}
		</li>
	);
};

export const Timeline: React.FC<{ events: Array<TimelineEvent> }> = ({
	events,
}) => {
	events.sort((a, b) => {
		if (a.dateEnd && b.dateEnd) {
			return b.dateEnd.getTime() - a.dateEnd.getTime();
		}
		return 0;
	});
	console.log(events);
	const lastEvent = events[events.length - 1];
	return (
		<ul className='flex flex-col justify-stretch  items-center  text-brown text-base pb-8 sm:text-lg'>
			{events.map((event) => {
				return <TimelineItem event={event} isLastEvent={event === lastEvent} />;
			})}
		</ul>
	);
};

// const TimelineHeader: React.FC<{children : React.ReactNode}> = ({children}) => {
// 	return (
// 		<header className='flex justify-center items-center pt-4'>
// 			{children}
// 		</header>
// 	);
// }
