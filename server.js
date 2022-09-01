const express = require("express");
const budget = require("./models/budget");
const bodyParser = require('body-parser')
const app = express()


// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

//INDEX

app.get("/budgets", (req, res) => {
    res.render("budget_index.ejs",{
        budgets: budget,
       
    })
});

//new
app.get("/budgets/new",(req,res)=>{
    res.render("budget_new.ejs",{
        newBudget: budget
    })
})
//create
app.post("/budgets", (req, res) => {
    let tag = req.body.tags 
    const tagArr = tag.split(", ") 
    let budgetObj = { 
        date: req.body.date,
        name: req.body.name,
        from: req.body.from,
        amount: req.body.amount,
        tags: tagArr,
    }
    budget.push(budgetObj) 
    console.log(budget)
    res.redirect("/budgets")
})

// show 
app.get("/budgets/:index", (req, res) => {
    res.render("budget_show.ejs", {
        budgetIndex: budget[req.params.index]
    })
})







//listening
app.listen(3000, () => {
    console.log("its working")
})