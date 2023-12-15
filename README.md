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

- 김남혁 : 기획 및 앱 디자인
- 안성민 : Context API 이용하여 수식 상태 변경 구현
- 유은혜 : 모달 창 구현
- 이용진 : 수식으로 계산하는 로직 구현 및 전체적인 디렉트
  </br></br>

## 2. 협업 툴

- Git
- Slack

  </br></br>
# ⚖️도메인 용어 정의
* NumberButton: 숫자
* OperatorButton: %, /, +, -, x, .
* InputActionButton: AC, <
* HistoryButton: :스톱워치:
* CalculateButton: =
* reducer action
* "INPUT": 수식 끝에 문자 추가
* "REMOVE": 수식의 끝 문자 제거
* "AC": 수식을 빈 문자열로 변환
* "HISTORY": 선택한 history상태로 변경
* "RESULT": 수식을 중위 표기법에서 후위 표기법으로 변환 후 계산
* "APPEND": 수식과 계산 결과값을 history에 추가

# 🌟핵심 기능 시연 및 구현 방법

## 1. 계산기능

기본적인 사칙연산 제공 -숫자와 연산자 입력 분리 -연산자 우선순위 지정으로 다항식 계산 기능 제공
상단 박스에 입력, 하단 박스에 결과 값 출력

## 2. 히스토리 기능

히스토리 버튼으로 이전 계산 수행 결과 모달을 통해 제공
히스토리에서 특정 결과 클릭 시 입력 박스와 출력 박스의 값이 변경
스크롤 사용으로 기록 전체를 가져옴

###  계산 기능

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
  }
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

### History

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

## 1. 수식계산

수식을 문자열로 저장을 하고 '=' 이 눌렸을 때 계산이 되어야 했는데
연산자 우선순위를 고려해야 했습니다.
중위 표기법으로 작성된 수식을 후위 표기법으로 변경하고 스택을 이용하여 계산을 진행하여
문제를 해결했습니다.


</br></br>



</br></br>

# 📝회고

### **김남혁**
> context API를 사용하면 프롭스를 직접 내려주는 것보다 코드를 좀 더 직관적이게 볼 수 있다는 것을 느꼈다. 또한, ,직접 구현해 보는 것의 중요성을 다시 한 번 느낄 수 있었다.

### **안성민**
>기존의 props를 통해 전달하는 방식은 하위 컴포넌트에 계속해서 값을 넘겨주게 되어 하위 컴포넌트가 많아질수록 복잡해져서 코드의 가독성이 낮아지는 단점이 있었습니다. 그 단점을 개선하기 위해 Context API를 적용하여 동일한 문맥에 해당하는 컴포넌트들을 하나의 독립된 그룹으로 관리하여 코드의 가독성과 재사용성을 높이는 좋은 경험이었습니다.

### **유은혜**
> 리액트를 처음 다루어봤는데, 정보를 넘겨주는 과정이 상당히 어려웠다. 하지만 모르는 부분에 대해서는 팀원들의 도움과 검색을 통해 많이 배울 수 있었고, 특히 코드의 재활용과 children 파트에 대해서 이전에 비해 이해도가 높아진 것을 체감할 수 있었다

### **이용진**
> 팀원과 함께 계산기라는 주제를 정하고, 구체화해나가며 기획하는 과정이 좋았습니다. 또한 Context API와 useReducer를 함께 사용하여 의존성을 느슨하게 만들어 코드의 가독성을 향상시키는 결과를 가져와 너무 재미있었습니다.
