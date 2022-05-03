const exp = require("express");
const app = exp();
const porta = process.env.PORT || 3000
app.get('/', (req,res)=>{
    app.send('heroku')
})

app.listen(porta, ()=> {
    console.log("estou rodando no heroku!")
});
