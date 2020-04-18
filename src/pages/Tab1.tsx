import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import "./Tab1.css";

const saved = localStorage.getItem('savedList') ?? '';
const savedList = JSON.parse(saved);

interface TodoItem {
  title: string;
  content: string;
}

const Tab1: React.FC = () => {
  // react-hook

  // dummy case
  // localStorage.setItem('savedList', JSON.stringify(["sample"]));
  // localStorage.setItem('savedList', JSON.stringify([{title: "에비", content: "에비비"}]));
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [list, setList] = useState<TodoItem[]>(savedList);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list test case!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {list.map((v : TodoItem, i: number) => (
          <IonCard key={i}>
            <IonCardHeader>
              <IonCardSubtitle>{i} 번 카드</IonCardSubtitle>
              <IonCardTitle>{v.title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              {v.content}
              <IonItem>
              <IonButton fill="outline" slot="end" color="danger" onClick={()=>{ 
                const newList = [{title, content}, ...list].splice(i, 1)
                setList(newList)
                localStorage.setItem('savedList', JSON.stringify(newList));
                }}>Del</IonButton>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
        
        <IonInput
          placeholder="Enter title"
          onIonChange={e => setTitle(e.detail.value!)}
        ></IonInput>
        <IonInput
          placeholder="Enter content"
          onIonChange={e => setContent(e.detail.value!)}
        ></IonInput>
        <IonButton onClick={()=>{ 
          const newList = [{title, content}, ...list]
          setList(newList)
          localStorage.setItem('savedList', JSON.stringify(newList));
        }}>추가</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
