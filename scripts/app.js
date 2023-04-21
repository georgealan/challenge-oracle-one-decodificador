/* Get user logged informations */
let userLoggedName = localStorage.getItem('userLogged');
let userLogged = JSON.parse(localStorage.getItem(userLoggedName));

const boxesEncryptedContainer = document.getElementById('encrypted');
const boxesDecryptedContainer = document.getElementById('decrypted');
let dialogModals = document.querySelectorAll('dialog');
let textInputCopy = document.getElementById('result');
let textInput = document.getElementById('text-input');
let errorMessage = document.getElementById('error-message');
const spanYear = document.getElementById('year');
const linkLogout = document.getElementById('logout-link');
const systemGreetings = document.getElementById('system-greetings');
let tagEncryptOrDecrypt = '';
let welcomeText = '';

/* Date and Hour */
let today = new Date();
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let month = months[today.getMonth()];
let date = today.getDate() + ' ' + month + ' ' + today.getFullYear();
let time = today.getHours() + ':' + today.getMinutes();
let dateTime = date + ' - ' + time;

if(spanYear !== null) {
    spanYear.innerHTML = today.getFullYear();
}

function addNewBox() {
    let boxText = textInputCopy.value;
    let textAlreadyExistInTheSystem = false;

    userLogged.boxtextsbefore.forEach(text => {
        if (text === boxText) {
            textAlreadyExistInTheSystem = true;
        }
    });
    
    /* Avoid save repeated texts in the system */
    if (textAlreadyExistInTheSystem) {
        return;
    }
    
    if(boxText === null || boxText === '') {
        return;
    }
    
    if(tagEncryptOrDecrypt.match('Encrypted')) {
        userLogged.idencrypt++;
    } else {
        userLogged.iddecrypt++;
    }

    localStorage.setItem(userLoggedName, JSON.stringify(userLogged));
    
    /*
    HTML structure to be created dynamically:

    <div class="box-text">
        <h2 class="box-saved-title"><i class="fa-solid fa-lock icon"></i>Encrypted<span class="box-saved-code"> - Cod: 1</span></h2>
        <div class="text-encrypt">
            <p class="box-saved-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="box-links">
            <h4 class="box-saved-date"><i class="fa-solid fa-calendar-days icon"></i>14 Apr 2023 - 16:53</h4>
            <div class="buttons-wrapp">
                <button class="view"><i class="fa-solid fa-eye icon"></i></button>
                <button class="copy"><i class="fa-solid fa-copy icon"></i></button>
                <button class="remove"><i class="fa-solid fa-trash-can icon"></i></button>
            </div>
        </div>
    </div>
    */
    
    let buttonsWrapp = document.createElement('div');
    let divBoxContainer = document.createElement('div');
    let header = document.createElement('h2');
    let textHeader = document.createTextNode(tagEncryptOrDecrypt);
    let iconPadlock = document.createElement('i');
    let spanBoxSavedCode = document.createElement('span');
    let textSpanBoxSavedCode = '';

    if(tagEncryptOrDecrypt.match('Encrypted')) {
        textSpanBoxSavedCode = document.createTextNode(' - Cod: ' + userLogged.idencrypt);
    } else {
        textSpanBoxSavedCode = document.createTextNode(' - Cod: ' + userLogged.iddecrypt);
    }

    let dateCreation = document.createElement('h4');
    let iconCalendar = document.createElement('i');
    let textDateCreation = document.createTextNode(dateTime);
    let divContainerText = document.createElement('div');
    let text = document.createElement('p');
    let textContent = document.createTextNode(boxText);

    let divButtons = document.createElement('div');
    let buttomView = document.createElement('buttom');
    let buttomCopy = document.createElement('buttom');
    let buttomRemove = document.createElement('buttom');
    let iconView = document.createElement('i');
    let iconCopy = document.createElement('i');
    let iconRemove = document.createElement('i');

    /* Add CSS Classes and Atributes */
    divBoxContainer.classList.add('box-text');
    header.classList.add('box-saved-title');
    iconPadlock.classList.add('fa-solid');

    if(tagEncryptOrDecrypt.match('Encrypted')) {
        iconPadlock.classList.add('fa-lock');
    } else {
        iconPadlock.classList.add('fa-lock-open');
    }

    iconPadlock.classList.add('icon');
    spanBoxSavedCode.classList.add('box-saved-code');
    dateCreation.classList.add('box-saved-date');
    iconCalendar.classList.add('fa-solid');
    iconCalendar.classList.add('fa-calendar-days');
    iconCalendar.classList.add('icon');
    divContainerText.classList.add('text-encrypt');
    text.classList.add('box-saved-text');
    divButtons.classList.add('box-links');
    buttonsWrapp.classList.add('buttons-wrapp');

    buttomView.classList.add('view');
    buttomCopy.classList.add('copy');
    buttomRemove.classList.add('remove');

    iconView.classList.add('fa-solid');
    iconView.classList.add('fa-eye');
    iconView.classList.add('icon');

    iconCopy.classList.add('fa-solid');
    iconCopy.classList.add('fa-copy');
    iconCopy.classList.add('icon');

    iconRemove.classList.add('fa-solid');
    iconRemove.classList.add('fa-trash-can');
    iconRemove.classList.add('icon');

    /* Organizing the three structure */
    /* H2 */
    header.appendChild(iconPadlock);
    header.appendChild(textHeader);
    spanBoxSavedCode.appendChild(textSpanBoxSavedCode);
    header.appendChild(spanBoxSavedCode);
    
    /* H4 */
    dateCreation.appendChild(iconCalendar);
    dateCreation.appendChild(textDateCreation);
    
    /* DIV TEXT */
    text.appendChild(textContent);
    divContainerText.appendChild(text);
    
    /* DIV BUTTONS */
    buttomView.appendChild(iconView);
    buttomCopy.appendChild(iconCopy);
    buttomRemove.appendChild(iconRemove);
    divButtons.appendChild(dateCreation);
    buttonsWrapp.appendChild(buttomView);
    buttonsWrapp.appendChild(buttomCopy);
    buttonsWrapp.appendChild(buttomRemove);
    divButtons.appendChild(buttonsWrapp);

    /* DIV PARENT CONTAINER */
    divBoxContainer.appendChild(header);
    divBoxContainer.appendChild(divContainerText);
    divBoxContainer.appendChild(divButtons);

    userLogged.boxtextsbefore.push(boxText);
    localStorage.setItem(userLoggedName, JSON.stringify(userLogged));

    /* Append all three structure in the parent div container */
    if(tagEncryptOrDecrypt.match('Encrypted')) {
        boxesEncryptedContainer.appendChild(divBoxContainer);
    } else {
        boxesDecryptedContainer.appendChild(divBoxContainer);
    }

    /* Cleaning Textarea result input after click button save result */
    textInputCopy.value = '';

    /* Save all div boxes created in localStorage */
    userLogged.boxesencrypted = boxesEncryptedContainer.innerHTML;
    userLogged.boxesdecrypted = boxesDecryptedContainer.innerHTML;
    localStorage.setItem(userLoggedName, JSON.stringify(userLogged));

    createEventListener();
}

