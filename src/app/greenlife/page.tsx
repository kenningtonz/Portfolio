import Page from "../../components/projectPage";
import { ProjectE, Tools } from '@/_classes/enums';
import { ProjectInfo } from '@/_classes/project';
import Header from "../../components/header";


export default function GreenLifePage() {
    let greenLifeInfo = new ProjectInfo("", [Tools.PHP, Tools.MySQL], "", [""], "", "https://greenlife.kennedyadams.ca", "", "greenlife", ProjectE.GreenLife, "https://github.com/kenningtonz/GreenLifeGrocer");

    return (
        <>
            <Header isAnimated={false} />
            <Page projectInfo={greenLifeInfo} />
        </>
    );
}



