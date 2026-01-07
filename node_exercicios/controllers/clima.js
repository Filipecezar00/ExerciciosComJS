const express = require("express"); 
const rotas = express.Router(); 

let cidades = [
    {id:1,nome:"Sao Paulo",temp:25,condicao:'Ensolarado'}, 
    {id:2,nome:"Rio de Janeiro",temp:32,condicao:"Muito Quente"}, 
    {id:3,nome:"Curitiba",temp:15,condicao:"Nublado"}, 
    {id:4,nome:"Salvador",temp:38,condicao:"Ensolarado"}
]; 

rotas.get("/previsao/todas",(req,res)=>{
res.json(cidades) 
})

rotas.get("/previsao/cidade/:nome",(req,res)=>{
const previsao = req.params.nome.toLowerCase() 
const cidade = cidades.find(i=>i.nome.toLowerCase()===previsao)  

    if(!cidade){
        return res.status(404).json({erro:"Cidade não encontrada na base do sistema"}); 
    }else{
         return res.status(200).json(cidade) 
    }

})

rotas.get("/previsao/alerta",(req,res)=>{
    const cidadesTemp = cidades.filter(c=> c.temp >=30)  
    if(cidadesTemp.length>0){
        return res.status(200).json({
            mensagem:"Cidades com maiores indices de temperatura: ",
            dados:cidadesTemp 
        });
    }else{
        return res.status(200).json({mensagem:"Nenhuma cidade com indice alto no momento"})
    }
})

module.exports = rotas