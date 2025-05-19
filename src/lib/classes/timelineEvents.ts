import { Project } from "./project";
import { Tools } from "./enums";

export enum TimelineType {
	Work = "work",
	Education = "education",
	Certification = "certification",
	Volunteer = "volunteer",
	Project = "project",
	Personal = "personal",
}

//skills/tools

export class TimelineEvent {
	title: string;
	dateStart?: Date;
	dateEnd?: Date;
	points: string[];
	location: string;
	type: TimelineType;
	highlight: boolean;
	// tools: Tools[];
	duration?: string;

	constructor(
		title: string,
		points: string[],
		location: string,
		type: TimelineType,
		highlight: boolean,
		// tools: Tools[],
		dateStart?: Date,
		dateEnd?: Date
	) {
		this.title = title;
		this.dateStart = dateStart;
		this.dateEnd = dateEnd;
		this.points = points;
		this.location = location;
		this.type = type;
		this.highlight = highlight;
		// this.tools = tools;
	}

	getTypeColor() {
		const type = this.type;
		switch (type) {
			case TimelineType.Work:
				return "red";
			case TimelineType.Education:
				return "purple";
			case TimelineType.Certification:
				return "blue";
			case TimelineType.Volunteer:
				return "orange";
			case TimelineType.Personal:
				return "yellow";
			case TimelineType.Project:
				return "green";
			default:
				return "bg-orange-500";
		}
	}

	getTypeIcon() {
		const type = this.type;
		switch (type) {
			case TimelineType.Work:
				return "../icons/briefcase.svg";
			case TimelineType.Education:
				return "../icons/graduation-cap.svg";
			case TimelineType.Certification:
				return "../icons/certificate.svg";
			case TimelineType.Volunteer:
				return "../icons/users.svg";
			case TimelineType.Personal:
				return "../icons/brain.svg";
			default:
				return "../icons/briefcase.svg";
		}
	}
}

