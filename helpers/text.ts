export const trimByWord = (sentence: string) => {
  let result = sentence;
  let resultArray = result.split(' ');
  if (resultArray.length > 10) {
    resultArray = resultArray.slice(0, 10);
    result = resultArray.join(' ') + '...';
  }
  return result;
};
