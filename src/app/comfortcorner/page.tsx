import Page from "../../components/projectPage";
import { ProjectE } from '@/_classes/enums';
import { ProjectInfo } from '@/_classes/project';
import Header from "../../components/header";


export default function ComfortCorner() {
    let environmentalInfo = new ProjectInfo(
        "Comfort Corner is a web-based game where players create and customize their own virtual sanctuary, designed to evoke feelings of safety, comfort, and connection with their physical surroundings. With low-poly 3D graphics and immersive audio, the game offers a peaceful environment filled with customizable elements, from furniture and decorations to natural landscapes and ambient sounds. ",
        [],
        "",
        [""],
        "",
        "https://kennedyadams.ca",
        "",
        "comfortcorner",
        ProjectE.ComfortCorner);

    return (
        <>
            <Header isAnimated={false} />
            <Page projectInfo={environmentalInfo} />
        </>
    );
}



