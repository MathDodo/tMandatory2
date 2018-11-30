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
    let test1 = "test bmi output overweight"
    it(test1, async () => {
      await page.waitFor('input[name=cm]');
      await page.$eval('input[name=cm]', el => el.value = "180");
      await page.waitFor('input[name=kg]');
      await page.$eval('input[name=kg]', el => el.value = "92");
      await page.click('input[type=submit]');
      
      await page.waitFor(500);
      const myResult1 = await page.$("#bmiVal");
      const txt = await page.evaluate(myResult => myResult.textContent, myResult1);

      await expect(txt).toBe("28.4");
      //await expect(page.url()).toBe("http://localhost:8080/result?cm=180&kg=92");
    }, timeout)

    //this test, tests a low bmi output
    let test2 = "test bmi output underweight"
    it(test2, async () => {
      await page.waitFor('input[name=cm]');
      await page.$eval('input[name=cm]', el => el.value = "180");
      await page.waitFor('input[name=kg]');
      await page.$eval('input[name=kg]', el => el.value = "55");
      await page.click('input[type=submit]');
      
      await page.waitFor(500);
      const myResult2 = await page.$("#bmiVal");
      const txt = await page.evaluate(myResult => myResult.textContent, myResult2);
//console.log(txt);
      await expect(txt).toBe("16.98");
    }, timeout)

 //this test, tests a low bmi output
 let test3 = "test bmi output normal weight"
 it(test3, async () => {
   await page.waitFor('input[name=cm]');
   await page.$eval('input[name=cm]', el => el.value = "186");
   await page.waitFor('input[name=kg]');
   await page.$eval('input[name=kg]', el => el.value = "75");
   await page.click('input[type=submit]');
   
   await page.waitFor(500);
   const myResult3 = await page.$("#bmiVal");
   const txt = await page.evaluate(myResult => myResult.textContent, myResult3);
//console.log(txt);
   await expect(txt).toBe("21.68");
 }, timeout)

  },
  timeout
)