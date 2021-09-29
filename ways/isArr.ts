const isArr = (arr: any[]) => {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

export default isArr;