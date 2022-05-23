
// 返回毫秒时间戳
const makeDateBetweenArr = (startDate: string | number | Date, endDate: string | number | Date) => {
  let dates: number [] = [];
  const theDate = new Date(startDate);
  while (theDate < new Date(endDate)) {
    dates = [...dates, new Date(theDate).getTime()];
    theDate.setDate(theDate.getDate() + 1);
  }
  dates = [...dates, new Date(theDate).getTime()];
  return dates;
}
export default makeDateBetweenArr;