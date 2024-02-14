import Page from "../../components/projectPage";
import { ProjectE, Tools } from '@/_classes/enums';
import { ProjectInfo } from '@/_classes/project';
import Header from "../../components/header";


export default function HobbyBuddy() {
    let socialInfo = new ProjectInfo(
        "Hobby Buddy is a web application designed to connect individuals with shared interests and hobbies, facilitating meaningful social interactions and fostering new friendships. Users can create profiles, search for like-minded hobby buddies, and connect with others who share their passions.",
        [Tools.NestJS, Tools.JavaScript],
        "",
        [""],
        "",
        "https://kennedyadams.ca",
        "",
        "hobbybuddy",
        ProjectE.HobbyBuddy,
        "");

    return (
        <>
            <Header isAnimated={false} />
            <Page projectInfo={socialInfo} />
        </>
    );
}



