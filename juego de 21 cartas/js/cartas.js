// creamos la clase cartas
class Carta{
    constructor(carta,palo,valor,image){
        this.carta = carta;
        this.palo = palo;
        this.valor = valor;
        this.image = image;
    }
}
//creamos  la clase palo
class Palo{
    constructor(nombre){
        this.nombre = nombre; 
    }
}
// creamos la clase fabricaCarta
class fabricaCarta{
    constructor(){
        this.mazoMesc = [];
        this.mazo = [];
        this.palo = [new Palo("♥"), new Palo("♦"), new Palo("♣"), new Palo("♠")];
        this.carta = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    }
    //creamos un forEach para mesclar las cartas
    crear(){
        this.palo.forEach(Element => {
            this.cartas.forEach(Element2 =>{
                if(this.Element2 == 'A'){
                    var valor = [1,11];
                }
                let carta = new Carta(Element2,Element, valor, 'corazones');
                this.mazo.push(carta);
            })
        })
        this.mazoMesc.push(this.mazo)
        return this.mazo
    }
    mesclar(){
        return this.mazoMesc
    }
}