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
console.log(saved);
const savedList = JSON.parse(saved);
console.log("JSON.parse(saved) = savedList" + "\n\n");
console.log(savedList);

const Tab1: React.FC = () => {
  // react-hook

  const [content, setContent] = useState("");
  const [list, setList] = useState(savedList);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list test case!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {content}
        {list.map((v : string, i: number) => (
          <IonCard key={i}>
            <IonCardHeader>
              <IonCardSubtitle>{i} 번 카드</IonCardSubtitle>
              <IonCardTitle>{v}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              sample content
            </IonCardContent>
          </IonCard>
        ))}
        <IonInput
          placeholder="Enter Input"
          onIonChange={e => setContent(e.detail.value!)}
        ></IonInput>
        <IonButton onClick={()=>{ 
          const newList = [content, ...list]
          console.log(newList);
          setList(newList)
          localStorage.setItem('savedList', JSON.stringify(newList));
        }}>추가</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
