import { faHeartPulse, faBrain, faBriefcase, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { WellnessE, ProjectE } from './enums';



class WellnessCategory {
    color: WellnessColor;
    name: string;
    description: string;
    icon: any;
    projects: ProjectE[];
    enum: WellnessE;
    constructor(name: string, icon: any, projects: ProjectE[], wellnessColor: WellnessColor, enumValue: WellnessE, description: string) {
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
    constructor(id: number, rotate: number, name: string, arrowPath: string, iconPath: string, backgroundPath: string) {
        this.id = id;
        this.rotate = rotate;
        this.name = name;
        this.arrowPath = arrowPath;
        this.iconPath = iconPath;
        this.backgroundPath = backgroundPath;
    }
}

let green = new WellnessColor(0, 0, "green", "M50,48.45l34.63,20.02.02-.03c1.36-2.36,2.49-4.87,3.35-7.49h9c1.66,0,3-1.34,3-3v-19c0-1.66-1.34-3-3-3h-9c-.86-2.63-1.99-5.13-3.35-7.48v-.03s-34.65,20.01-34.65,20.01Z", "M87.1,42.79c0,1.38-1.13,2.5-2.52,2.5s-2.52-1.12-2.52-2.5,1.13-2.5,2.52-2.5,2.52,1.12,2.52,2.5ZM87.1,54.29c0,1.38-1.13,2.5-2.52,2.5s-2.52-1.12-2.52-2.5,1.13-2.5,2.52-2.5,2.52,1.12,2.52,2.5ZM77.69,38.29c1.86,0,3.36,1.49,3.36,3.33v1.33c0,.5-.11.97-.31,1.39-.23-.04-.46-.06-.7-.06-1.2,0-2.29.53-3.03,1.35v-6.69c0-.37.3-.67.67-.67ZM77.01,50.96v-.02c.74.83,1.82,1.35,3.03,1.35.24,0,.47-.02.7-.06.2.43.31.9.31,1.39v1.33c0,1.84-1.51,3.33-3.36,3.33-.37,0-.67-.3-.67-.67v-6.67ZM80.04,45.29c1.67,0,3.03,1.34,3.03,3s-1.35,3-3.03,3-3.03-1.34-3.03-3,1.35-3,3.03-3h0ZM71.8,42.29c2.32,0,4.2,1.87,4.2,4.17v3.67c0,2.3-1.88,4.17-4.2,4.17-.46,0-.84-.37-.84-.83v-10.33c0-.46.38-.83.84-.83Z", "m245.77 207.02 173.18 100.12.1-.15c6.8-11.8 63.49-93.28 63.49-93.28-4.3-13.15-56.68-94.85-63.49-106.6l-.05-.15-173.23 100z")
let blue = new WellnessColor(1, 60, "blue", "M50,88.45c2.8,0,5.54-.29,8.18-.84l4.49,7.79c.83,1.44,2.67,1.93,4.1,1.1l16.46-9.5c1.43-.83,1.92-2.66,1.1-4.1l-4.51-7.8c1.82-2.04,3.43-4.26,4.81-6.63l.02-.03-34.65-19.99-.03,40h.03Z", "M68.45,62.6c.2.08.34.26.37.46l.78,4.21,4.21.77c.21.04.38.18.46.37.08.2.06.42-.06.59l-2.43,3.53,2.43,3.53c.12.18.14.4.06.59-.08.2-.26.34-.46.37l-4.21.78-.78,4.21c-.04.21-.18.38-.37.46-.2.08-.42.06-.59-.06l-3.53-2.43-3.53,2.43c-.18.12-.4.14-.59.06-.2-.08-.34-.26-.37-.46l-.78-4.21-4.21-.78c-.21-.04-.38-.18-.46-.37-.08-.2-.06-.42.06-.59l2.43-3.53-2.43-3.53c-.12-.18-.14-.4-.06-.59.08-.2.26-.34.46-.37l4.21-.78.78-4.21c.04-.21.18-.38.37-.46.2-.08.42-.06.59.06l3.53,2.43,3.53-2.43c.18-.12.4-.14.59-.06ZM60.58,72.55c0-2.07,1.68-3.75,3.75-3.75s3.75,1.68,3.75,3.75-1.68,3.75-3.75,3.75-3.75-1.68-3.75-3.75h0ZM69.33,72.55c0-2.76-2.24-5-5-5s-5,2.24-5,5,2.24,5,5,5,5-2.24,5-5h0Z", "m245.77 407.06c14 0 129.53-3.81 129.53-3.81 9.1-10.2 36.74-84.26 43.64-96.11l.1-.15-173.28-100-.15 200.03h.15z")
let purple = new WellnessColor(2, 120, "purple", "M20.18,75.1l-4.51,7.8c-.82,1.44-.33,3.27,1.1,4.1l16.46,9.5c1.43.83,3.27.34,4.1-1.1l4.49-7.79c2.63.55,5.36.84,8.15.84h.03v-40s-34.65,19.98-34.65,19.98v.03c1.39,2.38,3.01,4.6,4.83,6.64Z", "M23.16,72.21c2.63-3.6,7.49-4.61,11.3-2.53-1.01,1.86-1.39,3.93-1.16,5.93-2.8,1.28-6.19,1.05-8.85-.9l-1.01-.74c-.56-.41-.68-1.2-.27-1.76ZM40.87,82.06c-.41.56-1.2.68-1.76.27l-1.01-.74c-3.92-2.87-4.77-8.37-1.91-12.29l.74-1.01,3.71-5.07c.41-.56,1.2-.68,1.76-.27s.68,1.2.27,1.76l-3.71,5.07c3.92,2.87,4.77,8.37,1.91,12.29Z", "m114.78 430.43s116.89-23.38 130.84-23.38h.15v-201s-173.28 99.92-173.28 99.92l.05.15c6.9 11.9 33.14 113.14 42.24 123.34z")
let red = new WellnessColor(3, 180, "red", "M3,60.95h9c.86,2.62,1.99,5.13,3.35,7.48v.03s34.65-20.01,34.65-20.01L15.37,28.43v.02c-1.37,2.36-2.5,4.86-3.37,7.5H3c-1.66,0-3,1.34-3,3v19c0,1.66,1.34,3,3,3Z", "M13.18,50.82l.04-5.61c0-.17.14-.31.32-.31h1.57s-.04,6.24-.04,6.24h-1.57c-.17-.01-.31-.15-.31-.32ZM13.48,53h1.57s-.02,2.5-.02,2.5c0,1.37,1.11,2.5,2.5,2.51l3.78.03.05-7.47.03-4.98.05-7.47-3.78-.03c-1.39,0-2.53,1.1-2.53,2.47l-.02,2.49h-1.57c-1.22-.02-2.21.95-2.22,2.15l-.04,5.61c0,1.2.97,2.19,2.19,2.2ZM22.71,38.12l-.05,7.47h1.26c.7.01,1.25.57,1.25,1.26l-.02,2.49c0,.69-.57,1.24-1.27,1.24h-1.26s-.05,7.47-.05,7.47l5.03.03c1.39,0,2.53-1.1,2.53-2.47l.1-14.95c0-1.37-1.11-2.5-2.5-2.51l-5.03-.03Z", "m0 214.46c4.3 13.1 65.69 80.73 72.49 92.48l.05.15 173.23-100.07-173.18-100.11-.05.1c-6.8 11.8-72.54 107.45-72.54 107.45z")
let orange = new WellnessColor(4, 240, "orange", "M16.77,9.9L33.23.4c1.43-.83,3.27-.34,4.1,1.1l4.49,7.79c2.64-.55,5.38-.84,8.18-.84v40L15.36,28.45v-.02c1.39-2.37,3-4.59,4.82-6.63l-4.51-7.8c-.82-1.44-.33-3.27,1.1-4.1Z", "M39.2,32.41l-9.37-2.67c-.22-.06-.43-.14-.64-.22l3.04-1.57c.79-.41,1.26-1.25,1.18-2.14l-.09-1.07,3.71,2.96c.29.23.68.27,1,.11.33-.16.53-.5.53-.86l-.06-3.75.12.09c.68.5,1.57.57,2.31.19l3.65-1.88c-.05.22-.12.44-.19.65l-3.26,9.18c-.14.38-.41.7-.77.88s-.78.23-1.17.12ZM44.68,19.4l-4.61,2.38c-.1.05-.23.04-.33-.02l-1.65-1.21c-.29-.21-.67-.24-.99-.08s-.52.49-.51.85l.05,3.66-3.85-3.08c-.29-.24-.7-.27-1.03-.1-.33.18-.53.53-.49.91l.27,3.25c.01.13-.06.25-.17.31l-3.73,1.92c-.09.05-.17.1-.24.17-.49-.46-.9-1-1.22-1.61l-.11-.2c-1.27-2.46-.58-5.46,1.62-7.11,1.46-1.09,3.35-1.4,5.08-.84l.64.21.2-.64c.55-1.73,1.9-3.09,3.63-3.65,2.62-.84,5.46.35,6.73,2.8l.11.2c.31.59.51,1.23.6,1.88Z", "m245.8 7v200.3l-173.23-100.01.05-.1c6.9-11.85 27.05-95.19 36.15-105.4 0 0 123.03 5.48 137.03 5.48z")
let yellow = new WellnessColor(5, 300, "yellow", "M50,8.45c2.8,0,5.54.29,8.18.84l4.49-7.79c.83-1.44,2.67-1.93,4.1-1.1l16.46,9.5c1.43.83,1.92,2.66,1.1,4.1l-4.51,7.8c1.82,2.04,3.44,4.26,4.82,6.64v.03s-34.64,19.98-34.64,19.98V8.45Z", "M60.69,34.86c-1.01-.58-1.36-1.87-.78-2.88l7.48-13.09c.58-1.01,1.87-1.36,2.88-.78.95.54,1.31,1.7.89,2.68.2.05.39.13.57.24,1.15.66,1.56,2.14.9,3.29-.14.24-.32.45-.51.63.77.94.93,2.29.29,3.41-.6,1.04-1.72,1.6-2.85,1.51.08.52-.01,1.07-.29,1.56-.57,1-1.76,1.44-2.82,1.11-.05.21-.13.42-.25.61-.56.98-1.7,1.42-2.74,1.13-.62.86-1.81,1.13-2.76.59ZM55.97,32.16c-.95-.54-1.31-1.7-.89-2.67-.78-.75-.98-1.95-.42-2.93.11-.2.25-.37.4-.52-.83-.74-1.05-1.99-.48-2.99.28-.49.71-.85,1.19-1.04-.65-.93-.74-2.18-.15-3.22.64-1.12,1.89-1.67,3.09-1.48.05-.26.14-.52.28-.76.66-1.15,2.14-1.56,3.29-.9.18.1.35.23.49.37.63-.87,1.81-1.14,2.76-.6,1.01.58,1.36,1.87.78,2.88l-7.48,13.09c-.58,1.01-1.87,1.36-2.88.78Z", "m245.77 6.99c14 0 128.78-6.99 128.78-6.99 9.1 10.2 37.55 95.05 44.45 106.96l.05.15-173.28 99.92v-200.04z")

let socialWellness = new WellnessCategory("Social Wellness", faHeartPulse, [ProjectE.Social], green, WellnessE.Social, "the quality of relationships and social interactions in one's life")
let environmentalWellness = new WellnessCategory("Environmental Wellness", faSeedling, [ProjectE.Environmental], purple, WellnessE.Environmental, "the well-being of their surroundings and the impact on personal health")
let physicalWellness = new WellnessCategory("Physical Wellness", faHeartPulse, [ProjectE.Workout, ProjectE.GreenLife], orange, WellnessE.Physical, "the health and functionality of the body")
let spiritualWellness = new WellnessCategory("Spiritual Wellness", faHeartPulse, [ProjectE.MindfulInk], blue, WellnessE.Spiritual, "a sense of purpose, meaning, and connection with something beyond oneself ")
let occupationalWellness = new WellnessCategory("Occupational Wellness", faBriefcase, [ProjectE.FounderDrive], red, WellnessE.Occupational, "finding satisfaction and fulfillment through one's work or chosen activities")
let mentalWellness = new WellnessCategory("Mental Wellness", faBrain, [ProjectE.RadiantRealms], yellow, WellnessE.Mental, " emotional and psychological well-being")

const wellnessCategories = [socialWellness, environmentalWellness, physicalWellness, spiritualWellness, occupationalWellness, mentalWellness]
wellnessCategories.sort((a, b) => {
    return a.color.id - b.color.id
})

export function getWellnessCategory(name: WellnessE) {
    return wellnessCategories.find(category => category.enum === name);
}

export function getWellnessCategories() {
    return wellnessCategories;
}