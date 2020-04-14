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
  IonCardContent,
  IonButton
} from "@ionic/react";
import React, { useState } from "react";
import "./Tab1.css";

const saved = localStorage.getItem('savedList') ?? '';
const savedList = JSON.parse(saved);

const Tab1: React.FC = () => {
  // react-hook

  const [content, setContent] = useState("");
  const [list, setList] = useState(savedList);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list@@!!22</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {content}
        {list.map((v : string, i: number) => (
          <IonCard key={i}>
            <IonCardHeader>
              <IonCardSubtitle>{v}</IonCardSubtitle>
              <IonCardTitle>Card Title2</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        ))}
        <IonInput
          placeholder="Enter Input"
          onIonChange={e => setContent(e.detail.value!)}
        ></IonInput> c
        <IonButton onClick={()=>{ 
          const newList = [content, ...list]
          setList(newList)
          localStorage.setItem('savedList', JSON.stringify(newList));
        }}>123</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
