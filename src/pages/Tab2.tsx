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

 // dummy case
 // localStorage.setItem('savedList', JSON.stringify(["sample"]));
 // localStorage.setItem('savedList', JSON.stringify([{title: "에비", content: "에비비"}, {title: "에비", content: "에비비"}, {title: "에비", content: "에비비"}]));
 //const [title, setTitle] = useState<string>("");
 //const [content, setContent] = useState<string>("");
 const [list, setList] = useState<TodoItem[]>(savedList);
 //const [checked, setChecked] = useState(false);
 const newlist = list;
 //const newlist = list.filter((v, ii) => ii !== 1);
 //console.log(list.filter((v, ii) => ii !== 1));

 return (
   <IonPage>
     <IonHeader>
       <IonToolbar>
         <IonTitle>To-do-list test case!</IonTitle>
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
