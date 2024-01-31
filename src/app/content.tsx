
let workout = {
    "name": "workout",
}
let grocer = {
    "name": "grocer",
}

let spiritual = {
    "name": "Spiritual Wellness",
    "projects": [
        { name: "Mindful Ink", link: "https://mindfulink.kennedyadams.ca" },

    ]
}
let occupational = {
    "name": "Occupational Wellness",
    "projects": [
        { name: "Founder's Drive", link: "https://foundersdrive.ca" },
    ]
}
let physical = {
    "name": "Physical Wellness",
    "projects": [
        { name: "Workout", link: "https://workout.kennedyadams.ca" },
        { name: "GreenLife Grocer", link: "https://greenlife.kennedyadams.ca" },
    ]
}
let social = {
    "name": "Social Wellness",
    "projects": [
        { name: "Social Project", link: "https://kennedyadams.ca" },
    ]
}
let mental = {
    "name": "Mental Wellness",
    "projects": [
        { name: "Radiant Realms", link: "https://radiantrealms.kennedyadams.ca" },
    ]
}
let environmental = {
    "name": "Environmental Wellness",
    "projects": [
        { name: "Environmental Project", link: "https://kennedyadams.ca" },
    ]
}




export const Content: React.FC<{ id: number }> = (props) => {
    let categories = [social, spiritual, environmental, occupational, physical, mental]

    return (
        <section className="flex-col p-4">
            <h2 className="text-xl	">{categories[props.id].name}</h2>
            {categories[props.id].projects.map((project) => {
                return (
                    <div>
                        <h3>{project.name}</h3>
                        <a href={project.link} target="_blank">Link</a>
                    </div>)
            })}

        </section>
    )
}