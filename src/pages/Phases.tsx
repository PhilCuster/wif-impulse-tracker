import { IonPage } from "@ionic/react"
import { RouteComponentProps } from "react-router";

interface PhaseProps {
    germany: string,
    italy: string,
    japan: string,
    cw: string,
    france: string,
    usa: string,
    ussr: string,
    china: string
}

interface Props extends RouteComponentProps {}

const Phases: React.FC<Props> = (props) => {
    const { state } = props.location;
    console.debug(state);
    return (
        <IonPage>
            Time to play!
        </IonPage>
    );
}

export default Phases;