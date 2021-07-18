import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, StaticContext, useHistory } from "react-router";
import { ActionSet } from "../model/ActionSet";
import { getActivityLimitData, getActivityNotes } from "../services/ActivityLimits";
import { displayCountry, displayPhase } from "../utils/formatting";
import { getActivityLimit } from "../utils/activities";

const Phases: React.FC<RouteComponentProps<{}, StaticContext, ActionSet>> = (
  props
) => {
  const [index, setIndex] = React.useState(0);
  const history = useHistory();

  useIonViewDidEnter(() => {
    setIndex(0);
  });

  const state: ActionSet = props.location.state;
  console.debug(state);
  const limitData = getActivityLimitData();
  const notes = getActivityNotes();
  let actionList = Object.keys(limitData);
  let actionElements = actionList.map((action) => {
    let limits: JSX.Element[] = [];
    if (state) {
      Object.keys(state).forEach((key) => {
        if (state[key]) {
          let limitAmount = getActivityLimit(
            limitData[action],
            state[key],
            key
          );
          if (limitAmount > -1) {
            limits.push(
              <li>
                {displayCountry(key)}: {limitAmount}
              </li>
            );
          } else {
            limits.push(<li>{displayCountry(key)}: Unlimited</li>);
          }
        }
      });
    }
    let notesHtml = (<div></div>);
    if (Object.keys(notes).includes(action)) {
      notesHtml = (
        //@ts-ignore
        <div>Notes: {notes[action]}</div>
      );
    }
    return (
      <div>
        <h2>Phase: {displayPhase(action)}</h2>
        <ul>{limits}</ul>
        {notesHtml}
      </div>
    );
  });

  let nextStep = () => {
    if (index === actionList.length - 1) {
      history.push("/home");
    } else {
      setIndex(index + 1);
      console.debug(index);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{displayPhase(actionList[index])}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {actionElements[index]}
        <IonButton onClick={nextStep} size="large" color="primary">
          Next
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Phases;
