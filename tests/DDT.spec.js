import excel from "exceljs"
import {test} from "@playwright/test"

// test("Read data from excel", async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile('TestData/Demo.xlsx')
//     let sheet=book.getWorksheet('Sheet1')
//     let data=sheet.getRow(1).getCell(1).toString()
//     console.log(data);  
// })

// test("write data", async({page})=>{
//     let boook=new excel.Workbook()
//     await boook.xlsx.readFile('TestData/Demo.xlsx')
//     // let sheett=boook.addWorksheet("Sheet2")
//     // sheett.getRow(1).getCell(1).value="abcd"
//     // await boook.xlsx.writeFile("TestData/Demo.xlsx ")
//     let sheeet=boook.getWorksheet("Sheet2")
//     sheeet.getRow(1).getCell(2).value="Lowercase"
//     await boook.xlsx.writeFile("TestData/Demo.xlsx")
// })

test("Read multiple data", async ({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile('TestData/Demo.xlsx')
    let sheet=book.getWorksheet(1)
    for(let i=1; i<=sheet.rowCount; i++)
    {
        const row = sheet.getRow(i);
        const totalColumns = row.cellCount;
        console.log(`Row ${i}:`);
        for(let j=1; j<=sheet.getRow(i).cellCount; j++)
        {
            let data=sheet.getRow(i).getCell(j).toString()
            console.log(data);
        }
    }
    const num=book.worksheets;
    console.log(num.length);
})