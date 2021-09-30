// 数组中获取重复的对象
// key需为同一类型，比如都为字符串或数字类型
const  findManyItemInArr = (arr: { [propName: string]: any }[], key: string) => {
  const obj: any = {};
  const result = arr.reduce((cur, next) => {
    if (!obj[next[key]]) {
      obj[next[key]] = true;
    } else {
      cur.push(next);
    }
    //  obj[next[key]] ? '' : obj[next[key]]=true && cur.push(next);
    return cur;
  }, []);
  return result;
}
export default findManyItemInArr;