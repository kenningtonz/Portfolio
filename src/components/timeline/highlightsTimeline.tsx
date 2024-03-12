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
						<div className='hidden items-start w-48 pt-0.5 relative sm:flex'>
							<p className='w-4/5 text-gray-500 pt-1 text-white text-pretty'>
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
									className={`bg-${color}-500 w-0.5 h-full translate-x-5 translate-y-10 opacity-80`}
								></div>
							)}
							<img
								src={event.getTypeIcon()}
								alt='icon'
								className={`bg-${color}-500 w-10 h-10 p-1 rounded z-20`}
							/>
							<div
								aria-hidden='true'
								className={`bg-${color}-500 h-0.5 w-8 translate-y-5 opacity-80`}
							></div>
						</div>
						<div
							className={`border-${color}-500  border-2 rounded px-8 py-4 w-full text-center z-10 sm:w-96 bg-${color} text-brown-dark `}
						>
							<h3 className='text-xl font-medium'>{event.title}</h3>
							<p className='  sm:text-sm text-pretty	'>{event.location}</p>
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
							<img
								src={event.getTypeIcon()}
								alt='icon'
								className={`bg-${color}  w-8 absolute left-2 top-2 sm:hidden p-1 rounded z-20`}
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
