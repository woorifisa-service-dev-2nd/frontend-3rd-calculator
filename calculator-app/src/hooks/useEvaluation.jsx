import { MARKS } from "../constants/Mark";

const splitExpression = (expression) => {
  const splitResult = [];

  let tmp = "";
  for (const char of expression) {
    if (Object.keys(MARKS).includes(char)) {
      if (tmp !== "") {
        splitResult.push(tmp);
      }
      splitResult.push(char);
      tmp = "";
    } else {
      tmp += char;
    }
  }

  if (tmp !== "") {
    splitResult.push(tmp);
  }

  return splitResult;
};

const infixToPostFix = (infixArray) => {
  const postFixResult = [];
  const stack = [];

  for (const element of infixArray) {
    if (Object.keys(MARKS).includes(element)) {
      if (stack.length !== 0) {
        while (
          stack.length !== 0 &&
          MARKS[stack[stack.length - 1]] <= MARKS[element]
        ) {
          postFixResult.push(stack.pop());
        }
      }
      stack.push(element);
    } else {
      postFixResult.push(element);
    }
  }

  while (stack.length !== 0) {
    postFixResult.push(stack.pop());
  }

  return postFixResult;
};

const evaluateWithMark = (left, right, mark) => {
  switch (mark) {
    case "x":
    case "X":
      return left * right;
    case "/":
      if (right === 0) {
        throw new Error("0으로 나눌 수 없습니다");
      }
      return left / right;
    case "%":
      if (right === 0) {
        throw new Error("0으로 나머지 연산을 할 수 없습니다");
      }
      return left % right;
    case "+":
      return left + right;
    case "-":
      return left - right;
  }
};

export const evaluateExpression = (expression) => {
  const infixExpression = splitExpression(expression);
  const postFixArray = infixToPostFix(infixExpression);

  const numberStack = [];
  for (const element of postFixArray) {
    if (Object.keys(MARKS).includes(element)) {
      const right = numberStack.pop();
      const left = numberStack.pop();
      if (right === undefined || left === undefined) {
        throw new Error("연산자의 개수가 너무 많습니다");
      }
      numberStack.push(evaluateWithMark(left, right, element));
    } else {
      numberStack.push(Number(element));
    }
  }

  const evaluateResult = numberStack.pop();

  if (isNaN(evaluateResult)) {
    throw new Error("잘못된 수식입니다");
  }

  return evaluateResult;
};
