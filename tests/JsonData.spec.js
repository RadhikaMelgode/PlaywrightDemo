import data from "../TestData/data.json"
import {test} from "@playwright/test"

// test("Read single data", async ({page})=>{
//     console.log(data.url);
//     console.log(data.usn);
//     console.log(data.pwd);
// })

data.forEach((obj, i)=>{
    test(`Read multiple data ${i}`, async ()=>{
        console.log(obj.url);
        console.log(obj.usn);
        console.log(obj.pwd);
    })
})
