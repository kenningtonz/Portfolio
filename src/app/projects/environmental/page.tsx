import Page from "../../../components/projectPage";
import { ProjectE } from '@/_classes/enums';
import { ProjectInfo } from '@/_classes/project';



export default function EnvironmentalPage() {
    let environmentalInfo = new ProjectInfo("", [], "", "", "", "https://kennedyadams.ca", "", "environmental", ProjectE.Environmental);

    return (
        <Page projectInfo={environmentalInfo} />
    );
}



