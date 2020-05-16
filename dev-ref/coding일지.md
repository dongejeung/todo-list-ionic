2020/04/15

1. 로컬 스토리지에 저장된 json 패턴 파악.
=> 코드에 console.log 넣어서 저장형태 파악.
["1241245125","26136136","","345345345","1232323","234234","123123","23252"] 
배열의 형태.
=> parse 를 통해 가져왔을 시 index : "213251" 의 형태.
* js 는 이것저것 데이터 집어 넣어 보는게 빠를 수 있음.

2. 삭제시에는 index를 기반으로 localstorage 데이터를 삭제해야함.
개발자도구에서 localstorage 입력후 content assistant를 통해 유추.
안되면 검색.
검색했더니 보통 localstorage를 사용할때는 key : value 의 형태로 사용을 하는 것 같다.
기존에 준호가 작성해준 코드에서도 key value 로 했으나, savedList 라는 키에 배열식으로 넣었었나 보다.
버튼형태를 타이틀/ 컨텐트 식으로 해서 key value 의 형태로 넣는 것이 어떨까 생각해본다.

* 근데 개발자도구에서 remove(savedList) 썼더니 에러가 나네.. ㅋㅋㅋㅋ
=> localstorage에 값이 없어서 그런가 싶어서 하나 넣어줘볼까..
L.20 JSON.parse 에서 에러 발생.
unexpected end of JSON
removeItem을 통해서 비워놨던 데이터를 JSON 형태라 가정하고 파싱해서 그런 것으로 예상.

=> 예상이 맞음. useState의 개념에는 아직 익숙하지 않지만, 
localStorage.setItem('savedList', JSON.stringify(["sample"]));
라고 개발자 도구에 초기값을 입의로 넣어주니 레이아웃이 동작.

3. 데이터 삭제 기능을 개발자 도구로 러프 테스트.

뭔가 좋은 형태는 아닌 것 같지만, 로컬스토리지에서 데이터를 불러와서,
거기서 삭제를 한 후 다시 로컬스토리지로 집어 넣는 것이 바로 생각남.

useState 와 ES6 문법, 컨텍스트의 개념 등으로 인해 개발자 도구에서 러프하게 빼는 것 실패.
=> 기초 개념 공부하기로 함.

// 물론. 인풋의 형태를 타이틀 / 컨텐트 로 구분하는 경우와 아닐 경우가 달라질 수 있다.
데이터 저장 방식에 대해서는 생각해볼 필요가 있다. 일단 삭제 기능 테스트 부터.

4. 이후 삭제 버튼을 docs 에서 찾아서 기능과 연동.

2020/04/16

* 데이터 이동과 가공시 마다 타입의 범위를 고려해두는 시스템을 생각해보면 좋을 것 같음.

* 일단 준호가 보내준 react, ES6 등 기본자료 훝어보기.

===

docs 에서 삭제버튼을 계속 못찾겠다..

2020/04/17

어제 버튼형태를 찾아 넣기는 했었음.
*근데 버튼은 다 같은 버튼이고 형태나 기능은 지가 넣으면 되는 거였음.

5. JSON.stringigy, JSON.parse 를 몇 번 테스트 케이스 해봄.
아마 객체 배열의 형태로 넣야되지 싶음.

개발자 도구 테스트 :
JSON.stringify([{title : "12313", contents : "1231243"}, {title : "ti2", contents : "tada"}]);
"[{"title":"12313","contents":"1231243"},{"title":"ti2","contents":"tada"}]"

이걸 다시 parse 하려니까 안되네.
=> 검색했다.
배열, 혹은 객체를 담네..

ref)
https://mkil.tistory.com/322

아 요거 참고하면 될 듯.

이제 로컬스토리지에 담고 빼고 해보면 될 듯.

-------

2020/04/18

낮에 하다가 잘 안된 것을 준호가 도와줌.

타입스크립트를 쓰고 있는데.. 
내가 타입스크립트를 쓰고 있다는 걸 인지를 못했네;;

뭐 자바 문법같은게 (제너릭하고 클래스 같이 생긴게) 들어가고 그러네..;;

