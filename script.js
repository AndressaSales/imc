

function cal(){
    const peso = document.querySelector("#peso");
    const altura = document.querySelector("#altura");
    const resposta = document. querySelector(".res");
    if(!peso.value || !altura.value){
       if(!peso.value && !altura.value){
        alert('Campos incorretos!');
       } else if(!peso.value){
        alert('Preencha todos os campos');
       } else{
        alert('Todos os campos são obrigatorios!');
       }
    } else{
        let imc = peso.value / (altura.value * altura.value).toFixed(2);
        let classificacao = ''
        if ( imc < 18.5){
            classificacao = "você está abaixo do peso"
        } else if(imc < 25){
            classificacao = 'Você está com o peso normal'
        } else if(imc < 30){
            classificacao = 'você está acima do peso'
        } else if(imc < 35){
            classificacao = 'você está com Obesidade Grau I'
        } else if(imc < 41){
            classificacao = 'Você está com Obesidade Grau II'
        } else {
            classificacao = 'Você está com Obesidade Grau III'
        }

        resposta.innerHTML = `${imc} (${classificacao})`
    }
       

}