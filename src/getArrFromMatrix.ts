const perfectedArr = (arr: number[][], row: number, coloum: number) => {
  const initRowLenght = arr.length;
  let coloumsLength = arr[0].length,
    rowLeft = initRowLenght % row;
  const fillArr = JSON.parse(JSON.stringify(new Array(coloumsLength).fill(0)));
  if(rowLeft !== 0) {
    arr = [...arr, ...JSON.parse(JSON.stringify(new Array(Math.abs(row-rowLeft)).fill(fillArr)))];
  }
  let coloumLeft = coloumsLength % coloum;
  if(coloumLeft !== 0) {
    arr = arr.map(item => {
      item.push(...new Array(Math.abs(coloum - coloumLeft)).fill(0));
      return item;
    })
  }
  return arr;
};

const buildArr =  (resultArr: number[][], pArr: number[][], row: number, coloum: number) => {
  let copyArr = JSON.parse(JSON.stringify(resultArr));
  pArr.forEach((rowItem, rowI) => {
    rowItem.forEach((colItem: number, colI:number) => {
      copyArr[Math.floor(rowI/row)][Math.floor(colI/coloum)] += colItem;
      if((rowI+1)%row === 0 && (colI+1)%coloum === 0) {
        copyArr[Math.floor(rowI/row)][Math.floor(colI/coloum)] = Number((copyArr[Math.floor(rowI/row)][Math.floor(colI/coloum)] / (row * coloum)).toFixed(1));
      }
    })
  })
  return copyArr;
};

// 二维数组二维合并求平均
const getArrFromMatrix = (arr: number[][], row: number, coloum: number) => {
  let copyArr = JSON.parse(JSON.stringify(arr)),
    pArr = perfectedArr(copyArr, row, coloum),//补0后的数组
    resultArr = new Array(pArr.length / row).fill(new Array(pArr[0].length / coloum).fill(0)),//创建结果数组并先填充0
    result = buildArr(resultArr, pArr, row, coloum);
  return result;
};

export default getArrFromMatrix;