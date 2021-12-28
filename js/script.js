var dataHora = new Date();
dataHora.setDate(1);
dataHora.setMonth(1);
var dia = dataHora.getDate();
var mes = dataHora.getMonth();
var ano = dataHora.getFullYear();
var diaSemana = dataHora.getDay();


var meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];


var body = document.querySelector('body');

var h1 = document.createElement('h1');
h1.innerText = "Calendário em JS";

body.appendChild(h1);

var table = document.createElement('table');
table.setAttribute('cellpadding','0');
table.setAttribute('cellspacing','0');

var thead = document.createElement('thead');
var tr = document.createElement('tr');
var td = document.createElement('td');
td.innerText = meses[mes] + " " + ano;
td.setAttribute('colspan','7');

var tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(tr);

tr.appendChild(td);

const imprimeDiasDaSemana = () => {
    let dias = ["DOM","SEG","TER","QUA","QUI","SEX","SAB"];
    let tr = document.createElement('tr');

    for(var dia of dias){
        var td = document.createElement('td');
        td.innerText = dia;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

const imprimeDiasMesCorrente = () => {
    var tr = document.createElement('tr');
    var comecaNoDia = dataHora.getDay();
    var terminaNoDia = null;

    var nDia = 1;
    var x = 1;
    while(nDia <= pegaUltimoDiaMes(dataHora)) {
        var dataHoraCopia = new Date(dataHora);
        dataHoraCopia.setDate(nDia);

        var td = document.createElement('td');
        if(x <=  comecaNoDia ){
            td.innerText = '';

        }else {
            td.innerText = nDia;
            terminaNoDia = dataHoraCopia.getDay();
            nDia++;
        }
        tr.appendChild(td);

        if (x % 7 === 0){
            tbody.appendChild(tr);
            var tr = document.createElement('tr');
        }
        x++;
    }
    var totalTds = 6 - terminaNoDia;

    for(var x = 0; x < totalTds; x++){
        var td = document.createElement('td');
        td.innerText = '';
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

const pegaUltimoDiaMes = (data) => {
    var dataCopia = new Date(data);
    dataCopia.setMonth(data.getMonth() + 1);
    dataCopia.setDate(1);
    dataCopia.setDate(dataCopia.getDate()-1);
    return dataCopia.getDate();
}

const imprimeDiasNumericos = () => {
    var tr = document.createElement('tr');

    for (var dia = 1; dia <= 31; dia++){
        var td = document.createElement('td');
        td.innerText = dia;
        tr.appendChild(td);

        if (dia % 7 === 0){
            tbody.appendChild(tr);
            var tr = document.createElement('tr');
        }
    }
    tbody.appendChild(tr);
}

body.appendChild(table);

imprimeDiasDaSemana();
imprimeDiasMesCorrente();
//imprimeDiasNumericos();

var proximoMes = new Date(dataHora).setMonth(mes + 1);
