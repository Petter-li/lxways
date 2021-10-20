// 将cookie转化为对象
const translateCookieToObject = () => document.cookie.split(';').map((item: string) => item.split('=')).reduce((acc: any, [k, v]: string[]) => (acc[k.trim().replace('"', '')] = v) && acc, {});

export default translateCookieToObject;