삭제버튼 css하고 기능 이상하게 만들어 놓음.

하나만 남기고 다 지워짐..

list.map 안에 del 버튼이 있어서 그런가 추론은 하는데..

// 개발도 간만인데 ES6, react, typescript 다 모르는 것이니.. 초반에 좀 헤맬수도 있겠네..

=======

2020/04/19

준호가 도와줘서 삭제 기능 완성.
예상과는 다르게 list.map 내부에 있어서 그런 것은 아니었음.
아래 추가 버튼 코드를 복사해서 하다 보니..
const newList = [{title, content}, ...list]
라는 요소를 복붙 했는데..
이게 잘못 됐던 듯.


=======

2020/04/20

체크박스는 때려 넣는데..
값 조작 셋팅이 안되네..

=======

2020/04/22

객체배열의 특정 값 수정.
https://velopert.com/3638

근데 왜 array.[i] 이런 식으로 배열의 인자에 접근하는 게 안되지..

예시 보면 다들 id를 배열의 인자번호 같이 쓰는 것 같네..

객체 배열이라 그런가..

객체에 cardNum 이라는 요소 추가하고,
추가버튼 누를시
setCardNum(list.length+1)
로 카드번호 부여해줌.

-----
- number 초기값 셋팅으로 로컬스토리지 배열의 길이를 대입.

const [cardNum, setCardNum] = useState<number>(savedList.length);
-----
* 카드의 번호를 i의 역순으로 하고 싶음.
전체 배열의 길이를 구하고 -1 씩 뺴서 돌려야되나..
일단 스킵하고,
-----
- 상단 카드 번호 표시되는 것 일단 빼버림.
나중에 번호가 겹칠 우려가 있을 것으로 예상.
-----
- 체크 누를시 해당 배열의 인자의 checked 값 true로 변경.

역시 콘솔로그가 짱이다.
console.log(e)
를 통해서 스코프 안에 무엇들이 들어있는지 파악했다.
내가 찾는 checked 의 값이
e.detail.checked 안에 들어 있다.
e라는 것이 본인의 태그 안에 형성되어 있다.

// 아 샛길로 빠져서, 형태 바꾸고 있네;;

e에 들어있는 값은 check에 대한 값밖에 없는데..

체크하는 것 자체 이벤트로 배열에 적절한 값을 대체하는 건 
잘 안될지도 모르겠다.
일단 체크한 상태로 추가를 하면 변경점 있는지 보자.
true 값이 들어가 있는지 보려고 한다.
=> 안 들어감.
-----
일단
const newList = list.map(item => item.cardNum === v.cardNum
    ? ({ ...item, checked: e.detail.checked }) 
    : item)

코드로 인해서 배열 안에 checked 값이 변하게는 해 놓았다.
근데 왜 체크 표시는 사라지니?

개인적으로 삼항 연산자 안좋아하긴 하는데..

-----
할일 
1. newList에는 checked 값이 true, false 로 의도한대로 바뀌나,
setChecked(e.detail.checked)
을 사용할 경우, 둘 다 체크상태로 보여지고,
해당 문장을 해제할 경우,
둘다 체크해제 상태로 보이게 된다.

2. cardNum에 unique 값 부여하기.
=> 배열의 cardNum중에서 최대값을 찾아서 거기서 1증가한 값을 cardNum에 
삽입하는 수식을 생각함.


2020/04/23

아 체크가 사리지는 이유를 대충 추론했다.
아 헷갈리는데..
그냥 저장 버튼을 만들까.
아까 배열 콘솔로그가 포문 돌기도 한것 같은데..
setChecked 사용시
루프 돌아서 들어가네..
사용 안해도 루프가 돌아가는 구나..

setChecked 는 사용 안하는게 맞는 것 같고..
이게 왜 두바퀴씩 돌아가지?
클릭을 하면 값이 바뀌었다가.
다시 바뀌네..
아 카드넘 중복때매 그런가..
아닌데.. 하나만 있어도 그러네..

