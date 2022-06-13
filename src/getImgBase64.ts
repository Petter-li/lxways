// 返回Promise，需用await 接收
const getImgBase64 = (file: File): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default getImgBase64;