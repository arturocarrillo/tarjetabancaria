const card = document.querySelector('#card'),
    btnOpenForm = document.querySelector('#btn-open-form'),
    form = document.querySelector('#form-card'),
    numberCard = document.querySelector('#card .number'),
    nameCard = document.querySelector('#card .name'),
    logoMarca = document.querySelector('#logo-marca'),
    firm = document.querySelector('#card .firma p'),
    montExp = document.querySelector('#card .mont'),
    yearExp = document.querySelector('#card .year'),
    ccv = document.querySelector('#card .ccv');

// voltear la vista
const viewFront = () => {
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    }
}

// rotacion de la tarjeta
card.addEventListener('click', () => {
    card.classList.toggle('active');
});

//boton de la tarjeta
btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active');
    form.classList.toggle('active');
});

// generar fecha y año aleatoreamente
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    form.selectMont.appendChild(opcion);
}

const yearNow = new Date().getFullYear();
for (let i = yearNow; i <= yearNow + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    form.selectYear.appendChild(opcion);
}


// numero de tarjeta
form.inputNumber.addEventListener('keyup', (e) => {
    let valueInput = e.target.value;

    form.inputNumber.value = valueInput
        // eliminar espacios en blanco
        .replace(/\s/g, '')
        //eliminar las letras
        .replace(/\D/g, '')
        //separador por cada 4 digitos
        .replace(/([0-9]{4})/g, '$1 ')
        //eliminar el ultimo espacio
        .trim();

    numberCard.textContent = valueInput;

    if (valueInput == '') {
        numberCard.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }

    if (valueInput[0] == 4) {
        var url = "./public/frontend/img/bg-tarjeta/bankbbva.jpg";

        var bgbank = document.getElementById("front");
        bgbank.style.backgroundImage = `url(${url})`;
        bgbank.style.width = "100%";

        var bgbank = document.getElementById("back");
        bgbank.style.backgroundImage = `url(${url})`;
        bgbank.style.width = "100%";

        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = './public/frontend/img/logos/visa.png';
        logoMarca.appendChild(imagen);


    } else if (valueInput[0] == 5) {
        var url2 = "./public/frontend/img/bg-tarjeta/bankbanorte.jpg";

        var bgbank2 = document.getElementById("front");
        bgbank2.style.backgroundImage = `url(${url2})`;
        bgbank2.style.width = "100%";

        var bgbank2 = document.getElementById("back");
        bgbank2.style.backgroundImage = `url(${url2})`;
        bgbank2.style.width = "100%";

        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = './public/frontend/img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    } else if (valueInput[0] == 2) {
        var url3 = "./public/frontend/img/bg-tarjeta/banknu.jpg";

        var bgbank3 = document.getElementById("front");
        bgbank3.style.backgroundImage = `url(${url3})`;
        bgbank3.style.width = "100%";

        var bgbank3 = document.getElementById("back");
        bgbank3.style.backgroundImage = `url(${url3})`;
        bgbank3.style.width = "100%";

        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = './public/frontend/img/logos/visa.png';
        logoMarca.appendChild(imagen);
    }
    viewFront();
});

//input name
form.inputName.addEventListener('keyup', (e) => {
    let valueInput = e.target.value;

    form.inputName.value = valueInput.replace(/[0-9]/g, '');
    nameCard.textContent = valueInput;
    firm.textContent = valueInput;

    if (valueInput == '') {
        nameCard.textContent = 'NAME EXAMPLE';
    }
    viewFront();
});

// select mont

form.selectMont.addEventListener('change', (e) => {
    montExp.textContent = e.target.value;
    viewFront();
});

//select year

form.selectYear.addEventListener('change', (e) => {
    yearExp.textContent = e.target.value.slice(2);
    viewFront();
});

// ccv

form.inputCCV.addEventListener('keyup', () => {
    if (!card.classList.contains('active')) {
        card.classList.toggle('active');
    }

    form.inputCCV.value = form.inputCCV.value
        // eliminar los espacios
        .replace(/\s/g, '')
        //eliminar las letras
        .replace(/\D/g, '');

    ccv.textContent = form.inputCCV.value;
});