아 해결했다. 
이게 복붙의 폐해다.
checked={checked} 
태그 안에 이게 있어서 그런가 보다.
대입이 두번 일어나서 그런 듯.
---
됐다. 체크가 연속으로 안일어나고,
새고고침해도 체크가 남아있다.
const [checked, setChecked] = useState<boolean>(false);
<IonCheckbox checked={v.checked}


---

unique 값 부여는 후순위로 미루고,
tab3에 체크된 리스트만 표시하는 것을 먼저 해보자.

됐다.
tab3 상단에
const newlist = list.filter((v, ii) => v.checked === true);
하고 카드 그려줄때 newList.map 으로 그려줬다.
---
자동 렌더링은 새로고침 해줘야 된다.
---
cardNum에 unique값 넣어주기.
가설.
1. 배열에서 cardNum값만을 뽑아서 새로운 배열을 만든다.
2. 그 중 가장 큰 값 보다 1 증가시킨 값을 cardNum을 추가할 때 삽입한다.

// 현재는 list.length로 넣고 있음.
삭제할 시 번호가 엉킴.

---
흠 얼추 구현했는데 자꾸 이상한 현상이 나오네.
setCardNum(maxNum)
setList(newList)
를 같이 써서 그런가.
자꾸 같은 값이 들어가네.
상단에 
const [cardNum, setCardNum] = useState<number>(0);
일라나,
내가 확실하게 모르니까..
때려잡기로 추측하게 되네..
코드는
const cardNumlist: number[] = [];
list.forEach(Element => cardNumlist.push(Element.cardNum))
const maxNum = Math.max.apply(null, cardNumlist)+1
setCardNum(maxNum)
const newList = [{cardNum, title, content, checked}, ...list]
setList(newList)
localStorage.setItem('savedList', JSON.stringify(newList));

이렇게 되있는데,
list는 상단에 useState로 localstorage에 있는 savedList를 가져온다.

cardNumList 에는 foreach로 list에서 cardNum만을 뽑아서 할당해주고,
Math.max.apply(null, cardNumList) 로 최대값을 구하고,
1을 더해서
흠 보면 
setCardNum(maxNum)
setList(newList)
가 같이 쓰인 비슷한 케이스가 없네.

=> 아마도 상단에 있는 것 처럼. setCardNum을 없애고,
newList 안에 cardNum 값 안에 maxNum을 집어넣고,
setList 해줘야되지 싶은데..
물론 이것도 추측이다.
setCardNum(maxNum)을 주석처리하니까
상단 useState의 default 값인 0이 들어가는 것 같네
---
해결했다.
const newList = [{cardNum: maxNum, title, content, checked}, ...list]
이런 식으로
setCardNum(maxNum) 을 안쓰고,
maxNum 값을 삽입하니까 된다.

useState를 두번쓰니, 뭔가 로직이 꼬이는 게 있나보다.
[{cardNum: maxNum, title, content, checked}, ...list]
이런식의 사용방식이 익숙하지 않아서 그런가보다.
이제 겹치는 값이 들어가는 일은 없다.

새로 발견한 에러
1. 체크를 한 상태에서 컨텐츠를 추가할시 체크표시가 추가로 되는 이슈가 있다.
2. 체크 상태인 것을 삭제하려고 하면 체크만 없어지고,
체크가 없는 것만 삭제가 된다.

---

2번 이슈는 코드가 수정되면서,
const newList = list.filter((v, ii)=> ii !== i)
부분이 제대로 먹히지 않는 것 같다.

여러가지 테스트를 거쳐보니,
뭔가 전반적으로 엉켜있다.
---

준호가 문제를 해결해주었다.
onChange 이벤트와 렌더링 하는 과정에서 재랜더링 되고 
뭐 이런 과정을 거쳐서 그렇다.
---
내가 개선할 점들은
react, typescript, ES6 기초
(list.map, list.filter 같은 것도 잘 안써봤는데 이건 js
이게 => 같은 화살표 함수로 씌여져있고, 
typescript를 써야하고,
그 와중에 useState 써야하고,
뭐 이래서 그런 점도 있다.)

