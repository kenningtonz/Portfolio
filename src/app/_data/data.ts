import Project from '../_classes/project';
import Tools from '../_classes/tools';
import { WellnessCategory, WellnessColor } from '../_classes/wellness';
import { faHeartPulse, faBrain, faBriefcase, faSeedling } from '@fortawesome/free-solid-svg-icons'

let green = new WellnessColor(0, "#C6E1AB", 0, "#243D09", "green")
let blue = new WellnessColor(1, "#B8E4F0", 60, "#08303C", "blue")
let purple = new WellnessColor(2, "#C6ABE1", 120, "#26093B", "purple")
let red = new WellnessColor(3, "#F8AB99", 180, "#40140A", "red")
let yellow = new WellnessColor(5, "#FFE070", 240, "#3A2F0A", "yellow")
let orange = new WellnessColor(4, "#FCCA7E", 300, "#492F09", "orange")


let socialProject = new Project("Social Project", "https://kennedyadams.ca", "", "", "", "", "", "", [], "social")
let environmentalProject = new Project("Environmental Project", "https://kennedyadams.ca", "", "", "", "", "", "", [], "environmental")
let workoutProject = new Project("Workout", "https://workout.kennedyadams.ca", "", "", "", "", "", "", [Tools.Firebase, Tools.Flutter], "workout")
let grocerProject = new Project("GreenLife Grocer", "https://greenlife.kennedyadams.ca", "", "", "", "", "", "", [Tools.PHP, Tools.MySQL], "greenlife")
let mindfulInkProject = new Project("Mindful Ink", "https://mindfulink.kennedyadams.ca", "./mindfulInk.png", "", "", "", "", "", [Tools.PHP, Tools.Wordpress], "mindfulink")
let foundersDriveProject = new Project("Founder's Drive", "https://foundersdrive.ca", "", "", "", "", "", "", [Tools.Wordpress], "foundersdrive")
let radiantRealmsProject = new Project("Radiant Realms", "https://radiantrealms.kennedyadams.ca", "", "", "", "", "", "", [Tools.React, Tools.Firebase], "radiantrealms")

let socialWellness = new WellnessCategory("Social Wellness", faHeartPulse, [socialProject], green)
let environmentalWellness = new WellnessCategory("Environmental Wellness", faSeedling, [environmentalProject], purple)
let workoutWellness = new WellnessCategory("Physical Wellness", faHeartPulse, [workoutProject, grocerProject], orange)
let spiritualWellness = new WellnessCategory("Spiritual Wellness", faHeartPulse, [mindfulInkProject], blue)
let occupationalWellness = new WellnessCategory("Occupational Wellness", faBriefcase, [foundersDriveProject], red)
let mentalWellness = new WellnessCategory("Mental Wellness", faBrain, [radiantRealmsProject], yellow)

export const wellnessCategories = [socialWellness, environmentalWellness, workoutWellness, spiritualWellness, occupationalWellness, mentalWellness]

