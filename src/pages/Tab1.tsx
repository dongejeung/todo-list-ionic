import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Tab1.css";

// To-Do  store 를 정의하고 import 해야함.
// import {TodoNew} from '../components/TodoNew'
// import {TodoList} from '../components/TodoList'

const saved = localStorage.getItem('savedList') ?? JSON.stringify([]);
const savedList = JSON.parse(saved);
interface TodoItem {
  cardNum: number;
  title: string;
  content: string;
  checked: boolean;
}

const Tab1: React.FC = () => {
  // react-hook
  
  const [cardNum, setCardNum] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [list, setList] = useState<TodoItem[]>(savedList);
  const [checked, setChecked] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    
  }, [JSON.stringify(list)])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list</IonTitle>
          <IonSearchbar value={searchText} onIonChange={e => {
              setSearchText(e.detail.value?? '')
            }
            }></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* 메서드 체인 사용. */}
        {list.filter(v => v.title.indexOf(searchText) !== -1 || v.content.indexOf(searchText) !== -1).map((v : TodoItem, i: number) => (
          <IonCard key={i}>
            <IonCardHeader>
              <IonItem>
                <IonCheckbox checked={v.checked} onClick={() => { 
                  const newList = list.map(item => {
                    return item.cardNum === v.cardNum
                    ? ({ ...item, checked: !v.checked }) 
                    : item

                  })
                  setList(newList)
                  localStorage.setItem('savedList', JSON.stringify(newList))
                }} />
                <IonCardTitle>{v.title}</IonCardTitle>
                <IonButton fill="outline" slot="end" color="danger" onClick={()=>{ 
                  const newList = list.filter((v, ii)=> ii !== i)
                  setList(newList)
                  localStorage.setItem('savedList', JSON.stringify(newList));
                  }}>Del</IonButton>
              </IonItem>
              <IonCardContent>
                {v.content}
              </IonCardContent>
            </IonCardHeader>
            
          </IonCard>
        ))}
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
          const cardNumList: number[] = [];
          let maxNum = 0
          if(list.length !== 0) {
            list.forEach(Element => cardNumList.push(Element.cardNum))
            maxNum = Math.max.apply(null, cardNumList)+1
          }
          const newList = [{cardNum: maxNum, title, content, checked: false}, ...list]
          setSearchText("")
          setList(newList)
          localStorage.setItem('savedList', JSON.stringify(newList));
        }}>추가</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
