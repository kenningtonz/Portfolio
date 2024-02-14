
import { WellnessE, ProjectE, Tools } from './enums';



class Project {
    slug: string;
    name: string;
    logo: string;
    category: WellnessE;
    enum: ProjectE;
    constructor(name: string, logo: string, slug: string, category: WellnessE, enumValue: ProjectE) {
        this.name = name;
        this.logo = logo;
        this.slug = slug;
        this.category = category;
        this.enum = enumValue;
    }
}

export class ProjectInfo {
    slug: string;
    description: string;
    date: string;
    challenge: string;
    process: string[];
    link: string;
    githubLink?: string;
    image: string;
    tools: Tools[];
    project: ProjectE;

    constructor(description: string, tools: Tools[], challenge: string, process: string[], date: string, link: string, image: string, slug: string, project: ProjectE, githubLink?: string) {
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

let foundersDrive = new Project("Founder's Drive", "/logos/foundersdrive.png", "foundersdrive", WellnessE.Occupational, ProjectE.FounderDrive);
// let workout = new Project("Workout", "/logo.png", "workout", WellnessE.Physical, ProjectE.Workout);
let greenLife = new Project("GreenLife Grocer", "/logos/greenlife.png", "greenlife", WellnessE.Physical, ProjectE.GreenLife);
let mindfulInk = new Project("Mindful Ink", "/logos/mindfulInk.png", "mindfulink", WellnessE.Spiritual, ProjectE.MindfulInk);
let radiantRealms = new Project("Radiant Realms", "/logos/radiantrealms.png", "radiantrealms", WellnessE.Mental, ProjectE.RadiantRealms);
let hobbyBuddy = new Project("Hobby Buddy", "/logo.png", "hobbybuddy", WellnessE.Social, ProjectE.HobbyBuddy);
let comfortCorner = new Project("Comfort Corner", "/logo.png", "comfortcorner", WellnessE.Environmental, ProjectE.ComfortCorner);

let projects = [foundersDrive, greenLife, mindfulInk, radiantRealms, hobbyBuddy, comfortCorner]



export function getProject(slug: string) {
    return projects.find(project => project.slug === slug);
}

export function getProjectByEnum(enumValue: ProjectE) {
    return projects.find(project => project.enum === enumValue);
}

export function getProjectsByCategory(category: WellnessE) {
    return projects.filter(project => project.category === category);
}

export function getProjects() {
    return projects;
}

