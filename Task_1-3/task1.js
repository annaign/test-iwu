const brackets = {
  '(': ')',
  '{': '}',
  '[': ']',
  '<': '>',
};

const CreateStrAllBrackets = brackets => {
  let str = [];
  for (key in brackets) {
    str.push(key);
  }
  for (key in brackets) {
    str.push(brackets[key]);
  }

  return str.join('');
};

const CheckOpenBracket = char => {
  for (key in brackets) {
    if (char === key) {
      return 0;
    }
  }
  return 1;
};

const CheckCloseBracket = (char, lastOpenBracket) => {
  for (key in brackets) {
    if (char === brackets[key] && lastOpenBracket === key) {
      return 0;
    }
  }

  return 1;
};

//В случае ошибки возвращаем 1, в противном случае 0
const CheckBraces = str => {
  const strAllBrackets = CreateStrAllBrackets(brackets);

  const cutNonBrackets = value => {
    return strAllBrackets.indexOf(value) !== -1;
  };

  const arrShortStr = str.split('').filter(cutNonBrackets);
  let arrOpenBrackets = [];

  for (let i = 0; i < arrShortStr.length; i++) {
    if (CheckOpenBracket(arrShortStr[i]) === 0) {
      arrOpenBrackets.push(arrShortStr[i]);
      continue;
    } else {
      if (CheckCloseBracket(arrShortStr[i], arrOpenBrackets.pop()) === 1) {
        return 1;
      }
    }
  }
  if (arrOpenBrackets.length > 0) {
    return 1;
  }

  return 0;
};

//---------------------------------------------

const arrTest = [
  '---(++++)----',
  '',
  'before ( middle []) after ',
  ') (',
  '} {',
  '<(   >)',
  '(  [  <>  ()  ]  <>  )',
  '   (      [)',
];

arrTest.forEach(test => {
  console.log('test: ', CheckBraces(test), ', line: ', test);
});
