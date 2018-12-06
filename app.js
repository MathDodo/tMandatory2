var express = require("express");

// create express app
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", (req, res) => 
{
    res.render("pages/landing");
});

app.get("/result", (req, res) => 
{
    var m = (parseInt(req.query.cm, 10) / 100);
    var kg = req.query.kg;
    var wcm = req.query.wcm;
    var hcm = req.query.hcm;
    var gender = req.query.Gender;        
    var whrCategory = "";

    //console.log(JSON.stringify( req.query));

    if(m == 0 || isNaN(m) || hcm == 0 || isNaN(hcm) || isNaN(wcm) ||isNaN(kg))
    {
        res.redirect("/");
    }
    else 
    {
        var bmi = (kg / (m * m));        
        var bmiCat = "Underweight";
        var whrVal = wcm / hcm;

        if(bmi >= 18.5 && bmi <= 24.9)
        {
            bmiCat = "Healthy weight";
        }
        else if(bmi >= 25 && bmi <= 29.9)
        {
            bmiCat = "Overweight";
        }
        else if(bmi >= 30)
        {
            bmiCat = "Obese";
        }       

        if(gender === "Male")
        {
            if(whrVal < .90)
            {
                whrCategory = "Normal weight";
            }
            else if(whrVal >= .90 && whrVal < .99)
            {
                whrCategory = "Overweight";
            }
            else
            {
                whrCategory = "Obesity is your goal in life";
            }
        }
        else if(gender === "Female")
        {
            if(whrVal < .80)
            {
                whrCategory = "Normal weight";
            }
            else if(whrVal >= .80 && whrVal < .84)
            {
                whrCategory = "Overweight";
            }
            else
            {
                whrCategory = "Obesity is your goal in life or you might be pregnant";
            }
        }

        if(m < 0 || kg < 0)
        {
            bmiCat = "Bmi input can't be less than zero";
        }

        if(whrVal < 0 || wcm < 0) 
        {
            whrCategory = "Waist hip ration input can't be less than zero"
        }

        res.render("pages/result", 
        {
            bmi: bmi,
            bmiCategory: bmiCat,
            whr: whrVal,
            whrCat: whrCategory
        });
    }

  
});

var port = 8080;
console.log("App is running on http://localhost:"+port)
app.listen(port);
