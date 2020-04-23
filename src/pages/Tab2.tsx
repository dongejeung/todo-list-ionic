import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle,
   IonToolbar,IonLabel, IonCheckbox } from "@ionic/react";
import React, { useState } from "react";
import "./Tab1.css";

const saved = localStorage.getItem('savedList') ?? '';
const savedList = JSON.parse(saved);

interface TodoItem {
 title: string;
 content: string;
 checked: boolean;
}

const Tab1: React.FC = () => {
 // react-hook

 const [list, setList] = useState<TodoItem[]>(savedList);
 const newlist = list.filter((v, ii) => v.checked === true);

 return (
   <IonPage>
     <IonHeader>
       <IonToolbar>
         <IonTitle>To-do-list Completed</IonTitle>
       </IonToolbar>
     </IonHeader>

     <IonContent>
       {newlist.map((v : TodoItem, i: number) => (
         <IonCard key={i}>
           <IonCardHeader>
             <IonCardTitle>{v.title}</IonCardTitle>
           </IonCardHeader>
           
           <IonCardContent>
             {v.content}
           </IonCardContent>
         </IonCard>
       ))}
       
     </IonContent>
   </IonPage>
 );
};

export default Tab1;
