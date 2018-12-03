const timeout = 5000

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeEach(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('http://localhost:8080/')
    }, timeout)

    afterAll(async () => {
      await page.close();
    })
//Decision and condition 

let test1 = "m = 0"
it(test1, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "0");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "92");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);    
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)

//this test, tests a low bmi output
let test2 = "nan m"
it(test2, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "Hello world");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "55");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)

//this test, tests a low bmi output
let test3 = "m not zero and a number"
it(test3, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "75");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiVal");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("21.68");
}, timeout)

let test4 = "bmiCat"
it(test4, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "75");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Healthy weight");
}, timeout)

//This region contains our trials of testing
//#region 
    // let test4 = "test bmi output overweight"
    // it(test4, async () => {
    //   await page.waitFor('input[name=cm]');
    //   await page.$eval('input[name=cm]', el => el.value = "180");
    //   await page.waitFor('input[name=kg]');
    //   await page.$eval('input[name=kg]', el => el.value = "92");
    //   await page.click('input[type=submit]');
      
    //   await page.waitFor(250);
    //   const myResult1 = await page.$("#bmiVal");
    //   const txt = await page.evaluate(myResult => myResult.textContent, myResult1);

    //   await expect(txt).toBe("28.4");
    //   //await expect(page.url()).toBe("http://localhost:8080/result?cm=180&kg=92");
    // }, timeout)

    //this test, tests a low bmi output
//     let test5 = "test bmi output underweight"
//     it(test5, async () => {
//       await page.waitFor('input[name=cm]');
//       await page.$eval('input[name=cm]', el => el.value = "180");
//       await page.waitFor('input[name=kg]');
//       await page.$eval('input[name=kg]', el => el.value = "55");
//       await page.click('input[type=submit]');
      
//       await page.waitFor(250);
//       const myResult2 = await page.$("#bmiVal");
//       const txt = await page.evaluate(myResult => myResult.textContent, myResult2);
// //console.log(txt);
//       await expect(txt).toBe("16.98");
//     }, timeout)

//  //this test, tests a low bmi output
//  let test6 = "test bmi output normal weight"
//  it(test6, async () => {
//    await page.waitFor('input[name=cm]');
//    await page.$eval('input[name=cm]', el => el.value = "186");
//    await page.waitFor('input[name=kg]');
//    await page.$eval('input[name=kg]', el => el.value = "75");
//    await page.click('input[type=submit]');
   
//    await page.waitFor(250);
//    const myResult3 = await page.$("#bmiVal");
//    const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
// //console.log(txt);
//    await expect(txt).toBe("21.68");
//  }, timeout)
//#endregion
  },
  timeout
)

