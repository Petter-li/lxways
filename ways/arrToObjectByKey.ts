// 把由对象组成的数组根据某个Key转化成对象

const arrToObjectByKey = (arr: { [propName: string]: any }[], key: string) => Object.fromEntries(arr.map((it) => [it[key], it]));

export default arrToObjectByKey;