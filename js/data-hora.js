function horas() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let all = hora + ':' + minutos + ':' + segundos;
    document.title = all;
}

setInterval(horas, 1000);


