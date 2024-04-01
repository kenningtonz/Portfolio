import { WellnessE, ProjectE, Tools } from "./enums";

export class Project {
	slug: string;
	name: string;
	logo: string;
	category: WellnessE;
	enum: ProjectE;
	info: ProjectInfo;
	oneLiner: string;
	constructor(
		name: string,
		logo: string,
		slug: string,
		category: WellnessE,
		enumValue: ProjectE,
		info: ProjectInfo,
		oneLiner: string
	) {
		this.name = name;
		this.logo = logo;
		this.slug = slug;
		this.category = category;
		this.enum = enumValue;
		this.info = info;
		this.oneLiner = oneLiner;
	}
}

export class ProjectInfo {
	slug: string;
	description: string;
	date: string;
	challenge: string;
	process: { name: string; img: string; steps: string[] }[];
	link?: string;
	githubLink?: string;
	image: string;
	tools: Tools[];
	project: ProjectE;

	constructor(
		description: string,
		tools: Tools[],
		challenge: string,
		process: { name: string; img: string; steps: string[] }[],
		date: string,
		image: string,
		slug: string,
		project: ProjectE,
		githubLink?: string,
		link?: string
	) {
		this.description = description;
		this.tools = tools;
		this.challenge = challenge;
		this.process = process;
		this.date = date;
		this.link = link;
		this.image = image;
		this.slug = slug;
		this.project = project;
		this.githubLink = githubLink;
	}
}

