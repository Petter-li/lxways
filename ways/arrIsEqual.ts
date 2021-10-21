// 比较两个数组是否相等, 不比较地址，只比较值
const arrIsEqual = (a: any[], b: any[]): boolean => JSON.stringify(a) === JSON.stringify(b);

export default arrIsEqual;