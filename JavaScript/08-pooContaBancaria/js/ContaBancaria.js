//nome da class deve ser o mesmo nome do arquivo
//CamelCase - NomeDaClasse
class ContaBancaria{

    // nome de propriedades devem ser
    //lowerCamelCase - nomeDoAluno 
    constructor(titular,nConta,saldo){
        this.titular = titular; 
        this.nConta = nConta;
        this.saldo = saldo;
    }

    //método é uma ação que pertence a uma classe. Nesse caso a classe é ContaBancaria
    depositar(valor){
       this.saldo = this.saldo + valor;
    
}
    sacar(valor){
        this.saldo = this.saldo - valor;

}

}