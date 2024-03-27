export const FindMostRepeatedIcon = (array: string[]) => {
  let array2 = array;
  array2 = array2.filter((word, i) =>  word === array[i + 1]);
  if (array2.length === 0) {
    return array[0];
  } else {
    return array2[0];
  }
};
