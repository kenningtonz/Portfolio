import Project from './project';



export class WellnessCategory {
    color: WellnessColor;
    name: string;
    icon: any;
    projects: Project[];
    constructor(name: string, icon: any, projects: Project[], wellnessColor: WellnessColor) {
        this.name = name;
        this.icon = icon;
        this.projects = projects;
        this.color = wellnessColor;
    }

    getProject(slug: string) {
        return this.projects.find(project => project.slug === slug);
    }
}

export class WellnessColor {
    id: number;
    colorHex: string;
    rotate: number;
    colorDarkHex: string;
    name: string;
    constructor(id: number, colorHex: string, rotate: number, colorDarkHex: string, name: string) {
        this.id = id;
        this.colorHex = colorHex;
        this.rotate = rotate;
        this.colorDarkHex = colorDarkHex;
        this.name = name;
    }
}
