import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from "@ionic/react";
import React, { useState } from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  // react-hook

  const [content, setContent] = useState("");
  const [list, setList] = useState(["123123", "23252"]);
  // [SDFsdfs]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {content}
        {list.map((v, i) => (
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>{v}</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        ))}
        setContent 22123sdfsdfsdfsdfsdfsdfdsf dsfsdf sdf
        <IonInput
          placeholder="Enter Input"
          onIonChange={e => setContent(e.detail.value!)}
        ></IonInput>
        IonButton
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
