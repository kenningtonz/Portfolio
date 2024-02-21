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
}

export const ToolsCat = {
	languages: [
		Tools.TypeScript,
		Tools.JavaScript,
		Tools.HTML,
		Tools.CSS,
		Tools.SASS,
		Tools.PHP,
	],
	frameworks: [Tools.React, Tools.NextJS, Tools.Node, Tools.Flutter],
	libraries: [
		Tools.ReactRouter,
		Tools.PreactSignals,
		Tools.PrimeReactUI,
		Tools.Tailwind,
	],
	databases: [Tools.Firebase, Tools.MySQL],
	tools: [Tools.Git, Tools.Wordpress, Tools.WooCommerce],
	software: [Tools.Illustrator, Tools.Penpot, Tools.Sketch],

	getCategory(tool: Tools) {
		if (this.languages.includes(tool)) {
			return "languages";
		} else if (this.frameworks.includes(tool)) {
			return "frameworks";
		} else if (this.databases.includes(tool)) {
			return "databases";
		} else if (this.tools.includes(tool)) {
			return "tools";
		}
		return "other";
	},
	sortTools(tools: Tools[]) {
		let sorted: { [key: string]: Tools[] } = {
			languages: [],
			frameworks: [],
			databases: [],
			tools: [],
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
				return "bg-blue-500";
			case "frameworks":
				return "bg-green-500";
			case "databases":
				return "bg-yellow-500";
			case "tools":
				return "bg-red-500";
			default:
				return "bg-purple-500";
		}
	},
};

export enum ProjectE {
	FounderDrive = "foundersdrive",
	Workout = "workout",
	GreenLife = "greenlife",
	MindfulInk = "mindfulink",
	RadiantRealms = "radiantrealms",
	HobbyBuddy = "hobbybuddy",
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
