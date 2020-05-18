import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Tab5.css";
import { Searchbar } from "../components/atoms/Searchbar";
import { Card } from "../components/atoms/Card";
import { InputBox } from "../components/atoms/InputBox";
import { AddButton } from "../components/atoms/AddButton";

// To-Do  store 를 정의하고 import 해야함.
import {TodoNew} from '../components/TodoNew'
import {TodoList} from '../components/TodoList'
import {TodoCardList} from '../components/TodoCardList'

/* interface TodoItem {
  cardNum: number;
  title: string;
  content: string;
  checked: boolean;
} */

const Tab5: React.FC = () => {
  // react-hook
  
  // const [cardNum, setCardNum] = useState<number>(0);
  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<string>("");
  // const [searchText, setSearchText] = useState("");

  useEffect(() => {

  }, )
  // }, [JSON.stringify(list)])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list</IonTitle>
          <Searchbar></Searchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* <Card></Card> */}
        <TodoCardList></TodoCardList>
        {/* <InputBox></InputBox> */}
        <AddButton></AddButton>
      </IonContent>

      {/* <IonContent>

          <IonCard>
            <IonCardHeader>
              <IonItem>
                <IonCheckbox onClick={() => { 

                }} />
                <IonCardTitle></IonCardTitle>
                <IonButton fill="outline" slot="end" color="danger" onClick={()=>{ 
                  }}>Del</IonButton>
              </IonItem>
              <IonCardContent>
              </IonCardContent>
            </IonCardHeader>            
          </IonCard>

        <IonLabel>Type Title</IonLabel>
        <IonInput
          placeholder="Enter title"
          onIonChange={e => setTitle(e.detail.value?? '')}
        ></IonInput>
        <IonLabel>Type content</IonLabel>
        <IonTextarea
          placeholder="Enter content"
          onIonChange={e => setContent(e.detail.value?? '')}
        ></IonTextarea>
        <IonButton onClick={()=>{
          
        }}>추가</IonButton>
      </IonContent> */}

    </IonPage>
  );
};

export default Tab5;
