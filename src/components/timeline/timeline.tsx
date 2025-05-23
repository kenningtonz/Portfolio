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
		<motion.li
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={event.title}
			className='flex mx-4 sm:m-4  sm:flex-row flex-col'
		>
			<div className='hidden items-start w-48 2xl:w-[22rem] pt-0.5 sm:flex text-white text-right'>
				<div className='w-4/5 pr-4 pt-1'>
					<p>
						{event.dateStart
							? `${event.dateStart.toLocaleDateString("en-CA", {
									year: "numeric",
									month: "short",
							  })}`
							: null}
						{event.dateEnd && event.dateStart ? " - " : null}
					</p>

					<p>
						{event.dateEnd
							? `${event.dateEnd.toLocaleDateString("en-CA", {
									year: "numeric",
									month: "short",
							  })}`
							: null}
					</p>
				</div>

				{isLastEvent ? null : (
					<div
						aria-hidden='true'
						className={`bg-${color}-500 w-0.5 2xl:w-1 h-full translate-x-5 2xl:translate-x-[30px] translate-y-10 opacity-80`}
					></div>
				)}
				<img
					src={event.getTypeIcon()}
					alt='icon'
					className={`bg-${color}-500 res-sq-10 p-1 rounded z-20`}
				/>
				<div
					aria-hidden='true'
					className={`bg-${color}-500 h-0.5 2xl:h-1 w-8  xl:w-16 2xl:w-20 translate-y-5 opacity-80`}
				></div>
			</div>

			<div
				className={`   w-full text-center z-10 xl:border-[3px] xl:w-[32rem] 2xl:w-[38rem] sm:w-96 rounded overflow-hidden border-2  border-${color}-600 bg-${color} `}
			>
				<div
					className={` ${
						detailsOpen ? "rounded-t" : "rounded  "
					} px-8 pt-4 w-full text-center text-brown-dark  z-20 transition-all relative  `}
				>
					<img
						src={event.getTypeIcon()}
						alt='icon'
						className={`bg-${color}  w-6 absolute left-2 top-2 sm:hidden p-1 rounded z-20`}
					/>
					<h3 className='res-text-xl font-medium'>{event.title}</h3>
					<p className=' italic'> {event.location}</p>
					<p className='sm:hidden res-text-xs'>
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
						className={`w-full rounded text-brown-dark res-text-base flex justify-center items-center hover:underline pt-4`}
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
										<li className='res-text-sm text-left' key={point}>
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
		</motion.li>
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
