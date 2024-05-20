class Computer {
    tipo;
    processador;
    video;
    armazenamento;
    memoriaRam;
    ssd;

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    }

    ExibirInformações() {
        console.log("informações do computador:")
        console.log(`tipo: ${this.tipo}`);
        console.log(`processador: ${this.processador}`);
        console.log(`video: ${this.video}`);
        console.log(`armazenamento: ${this.armazenamento}`);
        console.log(`memoriaRam: ${this.memoriaRam}`);
        console.log(`ssd: ${this.ssd}`);
    }
}


let computer = new Computer("notebook", "intel i9", "3060TI", 512, 16, false)
computer.ExibirInformações();