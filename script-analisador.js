let num = document.getElementById(`num`)
    let container = document.getElementById(`container`)
    let res = document.getElementById(`res`)
    let n2 = []
    let soma = 0
    
    function adicionar() {
        let n1 = Number(num.value)
        
        if (num.value.length == 0 || n1 <= 0 || n1 > 100 || n2.indexOf(n1) != -1) {
            window.alert(`[ERRO] Número inválido ou repetido.`)
        }

        else {
            for (let pos = 0; pos < 1; pos++) {
                let item = document.createElement(`option`)
                item.innerHTML = `Valor ${n1} adicionado.`
                n2.push(n1)
                container.appendChild(item)
                
            }
            res.innerHTML = ``
        }
        num.value = ``
        num.focus()
    }

    function finalizar() {
        
        if (n2.length == 0) {
            window.alert(`[ERRO] Adicione valores antes de finalizar!`)
        }

        else { 
                
            n2.sort(function(a,b){
                if (a>b) return 1
                if (a<b) return -1
                return 0
            })

            for (s = 0; s < n2.length; s++) {
                soma += n2[s]
                media = soma/n2.length
                maior = n2.length - 1
            }
                
            res.innerHTML =
            `<br>Ao todo, temos ${n2.length} números cadastrados.<br><br>
            O maior valor informado foi ${n2[maior]}.<br><br>
            O menor valor informado foi ${n2[0]}.<br><br>
            Somando todos os valores, temos ${soma}.<br><br>
            A média dos valores digitados é ${media}.`

            soma = 0
            media = 0
        }
    }