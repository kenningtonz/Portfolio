import { TimelineEvent } from "@/lib/classes/timelineEvents";

export const TimelineHighlight: React.FC<{ events: Array<TimelineEvent> }> = ({
	events,
}) => {
	events.sort((a, b) => {
		if (a.dateEnd && b.dateEnd) {
			return b.dateEnd.getTime() - a.dateEnd.getTime();
		}
		return 0;
	});
	const lastEvent = events[events.length - 1];
	return (
		<ul className='flex flex-col justify-stretch  items-center  text-brown-dark text-base pb-8 sm:text-lg'>
			{events.map((event) => {
				const color = event.getTypeColor();
				return (
					<li
						key={event.title}
						className='flex mx-4 sm:m-4  relative sm:flex-row flex-col'
					>
						<div className='hidden items-start w-48 xl:w-[18rem] pt-0.5 relative sm:flex'>
							<p className='w-4/5 text-gray-500 pt-1 text-white text-pretty res-text-lg'>
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
							{event === lastEvent ? null : (
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
								className={`bg-${color}-500 h-0.5 2xl:h-1 w-8  xl:w-16 2xl:w-20 translate-y-5 2xl:translate-y-6 opacity-80`}
							></div>
						</div>
						<div
							className={`border-${color}-500  border-2 xl:border-[3px] rounded px-8 py-4 w-full text-center z-10 xl:w-[32rem] sm:w-96 bg-${color} text-brown-dark `}
						>
							<h3 className='res-text-xl font-medium'>{event.title}</h3>
							<p className='   res-text-sm text-pretty	'>{event.location}</p>
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
							<img
								src={event.getTypeIcon()}
								alt='icon'
								className={`bg-${color}  w-6 absolute left-2 top-2 sm:hidden p-1 rounded z-20`}
							/>
						</div>
						{event === lastEvent ? null : (
							<span
								aria-hidden='true'
								className='flex justify-around sm:hidden opacity-60 '
							>
								<div className={` bg-${color} w-0.5 h-6 `}></div>
								<div className={` bg-${color} w-0.5 h-6 `}></div>
							</span>
						)}
					</li>
				);
			})}
		</ul>
	);
};
