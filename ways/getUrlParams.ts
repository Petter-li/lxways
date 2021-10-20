// 将URL参数转换为对象 只能传?后面的字符串（包括?）

const getUrlParams = (query: string) => Array.from(new URLSearchParams(query) as any).reduce((p: any, [k, v]: any) => Object.assign({}, p, { [k]: p[k]   ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }),{});

export default getUrlParams;