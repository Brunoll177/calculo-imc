let p = document.createElement("p")
let p1 = document.createElement("p")
const pessoas = []
function calcular(){
        const altura = document.querySelector("#alt")
        const peso = document.querySelector("#peso")
        const nome = document.querySelector("#nome")
        const res = document.querySelector(".res")
        const res1 = document.querySelector(".res1")
        const imc = Number(peso.value)/(Number(altura.value) * Number(altura.value))
        
    if(peso.value == 0 && altura.value == 0){
        p.innerHTML = "Digite o peso e altura"
        res.style.background = "red"
        res.appendChild(p)
    } else if(peso.value == 0){
        p.innerHTML = "Digite o peso"
        res.style.background = "red"
        res.appendChild(p)
    }else if(altura.value ==0){
        p.innerHTML = "Digite a altura"
        res.style.background = "red"
        res.appendChild(p)
    }else{
        
        function retorno(calc){
    
            if(imc < 16.9){
                return "Muito abaixo do peso"
            }else if(imc >= 17 && imc <= 18.4){
                return "Abaixo do peso"
            }else if(imc >= 18.5 && imc <= 24.9){
                return "Peso normal"
    
            }else if(imc >= 25 && imc <= 29.9){
                return "Acima do peso"
            }else if(imc >= 30 && imc <= 34.9){
                return "Obesidade gral |"
            }else if(imc >= 35 && imc <= 40){
                return "Obesidade gral ||"
            }else if(imc > 40){
                return "Obesidade gral |||"
            }
        }
        
        function cor(x){
            if(imc >= 18.5 && imc <= 24.9){
                return res.style.background = "green"
            }else{
                return res.style.background = "red"
            }}
        
        p.innerHTML = `Seu imc é ${imc.toFixed(2)} (${retorno(imc)})`
       
        
        res.appendChild(p)
        cor(imc)
        pessoas.push(pc={
            nome: nome.value,
            altura: altura.value,
            peso: peso.value,
            imc: imc
        })
        p1.innerHTML += `Nome:${pc.nome},  peso:${pc.peso},  altura:${pc.altura},  IMC:${pc.imc.toFixed(2)}<br>`.toUpperCase()
        res1.appendChild(p1)
        console.log(pessoas)

    }

    
peso.value = ""
altura.value = ""
nome.value = ""
    }

    function mostrar(){
        if(pc == undefined){

        }else{
            const container = document.querySelector(".container1")
             const button = document.querySelector("#bnt")

        if(container.style.display == "block"){
            container.style.display = "none"
            button.value = "Mostrar"
      }else{
        container.style.display = "block"
        button.value = "Esconder"
       }     

        }
        
    } 

  