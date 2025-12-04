const express = require("express"); 
const router = express.Router();
const dbKnex = require("./data/db_config"); 

router.get("/",async(req,res)=>{
    try{
        const livros = await dbKnex('livros').orderBy('id',"desc"); 
        res.status(200).json(livros);         
    }catch(error){
        res.status(400).json({msg:error.message}); 
    }
})
module.exports = router; 
router.post("/",async(req,res)=>{
    const {titulo,autor,ano,preco,foto} = req.body ;
    if(!titulo||!autor||!ano||!preco||!foto) {
        res.status(400).json({msg:"Enviar titulo,autor,ano,preco e foto do livro"})
        return;
    }
    try{
    const novo = await dbKnex("livros").insert({titulo,autor,ano,preco,foto})
    res.status(201).json({id:novo[0]}); 
    }catch(error){
        res.status(400).json({msg:error.message})
    }
})