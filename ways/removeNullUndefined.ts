// 从对象中删除所有 null 和 undefined 的属性

const removeNullUndefined = (obj: { [propName: string]: any } ) => Object.entries(obj).reduce((a: any, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});

export default removeNullUndefined;