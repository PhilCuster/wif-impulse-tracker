import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

interface ActionsProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Actions: React.FC<ActionsProps> = ({ match }) => {
  const [germanAction, setGermanAction] = useState<string>();
  const [italianAction, setItalianAction] = useState<string>();
  const [japaneseAction, setJapaneseAction] = useState<string>();
  const [cwAction, setCwAction] = useState<string>();
  const [sovietAction, setSovietAction] = useState<string>();
  const [frenchAction, setFrenchAction] = useState<string>();
  const [chineseAction, setChineseAction] = useState<string>();
  const [usAction, setUsAction] = useState<string>();

  let getGameState = () => {
    return {
      germany: germanAction,
      italy: italianAction,
      japan: japaneseAction,
      cw: cwAction,
      ussr: sovietAction,
      france: frenchAction,
      china: chineseAction,
      usa: usAction,
    };
  };

  useIonViewDidEnter(() => {
      setGermanAction("");
      setItalianAction("");
      setJapaneseAction("");
      setCwAction("");
      setSovietAction("");
      setFrenchAction("");
      setChineseAction("");
      setUsAction("");
  });

  let currentActions;
  if (match.params.id === "axis") {
    currentActions = (
      <IonList>
        <IonListHeader>
          <IonLabel>Select Actions for the Axis</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Germany</IonLabel>
          <IonSelect
            value={germanAction}
            placeholder="Choose Action"
            onIonChange={(e) => setGermanAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Italy</IonLabel>
          <IonSelect
            value={italianAction}
            placeholder="Choose Action"
            onIonChange={(e) => setItalianAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Japan</IonLabel>
          <IonSelect
            value={japaneseAction}
            placeholder="Choose Action"
            onIonChange={(e) => setJapaneseAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
    );
  } else {
    currentActions = (
      <IonList>
        <IonListHeader>
          <IonLabel>Select Actions for the Allies</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>Commonwealth</IonLabel>
          <IonSelect
            value={cwAction}
            placeholder="Choose Action"
            onIonChange={(e) => setCwAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>France</IonLabel>
          <IonSelect
            value={frenchAction}
            placeholder="Choose Action"
            onIonChange={(e) => setFrenchAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>USA</IonLabel>
          <IonSelect
            value={usAction}
            placeholder="Choose Action"
            onIonChange={(e) => setUsAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>USSR</IonLabel>
          <IonSelect
            value={sovietAction}
            placeholder="Choose Action"
            onIonChange={(e) => setSovietAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>China</IonLabel>
          <IonSelect
            value={chineseAction}
            placeholder="Choose Action"
            onIonChange={(e) => setChineseAction(e.detail.value)}
          >
            <IonSelectOption value="land">Land</IonSelectOption>
            <IonSelectOption value="naval">Naval</IonSelectOption>
            <IonSelectOption value="air">Air</IonSelectOption>
            <IonSelectOption value="combined">Combined</IonSelectOption>
            <IonSelectOption value="pass">Pass</IonSelectOption>
            <IonSelectOption value="land-naval">Land/Naval</IonSelectOption>
            <IonSelectOption value="land-air">Land/Air</IonSelectOption>
            <IonSelectOption value="naval-air">Naval/Air</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select Actions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {currentActions}
        <Link
          to={{
            pathname: "/phases",
            state: getGameState(),
          }}
        >
          <IonButton expand="block" size="large" color="primary">
            Done
          </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Actions;