let mindfulInkInfo = new ProjectInfo(
	"Mindful Ink is a safe space to grow in spiritual wellness, promoting journaling, self reflection, and creating a community that embraces mindfulness. Mindful Ink sells visually appealing digital printable products including planner pages, mindfulness skills, journaling pages.",
	[
		Tools.PHP,
		Tools.Wordpress,
		Tools.WooCommerce,
		Tools.Penpot,
		Tools.Illustrator,
		Tools.Git,
		Tools.CSS,
	],
	"Create a Wordpress eCommerce site with a custom theme.",
	[
		{
			name: "Design",
			img: "./icons/pen.svg",
			steps: [
				"Developed logo, brand, and graphics using Adobe Illustrator.",
				"Designed page layouts and digital products using Penpot.app.",
				"Recorded audio, took images, and created colouring pages for the activity portion.",
				"Generated the copy for the site using AI",
			],
		},
		{
			name: " Back-end",
			img: "./icons/database.svg",
			steps: [
				"Created custom theme and plugin for core block styles.",
				"Created a plugin for a custom post type and taxonomies.",
			],
		},
		{
			name: "Front-end",
			img: "./icons/object-group.svg",
			steps: [
				"Using the custom block styles, created the pages for the site.",
				"Implemented WooCommerce for the store.",
				"Styled using CSS for a polished appearance.",
			],
		},
		{
			name: "Future Development",
			img: "./icons/code.svg",
			steps: [
				"Develop more products.",
				"Remake the website in a different CMS.",
				"Add analytics and a cookie policy.",
			],
		},
	],
	"January 2024 - April 2024",
	"../images/mindfulink.png",
	"mindfulInk",
	ProjectE.MindfulInk,
	"https://github.com/kenningtonz/mindful",
	"https://mindfulink.kennedyadams.ca"
);
let greenLifeInfo = new ProjectInfo(
	"GreenLife Grocer is an online grocery store for healthy living. The site is built using NextJS and MySQL The design and branding is original. The images and content are from a provided database.",
	[
		Tools.PHP,
		Tools.MySQL,
		Tools.Illustrator,
		Tools.Git,
		Tools.JavaScript,
		Tools.CSS,
		Tools.NextJS,
		Tools.Sketch,
		Tools.Tailwind,
		Tools.Vercel,
		Tools.phpMyAdmin,
		Tools.React,
		Tools.ReactHookForm,
	],
	"To design and develop an online grocery store using MySQL.",
	[
		{
			name: "Design",
			img: "./icons/pen.svg",
			steps: [
				"Developed Logo and Brand using Adobe Illustrator.",
				"Designed page layouts using Sketch.",
			],
		},
		{
			name: "Front-End",
			img: "./icons/object-group.svg",
			steps: [
				"Structured the project in NextJS",
				"Implemented essential functionalities such as user system, departments, cart, and checkout",
				"Styled using Tailwind CSS for a polished appearance.",
			],
		},
		{
			name: "Back-End",
			img: "./icons/database.svg",
			steps: [
				"Restructured the given database in phpMyAdmin.",
				"Created PHP services to interact with the database.",
				"Worked on transferring data to and from the PHP services.",
				"Using cookies to store user session and cart data.",
				"Deployed the site using Vercel. Hosting the PHP services on my hosting.",
			],
		},
		{
			name: "Future Development",
			img: "./icons/code.svg",
			steps: ["Add a recipes feature.", "Convert PHP services to Node.js."],
		},
	],
	"January 2024 - April 2024",
	"../images/greenlifegrocer.png",
	"greenlife",
	ProjectE.GreenLife,
	"https://github.com/kenningtonz/GreenLifeGrocer",
	"http://greenlife.kennedyadams.ca"
);
let radiantRealmsInfo = new ProjectInfo(
	"Radiant Realms is a mental health services booking website built using React and Firebase. The logo and branding is original. The images were AI generated.",
	[
		Tools.React,
		Tools.Firebase,
		Tools.Node,
		Tools.PrimeReactUI,
		Tools.JavaScript,
		Tools.HTML,
		Tools.CSS,
		Tools.SASS,
		Tools.PreactSignals,
		Tools.ReactRouter,
		Tools.Illustrator,
	],
	"To design and develop a react and react-router site to handle business operations for an online company.",
	[
		{
			name: "Design",
			img: "./icons/pen.svg",
			steps: [
				"Flow charted the website's pages.",
				"Wire-framed each page's layout.",
				"Generated Images using Adobe Firefly.",
				"Did research on related sites.",
				"Gathered the content for the site using AI and other resources.",
			],
		},
		{
			name: "Back-End",
			img: "./icons/database.svg",
			steps: [
				"Created the database using Firestore.",
				"Worked on transferring data to and from the database.",
			],
		},

		{
			name: "Front-End",
			img: "./icons/object-group.svg",
			steps: [
				"Structured the project in React with React Router",
				"implemented essential functionalities such as user system, services, cart, and checkout.",
				"Displayed services from the database. ",
				"Styled using SASS for a polished appearance.",
			],
		},

		{
			name: "Returning",
			img: "./icons/code.svg",
			steps: [
				"Enhanced functionality with service filters and booking features.",
				"Transitioned to Firebase Auth for the login system.",
				"Reorganized the project structure.",
				" Refreshed the site's design including a new logo created in Illustrator.",
			],
		},
	],
	"November 2023 - February 2024",

	"../images/radiantrealms.png",
	"radiantrealms",
	ProjectE.RadiantRealms,
	"https://github.com/kenningtonz/Mental-Health-Services",
	"https://radiantrealms.kennedyadams.ca"
);
let comfortCornerInfo = new ProjectInfo(
	"Comfort Corner is a web-based game where players create and customize their own virtual sanctuary, designed to evoke feelings of safety, comfort, and connection with their physical surroundings. With low-poly 3D graphics and immersive audio, the game offers a peaceful environment filled with customizable elements, from furniture and decorations to natural landscapes and ambient sounds. ",
	[
		Tools.CSS,
		Tools.JavaScript,
		Tools.React,
		Tools.Threejs,
		Tools.FramerMotion,
		Tools.ReactThreeFiber,
		Tools.Zustand,
		Tools.ReactThreeDrei,
		Tools.Tailwind,
		Tools.Git,
		Tools.Blender,
		Tools.Illustrator,
	],
	"To design and develop a web-based game that uses local storage to save user data.",
	[
		{
			name: "Ideation & Design",
			img: "./icons/pen.svg",
			steps: [
				"Found low poly assets, edited them in blender.",
				" Created base island model in blender and arranged models to create different environments. ",
				"Created the base house model.",
				" Designed the UI, colour scheme, and logo.",
			],
		},
		{
			name: "Technical Development",
			img: "./icons/object-group.svg",
			steps: [
				"Researched options for react libraries. ",
				"Created the base grid system and loading in models.",
				" Integrated ui controls to manipulate the objects. ",
				"Created the environment options",
			],
		},
		{
			name: "Future Development",
			img: "./icons/code.svg",
			steps: [
				"Add more environments. ",
				"Make the models myself. ",
				"Add a share to social media feature. ",
				"Add a gallery showcase. ",
				"Add an undo function",
			],
		},
	],
	"February/March 2024",
	"../images/comfortcorner.png",
	"comfortcorner",
	ProjectE.ComfortCorner,
	"https://github.com/kenningtonz/comfort-corner",
	"https://comfortcorner.kennedyadams.ca"
);

