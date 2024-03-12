"use client";
import {
	timelineEvents,
	TimelineType,
	TimelineProjectEvents,
} from "@/lib/classes/timelineEvents";
import { Timeline } from "@/components/timeline/timeline";
import { TimelineProjects } from "@/components/timeline/projectsTimeline";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";

export default function MorePage() {
	//past projects and expierences
	return (
		<section className=' flex flex-wrap content-center sm:text-left text-center items-center justify-center gap-2  bg-brown h-full'>
			<button className='rounded bg-yellow-500 text-brown-dark text-base flex justify-center items-center hover:underline px-4 py-2'>
				Download Resume
			</button>
			<Tabs defaultValue='work' className=' w-full mt-4'>
				<TabsList>
					{/* <TabsTrigger color='white' value='all'>
						All
					</TabsTrigger> */}
					<TabsTrigger color='red' value='work'>
						Work
					</TabsTrigger>
					<TabsTrigger color='purple' value='education'>
						Education
					</TabsTrigger>
					{/* <TabsTrigger color='green' value='projects'>
						Projects
					</TabsTrigger> */}
					<TabsTrigger color='blue' value='certification'>
						Certifications
					</TabsTrigger>
					<TabsTrigger color='yellow' value='personal'>
						Personal
					</TabsTrigger>
					<TabsTrigger color='orange' value='volunteer'>
						Volunteer
					</TabsTrigger>
				</TabsList>

				{/* <TabsContent color='brown-light' value='all'>
					<Timeline events={timelineEvents} />
				</TabsContent> */}
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
		</section>
	);
}
