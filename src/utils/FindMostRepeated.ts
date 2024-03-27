export const FindMostRepeated = (array: string[]) => {
  let array2 = array;
  array2 = array2.filter((word, i) => {
    for(let index = i + 1; index < array2.length; index++){
      if(word === array[index]){
        return true;
      }
    }
  });

  if (array2.length === 0) {
    return array[0];
  } else {
    return array2[array2.length - 1];
  }
};
