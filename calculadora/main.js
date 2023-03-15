// Quando o valor for clicado pelo mouse, o valor deve ser identificado pelo java e depois deve surgir no input para realizar a operação
// 1 - identificar o botão clicado, pelo mouse e o valor que lhe pertence

const botaoNumero = document.querySelectorAll('[data-value]')
const botaoApaga = document.querySelector('[data-value="apaga"]')
const telaResulta = document.querySelector('[data-input="result"]')
const botaoResulta = document.querySelector('.btn-result')


botaoApaga.addEventListener('click', () =>{

    telaResulta.value = ' '


})


botaoNumero.forEach(button =>{ button.addEventListener('click', (evento) =>{
    
    telaResulta.value += evento.target.value
    
})})

botaoResulta.addEventListener('click', () =>{

    telaResulta.value = eval(telaResulta.value)
    telaResulta.focus()
        
        telaResulta.addEventListener('blur', () =>{
            telaResulta.value = ' '
        })
})

