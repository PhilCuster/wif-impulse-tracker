import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from "@ionic/react"
import React from "react";
import { RouteComponentProps, StaticContext, useHistory } from "react-router";
import { ActionSet } from "../model/ActionSet";
import { getActivityLimitData } from "../services/ActivityLimits";

const Phases: React.FC<RouteComponentProps<{}, StaticContext, ActionSet>> = (props) => {

    const [index, setIndex] = React.useState(0);
    const history = useHistory();

    useIonViewDidEnter(() => {
        setIndex(0);
    });

    const state: ActionSet = props.location.state;
    console.debug(state);
    const limitData = getActivityLimitData();
    let actionList = Object.keys(limitData);
    let actionElements = actionList.map((action) => {
        return (
            <h1>{action}</h1>
        );
    });

    let nextStep = () => {
        if (index === actionList.length - 1) {
            history.push('/home');
        }
        setIndex(index + 1);
        console.debug(index);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{actionList[index]}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {actionElements[index]}
                <IonButton onClick={nextStep} size="large" color="primary">Next</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Phases;

