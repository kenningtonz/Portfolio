import Page from "../../../components/projectPage";
import { ProjectE, Tools } from '@/_classes/enums';

import { ProjectInfo } from '@/_classes/project';



export default function WorkoutPage() {
    let workoutInfo = new ProjectInfo("", [Tools.React, Tools.Firebase], "", "", "", "https://workout.kennedyadams.ca", "", "workout", ProjectE.Workout, "https://github.com/kenningtonz/newapp");

    return (
        <Page projectInfo={workoutInfo} />
    );
}



