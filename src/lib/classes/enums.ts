export enum Tools {
	Tailwind = "Tailwind",
	Firebase = "Firebase",
	Node = "Node",
	React = "React",
	NextJS = "NextJS",
	TypeScript = "TypeScript",
	JavaScript = "JavaScript",
	HTML = "HTML",
	CSS = "CSS",
	SASS = "SASS",
	Git = "Git",
	Flutter = "Flutter",
	PHP = "PHP",
	MySQL = "MySQL",
	Wordpress = "Wordpress",
	PrimeReactUI = "PrimeReact UI",
	ReactRouter = "React Router",
	PreactSignals = "Preact Signals",
	Illustrator = "Illustrator",
	WooCommerce = "WooCommerce",
	Penpot = "Penpot",
	Sketch = "Sketch",
	Blender = "Blender",
	Threejs = "Three.js",
	Zustand = "Zustand",
	ReactThreeFiber = "React Three Fiber",
	ReactThreeDrei = "React Three Drei",
	FramerMotion = "Framer Motion",
	CSharp = "C#",
	Unity = "Unity",
	Procreate = "Procreate",
	Krita = "Krita",
	Bolt = "Bolt",
	Cplusplus = "C++",
	Aesprite = "Aesprite",
	Vercel = "Vercel",
	phpMyAdmin = "phpMyAdmin",
	ReactHookForm = "React Hook Form",
	Expo = "Expo",
	ReactNative = "React Native",
	GoogleCloudServices = "Google Cloud Services",
}

export const ToolsCat = {
	languages: [
		Tools.TypeScript,
		Tools.JavaScript,
		Tools.HTML,
		Tools.CSS,
		Tools.SASS,
		Tools.PHP,
		Tools.CSharp,
		Tools.Cplusplus,
		Tools.Bolt,
	],
	frameworks: [
		Tools.React,
		Tools.NextJS,
		Tools.Node,
		Tools.Flutter,
		Tools.Unity,
		Tools.Expo,
		Tools.ReactNative,
	],
	libraries: [
		Tools.ReactRouter,
		Tools.PreactSignals,
		Tools.PrimeReactUI,
		Tools.Tailwind,
		Tools.Zustand,
		Tools.ReactThreeFiber,
		Tools.ReactThreeDrei,
		Tools.FramerMotion,
		Tools.Threejs,
		Tools.ReactHookForm,
	],
	databases: [
		Tools.Firebase,
		Tools.MySQL,
		Tools.phpMyAdmin,
		Tools.GoogleCloudServices,
	],
	tools: [Tools.Git, Tools.Wordpress, Tools.WooCommerce, Tools.Vercel],
	software: [
		Tools.Illustrator,
		Tools.Penpot,
		Tools.Sketch,
		Tools.Blender,
		Tools.Procreate,
		Tools.Krita,
		Tools.Aesprite,
	],

	getCategory(tool: Tools) {
		if (this.languages.includes(tool)) {
			return "languages";
		} else if (this.frameworks.includes(tool)) {
			return "frameworks";
		} else if (this.databases.includes(tool)) {
			return "databases";
		} else if (this.tools.includes(tool)) {
			return "tools";
		} else if (this.software.includes(tool)) {
			return "software";
		}
		return "other";
	},
	sortTools(tools: Tools[]) {
		let sorted: { [key: string]: Tools[] } = {
			languages: [],
			frameworks: [],
			databases: [],
			tools: [],
			software: [],
			other: [],
		};
		tools.forEach((tool) => {
			let category = this.getCategory(tool);
			sorted[category].push(tool);
		});
		let sortedArray: Tools[] = [];
		for (let key in sorted) {
			sortedArray.push(...sorted[key]);
		}
		return sortedArray;
	},

	getCategoryColor(tool: Tools) {
		let category = this.getCategory(tool);
		switch (category) {
			case "languages":
				return "blue";
			case "frameworks":
				return "green";
			case "databases":
				return "yellow";
			case "tools":
				return "red";
			case "software":
				return "purple";
			default:
				return "orange";
		}
	},
};

export enum ProjectE {
	FounderDrive = "foundersdrive",
	Workout = "workout",
	GreenLife = "greenlife",
	MindfulInk = "mindfulink",
	RadiantRealms = "radiantrealms",
	BuddyLink = "buddylink",
	ComfortCorner = "comfortcorner",
}

export enum WellnessE {
	Social = "Social",
	Environmental = "Environmental",
	Physical = "Physical",
	Spiritual = "Spiritual",
	Occupational = "Occupational",
	Mental = "Mental",
	Intellectual = "Intellectual",
}
