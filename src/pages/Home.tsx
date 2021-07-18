import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Actions from './Actions';
import './Home.css';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select Side</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="actions/axis" color="dark" size="large">Axis</IonButton>
        <IonButton routerLink="actions/allied" color="light" size="large">Allied</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
