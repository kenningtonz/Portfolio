import Page from "../../../components/projectPage";
import { ProjectE, Tools } from '@/_classes/enums';

import { ProjectInfo } from '@/_classes/project';



export default function RadiantPage() {
    let radiantRealmsInfo = new ProjectInfo("", [Tools.React, Tools.Firebase], "", "", "", "https://radiantrealms.kennedyadams.ca", "", "radiantrealms", ProjectE.RadiantRealms, "https://github.com/kenningtonz/Mental-Health-Services");

    return (
        <Page projectInfo={radiantRealmsInfo} />
    );
}



