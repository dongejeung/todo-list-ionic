flex의 역사.

table, position, float 등 
레이아웃을 표현하기 위한 요소들을
더 잘 표현하기 위해 flex가 등장함.
---
flex

container
    item

container의 자식으로 item이 있는 구조.
각각의 요소에 부여하는 속성들이 다르게 정해져 있다.
===
div : block속성임.

1. 부모(container)의 
style에

display:flex;

라는 속성을 주어야 함.
-----

2. 부모(container)에

flex-direction:row;

row가 기본, row-reverse, column, column-reverse 등.

부모 요소 내에서 자식 요소의 배치를 뜻하는 듯.

-----

3. item의 속성.

3-1.
.item:nth-child(2) {
    flex-basis: 200px   => flex 의 방향에 해당되는 element의 크기를 정함.
    flex-grow:2;
}
---

3-2. 
flex-grow: 1;   => 부모 영역의 공간을 n빵해서 나눠 가지게 된다. 
// default 0,

//=> 특정 자식 요소의 flex-grow 값을 다르게 배치하면, 
=> 부모 요소에서 자식요소가 가질 partition의 비율을 정할 수 있음.

---
// 반응형 css 인가봄.

3-3.
flex-shrink: 0; => 1의 경우 같이 줄어듬.

// 창의 크기가 줄어드는 것을 방지할 수 있음. 기준은 basis.
// 이것도 shrink 전체중에서 어떤 비율로 고통을 분담할지 정함.
---

4. holy grail layout.
// 화면에 크기에 따라서 main 의 레이아웃이 작아짐.

        header
nav     main        ad
        footer

---

// 아우 귀찮아서 하단에 코드 복사해놓겠다.

<!doctype>
<html>
<head>
    <meta charset="utf-8">
    <style>
        .container{
            display: flex;
            flex-direction: column;
        }
        header{
            border-bottom:1px solid gray;
            padding-left:20px;
        }
        footer{
            border-top:1px solid gray;
            padding:20px;
            text-align: center;
        }
        .content{
            display:flex;
        }
        .content nav{
            border-right:1px solid gray;
        }
        .content aside{
            border-left:1px solid gray;    
        }
        nav, aside{
            flex-basis: 150px;
            flex-shrink: 0;
        }
        main{
            padding:10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>생활코딩</h1>
        </header>
        <section class="content">
            <nav>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                </ul>
            </nav>
            <main>
            </main>
            <aside>
                AD
            </aside>
        </section>
        <footer>
            <a href="https://opentutorials.org/course/1">홈페이지</a>
        </footer>
    </div>
</body>
</html>