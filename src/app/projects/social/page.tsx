import Page from "../../../components/projectPage";
import { ProjectE } from '@/_classes/enums';
import { ProjectInfo } from '@/_classes/project';



export default function SocialPage() {
    let socialInfo = new ProjectInfo("", [], "", "", "", "https://kennedyadams.ca", "", "socialproject", ProjectE.Social, "");

    return (
        <Page projectInfo={socialInfo} />
    );
}



