![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=Calculator&fontSize=90&animation=fadeIn&fontAlignY=35&desc=Woori%20Fisa%20Project&descAlignY=51&descAlign=68)

# 🔍프로젝트 소개

### 수식을 통해 값을 계산하는 계산기

<br />

_배포 링크_ : https://main.d31q2aadcluvrl.amplifyapp.com/

<br />

# 👨‍👩‍👧‍👦팀원

| [김남혁](https://github.com/knh9612)      | [안성민](https://github.com/zzzdks760)      | [이용진](https://github.com/yjlee0235)      | [유은혜](https://github.com/enee22)      |
| ----------------------------------------- | ------------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| ![김남혁](https://github.com/knh9612.png) | ![안성민](https://github.com/zzzdks760.png) | ![이용진](https://github.com/yjlee0235.png) | ![유은혜](https://github.com/enee22.png) |

</br></br>

# 🌝협업 방식

## 1. 역할분담

- 김남혁 -
- 안성민 -
- 유은혜 -
- 이용진 -
  </br></br>

## 2. 협업 툴

- Git
- Slack
- ESLint
  </br></br>

# 🌟핵심 기능 시연 및 구현 방법

## 1. 계산기능

기본적인 사칙연산 제공 -숫자와 연산자 입력 분리 -연산자 우선순위 지정으로 다항식 계산 기능 제공
상단 박스에 입력, 하단 박스에 결과 값 출력

## 2. 히스토리 기능

히스토리 버튼으로 이전 계산 수행 결과 모달을 통해 제공
히스토리에서 특정 결과 클릭 시 입력 박스와 출력 박스의 값이 변경
스크롤 사용으로 기록 전체를 가져옴

## 1. 계산 기능

AC, Backspace
AC 및 Backspace 버튼 클릭 시, dispatch로 action이 전달.
Backspace : 마지막 문자열이 삭제
AC: CalculateArea와 CalculateResult 모두 초기화

```jsx
const buttonHandler = () => {
  dispatch(action);
  resultDispatch({ type: "AC" });
};
```

```jsx
    case "REMOVE":
      if (data.length > 0) {
        return data.slice(0, data.length - 1);
      }
      return "";

    case "AC":
      return "";
```

```jsx
const reducer = (data, action) => {
  switch (action.type) {
    case "AC":
      return "";
```

=

1. 버튼 클릭시 buttonHandler 호출

```jsx
<button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
  {children}
</button>
```

2. calculatebutton에서 dispatch를 이용하여 RESULT타입인 express를 인자로 넘김

```jsx
//CalculateButton.jsx
const buttonHandler = () => {
  dispatch({ type: "RESULT", expression });
  historyDispatch({ type: "APPEND", expression });
};
```

3. type에 해당하는 RESULT case에서 후위연산 계산을 통해 결과값 전달

```jsx
export const evaluateExpression = (expression) => {
  const infixExpression = splitExpression(expression);
  const postFixArray = infixToPostFix(infixExpression);
  const numberStack = [];
  for (const element of postFixArray) {
    if (Object.keys(MARKS).includes(element)) {
      const right = numberStack.pop();
      const left = numberStack.pop();
      numberStack.push(evaluateWithMark(left, right, element));
    } else {
      numberStack.push(Number(element));
    }
  }
  const evaluateResult = numberStack.pop();
  return evaluateResult;
};
```

4. APPEND 타입으로 historyDispatch 실행, 데이터 추가

```javascript
historyDispatch({ type: "APPEND", expression });
const reducer = (history, action) => {
  switch (action.type) {
    case "APPEND":
      try {
        const expression = action.expression;
        const result = evaluateExpression(expression);
        history.push({ expression, result });
      } catch (error) {
        console.error(error);
      }
      return history;
  }
};
```

History
History 버튼 클릭시 history 값이 포함된 modal 창 열림

```jsx
//모달 열기
const buttonHandler = (event) => {
    openModal();
  };
//HistoryForm 반환
return (
    <>
      <button className="bg-blue-200 hover:bg-blue-300" onClick={buttonHandler}>
        {children}
      </button>
      {isOpen &&
        createPortal(
          <Modal onClose={closeModal}>
            <HistoryForm
              onClose={closeModal}
              onClick={historyHandler}
            ></HistoryForm>
          </Modal>,
          document.body
        )}
    </>
  );
};
```

2. history에서 계산식 클릭시 계산기 입력과 출력으로 전달

```jsx
const HistoryForm = ({ onClick }) => {
  const histories = useCalculateHistory();
  return (
    <div className="h-96 overflow-y-scroll">
      {histories.map((history, index) => (
        <CalculateResultItem
          key={index}
          history={history}
          onClick={onClick}
        ></CalculateResultItem>
      ))}
    </div>
  );
};
```

</br></br>

# 👀트러블 슈팅

## 1.

## 2.

</br></br>

# ⚖️도메인 용어 정의

</br></br>

</br></br>

# 📝회고

### **김남혁**

>

### **안성민**

>

### **유은혜**

>

### **이용진**

>
