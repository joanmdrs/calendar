var dataHora = new Date();
dataHora.setDate(1);
var dia = dataHora.getDate();
var mes = dataHora.getMonth();
var ano = dataHora.getFullYear();

var meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

var body = document.querySelector('body');

var h1 = document.createElement('h1');
h1.innerText = "Calendário em JS";

body.appendChild(h1);

const defineVariaveisDatas = () => {
    dataHora.setDate(1);
    dia = dataHora.getDate();
    mes = dataHora.getMonth();
    ano = dataHora.getFullYear();
}

const imprimeCalendario = () => {

    let existe = document.querySelector('table');

    if(existe){
        existe.remove();
    }

    var table = document.createElement('table');
    table.setAttribute('cellpadding','0');
    table.setAttribute('cellspacing','0');

    var thead = document.createElement('thead');
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    td.innerHTML = "<button onclick='voltarMes()'> < </button>";
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerText = meses[mes] + " " + ano;
    td.setAttribute('colspan','5');
    tr.appendChild(td);

    var td = document.createElement('td');
    td.innerHTML = "<button onclick='avancarMes()'> > </button>"
    tr.appendChild(td);

    var tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr);

    body.appendChild(table);

    imprimeDiasDaSemana(tbody);
    imprimeDiasMesCorrente(tbody);
}

const voltarMes = () => {
    dataHora.setMonth(dataHora.getMonth() - 1);
    defineVariaveisDatas();
    imprimeCalendario();
}

const avancarMes = () => {
    dataHora.setMonth(dataHora.getMonth() + 1);
    defineVariaveisDatas();
    imprimeCalendario();
}

const imprimeDiasDaSemana = (tbody) => {
    let dias = ["DOM","SEG","TER","QUA","QUI","SEX","SAB"];
    let tr = document.createElement('tr');

    for(var dia of dias){
        
        var td = document.createElement('td');
        if(dia === 'DOM' || dia === 'SAB'){
            td.setAttribute("class", "fds");
        }
        td.innerText = dia;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

const imprimeDiasMesCorrente = (tbody) => {
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
        if(x % 7 === 0 || x % 7 === 1){
            td.setAttribute("class", "fds");
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
    td.setAttribute("class", "fds");

    tbody.appendChild(tr);
}

const pegaUltimoDiaMes = (data) => {
    var dataCopia = new Date(data);
    dataCopia.setMonth(data.getMonth() + 1);
    dataCopia.setDate(1);
    dataCopia.setDate(dataCopia.getDate()-1);
    return dataCopia.getDate();
}

imprimeCalendario();


// const imprimeDiasNumericos = () => {
//     var tr = document.createElement('tr');

//     for (var dia = 1; dia <= 31; dia++){
//         var td = document.createElement('td');
//         td.innerText = dia;
//         tr.appendChild(td);

//         if (dia % 7 === 0){
//             tbody.appendChild(tr);
//             var tr = document.createElement('tr');
//         }
//     }
//     tbody.appendChild(tr);
// }

// body.appendChild(table);

// imprimeDiasDaSemana();
// imprimeDiasMesCorrente();
//imprimeDiasNumericos();