let buddyLinkInfo = new ProjectInfo(
	"BuddyLink is a web application designed to enhance and maintain friendships, allowing users to easily catalog their connections and receive timely reminders for staying in touch, fostering stronger and more meaningful relationships.",
	[Tools.React, Tools.JavaScript],
	"Design and develop a personal project relating to Social Wellness.",
	[
		{
			name: "Current",
			img: "./icons/code.svg",
			steps: ["Planning the project."],
		},
	],
	"March 2024",
	"",
	"buddylink",
	ProjectE.BuddyLink,
	""
);

let foundersDriveInfo = new ProjectInfo(
	"Founder's Drive is a platform for entrepreneurs to find resources and connect with other entrepreneurs. The site is built using Wordpress.",
	[Tools.Wordpress, Tools.CSS, Tools.PHP],
	"Create a Wordpress site for a start up entrepreneur podcast.",
	[
		{
			name: "Design",
			img: "./icons/pen.svg",
			steps: ["Researched different Wordpress themes, landing on Astra."],
		},
		{
			name: "Back-End",
			img: "./icons/database.svg",
			steps: ["Created a custom post type for the podcast."],
		},
		{
			name: "Front-End",
			img: "./icons/object-group.svg",
			steps: ["Used provided designs to create the site."],
		},
		{
			name: "Testing",
			img: "./icons/bug.svg",
			steps: [
				"Tested the site for bugs and issues.",
				"Tested for responsiveness on different devices and browsers.",
				"Focused on accessibility, and edited theme files to ensure WCAG 2.1 AA compliance.",
			],
		},
	],
	"January 2023 - August 2023",
	"/images/foundersdrive.png",
	"foundersdrive",
	ProjectE.FounderDrive,
	"https://foundersdrive.ca"
);

let foundersDrive = new Project(
	"Founder's Drive",
	"/logos/foundersdrive.png",
	"foundersdrive",
	WellnessE.Occupational,
	ProjectE.FounderDrive,
	foundersDriveInfo,
	"A platform for entrepreneurs to find resources and connect with other entrepreneurs."
);
// let workout = new Project("Workout", "/logo.png", "workout", WellnessE.Physical, ProjectE.Workout);
let greenLife = new Project(
	"GreenLife Grocer",
	"/logos/greenlife.png",
	"greenlife",
	WellnessE.Physical,
	ProjectE.GreenLife,
	greenLifeInfo,
	"An online grocery store for healthy living."
);
let mindfulInk = new Project(
	"Mindful Ink",
	"/logos/mindfulInk.png",
	"mindfulink",
	WellnessE.Spiritual,
	ProjectE.MindfulInk,
	mindfulInkInfo,
	"An online store for spiritual wellness focused digital printables."
);
let radiantRealms = new Project(
	"Radiant Realms",
	"/logos/radiantrealms.png",
	"radiantrealms",
	WellnessE.Mental,
	ProjectE.RadiantRealms,
	radiantRealmsInfo,
	"A mental health services booking website."
);
let buddyLink = new Project(
	"Buddy Link",
	"/logo.png",
	"buddylink",
	WellnessE.Social,
	ProjectE.BuddyLink,
	buddyLinkInfo,
	"A web application designed to friendships alive, by sending timely reminders for staying connected."
);
let comfortCorner = new Project(
	"Comfort Corner",
	"/logos/comfortcorner.png",
	"comfortcorner",
	WellnessE.Environmental,
	ProjectE.ComfortCorner,
	comfortCornerInfo,
	"A web-based game where players create and customize their own virtual sanctuary."
);

let projects = [
	foundersDrive,
	greenLife,
	mindfulInk,
	radiantRealms,
	buddyLink,
	comfortCorner,
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}

export function getProjectByEnum(enumValue: ProjectE) {
	return projects.find((project) => project.enum === enumValue);
}

export function getProjectsByCategory(category: WellnessE) {
	return projects.filter((project) => project.category === category);
}

export function getProjects() {
	return projects;
}
