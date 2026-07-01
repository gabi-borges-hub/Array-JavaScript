function verificar(){
    let number = document.getElementById('number').value
    
    if(number > 0){
        document.getElementById('resultado').innerHTML = `O número ${number} é positivo.`
    }else if(number < 0){
        document.getElementById('resultado').innerHTML = `O número ${number} é negativo.`
    }else{
        document.getElementById('resultado').innerHTML = `O número ${number} é igual a zero.`
    }
}