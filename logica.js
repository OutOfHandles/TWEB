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

let info_mensal = document.querySelector('.info-mensal');

let metodo = document.querySelector('#metodo');
let metodoDefault = document.querySelector('#metodoDefault');
let metodoUnico = document.querySelectorAll('#paypal, #multibanco, #mbway')
let metodoMensal = document.querySelector('#debito');
let iban = document.querySelector('#iban');

let periodo = document.querySelector('#periodo');

let txt = document.querySelector('#txt');
let txt1 = document.querySelector('#txt1');

window.onload = function(){
    outraContainer.style.visibility = 'hidden';
    info_mensal.style.display = 'none';
    metodoMensal.style.display = 'none';
    metodoMensal.setAttribute("disabled", "disabled");
    iban.style.display = 'none';
    periodo.style.display = 'none';
}

function txtReset(){
    txt.textContent = '';
    txt1.textContent = '';
}

function resetMensal(){
    let ruaInput = document.querySelector('#ruaInput');
    let cidadeInput = document.querySelector('#cidadeInput');
    let codigoPosInput = document.querySelector('#codigoPosInput');
    let paisInput = document.querySelector('#paisInput');
    ruaInput.value = '';
    cidadeInput.value = '';
    codigoPosInput.value = '';
    paisInput.value = '';
}

function mensal(estado){
    let input_mensal = document.querySelectorAll('#ruaInput, #cidadeInput, #codigoPosInput, #paisInput');
    if(estado){
        input_mensal.forEach(function(id){
            id.setAttribute("required", "required");
        });
    }
    else{
        input_mensal.forEach(function(id){
            id.removeAttribute("required");
        });
    }
}

doacao.oninput = txtReset;


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
        metodoUnico.forEach(function(id){
            id.removeAttribute("disabled");
            id.style.display = 'block';
        });
        metodoMensal.setAttribute("disabled", "disabled");
        metodoMensal.style.display = 'none';
        metodo.value = metodoDefault.value;
        iban.style.display = 'none';
        iban.removeAttribute("required");
        periodo.style.display = 'none';
        periodo.removeAttribute("required");
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
    resetMensal();
    metodoUnico.forEach(function(id){
        id.removeAttribute("disabled");
        id.style.display = 'block';
    });
    metodoMensal.setAttribute("disabled", "disabled");
    metodoMensal.style.display = 'none';
    metodo.value = metodoDefault.value;
    iban.style.display = 'none';
    iban.removeAttribute("required");
    iban.value = '';
    periodo.style.display = 'none';
    periodo.removeAttribute("required");
    periodo.value = '';
    txtReset();
});

btnMensal.addEventListener('click', function(){
    opcaoDon = 0;
    info_mensal.style.display = 'flex';
    mensal(true);
    metodoUnico.forEach(function(id){
        id.setAttribute("disabled", "disabled");
        id.style.display = 'none';
    });
    metodoMensal.removeAttribute("disabled");
    metodoMensal.style.display = 'block';
    metodo.value = metodoDefault.value;
    periodo.style.display = 'block';
    periodo.setAttribute("required", "required");
    txtReset();
});

metodo.addEventListener('change', function(){
    if(metodo.value === 'debito'){
        iban.style.display = 'block';
        iban.setAttribute("required", "required");
    }
    else{
        iban.style.display = 'none';
        iban.removeAttribute("required");
        iban.value = '';
    }
});

btnVinte.addEventListener('click', function(){
    outraContainer.style.visibility = 'hidden';
    doacao.value = 20;
    txtReset();
});

btnQuarenta.addEventListener('click', function(){
    outraContainer.style.visibility = 'hidden';
    doacao.value = 40;
    txtReset();
});

btnOitenta.addEventListener('click', function(){
    outraContainer.style.visibility = 'hidden';
    doacao.value = 80;
    txtReset();
});

btnOutra.addEventListener('click', function(){
    outraContainer.style.visibility = 'visible';
    doacao.value = 0;
    txtReset();
});



btnParticular.addEventListener('click', function(){
    apelidoInput.style.display = 'block';
    apelidoInput.required = true;
    nomeInput.placeholder = 'Nome';
    opcaoEP = 1;
    txtReset();
});

btnEmpresa.addEventListener('click', function(){
    apelidoInput.required = false;
    apelidoInput.value = ''
    apelidoInput.style.display = 'none';
    nomeInput.placeholder = 'Nome da Empresa';
    opcaoEP = 0;
    txtReset();
});



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