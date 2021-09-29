import isArr from './isArr';
const isRepeatArr = (arr: any[]) => {
  if(!isArr(arr)) {
    console.error('参数不为数组');
    return false;
  }
  return Array.from(new Set(arr)).length != arr.length;
};

export default isRepeatArr;