//a function dentro da classe se chama MÉTODO e precisa de um objeto
//c1 sacar(100)

//fora da classe é apenas uma função
function calcularDescontos(){
    var salario = parseFloat(document.getElementById("salario").value);
    var inss = calcularInss(salario);
    var irrf = calcularIRRF(salario);
    var totalDescontos = inss + irrf;
    var salarioLiquido = salario - totalDescontos;

    console.log("Salario: " + salario);
    console.log("Inss: " + inss.toFixed(2));
    console.log("irrf: " + irrf.toFixed(2));
    console.log("Total dos Descontos: "+totalDescontos.toFixed(2));
    console.log("Salario Líquido: " + salarioLiquido.toFixed(2));

}

function calcularInss(salario){
    var aliquota;
    if (salario <=1302){
        aliquota = 0.075;   //7,5%
        return salario * aliquota
    } 
    else if((salario>=1302.01) && (salario <=2571.29)){
        aliquota = 0.09;   //9%
        return salario * aliquota
    }
    else if((salario>=2571.30) && (salario <=3856.94)){
        aliquota = 0.12;   //12%
        return salario * aliquota
    }   
    else if((salario>=3856.95) && (salario <=7507.49)){
        aliquota = 0.14;   //14%
        return salario * aliquota
    }     
    else {
        aliquota = 1051.04;   //recebe acima o teto de 7507.49
        return aliquota;
}
}

function calcularIRRF(salario){
    var aliquota, deducao;
    if(salario <=1903.98){
        aliquota =0;
        deducao = 0;
    } 
    else if (salario<=1903.99) {
      aliquota = 0.075 
      aliquotairrf = 142.80
      return salario * aliquota - aliquotairrf
    } 
    else if (salario<=2826.66) {
      aliquota = 0.075; 
      deducao = 142.80;
     
    } 
    else if (salario<=3751.06) {
      aliquota = 0.15 
      deducao = 354.80;
      
    } 
    else if (salario<=4664.68) {
      aliquota = 0.225 
      deducao = 636.13;
      
    }
    else {
      aliquota = 0.275 
      deducao = 869.36
    }
      return (salario * aliquota) - deducao;
    }
        






