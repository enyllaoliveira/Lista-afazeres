let texto = document.getElementById("texto")
let botao = document.getElementsByTagName("button")[0]
let lista = document.getElementsByTagName("ul")[0]

botao.addEventListener('click', clique)
 function clique() {
        let li = document.createElement("li")
        let inputValue = texto.value
        li.innerText = inputValue
        lista.appendChild(li) 
        texto.value = ''
 }    