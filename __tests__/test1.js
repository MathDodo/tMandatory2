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

//#region 0 testing

let test1 = "m = 0"
it(test1, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "0");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "92");
  await page.waitFor('input[name=wcm]');
  await page.select('#Gender', 'Male');
  await page.$eval('input[name=wcm]', el => el.value = "1");
  await page.waitFor('input[name=hcm]');
  await page.$eval('input[name=hcm]', el => el.value = "1");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);    
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)

let test9 = "hip = 0"
it(test9, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "1");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "92");
  await page.waitFor('input[name=wcm]');
  await page.select('#Gender', 'Male');
  await page.$eval('input[name=wcm]', el => el.value = "1");
  await page.waitFor('input[name=hcm]');
  await page.$eval('input[name=hcm]', el => el.value = "0");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);    
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)

//#endregion

//#region Nan testing
let test2 = "nan m"
it(test2, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "Hello world");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "55");
  await page.waitFor('input[name=wcm]');
  await page.select('#Gender', 'Male');
  await page.$eval('input[name=wcm]', el => el.value = "1");
  await page.waitFor('input[name=hcm]');
  await page.$eval('input[name=hcm]', el => el.value = "1");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)

let test12 = "nan kg"
it(test12, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "22");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "kg");
  await page.waitFor('input[name=wcm]');
  await page.select('#Gender', 'Male');
  await page.$eval('input[name=wcm]', el => el.value = "1");
  await page.waitFor('input[name=hcm]');
  await page.$eval('input[name=hcm]', el => el.value = "1");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)

let test10 = "nan hip"
it(test10, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "22");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "55");
  await page.waitFor('input[name=wcm]');
  await page.select('#Gender', 'Male');
  await page.$eval('input[name=wcm]', el => el.value = "1");
  await page.waitFor('input[name=hcm]');
  await page.$eval('input[name=hcm]', el => el.value = "hip");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)

let test11 = "nan waist"
it(test11, async () => {
  await page.waitFor('input[name=cm]');
  await page.$eval('input[name=cm]', el => el.value = "22");
  await page.waitFor('input[name=kg]');
  await page.$eval('input[name=kg]', el => el.value = "55");
  await page.waitFor('input[name=wcm]');
  await page.select('#Gender', 'Male');
  await page.$eval('input[name=wcm]', el => el.value = "waist");
  await page.waitFor('input[name=hcm]');
  await page.$eval('input[name=hcm]', el => el.value = "1");
  await page.click('input[type=submit]');
  
  await page.waitFor(200);
  await expect(page.url()).toBe("http://localhost:8080/");
}, timeout)
//#endregion

//#region  Negative testing
let test13 = "negative bmi1"
it(test13, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "-186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "75");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "1");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Bmi input can't be less than zero");
}, timeout)

let test14 = "negative bmi2"
it(test14, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "-186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "-75");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "1");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Bmi input can't be less than zero");
}, timeout)

let test15 = "negative whr1"
it(test15, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "-85");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Waist hip ration input can't be less than zero");
}, timeout)

let test16 = "negative whr2"
it(test16, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "-85");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "-100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Waist hip ration input can't be less than zero");
}, timeout)
//#endregion

//#region Valid inputs
let test3 = "bmi valid calc"
it(test3, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "75");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "1");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiVal");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("21.68");
}, timeout)

let test17 = "WHR valid calc"
it(test17, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "85");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrVal");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("0.85");
}, timeout)
//#endregion

//#region Category testing 
let test4 = "bmiCat Healthy"
it(test4, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "75");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "1");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Healthy weight");
}, timeout)

let test18 = "bmiCat Underweight"
it(test18, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "50");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "1");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Underweight");
}, timeout)

let test19 = "bmiCat Overweight"
it(test19, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "90");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "1");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Overweight");
}, timeout)

let test20 = "bmiCat Obese"
it(test20, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "186");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "105");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "1");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#bmiCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Obese");
}, timeout)

let test21 = "whrCat Healthy male"
it(test21, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "89.9");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Normal weight");
}, timeout)

let test22 = "whrCat overweight male"
it(test22, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "90.1");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Overweight");
}, timeout)

let test23 = "whrCat obese male"
it(test23, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "99");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Obesity is your goal in life");
}, timeout)

let test24 = "whrCat normal female"
it(test24, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Female');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "79");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Normal weight");
}, timeout)
//#endregion

//this test, tests a low bmi output
let test8 = "Valid h"
it(test8, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "85");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrVal");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("0.85");
}, timeout)

let test5 = "whrCat"
it(test5, async () => {
await page.waitFor('input[name=cm]');
await page.$eval('input[name=cm]', el => el.value = "1");
await page.waitFor('input[name=kg]');
await page.$eval('input[name=kg]', el => el.value = "1");
await page.select('#Gender', 'Male');
await page.waitFor('input[name=wcm]');
await page.$eval('input[name=wcm]', el => el.value = "85");
await page.waitFor('input[name=hcm]');
await page.$eval('input[name=hcm]', el => el.value = "100");
await page.click('input[type=submit]');

await page.waitFor(200);
const myResult3 = await page.$("#whrCat");
const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
await expect(txt).toBe("Normal weight");
}, timeout)
  },
  timeout
)

