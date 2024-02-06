// Classe base
function Veiculo(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("Vrum Vrum!");
    };
}

// herança: 
function Carro(modelo, fabricante, anoModelo, anoFabricacao, cor) {
    Veiculo.call(this, modelo, fabricante, anoModelo, anoFabricacao);
    this.cor = cor;
    this.ligarFarol = function() {
        console.log("Farol ligado!");
    };
}

// herança
function Moto(modelo, fabricante, anoModelo, anoFabricacao, cilindradas) {
    Veiculo.call(this, modelo, fabricante, anoModelo, anoFabricacao);
    this.cilindradas = cilindradas;
    this.empinar = function() {
        console.log("Empinando!");
    };
}

// Instâncias
const carroDoJoao = new Carro("Fiesta", "Ford", 2020, 2019, "Azul");
const motoDaMaria = new Moto("CG 125", "Honda", 2021, 2020, 125);

console.log(carroDoJoao);
console.log(motoDaMaria);

// métodos
carroDoJoao.acelerar();
carroDoJoao.ligarFarol();

motoDaMaria.acelerar();
motoDaMaria.empinar();
