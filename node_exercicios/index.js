const express = require("express")
const app = express()
const rota = require("./controllers/clima")
const porta = process.env.PORT || 3000 

app.get("/",(req,res)=>{
    res.send("API de Clima"); 
}); 
app.use("/",rota); 

app.use((req,res)=>{
    res.status(404).send("Erro ao acessar a rota")
})
app.listen(porta || 3000, ()=>{
    console.log("Servidor Rodando")
})