const express = require('express'); 
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express(); 
const port = 3001; 
app.get('/',(req,res)=>{
    res.send('olá... Bem vindo!'); 
}); 
app.listen(port,()=>{
console.log(`Servidor rodando em http://localhost:${port}`); 
});