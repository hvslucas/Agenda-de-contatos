const sectionScreen = document.querySelector('section#screen');
sectionScreen.remove();

const actualContact = document.querySelector('#actualContact');
const divListaCnt = document.querySelector('div#divListaCnt');
divListaCnt.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('divctt') || el.classList.contains('pctt')) {
        openCtt(el);
    }
})

let activeTool = 'create';

const cttList = [];

function limparScreen() {
    actualContact.innerHTML = "";
}


function screenComplete(status) {
    if (status === 'edit') {
        activeTool = 'edit';
        criartela();
    } else {
        activeTool = 'create';
        criartela();
        criarcontato();
    }
}

function criartela() {
    limparScreen();
    // divSpace
    const divSpace = document.createElement('div');
    divSpace.setAttribute('class', 'space');
    // navSpace
    const navSpace = document.createElement('nav');
    navSpace.setAttribute('id', 'closeSpace');
    // PcloseP
    const closeP = document.createElement('p');
    closeP.setAttribute('id', 'closeP');
    closeP.innerHTML = 'X'
    closeP.addEventListener('click', limparScreen);
    // Appending
    divSpace.appendChild(navSpace);
    divSpace.appendChild(closeP);
    actualContact.appendChild(divSpace);

    // divIdentifier 
    const divIdentifier = document.createElement('div');
    divIdentifier.setAttribute('id', 'identifier');

    // divNomeArea
    const divNomeArea = document.createElement('div');
    divNomeArea.setAttribute('id', 'nomearea');
    divNomeArea.setAttribute('class', 'divsContact');
    // inputContactName
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'nomeContato');
    inputName.setAttribute('id', 'contactName');
    // labelNome
    const labelNome = document.createElement('label');
    labelNome.setAttribute('for', 'contactName');
    labelNome.innerHTML = 'Nome';
    // pEmoji1
    const pEmoji1 = document.createElement('p');
    pEmoji1.setAttribute('class', 'emojis');

    pEmoji1.innerHTML = '&#x1F464';

    //Appending
    divNomeArea.appendChild(inputName);
    divNomeArea.appendChild(labelNome);
    divNomeArea.appendChild(pEmoji1);

    // divSobrenomeomeArea
    const divSobrenomeArea = document.createElement('div');
    divSobrenomeArea.setAttribute('id', 'sobrenomearea');
    divSobrenomeArea.setAttribute('class', 'divsContact');
    // inputContactSobrename
    const inputSobrename = document.createElement('input');
    inputSobrename.setAttribute('type', 'text');
    inputSobrename.setAttribute('name', 'sobrenomeContato');
    inputSobrename.setAttribute('id', 'contactSobrenome');
    // labelSobrenome
    const labelSobrenome = document.createElement('label');
    labelSobrenome.setAttribute('for', 'contactSobrenome');
    labelSobrenome.innerHTML = 'Sobrenome';
   
    // Appending
    divSobrenomeArea.appendChild(inputSobrename);
    divSobrenomeArea.appendChild(labelSobrenome)
    
    divIdentifier.appendChild(divNomeArea);
    divIdentifier.appendChild(divSobrenomeArea);
    actualContact.appendChild(divIdentifier);

    // divProfissional
    const divProfissional = document.createElement('div');
    divProfissional.setAttribute('id', 'profissional');

    // divJobArea
    const divJobArea = document.createElement('div');
    divJobArea.setAttribute('id', 'jobarea');
    divJobArea.setAttribute('class', 'divsContact');
    // inputJob
    const inputJob = document.createElement('input');
    inputJob.setAttribute('type', 'text');
    inputJob.setAttribute('name', 'jobname');
    inputJob.setAttribute('id', 'contactJob');
    // labelJob
    const labelJob = document.createElement('label');
    labelJob.setAttribute('for', 'contactJob');
    labelJob.innerHTML = 'Empresa';
    // pEmoji2
    const pEmoji2 = document.createElement('p');
    pEmoji2.setAttribute('class', 'emojis');

    pEmoji2.innerHTML = '&#x1F4BC';

    // Appending
    divJobArea.appendChild(inputJob);
    divJobArea.appendChild(labelJob);
    divJobArea.appendChild(pEmoji2);

    // divCargoArea
    const divCargoArea = document.createElement('div');
    divCargoArea.setAttribute('id', 'cargoarea');
    divCargoArea.setAttribute('class', 'divsContact');
    // inputContactSobrename
    const inputCargo = document.createElement('input');
    inputCargo.setAttribute('type', 'text');
    inputCargo.setAttribute('name', 'cargoContato');
    inputCargo.setAttribute('id', 'contactCargo');
    // labelCargo
    const labelCargo = document.createElement('label');
    labelCargo.setAttribute('for', 'contactCargo');
    labelCargo.innerHTML = 'Cargo';

    // Appending
    divCargoArea.appendChild(inputCargo);
    divCargoArea.appendChild(labelCargo);

    divProfissional.appendChild(divJobArea);
    divProfissional.appendChild(divCargoArea);
    actualContact.appendChild(divProfissional);

    // divEmail
    const divEmail = document.createElement('div');
    divEmail.setAttribute('id', 'email');

    // divEmailArea 
    const divEmailArea = document.createElement('div');
    divEmailArea.setAttribute('id', 'emailarea');
    divEmailArea.setAttribute('class', 'divsContact');
    // inputEmail
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'text');
    inputEmail.setAttribute('name', 'email');
    inputEmail.setAttribute('id', 'contactemail');
    // labelEmail
    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'contactemail');
    labelEmail.innerHTML = 'E-mail';
    // pEmoji3
    const pEmoji3 = document.createElement('p');
    pEmoji3.setAttribute('class', 'emojis');

    pEmoji3.innerHTML = '&#x1F4E7';

    // Appending
    divEmailArea.appendChild(inputEmail);
    divEmailArea.appendChild(labelEmail);
    divEmailArea.appendChild(pEmoji3);
    divEmail.appendChild(divEmailArea);
    actualContact.appendChild(divEmail);

    // divPhone
    const divPhone = document.createElement('div');
    divPhone.setAttribute('id', 'phone');

    // divTelefoneArea 
    const divTelefoneArea = document.createElement('div');
    divTelefoneArea.setAttribute('id', 'telefonearea');
    divTelefoneArea.setAttribute('class', 'divsContact');
    // selectInput
    const selectInput = document.createElement('select');
    selectInput.setAttribute('name', 'dddCountry');
    selectInput.setAttribute('id', 'countrySelect');
    // options + Appending
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'none');
    option1.innerHTML = "000"
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'USA');
    option2.innerHTML = "+1"
    const option3 = document.createElement('option');
    option3.setAttribute('value', 'BR');
    option3.innerHTML = "+55"
    const option4 = document.createElement('option');
    option4.setAttribute('value', 'PT');
    option4.innerHTML = "+351"
        // Appending
        selectInput.appendChild(option1);
        selectInput.appendChild(option2);
        selectInput.appendChild(option3);
        selectInput.appendChild(option4);

    // inputTelephone
    const inputTelephone = document.createElement('input');
    inputTelephone.setAttribute('type', 'number');
    inputTelephone.setAttribute('name', 'telefone');
    inputTelephone.setAttribute('id', 'contacttelephone');
    // labelPhone
    const labelPhone = document.createElement('label');
    labelPhone.setAttribute('for', 'contacttelephone');
    labelPhone.innerHTML = 'Telefone';
    // pEmoji4
    const pEmoji4 = document.createElement('p');
    pEmoji4.setAttribute('class', 'emojis');

    pEmoji4.innerHTML = '&#x1F4DE';
    
    // Appending 
    divTelefoneArea.appendChild(selectInput);
    divTelefoneArea.appendChild(inputTelephone);
    divTelefoneArea.appendChild(labelPhone);
    divTelefoneArea.appendChild(pEmoji4);
    divPhone.appendChild(divTelefoneArea);
    actualContact.appendChild(divPhone);

    // divBD
    const divBD = document.createElement('div');
    divBD.setAttribute('id', 'birthday');

    // divDataArea
    const divDataArea = document.createElement('div');
    divDataArea.setAttribute('id', 'dataarea');
    divDataArea.setAttribute('class', 'divsContact');
    // inputEmail
    const inputData = document.createElement('input');
    inputData.setAttribute('type', 'date');
    inputData.setAttribute('name', 'birthday');
    inputData.setAttribute('id', 'contactDate');
    // labelData
    const labelData = document.createElement('label');
    labelData.setAttribute('for', 'contactDate');
    labelData.innerHTML = 'Data de Nascimento';
    // pEmoji5
    const pEmoji5 = document.createElement('p');
    pEmoji5.setAttribute('class', 'emojis');

    pEmoji5.innerHTML = '&#x1F4C5';

    // Appending
    divDataArea.appendChild(inputData);
    divDataArea.appendChild(labelData);
    divDataArea.appendChild(pEmoji5);
    divBD.appendChild(divDataArea);
    actualContact.appendChild(divBD);

    const divSpace2 = document.createElement('div');
    divSpace2.setAttribute('class', 'space');
    const navSpaceBtn = document.createElement('nav');
    navSpaceBtn.setAttribute('id', 'spaceBTN')
    divSpace2.appendChild(navSpaceBtn)

    if (activeTool === 'edit') {
        const btnSave = document.createElement('button');
        btnSave.setAttribute('id', 'btn-save');
        btnSave.innerHTML = "Salvar"

        divSpace2.appendChild(btnSave);

    } else if (activeTool === 'create') {
        const btnCreate = document.createElement('button');
        btnCreate.setAttribute('id', 'btn-create');
        btnCreate.innerHTML = "Criar"

        divSpace2.appendChild(btnCreate);
    }
    
    actualContact.appendChild(divSpace2);
}