문제해결 테크닉,
console.log 찍을 때도 위치를 함께 찍어준다던데,
localstorage 삭제해주는 것이라든지,
확인할 기능 외에는 주석처리를 한다든지
이런 빠르게 문제 해결을 할 수 있는
테크닉들이 부족한 것 같다.

뭐 공부하고, 새로운 형태들에 익숙해지고,
코딩을 많이하고, 공부도 많이하면 괜찮아질 것 같다.
---

2020/04/24

- 검색 기능 추가하기.
ion-searchbar 이용.

단어입력 변화에 따라,
하단의 카드들을 리렌더링 해줘야 하고,
그것은 list의 title, content 두 항목이다.
Search Text: {searchText ?? '(none)'}
이것이 검색과 관련된 항목인 듯 하다.
localstorage의 원본은 건드려서는 안된다.
---
docs의 ion-searchbar 가 있다.

2020/04/25

js string 검색이라고 치니까,
indexOf, lastIndexOf 가 나오네..
개발자 도구에 테스트.

indexOf에 값이 없으면 -1이 return 됨.

1. list 에 search 관련 property 를 넣을 것인가,

2. 해당되는 것들만 newList에 담아서 List 변화없이 해줄 것인가.
// setList에는 넣고, localstorage에만 저장 안하면 될라나.

2번 안에 list.filter 함수를 사용해서 해보자.

뭔가 캐스팅 같은 건 잘 안쓰나, 
if문에서 걸러서 쓰려고 했는데 잘 안되네;;
흠 타입스크립트라서 예전같이 편하게 안되네..
indexOf 에는 string만 들어갈 수 있는데,
해당 변수가 null or undefined를 가질 수 있어서 그런가봄.

얼추 비슷하게 구현을 했는데,
검색어 입력시 setList(newList)를 하면서 리렌더링이 되서
검색어 입력 해놓았던 게 사라진다.

흠..
search 관련 property를 집어넣어야 하려나..
그게 나을 것 같은 기분이 듬.
대충 후려치기 사고 시뮬레이션을 했을 때

1. 하단에 isSearched : false로 박아주고.

2. 로컬스토리지 비워주고 새 양식으로 추가.

3. 검색 조건에 해당된 리스트만 false 값으로 바꿔주기.

4. 리스트에 담가주고, localstorage에도 변경값 저장.

5. setSearchText(e.detail.value!) 통해서 검색어는 유지하도록 함.

6. 렌더링할때 true인 값만 표시되도록 함.

7. 추가시에 검색어에 ""로 비워주도록 함.

====
const newList = list.map(item => {
    return item.title.indexOf(isSearched) !== -1
    ? ({ ...item, isSearched: true }) 
    : ({ ...item, isSearched: false }) 
})
기존의 삼항 연산자를 변형해서 삽입함.

렌더링시 true인 값만 표기되도록 하려면,
초기값을 true로 해야될 것 같음.
=====
얼추 구현하긴 했는데 코드가 더럽다.

그리고 검색어 입력후 새로고침하면,
검색어는 날아가는데 리스트는 고대로야..

검색어 입력 상태에서
하단에 추가를 누르면,
검색어 날아가고 리스트 정상적으로 표기됨.
추가시 true로 넣어주는 작업 때문에 그런듯.

새로고침시 전부 true를 넣어주던가 뭐 다른 방법을 강구하던가 해야겠음.
=====

2020/04/27

-! 검색이 제목만 하게 되있는데, 
컨텐츠 내용도 검색하도록 수정.

- 새로고침시 검색어 삭제된 것 반영해서 전체 리스트 표시되게 하기.
// 현재 상태대로면, 리스트내 isSearched 를 다 true로 바꾸어야 한다.

1. 처음 페이지 로드시 상단에 돔 객체 조작으로, IonSearchText에 "" 값을 셋팅하면 될 것 같다.

=> document.getElementById("searchBar").val 이런식으로가 안되네;;

=> 검색해보니 ref 속성을 설정하라는데?
=> 시키는 대로 하려니까 this 라는 것이 안먹는데..
---

