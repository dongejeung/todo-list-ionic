import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonIcon, IonImg} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab3.css';
import axios from 'axios'
import { happy } from 'ionicons/icons';

const Tab3: React.FC = () => {
  
  // getCurrentPosition함수의 인자, success, error function, option값.
  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }, function(error) {
    console.error(error);
  }, {
    enableHighAccuracy: false,
    maximumAge: 0,
    timeout: Infinity
  });

  const [latitude, setLatitude] = useState(37);
  const [longitude, setLongitude] = useState(126);
  const cnt:number = 7;

  let position:string = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&cnt=" + cnt +"&appid=96576bd59eb4e186492708c74321bf4f"
  console.log(position)

  useEffect(() => {
    // api 사용용 axios 라이브러리.
    axios.get(position)
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
            <IonIcon icon={happy}></IonIcon>
            <IonIcon name="rainy"></IonIcon>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                </ul>
            </nav>
            <main>
                <div className="item">월<IonIcon name="rainy"></IonIcon></div>
                <div className="item">화</div>
                <div className="item">수</div>
                <div className="item">목</div>
                <div className="item">금</div>
                <div className="item">토</div>
                <div className="item">일</div>
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
