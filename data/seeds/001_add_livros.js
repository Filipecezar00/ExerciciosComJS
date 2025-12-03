/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex("livros").del()
    .then(function(){
      return knex("livros").insert([
        {
          titulo:"Web Desing Responsivo",autor:"Maurício Samy Silva",ano:2014,
          preco:73.0,foto: "https://s3.novatec.com.br/capas/9788575223925.jpg", 
        }, 
        {
          titulo:"SQL em 10 minutos por dia",autor:"Ben Forta",ano:2021, 
          preco:79.0,foto: "https://s3.novatec.com.br/capas/9786586057447.jpg", 
        }, 
        {
          titulo:"CSS Grid Layout",autor:"Mauricio Samy Silva",ano:2017, 
          preco:45.0,foto:"https://s3.novatec.com.br/capas/9788575226322.jpg",
        }, 
        {
          titulo:"Python para análise de Dados",autor:'Wes McKinney',ano:2018, 
          preco:132.0,foto:"https://s3.novatec.com.br/capas/9788575226476.jpg",
        },
      ]); 
    });
  }
