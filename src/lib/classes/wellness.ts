import {
	faHeartPulse,
	faBrain,
	faBriefcase,
	faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { WellnessE, ProjectE } from "./enums";

class WellnessCategory {
	color: WellnessColor;
	name: string;
	description: string;
	icon: any;
	projects: ProjectE[];
	enum: WellnessE;
	constructor(
		name: string,
		icon: any,
		projects: ProjectE[],
		wellnessColor: WellnessColor,
		enumValue: WellnessE,
		description: string
	) {
		this.name = name;
		this.icon = icon;
		this.projects = projects;
		this.color = wellnessColor;
		this.enum = enumValue;
		this.description = description;
	}
}

class WellnessColor {
	id: number;
	rotate: number;
	name: string;
	arrowPath: string;
	iconPath: string;
	backgroundPath: string;
	constructor(
		id: number,
		rotate: number,
		name: string,
		arrowPath: string,
		iconPath: string,
		backgroundPath: string
	) {
		this.id = id;
		this.rotate = rotate;
		this.name = name;
		this.arrowPath = arrowPath;
		this.iconPath = iconPath;
		this.backgroundPath = backgroundPath;
	}
}

let green = new WellnessColor(
	0,
	0,
	"green",
	"m 2 0 l 17.32 10.01 l 0.01 -0.01 c 0.68 -1.18 1.25 -2.44 1.68 -3.75 h 4.5 c 0.83 0 1.5 -0.67 1.5 -1.5 v -9.5 c 0 -0.83 -0.67 -1.5 -1.5 -1.5 h -4.5 c -0.43 -1.31 -0.99 -2.56 -1.68 -3.74 v -0.01 s -17.32 10.01 -17.32 10.01 z m 0 0 l 17.32 10.01 c 0.68 -1.18 1.25 -2.44 1.68 -3.75 h 4.5 c 0.83 0 1.5 -0.67 1.5 -1.5 v -9.5 c 0 -0.83 -0.67 -1.5 -1.5 -1.5 h -4.5 c -0.43 -1.31 -0.99 -2.56 -1.68 -3.74 v 0 s -17.32 10.01 -17.32 10.01 z",
	"m 20.55 -2.755 c 0 0.69 -0.565 1.25 -1.26 1.25 s -1.26 -0.56 -1.26 -1.25 s 0.565 -1.25 1.26 -1.25 s 1.26 0.56 1.26 1.25 z m 0 5.75 c 0 0.69 -0.565 1.25 -1.26 1.25 s -1.26 -0.56 -1.26 -1.25 s 0.565 -1.25 1.26 -1.25 s 1.26 0.56 1.26 1.25 z m -4.705 -8 c 0.93 0 1.68 0.745 1.68 1.665 v 0.665 c 0 0.25 -0.055 0.485 -0.155 0.695 c -0.115 -0.02 -0.23 -0.03 -0.35 -0.03 c -0.6 0 -1.145 0.265 -1.515 0.675 v -3.345 c 0 -0.185 0.15 -0.335 0.335 -0.335 z m -0.34 6.335 v -0.01 c 0.37 0.415 0.91 0.675 1.515 0.675 c 0.12 0 0.235 -0.01 0.35 -0.03 c 0.1 0.215 0.155 0.45 0.155 0.695 v 0.665 c 0 0.92 -0.755 1.665 -1.68 1.665 c -0.185 0 -0.335 -0.15 -0.335 -0.335 v -3.335 z m 1.515 -2.835 c 0.835 0 1.515 0.67 1.515 1.5 s -0.675 1.5 -1.515 1.5 s -1.515 -0.67 -1.515 -1.5 s 0.675 -1.5 1.515 -1.5 h 0 z m -4.12 -1.5 c 1.16 0 2.1 0.935 2.1 2.085 v 1.835 c 0 1.15 -0.94 2.085 -2.1 2.085 c -0.23 0 -0.42 -0.185 -0.42 -0.415 v -5.165 c 0 -0.23 0.19 -0.415 0.42 -0.415 z",
	"m0 0 432.5 250 171.5-250-171.5-250z"
);

let blue = new WellnessColor(
	1,
	60,
	"blue",
	"m 1 1.73 l -0.01 20 l 0.01 0 c 1.36 -0 2.74 -0.14 4.09 -0.42 l 2.25 3.9 c 0.41 0.72 1.33 0.96 2.05 0.55 l 8.23 -4.75 c 0.72 -0.41 0.96 -1.33 0.55 -2.05 l -2.25 -3.9 c 0.92 -1.03 1.72 -2.14 2.4 -3.32 l 0.01 -0.01 s -17.33 -9.99 -17.33 -9.99 z m 0 0 l -0.01 20 c 1.36 -0 2.74 -0.14 4.09 -0.42 l 2.25 3.9 c 0.41 0.72 1.33 0.96 2.05 0.55 l 8.23 -4.75 c 0.72 -0.41 0.96 -1.33 0.55 -2.05 l -2.25 -3.9 c 0.92 -1.03 1.72 -2.14 2.4 -3.32 l 0 0 s -17.33 -9.99 -17.33 -9.99 z",
	"m 9.81 8.48 c 0.1 0.03 0.17 0.13 0.19 0.23 l 0.4 2.1 l 2.11 0.39 c 0.1 0.02 0.19 0.09 0.24 0.19 c 0.04 0.11 0.03 0.21 -0.03 0.29 l -1.21 1.76 l 1.22 1.77 c 0.06 0.09 0.07 0.2 0.03 0.29 c -0.03 0.1 -0.13 0.17 -0.23 0.19 l -2.1 0.4 l -0.39 2.11 c -0.02 0.1 -0.09 0.19 -0.19 0.24 c -0.11 0.04 -0.21 0.03 -0.29 -0.03 l -1.76 -1.21 l -1.77 1.22 c -0.09 0.06 -0.2 0.07 -0.29 0.03 c -0.1 -0.03 -0.17 -0.13 -0.19 -0.23 l -0.4 -2.1 l -2.11 -0.39 c -0.1 -0.02 -0.19 -0.09 -0.24 -0.19 c -0.04 -0.11 -0.03 -0.21 0.03 -0.29 l 1.21 -1.76 l -1.22 -1.77 c -0.06 -0.09 -0.07 -0.2 -0.03 -0.29 c 0.03 -0.1 0.13 -0.17 0.23 -0.19 l 2.1 -0.4 l 0.39 -2.11 c 0.02 -0.1 0.09 -0.19 0.19 -0.24 c 0.11 -0.04 0.21 -0.03 0.29 0.03 l 1.76 1.21 l 1.77 -1.22 c 0.09 -0.06 0.2 -0.07 0.29 -0.03 z m -3.94 4.98 c 0 -1.04 0.84 -1.87 1.87 -1.88 s 1.87 0.84 1.88 1.87 s -0.84 1.87 -1.87 1.88 s -1.87 -0.84 -1.88 -1.87 l 0 0 z m 4.38 0 c -0 -1.38 -1.12 -2.5 -2.51 -2.5 s -2.5 1.12 -2.5 2.51 s 1.12 2.5 2.51 2.5 s 2.5 -1.12 2.5 -2.51 l 0 0 z",
	"m0 0-.2564 499.556 302.2563 23.5234 130.7563-273.5233z"
);

let purple = new WellnessColor(
	2,
	120,
	"purple",
	"m -1 1.73 l -17.33 9.99 l 0.01 0.01 c 0.68 1.18 1.49 2.3 2.41 3.33 l -2.25 3.9 c -0.42 0.72 -0.17 1.63 0.55 2.05 l 8.23 4.75 c 0.72 0.42 1.63 0.17 2.05 -0.55 l 2.25 -3.9 c 1.35 0.28 2.71 0.42 4.08 0.42 l 0.01 0 s -0.01 -20 -0.01 -20 z m 0 0 l -17.33 9.99 c 0.68 1.18 1.49 2.3 2.41 3.33 l -2.25 3.9 c -0.42 0.72 -0.17 1.63 0.55 2.05 l 8.23 4.75 c 0.72 0.42 1.63 0.17 2.05 -0.55 l 2.25 -3.9 c 1.35 0.28 2.71 0.42 4.08 0.42 l 0 0 s -0.01 -20 -0.01 -20 z",
	"m -14.42 14.7 c 1.31 -1.8 3.74 -2.31 5.65 -1.27 c -0.5 0.93 -0.69 1.97 -0.58 2.96 c -1.4 0.64 -3.09 0.53 -4.42 -0.45 l -0.51 -0.37 c -0.28 -0.2 -0.34 -0.6 -0.14 -0.88 z m 8.86 4.92 c -0.2 0.28 -0.6 0.34 -0.88 0.14 l -0.51 -0.37 c -1.96 -1.43 -2.39 -4.18 -0.96 -6.15 l 0.37 -0.51 l 1.85 -2.54 c 0.2 -0.28 0.6 -0.34 0.88 -0.14 s 0.34 0.6 0.14 0.88 l -1.85 2.54 c 1.96 1.43 2.39 4.18 0.96 6.15 z",
	"m0 0-432.7563 249.556 130.7563 273.5233 302.2563-23.5234z"
);

let red = new WellnessColor(
	3,
	180,
	"red",
	"m -2 0 l -17.32 -10.01 l -0 0.01 c -0.68 1.18 -1.25 2.44 -1.68 3.75 l -4.5 0 c -0.83 -0 -1.5 0.67 -1.5 1.5 l 0 9.5 c -0 0.83 0.67 1.5 1.5 1.5 l 4.5 -0 c 0.43 1.31 0.99 2.56 1.68 3.74 l 0.01 0.01 s 17.32 -10.01 17.32 -10.01 z m 0 0 l -17.32 -10.01 c -0.68 1.18 -1.25 2.44 -1.68 3.75 l -4.5 0 c -0.83 -0 -1.5 0.67 -1.5 1.5 l 0 9.5 c -0 0.83 0.67 1.5 1.5 1.5 l 4.5 -0 c 0.43 1.31 0.99 2.56 1.68 3.74 l 0 0 s 17.32 -10.01 17.32 -10.01 z",
	"m -19.91 1.41 l 0.02 -2.81 c -0 -0.09 0.07 -0.16 0.16 -0.16 l 0.79 -0 s -0.02 3.12 -0.02 3.12 l -0.79 0 c -0.09 -0 -0.16 -0.07 -0.16 -0.16 z m 0.15 1.09 l 0.79 -0 s -0.01 1.25 -0.01 1.25 c 0 0.69 0.56 1.25 1.25 1.25 l 1.89 0.01 l 0.02 -3.74 l 0.01 -2.49 l 0.02 -3.74 l -1.89 -0.01 c -0.69 0 -1.26 0.55 -1.26 1.24 l -0.01 1.25 l -0.79 0 c -0.61 -0.01 -1.1 0.48 -1.11 1.08 l -0.02 2.81 c 0 0.6 0.49 1.09 1.1 1.1 z m 4.61 -7.44 l -0.02 3.74 l 0.63 -0 c 0.35 0 0.63 0.28 0.63 0.63 l -0.01 1.25 c 0 0.34 -0.28 0.62 -0.63 0.62 l -0.63 0 s -0.02 3.74 -0.02 3.74 l 2.52 0.01 c 0.69 -0 1.26 -0.55 1.26 -1.24 l 0.05 -7.47 c -0 -0.69 -0.56 -1.25 -1.25 -1.25 l -2.52 -0.01 z",
	"m0 0-432.5-250-171.5 250 171.5 250z"
);

let orange = new WellnessColor(
	4,
	240,
	"orange",
	"m -1 -1.73 l 0.01 -20 l -0.01 0.01 c -1.36 0 -2.74 0.14 -4.09 0.42 l -2.25 -3.9 c -0.42 -0.72 -1.33 -0.96 -2.05 -0.55 l -8.23 4.75 c -0.72 0.42 -0.96 1.33 -0.55 2.05 l 2.25 3.9 c -0.92 1.03 -1.72 2.14 -2.4 3.32 l -0 0.01 s 17.33 9.99 17.33 9.99 z m 0 0 l 0.01 -20 c -1.36 0 -2.74 0.14 -4.09 0.42 l -2.25 -3.9 c -0.42 -0.72 -1.33 -0.96 -2.05 -0.55 l -8.23 4.75 c -0.72 0.42 -0.96 1.33 -0.55 2.05 l 2.25 3.9 c -0.92 1.03 -1.72 2.14 -2.4 3.32 l 0 0 s 17.33 9.99 17.33 9.99 z",
	"m -6.82 -10.41 l -4.69 -1.34 c -0.11 -0.03 -0.21 -0.07 -0.32 -0.12 l 1.52 -0.79 c 0.39 -0.2 0.63 -0.63 0.59 -1.07 l -0.05 -0.54 l 1.86 1.48 c 0.15 0.11 0.34 0.14 0.51 0.05 c 0.16 -0.08 0.26 -0.24 0.26 -0.43 l -0.03 -1.88 l 0.06 0.05 c 0.34 0.25 0.79 0.28 1.15 0.1 l 1.83 -0.94 c -0.03 0.11 -0.06 0.22 -0.09 0.32 l -1.63 4.59 c -0.07 0.19 -0.2 0.35 -0.38 0.44 s -0.4 0.11 -0.59 0.06 z m 2.75 -6.5 l -2.3 1.19 c -0.05 0.03 -0.12 0.02 -0.17 -0.01 l -0.83 -0.61 c -0.14 -0.1 -0.33 -0.12 -0.5 -0.04 s -0.26 0.24 -0.25 0.42 l 0.03 1.83 l -1.93 -1.54 c -0.15 -0.12 -0.35 -0.13 -0.51 -0.05 c -0.16 0.1 -0.26 0.27 -0.25 0.45 l 0.13 1.62 c 0 0.07 -0.03 0.12 -0.08 0.15 l -1.87 0.96 c -0.04 0.03 -0.09 0.05 -0.12 0.08 c -0.25 -0.23 -0.45 -0.5 -0.61 -0.8 l -0.06 -0.1 c -0.63 -1.23 -0.29 -2.73 0.81 -3.55 c 0.72 -0.55 1.67 -0.7 2.54 -0.42 l 0.32 0.11 l 0.1 -0.32 c 0.28 -0.86 0.96 -1.54 1.81 -1.82 c 1.31 -0.42 2.73 0.18 3.36 1.4 l 0.06 0.1 c 0.16 0.29 0.25 0.62 0.3 0.94 z",
	"m0 0 .2564-499.556-302.2563-23.5234-130.7563 273.5233z"
);

let yellow = new WellnessColor(
	5,
	300,
	"yellow",
	"m 1 -1.73 l 17.33 -9.99 l -0.01 -0 c -0.68 -1.18 -1.49 -2.3 -2.41 -3.33 l 2.25 -3.9 c 0.41 -0.72 0.17 -1.63 -0.55 -2.05 l -8.23 -4.75 c -0.72 -0.41 -1.63 -0.17 -2.05 0.55 l -2.25 3.9 c -1.35 -0.28 -2.71 -0.42 -4.08 -0.42 l -0.01 0.01 s 0.01 20 0.01 20 z m 0 0 l 17.33 -9.99 c -0.68 -1.18 -1.49 -2.3 -2.41 -3.33 l 2.25 -3.9 c 0.41 -0.72 0.17 -1.63 -0.55 -2.05 l -8.23 -4.75 c -0.72 -0.41 -1.63 -0.17 -2.05 0.55 l -2.25 3.9 c -1.35 -0.28 -2.71 -0.42 -4.08 -0.42 l 0 0 s 0.01 20 0.01 20 z",
	"m 6.87 -9.12 c -0.51 -0.29 -0.68 -0.93 -0.39 -1.44 l 3.74 -6.55 c 0.29 -0.51 0.93 -0.68 1.44 -0.39 c 0.48 0.27 0.66 0.85 0.45 1.34 c 0.1 0.02 0.2 0.06 0.29 0.12 c 0.58 0.33 0.78 1.07 0.45 1.64 c -0.07 0.12 -0.16 0.23 -0.25 0.32 c 0.39 0.47 0.47 1.14 0.15 1.7 c -0.3 0.52 -0.86 0.8 -1.42 0.76 c 0.04 0.26 -0 0.54 -0.14 0.78 c -0.28 0.5 -0.88 0.72 -1.41 0.56 c -0.02 0.11 -0.06 0.21 -0.12 0.31 c -0.28 0.49 -0.85 0.71 -1.37 0.57 c -0.31 0.43 -0.9 0.57 -1.38 0.3 z m -2.36 -1.35 c -0.48 -0.27 -0.66 -0.85 -0.45 -1.33 c -0.39 -0.37 -0.49 -0.97 -0.21 -1.46 c 0.05 -0.1 0.12 -0.19 0.2 -0.26 c -0.42 -0.37 -0.53 -0.99 -0.24 -1.49 c 0.14 -0.25 0.35 -0.43 0.59 -0.52 c -0.33 -0.46 -0.37 -1.09 -0.08 -1.61 c 0.32 -0.56 0.94 -0.84 1.54 -0.74 c 0.02 -0.13 0.07 -0.26 0.14 -0.38 c 0.33 -0.58 1.07 -0.78 1.64 -0.45 c 0.09 0.05 0.18 0.11 0.25 0.18 c 0.31 -0.44 0.9 -0.57 1.38 -0.3 c 0.51 0.29 0.68 0.93 0.39 1.44 l -3.74 6.55 c -0.29 0.51 -0.93 0.68 -1.44 0.39 z",
	"m0 0 432.7563-249.556-130.7563-273.5233-302.2563 23.5234z"
);

let socialWellness = new WellnessCategory(
	"Social Wellness",
	faHeartPulse,
	[ProjectE.BuddyLink],
	green,
	WellnessE.Social,
	"the quality of relationships in one's life"
);
let environmentalWellness = new WellnessCategory(
	"Environmental Wellness",
	faSeedling,
	[ProjectE.ComfortCorner],
	purple,
	WellnessE.Environmental,
	"the well-being of one's surroundings"
);
let physicalWellness = new WellnessCategory(
	"Physical Wellness",
	faHeartPulse,
	[ProjectE.Workout, ProjectE.GreenLife],
	orange,
	WellnessE.Physical,
	"the health and functionality of the body"
);
let spiritualWellness = new WellnessCategory(
	"Spiritual Wellness",
	faHeartPulse,
	[ProjectE.MindfulInk],
	blue,
	WellnessE.Spiritual,
	"purpose, meaning, and connection with something beyond oneself "
);
let occupationalWellness = new WellnessCategory(
	"Occupational Wellness",
	faBriefcase,
	[ProjectE.FounderDrive],
	red,
	WellnessE.Occupational,
	"satisfaction of one's work or activities"
);
let mentalWellness = new WellnessCategory(
	"Mental Wellness",
	faBrain,
	[ProjectE.RadiantRealms],
	yellow,
	WellnessE.Mental,
	"emotional and psychological well-being"
);

const wellnessCategories = [
	socialWellness,
	environmentalWellness,
	physicalWellness,
	spiritualWellness,
	occupationalWellness,
	mentalWellness,
];
wellnessCategories.sort((a, b) => {
	return a.color.id - b.color.id;
});

export function getWellnessCategory(name: WellnessE) {
	return wellnessCategories.find((category) => category.enum === name);
}

export function getWellnessCategories() {
	return wellnessCategories;
}
