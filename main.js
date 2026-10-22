const form1 = document.getElementById("form"); 

function validanumero (primeiro,segundo) {
    let valor1 = Number(primeiro);
    let valor2 = Number(segundo);
    if (valor1 > valor2) return 0;
    else if (valor1 < valor2) return 1;
    else return 2;
}

form1.addEventListener("submit",function(e){
    e.preventDefault();
    
    const primeiro = document.getElementById('numero1').value;
    const segundo = document.getElementById('numero2').value;
    
    const validado = validanumero (primeiro,segundo);
    if (validado === 0){
        alert("O segundo número precisa ser maior que o primeiro");
    }
    else if (validado === 1){
        alert ("Tudo certo!");
    }
    else {
        alert ("Ambos números são iguais")
    }
});