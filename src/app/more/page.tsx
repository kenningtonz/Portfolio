import { allTimelineEvents } from "../../_data/timelineEvents";
import Timeline from "@/components/timeline";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";

export default function MorePage() {
	//past projects and expierences
	return (
		<section className=' flex flex-wrap content-center sm:text-left text-center items-center justify-center gap-2  bg-brown h'>
			<Tabs defaultValue='projects' className='p-2  w-full h-3/4'>
				<TabsList>
					<TabsTrigger color='red' value='work'>
						Work
					</TabsTrigger>
					<TabsTrigger color='blue' value='projects'>
						Projects
					</TabsTrigger>
				</TabsList>
				<TabsContent color='red' value='work'>
					Make changes to your account here.
				</TabsContent>
				<TabsContent color='blue' value='projects'>
					Change your password here.
				</TabsContent>
			</Tabs>
			{/* <ul>
				{allTimelineEvents.map((event) => {
					return (
						<li>
							<h3>{event.title}</h3>
							<p>{event.date}</p>
							<p>{event.description}</p>
							<p>{event.location}</p>
						</li>
					);
				})}
			</ul> */}
		</section>
	);
}
