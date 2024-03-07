const dataEvento = new Date("Dec 20, 2024 20:00:00");
const TimeStampDOEvento = dataEvento.getTime();

const ContaHoras = setInterval(function() {
    const agora = new Date();
    const TimeStampAtual = agora.getTime();

    const distanciaAteOEvento = TimeStampDOEvento - TimeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const HorasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMS);
    const minutosateOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMS);
    const segundoAteoEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / 1000);
    

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${HorasAteOEvento}h ${minutosateOEvento}m ${segundoAteoEvento}s `;

    if (distanciaAteOEvento < 0) {
        clearInterval(ContaHoras);
        document.getElementById('contador').innerHTML = 'Ja acabou';
    }
}, 1000);