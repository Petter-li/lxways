## lxways

### 库的介绍
比Lodash更重一点的业务方法  

### 库的作用
写一些工作中用到的简单方法

npm install lxways

### 支持按需引入  
import { arrIsEqual } from 'lxways'; // 全量引入  
import arrIsEqual from 'lxways/dist/src/arrIsEqual'; // 只引入arrIsEqual  


### 方法调用举例

arrDuplicateRemoveByKey：当数组中每一项为对象时，根据对象的某个key来去重

const arr = [{a:1,b:2},{a:1,b:3},{a:2,b:4}];  
arrDuplicateRemoveByKey(arr,'a'); // 返回结果：[{a:1,b:2},{a:2,b:4}]  

-----------------------------------------------------------------------------------------------
arrIsEqual：比较两个数组是否相等, 不比较地址，只比较值  

const arr = [1,2,3,4,4,5, {a: 2}];  
const arr2 = [1,2,3,4,4,5, {a: 1}];  
arrIsEqual(arr, arr2); // 返回结果： false  

-----------------------------------------------------------------------------------------------
arrToObjectByKey：// 把由对象组成的数组根据某个Key转化成对象  

arrToObjectByKey([
{ id: '1', name: 'Alpha', gender: 'Male' },
{ id: '2', name: 'Bravo', gender: 'Male' },
{ id: '3', name: 'Charlie', gender: 'Female' }],
'id');   

/*
{
'1': { id: '1', name: 'Alpha', gender: 'Male' },
'2': { id: '2', name: 'Bravo', gender: 'Male' },
'3': { id: '3', name: 'Charlie', gender: 'Female' }
}
*/  

-----------------------------------------------------------------------------------------------
findManyItemInArr：// 数组中获取重复的对象，key需为同一类型，比如都为字符串或数字类型，返回最后一个key值重复的对象  

const arr = [{a:1,b:2},{a:1,b:3},{a:2,b:4}];  
findManyItemInArr(arr,'a'); // 返回结果：[{a:1,b:3}]  

-----------------------------------------------------------------------------------------------  
getImgBase64：接受图片文件，返回Promise，需用await 接收   

getImgBase64(file).then((img) => console.log(img))  

-----------------------------------------------------------------------------------------------  
getUrlParams: 将URL参数转换为对象 只能传?后面的字符串（包括?）  

getUrlParams('?a=1&b=2') // 返回结果：{a: "1", b: "2"}  
  
-----------------------------------------------------------------------------------------------  
isArr：判断是否是数组  
  
isArr([]) // 返回结果:true  
  
-----------------------------------------------------------------------------------------------  
isRepeatArr: 判断数组中是否有重复的值  
  
isRepeatArr([1,1,2,3]) // 返回结果：true  
  
-----------------------------------------------------------------------------------------------  
removeNullUndefined: 从对象中删除所有 null 和 undefined 的属性  
  
removeNullUndefined({  
  foo: null,  
  bar: undefined,  
  fuzz: 42}  
))  // 返回结果： { fuzz: 42 }  
  
----------------------------------------------------------------------------------------------- 
translateCookieToObject：将浏览器cookie转化为对象，不用传参  
  
translateCookieToObject();  // 举例返回结果：{test: "123", lixin: "handsome"}  
  
-----------------------------------------------------------------------------------------------  
getArrFromMatrix: 将由数字组成的二维矩阵数据合并求平均，产生新的二维矩阵数组  
  
const arr = [  
    [1,2,3,4,5,6,7,8,9,10], 
    [1,2,3,4,5,6,7,8,9,10],  
    [1,2,3,4,5,6,7,8,9,10],  
    [1,2,3,4,5,6,7,8,9,10],  
]  
getArrFromMatrix(arr, 2, 2);  // arr为源数组，两个2分别为横向合并2个数字，纵向合并两个数字
返回结果：  
[
    [1.5, 3.5, 5.5, 7.5, 9.5],  
    [1.5, 3.5, 5.5, 7.5, 9.5],  
]  // 举例第一个1.5为 (1+2+1+2)/4 得来


-----------------------------------------------------------------------------------------------  
makeDateBetweenArr: 传入一个开始时间，一个结束时间，返回这两个时间中间的所有时间，以天为单位，返回时间戳

makeDateBetweenArr('2022-05-23', '2022-05-25')

输出[1653264000000, 1653350400000, 1653436800000];


-----------------------------------------------------------------------------------------------  
getTimeQuantumForDays: 一个数组，数组里由多个对象组成，每个对象有一个开始时间startDate,一个结束时间endDate，返回这些时间段的一个或多个最大并集时间段


const dates = [  
  {startDate: '2022-05-23', endDate: '2022-05-25'},  
  {startDate: '2022-05-20', endDate: '2022-05-30'},  
  {startDate: '2022-04-20', endDate: '2022-05-10'},  
  {startDate: '2022-04-28', endDate: '2022-05-15'},  
];  

getTimeQuantumForDays(dates);  
返回结果：  
[  
  [1650412800000, 1652572800000], // ['2022-04-20', '2022-05-15']  
  [1653004800000, 1653868800000]  // ['2022-05-20', '2022-05-30']  
]



  