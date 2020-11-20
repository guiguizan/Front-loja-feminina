var produtos = 0
preco = []
var caminho 

function add(i,nome,quantidade,caminho){
    preco.push(i)
        localStorage.setItem("Preco", JSON.stringify(preco,));
        localStorage.setItem("nome", JSON.stringify(nome));
        localStorage.setItem("quantidade", JSON.stringify(quantidade));
        localStorage.setItem("caminho", JSON.stringify(caminho));
   
}


