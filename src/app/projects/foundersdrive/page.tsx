import Page from "../../../components/projectPage";
import { ProjectE, Tools } from '@/_classes/enums';

import { ProjectInfo } from '@/_classes/project';

export default function FoundersPage() {
    let foundersDriveInfo = new ProjectInfo("", [Tools.Wordpress], "", "", "", "https://foundersdrive.ca", "../images/foundersdrive.png", "foundersdrive", ProjectE.FounderDrive);
    return (
        <Page projectInfo={foundersDriveInfo} />
    );
}



