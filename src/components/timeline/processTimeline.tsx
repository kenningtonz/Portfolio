"use client";
import React from "react";

export const ProcessTimeline: React.FC<{
	processes: { name: string; img: string; steps: string[] }[];
	color: string;
}> = ({ processes, color }) => {
	const lastEvent = processes.length - 1;

	return (
		<>
			<ul className='flex flex-col justify-stretch  items-center  text-brown text-base pb-8 sm:text-lg pt-4   sm:p-0'>
				{processes.map((process, index) => {
					return (
						<li key={index} className='flex mx-4 sm:m-4  sm:flex-row flex-col '>
							<div className='hidden items-start w-48 pt-0.5 sm:flex text-brown'>
								<p className='w-4/5 text-right pr-2 pt-1 font-semibold text-lg'>
									{process.name}
								</p>

								{lastEvent === index ? null : (
									<div
										aria-hidden='true'
										className={`bg-${color}-dark w-0.5 h-full translate-x-5 translate-y-10 opacity-80`}
									></div>
								)}
								<img
									src={process.img}
									alt='icon'
									className={`bg-${color}-dark w-10 h-10 p-1 rounded z-20`}
								/>
								<div
									aria-hidden='true'
									className={`bg-${color}-dark h-0.5 w-8 translate-y-5 opacity-80`}
								></div>
							</div>

							<div
								className={`   w-full text-center z-20 sm:w-96 shadow-drop-${color} bg-${color}-dark rounded px-8 p-4 w-full overflow-hidden  text-white flex flex-col items-center`}
							>
								<img
									src={process.img}
									alt='icon'
									className={`bg-${color}-dark w-8 h-8 p-1 rounded z-20 sm:hidden`}
								/>
								<h3 className='sm:hidden text-xl font-medium text-center'>
									{process.name}
								</h3>
								<ul className='list-disc text-left'>
									{process.steps.map((step, index) => {
										return (
											<li
												className=' text-base font-medium'
												key={`${process.name}-${index}`}
											>
												{step}
											</li>
										);
									})}
								</ul>
							</div>

							{lastEvent == index ? null : (
								<span
									aria-hidden='true'
									className='flex justify-around sm:hidden opacity-80 '
								>
									<div className={` bg-${color}-600  w-0.5 h-6 `}></div>
									<div className={` bg-${color}-600  w-0.5 h-6 `}></div>
								</span>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
};

// const TimelineHeader: React.FC<{children : React.ReactNode}> = ({children}) => {
// 	return (
// 		<header className='flex justify-center items-center pt-4'>
// 			{children}
// 		</header>
// 	);
// }
