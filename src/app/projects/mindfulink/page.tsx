import Page from "../../../components/projectPage";
import { ProjectE, Tools } from '@/_classes/enums';

import { ProjectInfo } from '@/_classes/project';



export default function MindfulPage() {
    let mindfulInkInfo = new ProjectInfo(
        "", [Tools.PHP, Tools.Wordpress], "", "", "", "https://mindfulink.kennedyadams.ca", "", "mindfulInk", ProjectE.MindfulInk, "https://github.com/kenningtonz/mindful");

    return (
        <Page projectInfo={mindfulInkInfo} />
    );
}



