function funcNew(s, a, b) {
  if (s.match(/^.?$/)) {
    return -1;
  }

  var index = s.length - 1;

  while (index > 0) {
    if (
      s.substring(index, index + 1) == a ||
      s.substring(index, index + 1) == b
    ) {
      return index;
    }

    index = index - 1;
  }

  return -1;
}

//---------------------------------------------

function func(s, a, b) {
  //Если s равно ""
  if (s.match(/^$/)) {
    return -1;
  }

  var i = s.length - 1;
  var aIndex = -1;
  var bIndex = -1;
  // if (s.length < 2) console.log('length');

  // Прекратить когда первым будет найден символ "a". Или симол "b".
  // Не искать, когда s состоит из одного символа
  while (aIndex == -1 && bIndex == -1 && i > 0) {
    //Находим место в s символов "a" и "b". Поиск с конца строки.
    //если текущий символ это "a"
    if (s.substring(i, i + 1) == a) {
      aIndex = i;
    }
    //если текущий символ это "b"
    if (s.substring(i, i + 1) == b) {
      bIndex = i;
    }
    i = i - 1;
  }

  // Если в строке есть символ "a"
  if (aIndex != -1) {
    // и нет символа  "b"
    if (bIndex == -1) {
      // вернуть индекс "a"
      return aIndex;
    } else {
      // Если в строке есть оба символа, вернуть больший индекс
      return Math.max(aIndex, bIndex);
    }
  }
  // Если в строке нет символа "a", но есть "b"
  if (bIndex != -1) {
    // вернуть его индекс
    return bIndex;
  } else {
    return -1;
  }
}

const arrTest = [
  ['', '', ''],
  ['', '', 'b'],
  ['', 'a', ''],
  ['', 'a', 'b'],

  ['a', '', ''],
  ['a', '', 'b'],
  ['a', 'a', ''],
  ['a', 'a', 'b'],
  ['a', 'b', 'a'],
  ['a', 'a', 'a'],
  ['a', 'b', 'b'],

  ['aa', '', ''],
  ['aa', '', 'b'],
  ['aa', 'a', ''],
  ['aa', 'a', 'b'],
  ['aa', 'a', 'a'],
  ['aa', 'b', 'a'],
  ['aa', 'b', 'b'],

  ['ba', 'a', 'b'],
  ['ba', 'b', 'a'],
  ['ba', 'a', 'a'],
  ['ba', 'b', 'b'],

  ['aaa', 'a', 'b'],
  ['aaa', 'b', 'a'],
  ['aaa', 'a', 'a'],
  ['aaa', 'b', 'b'],

  ['baa', 'b', 'b'],

  ['zzz', 'a', 'b'],
];

arrTest.forEach(test => {
  console.log('test: ', test, ' => ', func(test[0], test[1], test[2]));
});

console.log('----------------------------');

arrTest.forEach(test => {
  console.log('test: ', test, ' => ', funcNew(test[0], test[1], test[2]));
});
