import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonItem } from "@ionic/react";
import React, { useState } from "react";
import "./Tab1.css";

const saved = localStorage.getItem('savedList') ?? '';
console.log(saved);
const savedList = JSON.parse(saved);
console.log("JSON.parse(saved) = savedList" + "\n\n");
console.log(savedList);

const Tab1: React.FC = () => {
  // react-hook

  // dummy case
  // localStorage.setItem('savedList', JSON.stringify(["sample"]));
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
              <IonItem>
                <IonButton fill="outline" slot="end" color="danger" onClick={()=>{ 
                  console.log(list);
                  list.splice(i, 1);
                  const newList = [content, list]
                  setList(newList)
                  localStorage.setItem('savedList', JSON.stringify(newList));
                }}>
                 Del</IonButton>
              </IonItem>
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