검색 입력하면, list가 변경되고(isSearched)
입력 상태에서 리로드하면, isearched 값은 변경된 그대론데,
onChange 이벤트를 타지 않아서 그런듯.

value={searchText} 값에 디폴트값으로 "" 넣을 수 있으면 될 것 같기도 한데..
함 시도해볼까?
docs 보니까 이미 default가 '' 임.
---
일단 onload시 렌더 전에 값을 뻉뻉이 돌면서,
다 true로 한 번 바꿔볼까?
---
아 또다른 에러를 발견했다.
검색 이후에 삭제를 하면 삭제가 제대로 안된다.
이상하게 동작함.
의존성 있는 코드를 수정해서 그런듯.
initList.map
이 코드때매 그렇지 않을까 추정.
오늘은 여기까지 하고,
내일은 한 번 구조도라도 그려보자.
흐름이 헷갈린다.
---

2020/05/05

- 검색기능 구현 및 버그픽스.

// 플래그를 넣어서 검색시 렌더링을 다르게 해볼까 생각했는데, 
뭔가 if문이 {} 단위로 잘 안들어가네.

expression expected..

블럭 안에 있으면 안되는 거였네..
안 된다. 걍 텍스트로 박히는 거였네..

js 사용하려면, {} 블록으로 묶어야 되는 것은 맞는데..

console.log() 는 블록 안에 들어가서 잘 동작하는데..

===
2020/05/06

typescript 기초 공부.
https://www.tutorialspoint.com/typescript/index.htm
참조.
---

2020/05/07

어제 보던 typescript 기초 공부 이어서.
===
2020/05/08

어제 보던 typescript 기초 공부 이어서.

===
2020/05/10

준호의 도움 받아 검색기능 구현.
---
flex 도입 중.
=> 생활코딩 참조해서 껍데기 폼 만듬.
96576bd59eb4e186492708c74321bf4f

=> 위 경도 적용 날씨 가져오기.
아이콘 적용해서 바꾸게 해주지.

===

2020/05/11

- 위도 경도 가져오기.

=> 코드를 베껴서 가져왔는데,
브라우저에서 위치정보 접근 허용이라는 글씨가 뜬다.

7일치 날씨 데이터를 리턴받으려고 하니까,
api docs를 보니, 유료 계정에만 제공된다고 되있다.

- js의 navigator.geolocation.getCurrentPosition
을 통해 위도 경도 가져옴.
// 함수의 인자 형태를 파악하고 싶었으나, 개발자도구에서는 못찾고,
다른 코드 샘플이나, mozila 등의 docs에서 함수 형태의 인자들을 찾음.
개발자도구상에서 리터럴로 입력시 native code 라고 나오고 그랬음.

- useState를 통해 위경도 셋팅.
// default는 서울의 위,경도값에 가까운 37, 126으로 셋팅.

- api 쿼리문에 
let position:string = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + latitude + "&lon=" + longitude + "&cnt=" + cnt +"&appid=96576bd59eb4e186492708c74321bf4f"
위, 경도 값이 number 아닌가 싶은 생각도 있고, typescript 라든지 뭐 걸리진 않을까 걱정했는데,
그냥 string 형태로 인자삽입의 형태로 날라가서 리턴됨.

로 api 사이트에 호출 보냄.
===
+ 추가적으로 flex를 사용해 껍데기를 좀 다듬음.
// 공간 디자인에 대한 친숙화 필요.

===
2020/05/12

- Ion-icon 사용 해보는 중.

2020/05/16

- 준호코드 참고, 기존 todo-list 수정.

===

 # 코드 살펴보는 중.

디렉터리 구조 파악.

- components
=> 버튼, div 등 부품들.

- hooks
=> 액션?에 따른 동작 방식 규정?

- pages
=> 실제 표시되는 페이지.

- store
=> DTO 와 유사하게 데이터를 담는 그릇.

===

tab1 => 준호 샘플코드 참조하여 수정.

1. component 분리 따로 저장.

2. store 
