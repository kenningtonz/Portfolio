import { faHeartPulse, faBrain, faBriefcase, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { WellnessE, ProjectE } from './enums';



class WellnessCategory {
    color: WellnessColor;
    name: string;
    icon: any;
    projects: ProjectE[];
    enum: WellnessE;
    constructor(name: string, icon: any, projects: ProjectE[], wellnessColor: WellnessColor, enumValue: WellnessE) {
        this.name = name;
        this.icon = icon;
        this.projects = projects;
        this.color = wellnessColor;
        this.enum = enumValue;
    }
}

class WellnessColor {
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

let green = new WellnessColor(0, "#C6E1AB", 0, "#243D09", "green")
let blue = new WellnessColor(1, "#B8E4F0", 60, "#08303C", "blue")
let purple = new WellnessColor(2, "#C6ABE1", 120, "#26093B", "purple")
let red = new WellnessColor(3, "#F8AB99", 180, "#40140A", "red")
let orange = new WellnessColor(4, "#FCCA7E", 240, "#492F09", "orange")
let yellow = new WellnessColor(5, "#FFE070", 300, "#3A2F0A", "yellow")

let socialWellness = new WellnessCategory("Social Wellness", faHeartPulse, [ProjectE.Social], green, WellnessE.Social)
let environmentalWellness = new WellnessCategory("Environmental Wellness", faSeedling, [ProjectE.Environmental], purple, WellnessE.Environmental)
let workoutWellness = new WellnessCategory("Physical Wellness", faHeartPulse, [ProjectE.Workout, ProjectE.GreenLife], orange, WellnessE.Workout)
let spiritualWellness = new WellnessCategory("Spiritual Wellness", faHeartPulse, [ProjectE.MindfulInk], blue, WellnessE.Spiritual)
let occupationalWellness = new WellnessCategory("Occupational Wellness", faBriefcase, [ProjectE.FounderDrive], red, WellnessE.Occupational)
let mentalWellness = new WellnessCategory("Mental Wellness", faBrain, [ProjectE.RadiantRealms], yellow, WellnessE.Mental)

const wellnessCategories = [socialWellness, environmentalWellness, workoutWellness, spiritualWellness, occupationalWellness, mentalWellness]
wellnessCategories.sort((a, b) => {
    return a.color.id - b.color.id
})

export function getWellnessCategory(name: WellnessE) {
    return wellnessCategories.find(category => category.enum === name);
}

export function getWellnessCategories() {
    return wellnessCategories;
}