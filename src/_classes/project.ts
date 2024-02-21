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
	process: string[];
	link?: string;
	githubLink?: string;
	image: string;
	tools: Tools[];
	project: ProjectE;

	constructor(
		description: string,
		tools: Tools[],
		challenge: string,
		process: string[],
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
		"Design",
		"Developed Logo and Brand using Adobe Illustrator. Designed page layouts and digital products using Penpot.app.",
		"Back-end",
		"Created custom theme and plugin. ",
		"Front-end",
		"Developed the site using Wordpress and PHP. Implemented WooCommerce for the store.",
	],
	"January 2024 - April 2024",
	"../images/mindfulink.png",
	"mindfulInk",
	ProjectE.MindfulInk,
	"https://github.com/kenningtonz/mindful"
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
	],
	"To design and develop an online grocery store using MySQL",
	[
		"Design",
		"Developed Logo and Brand using Adobe Illustrator. Designed page layouts using Sketch.",
		"Front-End",
		"Structured the project in NextJS, implemented essential functionalities such as user system, services, cart, and checkout, displayed services from the database, and styled using CSS for a polished appearance.",
		"Back-End",
		"Established and managed the database, handling data the transfer processes.",
	],
	"January 2024 - April 2024",
	"",
	"greenlife",
	ProjectE.GreenLife,
	"https://github.com/kenningtonz/GreenLifeGrocer"
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
		"Design",
		"Developed website pages through flowcharts, wireframes, Adobe Firefly images, and research.",
		"Back-End",
		"Established and managed the database, handling data the transfer processes.",
		"Front-End",
		"Structured the project in React with React Router, implemented essential functionalities such as user system, services, cart, and checkout, displayed services from the database, and styled using SASS for a polished appearance.",
		"Returning",
		" Enhanced functionality with service filters and booking features, transitioned to Firebase Auth for the login system, reorganized the project structure, and refreshed the site's design including a new logo created in Illustrator.",
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
	[Tools.CSS, Tools.JavaScript, Tools.React],
	"To design and develop a web-based game that uses local storage to save user data.",
	[""],
	"February 2024",
	"",
	"comfortcorner",
	ProjectE.ComfortCorner
);

let hobbyBuddyInfo = new ProjectInfo(
	"Hobby Buddy is a web application designed to connect individuals with shared interests and hobbies, facilitating meaningful social interactions and fostering new friendships. Users can create profiles, search for like-minded hobby buddies, and connect with others who share their passions.",
	[Tools.React, Tools.JavaScript],
	"",
	[""],
	"March 2024",
	"",
	"hobbybuddy",
	ProjectE.HobbyBuddy,
	""
);

let foundersDriveInfo = new ProjectInfo(
	"Founder's Drive is a platform for entrepreneurs to find resources and connect with other entrepreneurs. The site is built using Wordpress",
	[Tools.Wordpress, Tools.CSS, Tools.PHP],
	"",
	["Design"],
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
let hobbyBuddy = new Project(
	"Hobby Buddy",
	"/logo.png",
	"hobbybuddy",
	WellnessE.Social,
	ProjectE.HobbyBuddy,
	hobbyBuddyInfo,
	"A web application designed to connect individuals with shared interests and hobbies."
);
let comfortCorner = new Project(
	"Comfort Corner",
	"/logo.png",
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
	hobbyBuddy,
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
