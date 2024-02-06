import { faBrain, faBriefcase, faSchool, faCertificate } from '@fortawesome/free-solid-svg-icons'


export const timelineEventsHighlight = [
    {
        id: 0,
        title: "Ontario College Diploma",
        date: "April 2024",
        description: "Web Development",
        icon: faSchool,
        location: "Durham College, Oshawa ON",
        color: 'purple'
    },
    {
        id: 1,
        title: "Bachelor of Information Technology, Game Development and Entrepreneurship",
        date: "April 2022",
        description: "Game Development and Entrepreneurship",
        icon: faSchool,
        location: "Ontario Tech University ,Oshawa ON",
        color: "purple"
    },
    {
        id: 2,
        title: "Game Developer, Department of National Defense, Government of Canada",
        date: "May 2022 - September 2022",
        description: "Department of National Defense, Government of Canada",
        icon: faBriefcase,
        location: "Remote from Halifax, NS",
        color: "red"
    },
    {
        id: 4,
        title: "Mental Health First Aid Certificate, Mental Health Commission of Canada",
        date: "June 2019",
        description: "Mental Health Commission of Canada",
        icon: faCertificate,
        location: "Oshawa, ON",
        color: "purple"
    },
    {
        id: 3,
        title: "Dialectical Behavioral Therapy",
        date: "May 2022",
        description: "",
        icon: faBrain,
        location: "Ontario Shores, Whitby, ON",
        color: "yellow"
    },
]
timelineEventsHighlight.sort((a, b) => (a.id > b.id) ? 1 : -1);