export const timelineEvents = [
	new TimelineEvent(
		"Junior Technical Solutions Specialist",
		[
			"Develop and debug custom JavaScript snippets for client websites across platforms like WordPress, Shopify, HubSpot, and custom-built sites, including tag implementation via Google Tag Manager.",
			"Investigate and resolve complex technical issues by querying SQL databases and analyzing system logs using Kibana, Elasticsearch, GraphQL, and Grafana, collaborating closely with product and engineering teams.",
			"Communicate solutions clearly to both technical and non-technical stakeholders through email, video calls, and technical documentation.",
			"Build internal tools and contribute to support resources to streamline workflows, reduce resolution time, and enhance team efficiency.",
		],
		"StackAdapt, Remote",
		TimelineType.Work,
		true,
		new Date("2024-07-09")
	),
	new TimelineEvent(
		"Ontario College Diploma, Web Development",
		["College Honour Roll, Fall 2022, Winter 2023, Fall 2023."],
		"Durham College, Oshawa ON",
		TimelineType.Education,
		true,
		new Date("2024-04-15")
	),
	new TimelineEvent(
		"Bachelor of Information Technology, Game Development and Entrepreneurship",
		[
			"Liaison for Game Development Society, 2019.",
			"Graduated with Distinction.",
		],
		"Ontario Tech University, Oshawa ON",
		TimelineType.Education,
		true,
		new Date("2022-04-15")
	),
	new TimelineEvent(
		"Game Development Society Liaison",
		[
			"Established strong connections with fellow students, fostering a supportive environment conducive to growth and development.",
			"Demonstrated exceptional teamwork by actively participating in the setup and cleanup of weekly sessions, ensuring smooth operations.",
			"Served as a vital liaison between first-year students and upperclassmen, facilitating efficient scheduling of optimal times and coordinating engaging activities for various events.",
			"Led efforts to enhance participation in weekly sessions through adept utilization of persuasive communication and interpersonal abilities.",
		],
		"Ontario Tech University, Oshawa ON",
		TimelineType.Volunteer,
		false,
		new Date("2019-01-15"),
		new Date("2019-04-15")
	),
	new TimelineEvent(
		"Game Developer",
		[
			"Programed in the language C#, using the engine, Unity.",
			"Traversed and developed on an existing project, with little documentation.",
			"Developed training scenarios in the Navy’s Virtual fleet, specializing in auditory scenarios.",
			"Assisted in the design of training scenarios.",
			"Collaborated with other developers in the creation of training scenarios.",
		],
		"Department of National Defense, Government of Canada",
		TimelineType.Work,
		true,
		new Date("2022-05-01"),
		new Date("2022-09-02")
	),
	new TimelineEvent(
		"Dialectical Behavioral Therapy",
		["DBT Skills Training, Ontario Shores, Whitby, ON"],
		"Ontario Shores, Whitby, ON",
		TimelineType.Personal,
		false,
		new Date("2021-06-29"),
		new Date("2022-05-02")
	),
	new TimelineEvent(
		"Ontario G2 License",
		[
			"Completed 30 hours online course and 10 hours in-car training.",
			"Passed the road test on the first attempt.",
		],
		"Champions Driving Academy, Oshawa, ON",
		TimelineType.Personal,
		true,
		new Date("2023-12-20"),
		new Date("2024-03-19")
	),
	new TimelineEvent(
		"Web Developer / Media Assistant",
		[
			"Developed and maintained responsive websites using HTML, CSS (Bootstrap), and JavaScript to ensure an optimal user experience across multiple devices.",
			"Assisted in the production and editing of multimedia content for promotional materials, including brochures, videos, and presentations, to support marketing campaigns.",
		],
		"Durham College, Oshawa, ON",
		TimelineType.Work,
		false,
		new Date("2023-09-01"),
		new Date("2024-04-15")
	),
	new TimelineEvent(
		"Freelance Online Presence & Web Developer",
		[
			"Headed development and ongoing management of avidlegalservices.com, an informative WordPress site for a paralegal start-up.",
			"Formulated legal components: privacy policy, cookie policy, accessibility statement, terms of use, and disclaimer, adhering to Canadian web regulations.",
			"Executed an optimization strategy, enhancing website usability, SEO performance, loading speed, and accessibility to meet WCAG 2.1 AA standards.",
			"Established a social media presence on Instagram and Facebook, enhancing brand visibility and engagement.",
			"Created distinctive brand identity, encompassing logo, essential assets, and promotional materials like business cards, flyers, and stickers.",
		],
		"AVID Legal Services, Whitby, ON",
		TimelineType.Work,
		false,
		new Date("2023-04-23"),
		new Date("2023-06-30")
	),
	new TimelineEvent(
		"Web Developer",
		[
			"Created and currently managing foundersdrive.com, a WordPress-based website for a start-up entrepreneurship podcast, incorporating external HTML, CSS, and PHP expertise.",
			"Implemented an optimization strategy, elevating website usability, SEO performance, loading speed, and accessibility to align seamlessly with WCAG 2.1 AA standards.",
			"Utilizing Google Analytics to track website views and trends.",
			"Collaborated with design and content teams to ensure seamless integration of visual elements and efficient content management.",
		],
		"Founder's Drive, Oshawa, ON",
		TimelineType.Work,
		false,
		new Date("2023-01-16"),
		new Date("2024-04-15")
	),
	new TimelineEvent(
		"Campus ID Assistant",
		[
			"Utilized Campus ID (Touchnet VIP) and UPass (Bytemark, Presto Voucher Portal) systems to troubleshoot student ID related issues.",
			"Responded to student Campus ID and UPass related e-mail inquiries.",
			"Printed Student ID Cards, Badges, Staff Proximity cards.",
			"Responded to in-person student inquiries during peak hours.",
		],
		"Durham College, Oshawa, ON",
		TimelineType.Work,
		false,
		new Date("2022-09-08"),
		new Date("2023-04-15")
	),
	new TimelineEvent(
		"Jr Business Support Analyst",
		[
			"Researched best business practices in Banner of other universities regarding student satisfaction and enrollment.",
			"Evaluated and removed of redundant features on school platform.",
			"Provided system training and troubleshooting services for the university’s learning management system, Canvas.",
			"Identified issues, analyzed information, and provided solutions to problems with the university’s enterprise resource planning system, Banner.",
			"Created videos and interactive demos for students and faculty regarding both Banner and Canvas.",
		],
		"Ontario Tech University, Oshawa, ON",
		TimelineType.Work,
		false,
		new Date("2020-06-01"),
		new Date("2022-04-15")
	),
	new TimelineEvent(
		"ID Services Assistant",
		[
			"Assisted in creating faculty, staff, and student identification (ID) cards and badges.",
			"Worked at university events including move-in weekend to help students get their ID cards.",
			"Conducted research, gathered information from multiple sources and presented results",
			"Received and processed stock into inventory management system.",
		],
		"Ontario Tech University, Oshawa, ON",
		TimelineType.Work,
		false,
		new Date("2019-05-01"),
		new Date("2020-04-15")
	),
	new TimelineEvent(
		"Mental Health First Aid Certificate, Mental Health Commission of Canada",
		[
			"Practiced awareness of signs and symptoms of the most common mental health problems.",
			"Learned how to interact with and provide help to individuals experiencing a mental health problem or crisis.",
			"Practiced crisis first aid skills.",
		],
		"Oshawa, ON",
		TimelineType.Certification,
		true,
		new Date("2019-06-20")
	),
	new TimelineEvent(
		"Math Peer Tutor",
		[
			"Created personalized education plans to assist students who required a peer tutor.",
			"Ran math support discussions for groups of 20 to 25 students.",
			"Marked assignments and kept detailed records of course work.",
			"Helped foster and maintain an inclusive and positive learning atmosphere.",
		],
		"O'Neil Collegiate and Vocational Institute, Oshawa, ON",
		TimelineType.Volunteer,
		false,
		new Date("2017-01-11"),
		new Date("2017-06-15")
	),
	new TimelineEvent(
		"Community Volunteer",
		[
			"Assisted in planning and oversight of community outreach events.",
			"Programmed weekly electronic elements and backups for community presentations.",
			"Ran technology workshops for community members. ",
			"Planned and facilitated group discussions on a variety of topics ages 12 to 18.",
		],
		"Oshawa Community Church, Oshawa, ON",
		TimelineType.Volunteer,
		false,
		new Date("2018-04-01"),
		new Date("2019-04-15")
	),
];

