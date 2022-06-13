// 当数组中每一项为对象时，根据对象的某个key来去重
const arrDuplicateRemoveByKey = (arr: { [propName: string]: any }[], key: string): { [propName: string]: any }[] => {
  const obj: any = {};
  const result = arr.reduce((cur: any[], next) => {
    if (!obj[next[key]]) {
      obj[next[key]] = true;
      cur.push(next);
    }
    //  obj[next[key]] ? '' : obj[next[key]]=true && cur.push(next);
    return cur;
  }, []);
  return result;
}
export default arrDuplicateRemoveByKey;