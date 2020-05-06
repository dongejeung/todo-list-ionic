import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Tab1.css";

const saved = localStorage.getItem('savedList') ?? JSON.stringify([]);
const savedList = JSON.parse(saved);
interface TodoItem {
  cardNum: number;
  title: string;
  content: string;
  checked: boolean;
  isSearched: boolean;
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
  const initList = list.filter((v, ii) => v.isSearched === true )
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>To-do-list</IonTitle>
          <IonSearchbar value={searchText} onIonChange={e => {
            // typescript 예상 인자가 undefined가 있을 수 있어서 그런 듯.
            let isSearched: string = ""
            if(e.detail.value !== undefined){
              isSearched = e.detail.value;
            }
            setSearchText(e.detail.value!)
            const newList = list.map(item => {
              return item.title.indexOf(isSearched) !== -1 || item.content.indexOf(isSearched) !== -1
              ? ({ ...item, isSearched: true }) 
              : ({ ...item, isSearched: false }) 
            })
            setList(newList)
            localStorage.setItem('savedList', JSON.stringify(newList));
            }
            }></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {initList.map((v : TodoItem, i: number) => (
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
          const newList = [{cardNum: maxNum, title, content, checked: false, isSearched : true}, ...list]
          setSearchText("")
          setList(newList)
          localStorage.setItem('savedList', JSON.stringify(newList));
        }}>추가</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
