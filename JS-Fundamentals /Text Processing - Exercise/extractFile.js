function solve(path) {
 const pathArray = path.split("\\");
 const completeFileName = pathArray.slice(-1)[0];
 const lastPeriodIndex = completeFileName.lastIndexOf(".");
 
 const fileName = completeFileName.slice(0, lastPeriodIndex);
 const extension = completeFileName.slice(lastPeriodIndex + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`)
 
}
