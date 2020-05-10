//import React from 'react';
//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab3.css';
import axios from 'axios'



const Tab3: React.FC = () => {
  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=96576bd59eb4e186492708c74321bf4f')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }, [])
  
  return (
    <IonPage>
      <div className="container">
        <header>
            <h1 className="center">기상예보 API(with flex)</h1>
        </header>
        <section className="content">
            <nav>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                </ul>
            </nav>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero beatae fuga! Voluptate placeat saepe aut perspiciatis architecto? Eum, accusantium dolorem! Impedit voluptatum fugiat iure sed adipisci deserunt laborum. Repellat.
            </main>
            <aside>
                AD
            </aside>
        </section>
        <footer>
            <a href="https://opentutorials.org/course/1">홈페이지</a>
        </footer>
    </div>
    </IonPage>

    
  );
};

export default Tab3;
