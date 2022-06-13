const isArr = (arr: any[]): boolean => {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

export default isArr;