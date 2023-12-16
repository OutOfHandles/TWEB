let form = document.querySelector('form');

let btnUnico = document.querySelector('#Unico');
let btnMensal = document.querySelector('#Mensal');
let opcaoDon = 1;

let btnVinte = document.querySelector('#btnVinte');
let btnQuarenta = document.querySelector('#btnQuarenta');
let btnOitenta = document.querySelector('#btnOitenta');
let btnOutra = document.querySelector('#btnOutra');

let doacao = document.querySelector('#InputOutra');
let outraContainer = document.querySelector('.Outra');
doacao.value = 20;

let btnParticular = document.querySelector('#btnParticular');
let btnEmpresa = document.querySelector('#btnEmpresa');
let opcaoEP = 1;

// let info = document.querySelector('.info');
// let emailInput = document.querySelector('#email');
// let nomeInput = document.querySelector('#nomeInput');
// let apelidoInput = document.querySelector('#apelidoInput');
// let telInput = document.querySelector('#telInput');
// let nifInput = document.querySelector('#nifInput');
// se prof mandar usar isto tirar comentario

let info_mensal = document.querySelector('.info-mensal');

let txt = document.querySelector('#txt');
let txt1 = document.querySelector('#txt1');

window.onload = function(){
    outraContainer.style.visibility = 'hidden';
    info_mensal.style.display = 'none';
}

function mensal(estado){
    let input_mensal = document.querySelectorAll('#ruaInput, #cidadeInput, #codigoPosInput, #paisInput');
    input_mensal.forEach(function(id){
        id.setAttribute('required', estado);
    });
}

form.addEventListener('reset', function(){
    setTimeout(function(){
        opcaoDon = 1;
        opcaoEP = 1;
        
        outraContainer.style.visibility = 'hidden';
        info_mensal.style.display = 'none';
        apelidoInput.style.display ='block';

        nomeInput.placeholder = 'Nome';
        
        apelidoInput.required = true;
        mensal(false);
        doacao.value = 20;
        txtReset();
    }, 0);
});

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(doacao.value == '' || doacao.value==null){
        alert("Quantia de dinheiro não é valida tente novamente.");
    }
    else{
        submit();
    }
});



btnUnico.addEventListener('click', function(){
    opcaoDon = 1;
    info_mensal.style.display = 'none';
    mensal(false);
    txtReset();
});

btnMensal.addEventListener('click', function(){
    opcaoDon = 0;
    info_mensal.style.display = 'flex';
    mensal(true);
    txtReset();
});



btnVinte.addEventListener('click', function(){
    outraContainer.style.visibility = 'hidden';
    doacao.value = 20;
});

btnQuarenta.addEventListener('click', function(){
    outraContainer.style.visibility = 'hidden';
    doacao.value = 40;
});

btnOitenta.addEventListener('click', function(){
    outraContainer.style.visibility = 'hidden';
    doacao.value = 80;
});

btnOutra.addEventListener('click', function(){
    outraContainer.style.visibility = 'visible';
    doacao.value = 0;
});



btnParticular.addEventListener('click', function(){
    apelidoInput.style.display = 'block';
    apelidoInput.required = true;
    nomeInput.placeholder = 'Nome';
    opcaoEP = 1;
});

btnEmpresa.addEventListener('click', function(){
    apelidoInput.required = false;
    apelidoInput.value = ''
    apelidoInput.style.display = 'none';
    nomeInput.placeholder = 'Nome da Empresa';
    opcaoEP = 0;
});

function txtReset(){
    txt.textContent = '';
    txt1.textContent = '';
}

function submit(){
    txtReset();
    if(opcaoDon){
        txt.textContent = 'O seu donativo permitirá fornecer aproximadamente ' + Math.floor(doacao.value/1.5) + ' refeições.';
        if(doacao.value > 40){
            txt1.textContent = 'O seu donativo permitirá alimentar diariamente ' + Math.floor(doacao.value/(1.5*2)) + ' pessoas.';
        }
    }
    else{
        txt.textContent = 'O seu donativo permitirá alimentar uma pessoa durante ' + Math.floor(doacao.value/(1.5*2)) + ' dias.';
        if(doacao.value > 90){
            txt1.textContent = 'O seu donativo permitirá alimentar '+ Math.floor(doacao.value/(30*1.5*2)) +' pessoas durante este mês';
        }   
    }
    console.log(doacao.value);
}