function criarcontato() {
    limparScreen();
    criartela();
    const closeP = document.querySelector('p#closeP');
    closeP.addEventListener('click', limparScreen);
    activeTool = 'create';

    const btnCreate = document.querySelector('button#btn-create');
    btnCreate.addEventListener('click', function() {
        const cttNome = document.querySelector("input#contactName").value;
        const cttSobrenome = document.querySelector("input#contactSobrenome").value;
        const cttJob = document.querySelector("input#contactJob").value;
        const cttCargo = document.querySelector("input#contactCargo").value;
        const cttEmail = document.querySelector("input#contactemail").value;
        const cttPhone = document.querySelector("input#contacttelephone").value;

        criaObjetoCtt(cttNome, cttSobrenome, cttJob, cttCargo, cttEmail, cttPhone);

        porNaLista();
    })
}

function criaObjetoCtt(nome, sobrenome, job, cargo, email, phone) {
    const newCtt = {
        tittle: `${nome} ${sobrenome}`,
        nome: nome,
        sobrenome: sobrenome,
        job: job,
        cargo: cargo,
        email: email,
        phone: phone
    };

    cttList.push(newCtt);
}

function porNaLista() {
    divListaCnt.innerHTML = "";
    
    cttList.sort(ordemAlfabetica);

    for(let ctt of cttList) {
        const tittle = ctt.tittle;
        const divCtt = document.createElement('div');
        divCtt.classList.add('divctt');
        const ptittle = document.createElement('p');
        ptittle.classList.add('pctt');
        ptittle.innerHTML = `${tittle}`;
        divCtt.appendChild(ptittle);
        divListaCnt.appendChild(divCtt);      
    }
    alterarHeight();
}

function openCtt(el) {

    activeTool = 'edit';
    limparScreen();
    criartela();

    const objctTittle = el.innerHTML;
    const objctFinded = cttList.find(function(ctt) {
       return ctt.tittle === objctTittle; 
    });


    const nome = actualContact.querySelector('input#contactName');
    nome.value = objctFinded.nome;
    const sobrenome = actualContact.querySelector('input#contactSobrenome');
    sobrenome.value = objctFinded.sobrenome;
    const job = actualContact.querySelector('input#contactJob');
    job.value = objctFinded.job;
    const cargo = actualContact.querySelector('input#contactCargo');
    cargo.value = objctFinded.cargo;

}

function ordemAlfabetica(a , b) {
    const cttA = a.tittle.toUpperCase();
    const cttB = b.tittle.toUpperCase();
    
    if (cttA < cttB) {
        return -1;
    } 

    if (cttA > cttB) {
        return 1;
    }

    return 0;
};

function alterarHeight() {
    if (cttList.length < 8) {
        divListaCnt.style.height = 'auto';
    } else if (cttList.length >= 8) {
        divListaCnt.style.height = '70vh';
    };
}

function editarContato(ctt) {

}

function excluir() {
    if (activeTool === 'edit') {
        
    }
}