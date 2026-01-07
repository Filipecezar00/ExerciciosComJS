const express = require("express")
const app = express()
const rota = require("./controllers/clima")
const porta = process.env.PORT 

app.get("/",(req,res)=>{
    res.send("API de Clima"); 
}); 
app.get("/previsao/cidade/:nome",(req,res)=>{
    res.send(req.params.nome)
})
app.get("(.*)",(req,res)=>{
    res.status(404).send("Erro ao Acessar a Rota") 
})
app.listen(porta || 3000, ()=>{
    console.log("Servidor Rodando")
})