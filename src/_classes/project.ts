
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
    objective: string;
    approach: string;
    purpose: string;
    link: string;
    githubLink?: string;
    image: string;
    tools: Tools[];
    project: ProjectE;

    constructor(description: string, tools: Tools[], objective: string, approach: string, purpose: string, link: string, image: string, slug: string, project: ProjectE, githubLink?: string) {
        this.description = description;
        this.tools = tools;
        this.objective = objective;
        this.approach = approach;
        this.purpose = purpose;
        this.link = link;
        this.image = image;
        this.slug = slug;
        this.project = project;
        this.githubLink = githubLink;
    }
}

let foundersDrive = new Project("Founder's Drive", "/logos/foundersdrive.png", "foundersdrive", WellnessE.Occupational, ProjectE.FounderDrive);
let workout = new Project("Workout", "/logo.png", "workout", WellnessE.Physical, ProjectE.Workout);
let greenLife = new Project("GreenLife Grocer", "/logos/greenlife.png", "greenlife", WellnessE.Physical, ProjectE.GreenLife);
let mindfulInk = new Project("Mindful Ink", "/logos/mindfulInk.png", "mindfulink", WellnessE.Spiritual, ProjectE.MindfulInk);
let radiantRealms = new Project("Radiant Realms", "/logo.png", "radiantrealms", WellnessE.Mental, ProjectE.RadiantRealms);
let socialProject = new Project("Social Project", "/logo.png", "social", WellnessE.Social, ProjectE.Social);
let environmentalProject = new Project("Environmental Project", "/logo.png", "environmental", WellnessE.Environmental, ProjectE.Environmental);

let projects = [foundersDrive, workout, greenLife, mindfulInk, radiantRealms, socialProject, environmentalProject]



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