export class TimelineProject {
	title: string;
	role: string;
	tools: Tools[];
	teamSize: number;
	link: string;
	githubLink: string;
	excerpt: string;
	objective: string;
	process: string[];
	date: Date;
	duration: string;
	constructor(
		title: string,
		role: string,
		tools: Tools[],
		teamSize: number,
		link: string,
		githubLink: string,
		excerpt: string,
		objective: string,
		process: string[],
		duration: string,
		date: Date
	) {
		this.title = title;
		this.role = role;
		this.tools = tools;
		this.teamSize = teamSize;
		this.link = link;
		this.githubLink = githubLink;
		this.excerpt = excerpt;
		this.objective = objective;
		this.process = process;
		this.duration = duration;
		this.date = date;
	}
}

export const TimelineProjectEvents = [
	new TimelineProject(
		"Hogue is God",
		"Game Designer and 3D Artist",
		[Tools.CSharp, Tools.Unity, Tools.Blender],
		2,
		"https://kenningtonz.itch.io/hogue-is-god",
		"https://github.com/kenningtonz/HogueISgod",
		"You are Hogue, and Hogue is God. The world is coming to an end and houses are being caught on fire. Move your hand and repair the houses, but beware, the fires are quick, so you must be quicker.",
		"Global Game Jam 2020. Create a game in 48 hours relating to the theme 'Repair'.",
		[
			"I worked on this game as a 2 man team. We both shared the project manager and game design roles, but I focused on 3D Art. It was a super fun project to work on, where I could just lose myself in the low poly 3D modelling. Working with one other person meant we needed to have a pretty small scope, but of course it was a game jam and features got cut.",
		],
		"48 hours",
		new Date("2020-01-30")
	),
	new TimelineProject(
		"Hogue is Home",
		"Sole Developer",
		[Tools.CSharp, Tools.Unity],
		1,
		"https://kenningtonz.itch.io/hogue-is-home",
		"https://github.com/kenningtonz/Hogue-Is-Home",
		"Hogue has returned home. Travel the Bob Ross world as Flying Hogue to avoid the big Hogue heads. Be careful, hitting too many Hogue heads will cost you your life.",
		"Global Game Jam 2019. Create a game in 48 hours relating to the theme 'Home'.",
		[
			"This game was originally supposed to be a horror game where you play as a cat running away from an abusive mother. My group started out with 11 people, and with 5 hours left it was just me and had no game. So I learned unity from a YouTube tutorial and made an awful version of this game. I ended up remaking it into a playable game in December 2019 due to procrastinating from exams. I keep this game in my portfolio to show where I have come from and to share my experience. You are probably wondering who Hogue is. Dr Hogue was my favourite prof in University and let me meme him, so of course I did.",
		],
		"48 hours",
		new Date("2019-01-30")
	),
	new TimelineProject(
		"Hogue-Like",
		"Project Manager and 2D Artist",
		[Tools.CSharp, Tools.Unity, Tools.Krita, Tools.Aesprite],
		5,
		"https://kenningtonz.itch.io/hoguelike-hogue-versus-the-milk-king",
		"https://github.com/kenningtonz/HogueLike",
		"A roguelike featuring Dr. Hogue as he battles his way through Milk King destroying the bugs that used to infect his code that have found their way into the real world! Play as our valiant Hoguetagonist for as long as he can hold off the hordes of infestation!",
		"Game Jam 2021. Create a game in 48 hours relating to the theme 'You only got one'.",
		[
			"The group I worked with for this game consisted of 4 of my close friends and I. I took on the project manager role as well as a 2D artist, and helped with game design and programming. Being a project manager of a group of friends was a new experience for me and taught me a lot of new skills, such as being respectful and positive apposed to being bossy and mean. I had to take account of my friends feelings while also trying to keep the project on track.",
		],
		"48 hours",
		new Date("2021-10-16")
	),
	new TimelineProject(
		"Hogue's Bones",
		"Lead Developer",
		[Tools.CSharp, Tools.Unity, Tools.Blender, Tools.Krita],
		4,
		"https://kenningtonz.itch.io/hogues-bones",
		"https://github.com/kenningtonz/hoguesbones",
		"Travel across the world to find Hogue's bones. Enjoy the scenery and don't fret if the bones are in the ground. Go forth and search friend.",
		"Global Game Jam 2021. Create a game in 48 hours relating to the theme 'Lost & Found'.",
		[
			"I was originally going to be solo but found a few people I didn't know and decided to be a group instead. Since I was the most experienced of the group I ended up taking on a lead developer and project manager role. I took charge of the group and helped out where I could in programming and art. It was a super fun experience and we made a game we could be proud of.",
		],
		"48 hours",
		new Date("2021-01-16")
	),
	new TimelineProject(
		"NintenHogues",
		"Sole Developer",
		[Tools.CSharp, Tools.Unity, Tools.Procreate],
		1,
		"https://kenningtonz.itch.io/nintenhogues",
		"https://github.com/kenningtonz/nintenhogues",
		"Inspired by the hit game NintenDogs, come along and take care of Hogue. Feed him, heal him, and play with him, but be careful, he can be a handful. ",
		"Game Jam 2020. Create a game in 48 hours relating to the theme 'Lost & Found'.",
		[
			"I knew I was going to be busy for this game jam but I still wanted to make a game. So I came up with a simple idea regarding Hogue as usual. I took inspiration from NintenDogs and Petz Catz 2, the game I had as a kid. This game was easy to work on and in my opinion turned out well. I did all the art on my new at the time iPad in procreate. Working on this game was an overall fun and non stressful experience, exactly what I needed at the time.",
		],
		"48 hours",
		new Date("2020-10-16")
	),
	new TimelineProject(
		"Luna & Sol",
		"Sole Developer",
		[Tools.Bolt, Tools.Unity, Tools.Blender, Tools.Procreate],
		4,
		"",
		"https://github.com/kenningtonz/Luna-and-Sol",
		"Luna & Sol is a game about two lovers who can never meet. Such is the beauty of the Sun and the Moon. Despite being unable to be together, they want to help each other however they can. Help them get each other through several perilous rooms using levers, buttons, and moving platforms. Help them avoid the darkness and light while collecting gems and making their way to the goal.",
		"Create a game using Bolt, without any C# or C++.",
		[
			"My team members focused on the level design, while I did the 2D and 3D art, as well as all of the programming. The game is inspired by fireboy and watergirl. Players control 2 characters and must get them to the corresponding door to advance to the next level. Moving walls and fans are controlled by levers and buttons that the player must interact with. Players can collect gems but only the corresponding colour to the player, as well as entering liquid that corresponds to the player's colour. The game tracks the time, gems collected, and the number of deaths. Scores can be saved and viewed, as well as cleared.",
		],
		"3 Weeks",
		new Date("2021-12-16")
	),
	new TimelineProject(
		"Maze",
		"Sole Developer",
		[Tools.Cplusplus, Tools.Unity, Tools.Blender, Tools.CSharp],
		1,
		"https://kenningtonz.itch.io/maze-game",
		"https://github.com/kenningtonz/Maze-Game",
		"Converse through the maze to find the checkpoints and eventually escape. Be careful though, walls and floors move and if you aren't careful you may fall to your death.",
		"Using Unity, create a simple maze including moving walls, shifting platforms and a death plane. The game should track the player's time it takes to complete the maze at different checkpoints, using a DLL(Dynamic Link- Library programmed in C++.",
		[
			"Maze game came to be from a Game Engines midterm in October 2020. I worked on all the assets and programming myself. We were given creative freedom, so I used that to my advantage. I had a lot of fun working on this project. The programming side really challenged me, while the art side a nice break. I'm proud of what I have accomplished and how I have improved since working on this game.​",
		],
		"1 Week",
		new Date("2020-10-16")
	),
	new TimelineProject(
		"Cat Collecter",
		"Sole Developer",
		[Tools.JavaScript, Tools.HTML, Tools.CSS, Tools.Aesprite],
		1,
		"https://kenningtonz.itch.io/cat-collecter",
		"https://github.com/kenningtonz/Cat-Collecter",
		"You are now the cat collecter! How many cats can you collect in 10 turns? Yes I spelled collector wrong, of course it was on purpose.",
		"To create a Javascript game with visuals, given a GitHub repo base code https://github.com/Plasnid/durham_prospector.",
		[
			"I found the coding part of the project quite easy, which allowed me to focus more on the visuals. To make it more interesting, I decided to use a cat sprite that I had created a few years ago and made it the main feature of the game, where the objective was to collect cats. I created all the game assets, including the audio, from scratch.​",
		],
		"1 Week",
		new Date("2023-04-16")
	),
	new TimelineProject(
		"Mindful Ink",
		"Sole Developer",
		[
			Tools.PHP,
			Tools.Wordpress,
			Tools.WooCommerce,
			Tools.Penpot,
			Tools.Illustrator,
			Tools.Git,
			Tools.CSS,
		],
		1,
		"https://mindfulink.kennedyadams.ca",
		"https://github.com/kenningtonz/mindful",
		"Mindful Ink is a safe space to grow in spiritual wellness, promoting journaling, self reflection, and creating a community that embraces mindfulness. Mindful Ink sells visually appealing digital printable products including planner pages, mindfulness skills, journaling pages.",
		"Create a Wordpress eCommerce site with a custom theme.",
		[
			"Design",
			"Developed Logo and Brand using Adobe Illustrator. Designed page layouts and digital products using Penpot.app.",
			"Back-end",
			"Created custom theme and plugin. ",
			"Front-end",
			"Developed the site using Wordpress and PHP. Implemented WooCommerce for the store.",
		],
		"3 Months",
		new Date("2024-01-16")
	),
	new TimelineProject(
		"Founder's Drive",
		"Lead Developer",
		[Tools.Wordpress, Tools.CSS, Tools.PHP],
		7,
		"https://foundersdrive.ca",
		"",
		"Founder's Drive is a platform for entrepreneurs to find resources and connect with other entrepreneurs. The site is built using Wordpress",
		"Create a Wordpress site for a start-up entrepreneurship podcast.",
		[""],
		"8 Months",
		new Date("2023-01-16")
	),

	new TimelineProject(
		"Comfort Corner",
		"Sole Developer",
		[
			Tools.CSS,
			Tools.JavaScript,
			Tools.React,
			Tools.Threejs,
			Tools.FramerMotion,
			Tools.ReactThreeFiber,
			Tools.FramerMotion,
			Tools.Zustand,
			Tools.ReactThreeDrei,
			Tools.Tailwind,
			Tools.Git,
			Tools.Blender,
			Tools.Illustrator,
		],
		1,
		"https://comfortcorner.kennedyadams.ca",
		"https://github.com/kenningtonz/comfort-corner",
		"Comfort Corner is a web-based game where players create and customize their own virtual sanctuary, designed to evoke feelings of safety, comfort, and connection with their physical surroundings. With low-poly 3D graphics and immersive audio, the game offers a peaceful environment filled with customizable elements, from furniture and decorations to natural landscapes and ambient sounds. ",
		"To design and develop a web-based game that uses local storage to save user data.",
		[
			"Ideation/Design",
			"Found low poly assets, edited them in blender. Created base island model in blender and arranged models to create different environments. Created the base house model. Designed the UI, colour scheme, and logo.",
			"Technical Development",
			"Researched options for react libraries. Created the base grid system and loading in models. Integrated ui controls to manipulate the objects. created the environment options",
			"Future Development",
			"Add more environments. Make the models myself. Add a share to social media feature. Add a gallary showcase. Undo function",
		],
		"2 Weeks",
		new Date("2024-02-16")
	),
];
