const express = require("express");
const budget = require("./models/budget");
const app = express()

//INDEX
app.get("/budgets", (req, res) => {
    res.render("budget_index.ejs")
});

//new
app.get("/budgets/new",(req,res)=>{
    res.render("budget_new.ejs")
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
app.get("/budgets/:index",(req,res)=>{
    res.render("budget_show.ejs")
})








//listening
app.listen(3000, () => {
    console.log("its working")
})