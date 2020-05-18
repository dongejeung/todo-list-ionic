import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useState } from 'react'

import { onEnterPress } from '../../hooks/use-enter'
import { useStore } from '../../hooks/use-store'

export const Card = () => {

    return(
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
       )
       
}