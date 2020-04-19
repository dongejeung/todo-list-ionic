#속성 ES6 문법.
ref)
https://velog.io/@decody/ES6-Sheetsheet

1. var의 변수스코프는 function단위, const/let은 block 단위, const는 상수, let는 변수

2. 템플릿 / 백틱 
// 뭔 소린지 잘 모르겟음.

@ 3. 화살표 함수.

함수명 (매개변수) => { 실행문 }

ex)
let square = (num) => {
    return num * num
}

4. 클래스 
=> prototype 기반의 대체제.
자바랑 비슷해보임. 자바 따라한거 같은데?

5. 모듈
모듈을 임포트 하는 방식들.

@ 6. 배열/객체 할당 확장.
ex)
const [a, b, c] = [1, 2, 3]
console.log(a, b, c)	// 1, 2, 3

const obj = {x: 'banana', y: 'apple'}
let {x, y, z}  = obj
console.log(x, y, z)    // x: 'banana', y: 'apple', z: undefined

// 이게 안 익숙한 패턴인데, 자주 쓰이는 패턴인 듯. 
요지는 const 는 상수지만, reference를 지정해놓은 것이라서,
안에 있는 데이터는 바뀔 수 있는 느낌인 듯.
매칭 패턴은 key : value의 대칭 관계인 것 같은데..
1 번 케이스는 key를 const안의 배열의 인자로 삽입해놓은 것 같고,
2 번 케이스는  obj를 key : value(string) 에 , 구분자로 선언해놓은 것 같음.


@ 7. spread(...) 연산자.

ex1)
function sum(x, y = 12) {
    return x + y
}
console.log(sum(4))

//=> 브라우저에서 돌려봄. 매개변수는 x 이고, y는 12로 정해져서 셈이 되는 모양인데, 
매개변수에 이런식으로 적어놓은 건 잘 못 본 형태라서 헷갈린듯.
매개변수는 x, y 두 개 인데, y는 12로 대입을 해서, 실제 함수 사용시에는 매개변수를 하나만 집어넣은 모양인데,
쓸모가 있으니까 이렇게 해놨겠지?
걍
function sum(x) {
    return x + 12
}
console.log(sum(4))
랑 결과는 차이가 없는데..

---

ex2)
function f(x, ...y) {
    return x * y.length
}
console.log(f(3, 'hello', true))

//=> 이렇게 써놓으면 인자의 개수인지, 스트링의 문자의 개수인지 뭔지 헷갈리는 데 
여튼 역산하면 y.length 는 2가 된다는 건 알 수 있음.
귀찮아서 인자의 개수를 다르게 했더니,
결과가 배열의 인자의 개수로 나온다는 것을 파악..
그냥 정의를 써놓으면 편할수도 있을 것 같은데.. 
다음 예시를 보면 배열로 사용한 예제가 나옴.

//=> 준호왈 : ...y는 

ex3)
function ff(x, y, z) {
    return x + y + z
}
console.log(ff(...[1, 2, 3]))

//=> 여기서 ... 은 매개변수를 배열의 형태로 삽입하겠다는 예약어 정도로 보면 되나?

여튼 좀 익어야 할 것 같은데..
기존에 읽었던 노란색 JS 책을 생각해보면 어차피 매개변수는 arguments 로 배열로 관리됬다고 했던 것 같기도 한데..
그냥 편의상 만든 문법인 듯.

//=> 저녁 복습 중. ...을 빼니까 1,2,3undefinedundefined 라고 나옴. 

---

8. Fetch / Promise / Async-await
// 사이트 보고 참고 해라. 

9. Iterator / Generator
// 사이트 보고 참고 해라. 



=====

#리액트 훅. 
ref)
https://velog.io/@velopert/react-hooks


1. useState

배열 비구조화 할당 문법부터 참고.

ex)
const array = ['dog', 'cat', 'sheep'];
const [first, second] = array;
console.log(first, second); // dog cat

//=> = 은 대입연산자 였음. 이퀄이 아님.
array에 3개의 값을 할당한 상수 선언(배열에 상수선언이라 ref가 상수로 지정. 이렇게 쓰는 이유가 있겠지.)
[first, second] 에 array의 배열의 값을 순서대로 할당해줌. 크기가 동일하지 않아도 됨.
좌측 배열의 크기가 크면 undefined 우측이 크면, 할당하고 array에 넘치는 부분은 무시.

//=> 복습 중 생각.  이게 const라 그런가 원래 값이 하나하나 들어가지 않고 레퍼런스만 바뀌던가 뭐 그런 느낌이었던 것도 같은데..

---
ex2)

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

//=> useState(0) 의 0 은 초기값인 것 같고,
setValue 는 게터세터의 세터마냥 값을 셋팅해주는 부분인것 같다.
여기서 value 는 useState(0) 에서 초기에 들어갔던 0이며,
이 값은 setValue()함수에서 setValue에서 값을 어떻게 가공하냐에 따라 변함.
그럼 변한 값이 셋되고, value에서 그것이 표현됨.
이것이 재귀적으로 반복되는 듯.

위의 카운터 함수에서 보면 0이 들어 갔는데, 버튼을 누르는 것에 따라 값을 변경하여 셋해주고,
표현되는 value가 변하며 다시 useState로 변한 값이 들어가 선택에 따라 다시 값이 변함.
선택지가 있는 함수의 재귀적 반복이라고 해야하나 여튼 그런 느낌인가 봄.

=======

1.1 useState 여러번 사용하기.

ex)
import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

//=> 여기서 
const onChangeName = e => {
    setName(e.target.value);
};

onChangeName 라는 함수명은 임의로 지은 것인가 보고(상용함수가 아닌 것 같음. 특히 밑에 nickname을 보면)
e라는 형태는 event 같은 느낌일 것 같은데 기존의 ()로 매개변수가 들어가는 형태는 아닌 것 같다.
내부구조를 정확히 모르니 대충 외워도 될 듯.
궁금할 때 더 보던가 하자.

e.target.value => 해당 이벤트 혹은 code문장 이라기보다는 어차피 대개는 배열을 의미할텐데..
여튼 여기서 사용례를 보면 name, nickname이 target과 매칭이 되고,
name 이나 nickname 등의 key값을 통해 value를 불러오는 것 같다.

//=> 복습 중 생각. 아마 e는 예약어로 쓰였는데 이게 document와 비슷한 역할을 하는 느낌이랄까, 
 그렇고 target.value는 오브젝트 형태로 key : value 형태로 맵핑되어 있는 것과 유사한 구조로 추정됨.
 let a = {a : "adsf", b : "2sdfadf"}
 뭐 이런 느낌이랄까..

=======

나머지는 필요하다 싶으면 더 보자.
귀찮.. 아 ㅅㅂ.. ㅠㅠ

=======

typeScript 도 봐야함..