function createEventListener() {
    /* Verify if has user logged, if not, return to login page */
    verifyUserLogged();

    linkLogout.classList.remove('hide');

    boxesEncryptedContainer.innerHTML = userLogged.boxesencrypted;
    boxesDecryptedContainer.innerHTML = userLogged.boxesdecrypted;

    const btnEncrypt = document.getElementById('encrypt');
    const btnDecrypt = document.getElementById('decrypt');

    const btnMenuEncrypt = document.getElementById('btn-menu-encrypt');
    const btnMenuDecrypt = document.getElementById('btn-menu-decrypt');

    let btnViewModal = document.querySelectorAll('.view');
    let btnCopyTextBoxList = document.querySelectorAll('.copy');
    let btnRemoveBox = document.querySelectorAll('.remove');
    let btnCloseModal = document.querySelectorAll('.btn-close-modal');
    let btnCopyTextModal = document.querySelectorAll('.btn-modal-copy-text');
    let boxesTextList = document.querySelectorAll('.box-text');
    let modal = document.getElementById('modal');
    let textModalHeader = '';
    let textModal = '';

    // MODAL CONTENTS FUNCTIONS
    boxesTextList.forEach(box => {
        box.addEventListener('mouseover', () => {
            textModalHeader = box.children[0].innerText;
            textModal = box.children[1].innerText;
            
            modal.children[0].children[0].innerText = textModalHeader;
            modal.children[1].innerText = textModal;
        })        
    });

    btnViewModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.showModal();
        })
    }); 
    
    btnCloseModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.close();
        })
    });

    btnCopyTextModal.forEach(btnCopy => {
        btnCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(textModal);
        })
    });

    // Copy text of actual box, using parent nodes
    btnCopyTextBoxList.forEach(btnCopy => {
        btnCopy.addEventListener('click', () => {
            let text = btnCopy.parentNode.parentNode.parentNode.children[1].children[0].innerText;
            navigator.clipboard.writeText(text);
        })
    });

    // Remove only one box selected
    btnRemoveBox.forEach(btn => {
        btn.addEventListener('click', () => {
            let textForRemove = btn.parentNode.parentNode.parentNode.children[1].children[0].innerText;

            removeArrayElement(userLogged.boxtextsbefore, textForRemove);
            localStorage.setItem(userLoggedName, JSON.stringify(userLogged));
            
            btn.parentNode.parentNode.parentNode.remove();
            userLogged.boxesencrypted = boxesEncryptedContainer.innerHTML;
            userLogged.boxesdecrypted = boxesDecryptedContainer.innerHTML;
            localStorage.setItem(userLoggedName, JSON.stringify(userLogged));
        })
    });

    /* LINKS TO OPEN/CLOSE PAGE STORE BOXES */
    btnMenuEncrypt.addEventListener('click', () => {
        boxesDecryptedContainer.classList.add('hide');
        boxesEncryptedContainer.classList.remove('hide');
    });

    btnMenuDecrypt.addEventListener('click', () => {
        boxesEncryptedContainer.classList.add('hide');
        boxesDecryptedContainer.classList.remove('hide');
    });

    /* DISABLE BUTTONS */
    function buttonsOff() {
        btnEncrypt.disabled = true;
        btnDecrypt.disabled = true;
    }

    function buttonsOn() {
        btnEncrypt.disabled = false;
        btnDecrypt.disabled = false;
    }

    btnEncrypt.addEventListener('click', () => {
        verifyIfInputIsEmpty();
        
        let textNonEncrypted = textInput.value;
        let letters = textNonEncrypted.split('');

        letters.forEach((letter, index, arr) => {
            changeLetter(letter, index, arr);
        });
        
        textInputCopy.value = letters.join('');
        tagEncryptOrDecrypt = 'Encrypted';
    })

    btnDecrypt.addEventListener('click', () => {
        verifyIfInputIsEmpty();
        
        let textEncrypted = textInput.value;
        const regex = /((?:ai)|(?:enter)|(?:imes)|(?:ober)|(?:ufat))/;
        let letters = textEncrypted.split(regex).filter(Boolean);

        letters.forEach((letter, index, arr) => {
            changeLetter(letter, index, arr);
        });
        
        textInputCopy.value = letters.join('');
        tagEncryptOrDecrypt = 'Decrypted';
    })

    function changeLetter(letter, index, arr) {
        switch(letter) {
            case 'a':
                arr[index] = 'ai';
                break;
            case 'e':
                arr[index] = 'enter';
                break;
            case 'i':
                arr[index] = 'imes';
                break;
            case 'o':
                arr[index] = 'ober';
                break;
            case 'u':
                arr[index] = 'ufat';
                break;
            case 'ai':
                arr[index] = 'a';
                break;
            case 'enter':
                arr[index] = 'e';
                break;
            case 'imes':
                arr[index] = 'i';
                break;
            case 'ober':
                arr[index] = 'o';
                break;
            case 'ufat':
                arr[index] = 'u';
                break;
            default:
                break;
        }
    }

    function removeArrayElement(arr, item) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === item) {
                arr.splice(i, 1);
            }
        }
    }
    
    /* ========== TEXTAREA VALIDATION ========== */
    function verifyIfInputIsEmpty() {
        if(textInput.value === null || textInput.value === '') {
            textInput.classList.add('invalid');
            errorMessage.innerHTML = 'Empty input are not allowed please write some data in the field';
            buttonsOff();
            return false;
        }

        textInput.classList.remove('invalid');
        buttonsOn();
    }

    textInput.addEventListener('input', () => {
        if(textInput.value === null || textInput.value === '') {
            buttonsOn();
            textInput.classList.remove('invalid');
            errorMessage.innerHTML = '';
            return false;
        }
        
        if(textInput.value.match(/[A-Z]/)) {
            buttonsOff();
            textInput.classList.add('invalid');
            errorMessage.innerHTML = 'Capitalized text are not allowed, please provide correct data';
            return false;
        }
        
        if(textInput.value.match(/[^\w\s\n]/g)) {
            buttonsOff();
            textInput.classList.add('invalid');
            errorMessage.innerHTML = 'Special characteres are not allowed, please provide correct data';
            return false;
        }
           
        textInput.classList.remove('invalid');
        errorMessage.innerHTML = '';
        buttonsOn();
        return true;
    })

    /* Close dialog modals when click in outside, backdrop */
    dialogModals.forEach(dialog => {
        dialog.addEventListener('click', (e) => {
            if(e.target.nodeName === 'DIALOG') {
                dialog.close();
            }
        });
    });

    function verifyUserLogged() {
        if(userLoggedName === null || userLoggedName === '') {
            window.location.replace('/');
        }
    }

    linkLogout.addEventListener('click', () => {
        localStorage.setItem('userLogged', '');
        window.location.replace('/');
    });

    /* Welcome Text when user log in */
    if(today.getHours() > 0 && today.getHours() <= 5) {
        welcomeText = 'Good evening my friend ' + userLoggedName + '! welcome to the system';
    } else if(today.getHours() > 5 && today.getHours() <= 12) {
        welcomeText = 'Good morning my friend ' + userLoggedName + '! welcome to the system';
    } else if(today.getHours() > 12 && today.getHours() <= 18) {
        welcomeText = 'Good afternoon my friend ' + userLoggedName + '! welcome to the system';
    } else if(today.getHours() > 18 && today.getHours() <= 23) {
        welcomeText = 'Good evening my friend ' + userLoggedName + '! welcome to the system';
    }
    
    systemGreetings.innerText = welcomeText;
}

window.onload = function() { 
    let btnCreateBox = document.getElementById('create-box');
    if(btnCreateBox !== null) {
        btnCreateBox.addEventListener('click', addNewBox);

        createEventListener();
    }
}
