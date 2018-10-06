const ObjectDeepCopy = (object, deep) => {
  if (deep === 0) {
    return;
  }

  let newObject;
  if (Array.isArray(object)) {
    newObject = [];
  } else {
    newObject = {};
  }

  for (key in object) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      if (deep - 1 === 0) {
        console.log('Object copied is not fully! Key = ', key);
      }
      newObject[key] = ObjectDeepCopy(object[key], deep - 1);
    } else {
      newObject[key] = object[key];
    }
  }

  return newObject;
};

//------------------------------------

const testObject = {
  a: 1,
  b: null,
  c: undefined,
  d: {
    da: 11,
    db: 12,
    dc: {
      dca: 111,
      dcb: 112,
      dcc: {
        dcca: 1111,
        dccb: 1112,
      },
    },
  },
  e: [
    1,
    2,
    3,
    [
      11,
      12,
      {
        ee: 131,
      },
    ],
  ],
};

const testObjectDeepCopy = ObjectDeepCopy(testObject, 3);

testObject[1] = 'new';

console.log('testObject', testObject);
console.log('testObjectDeepCopy', testObjectDeepCopy);
