"use client";
import {
	timelineEvents,
	TimelineType,
	TimelineProjectEvents,
} from "@/lib/classes/timelineEvents";
import { Timeline } from "@/components/timeline/timeline";
import { TimelineProjects } from "@/components/timeline/projectsTimeline";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";

export default function MorePage() {
	return (
		<main className=' flex flex-col content-center sm:text-left text-center items-center justify-center gap-2  bg-brown h-full'>
			<h1 className='text-3xl text-center text-white'>Experience</h1>

			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				role='link'
				href='/Kennedy_Adams_Resume.pdf'
				target='_blank'
				// onClick={() => {
				// 	window.location.href = "/more";
				// }}
				arial-label='download resume'
				className='bg-yellow-500 text-brown-dark py-2 px-4 text-base rounded font-semibold'
			>
				Download Resume
			</motion.a>
			<Tabs defaultValue='all' className=' w-full mt-4'>
				<TabsList>
					<TabsTrigger color='white' value='all'>
						All
					</TabsTrigger>
					<TabsTrigger color='red' value='work'>
						<h2>Work</h2>
					</TabsTrigger>
					<TabsTrigger color='purple' value='education'>
						<h2>Education</h2>
					</TabsTrigger>
					{/* <TabsTrigger color='green' value='projects'>
						Projects
					</TabsTrigger> */}
					<TabsTrigger color='blue' value='certification'>
						<h2>Certifications</h2>
					</TabsTrigger>
					<TabsTrigger color='yellow' value='personal'>
						<h2>Personal</h2>
					</TabsTrigger>
					<TabsTrigger color='orange' value='volunteer'>
						<h2>Volunteer</h2>
					</TabsTrigger>
				</TabsList>

				<TabsContent color='brown' value='all'>
					<Timeline events={timelineEvents} />
				</TabsContent>
				<TabsContent color='red' value='work'>
					<Timeline
						events={timelineEvents.filter((event) => event.type == TimelineType.Work)}
					/>
				</TabsContent>

				<TabsContent color='purple' value='education'>
					<Timeline
						events={timelineEvents.filter(
							(event) => event.type == TimelineType.Education
						)}
					/>
				</TabsContent>
				<TabsContent color='blue' value='certification'>
					<Timeline
						events={timelineEvents.filter(
							(event) => event.type == TimelineType.Certification
						)}
					/>
				</TabsContent>
				<TabsContent color='yellow' value='personal'>
					<Timeline
						events={timelineEvents.filter(
							(event) => event.type == TimelineType.Personal
						)}
					/>
				</TabsContent>
				<TabsContent color='orange' value='volunteer'>
					<Timeline
						events={timelineEvents.filter(
							(event) => event.type == TimelineType.Volunteer
						)}
					/>
				</TabsContent>
				{/* <TabsContent color='green' value='projects'>
					<TimelineProjects events={TimelineProjectEvents} />
				</TabsContent> */}
			</Tabs>
		</main>
	);
}
