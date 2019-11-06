const matrix = [
    [
        {keyCode: 192, shifted_ru: 'Ё', shifted_en: '~', en: '`', ru: 'ё', width:1 },
        {keyCode: 49, shifted_ru: '!', shifted_en: '!', en: '1', ru: '1', width:1 },
        {keyCode: 50, shifted_ru: '"', shifted_en: '@', en: '2', ru: '2', width:1 },
        {keyCode: 51, shifted_ru: '№', shifted_en: '#', en: '3', ru: '3', width:1 },
        {keyCode: 52, shifted_ru: ';', shifted_en: '$', en: '4', ru: '4', width:1 },
        {keyCode: 53, shifted_ru: '%', shifted_en: '%', en: '5', ru: '5', width:1 },
        {keyCode: 54, shifted_ru: ':', shifted_en: '^', en: '6', ru: '6', width:1 },
        {keyCode: 55, shifted_ru: '?', shifted_en: '&', en: '7', ru: '7', width:1 },
        {keyCode: 56, shifted_ru: '*', shifted_en: '*', en: '8', ru: '8', width:1 },
        {keyCode: 57, shifted_ru: '(', shifted_en: '(', en: '9', ru: '9', width:1 },
        {keyCode: 48, shifted_ru: ')', shifted_en: ')', en: '0', ru: '0', width:1 },
        {keyCode: 173, shifted_ru: '_', shifted_en: '_', en: '-', ru: '-', width:1 },
        {keyCode: 61, shifted_ru: '+', shifted_en: '+', en: '=', ru: '=', width:1 },
        {keyCode: 8, title: 'Backspace', width:2 },
    ],
    [
        {keyCode: 9, title: 'Tab', width:1 },
        {keyCode: 81, shifted_ru: 'Й', shifted_en: 'Q', en: 'q', ru: 'й', width:1 },
        {keyCode: 87, shifted_ru: 'Ц', shifted_en: 'W', en: 'w', ru: 'ц', width:1 },
        {keyCode: 69, shifted_ru: 'У', shifted_en: 'E', en: 'e', ru: 'у', width:1 },
        {keyCode: 82, shifted_ru: 'К', shifted_en: 'R', en: 'r', ru: 'к', width:1 },
        {keyCode: 84, shifted_ru: 'Е', shifted_en: 'T', en: 't', ru: 'е', width:1 },
        {keyCode: 89, shifted_ru: 'Н', shifted_en: 'Y', en: 'y', ru: 'н', width:1 },
        {keyCode: 85, shifted_ru: 'Г', shifted_en: 'U', en: 'u', ru: 'г', width:1 },
        {keyCode: 73, shifted_ru: 'Ш', shifted_en: 'I', en: 'i', ru: 'ш', width:1 },
        {keyCode: 79, shifted_ru: 'Щ', shifted_en: 'O', en: 'o', ru: 'щ', width:1 },
        {keyCode: 80, shifted_ru: 'З', shifted_en: 'P', en: 'p', ru: 'з', width:1 },
        {keyCode: 219, shifted_ru: 'Х', shifted_en: '{', en: '[', ru: 'х', width:1 },
        {keyCode: 221, shifted_ru: 'Ъ', shifted_en: '}', en: ']', ru: 'ъ', width:1 },
        {keyCode: 220, shifted_ru: '/', shifted_en: '|', en: '\\', ru: '\\', width:1 },
        {keyCode: 46, title: 'Del', width:1 },
    ],
    [
        {keyCode: 20, title: 'CapsLock', width:2 },
        {keyCode: 65, shifted_ru: 'Ф', shifted_en: 'A', en: 'a', ru: 'ф', width:1 },
        {keyCode: 83, shifted_ru: 'Ы', shifted_en: 'S', en: 's', ru: 'ы', width:1 },
        {keyCode: 68, shifted_ru: 'В', shifted_en: 'D', en: 'd', ru: 'в', width:1 },
        {keyCode: 70, shifted_ru: 'А', shifted_en: 'F', en: 'f', ru: 'а', width:1 },
        {keyCode: 71, shifted_ru: 'П', shifted_en: 'G', en: 'g', ru: 'п', width:1 },
        {keyCode: 72, shifted_ru: 'Р', shifted_en: 'H', en: 'h', ru: 'р', width:1 },
        {keyCode: 74, shifted_ru: 'О', shifted_en: 'J', en: 'j', ru: 'о', width:1 },
        {keyCode: 75, shifted_ru: 'Л', shifted_en: 'K', en: 'k', ru: 'л', width:1 },
        {keyCode: 76, shifted_ru: 'Д', shifted_en: 'L', en: 'l', ru: 'д', width:1 },
        {keyCode: 59, shifted_ru: 'Ж', shifted_en: ':', en: ';', ru: 'ж', width:1 },
        {keyCode: 222, shifted_ru: 'Э', shifted_en: '"', en: "'", ru: 'э', width:1 },
        {keyCode: 13, value:"\n", title: 'Enter', width:2 },
    ],
    [
        {keyCode: 16, code: 'ShiftLeft', title: 'Shift', width:2 },
        {keyCode: 90, shifted_ru: 'Я', shifted_en: 'Z', en: 'z', ru: 'я', width:1 },
        {keyCode: 88, shifted_ru: 'Ч', shifted_en: 'X', en: 'x', ru: 'ч', width:1 },
        {keyCode: 67, shifted_ru: 'С', shifted_en: 'C', en: 'c', ru: 'с', width:1 },
        {keyCode: 86, shifted_ru: 'М', shifted_en: 'V', en: 'v', ru: 'м', width:1 },
        {keyCode: 66, shifted_ru: 'И', shifted_en: 'B', en: 'b', ru: 'и', width:1 },
        {keyCode: 78, shifted_ru: 'Т', shifted_en: 'N', en: 'n', ru: 'т', width:1 },
        {keyCode: 77, shifted_ru: 'Ь', shifted_en: 'M', en: 'm', ru: 'ь', width:1 },
        {keyCode: 188, shifted_ru: 'Б', shifted_en: '<', en: ',', ru: 'б', width:1 },
        {keyCode: 190, shifted_ru: 'Ю', shifted_en: '>', en: '.', ru: 'ю', width:1 },
        {keyCode: 191, shifted_ru: ',', shifted_en: '?', en: '/', ru: '.', width:1 },
        {keyCode: 38, title: '&uarr;', width:1 },
        {keyCode: 16, code: 'ShiftRight', title: 'Shift', width:2 },
    ],
    [
        {keyCode: 17, code: 'ControlLeft', title: 'Ctrl', width:1 },
        {keyCode: 91, title: 'Win', width:1 },
        {keyCode: 18, code: 'AltLeft', title: 'Alt', width:1 },
        {keyCode: 32, code: 'Space', title: ' ', width:7 },
        {keyCode: 18, code: 'AltRight', title: 'Alt', width:1 },
        {keyCode: 37, title: '&larr;', width:1 },
        {keyCode: 40, title: '&darr;', width:1 },
        {keyCode: 39, title: '&rarr;', width:1 },
        {keyCode: 17, code: 'ControlRight', title: 'Ctrl', width:1 },
    ]
]
let container = document.createElement('div');
let textarea = document.createElement('textarea');
let keyboard = document.createElement('div');
let langru;

document.body.append(container);
container.append(textarea);
container.append(keyboard);

container.className = 'container';
keyboard.className = 'keyboard';


function addKey(){
    localStorage.getItem('key');

    for( let i = 0; i < matrix.length; i++ ){
       let row =  document.createElement('div');
       keyboard.append(row);
       row.className = 'row' + i;

        for( let j = 0; j < matrix[i].length; j++ ){
            let key =  document.createElement('span');
            row.append(key);
            key.className = 'key' + matrix[i][j].width;

            if(matrix[i][j].en){
                if(localStorage.getItem('key') === 'true') {
                    key.innerHTML = matrix[i][j].ru;
                }
                else{
                    key.innerHTML = matrix[i][j].en;
                }
            }
            else{
                key.innerHTML = matrix[i][j].title;
                key.classList.add('darkened');
            }
            if(matrix[i][j].code){
                key.setAttribute('data-about', '' + matrix[i][j].code);
            }

        key.id = matrix[i][j].keyCode;    
       }
    }
}
addKey();

let elements = document.querySelectorAll('.keyboard span');
let capsy = document.getElementById('20');
let back = document.getElementById('8');
let del = document.getElementById('46');
let ent = document.getElementById('13');
let tab = document.getElementById('9');
let inleft = document.getElementById('37');
let inright = document.getElementById('39');

function NotActiveKey(){
    for (let elem of elements) {
        if(elem != capsy){
            elem.classList.remove('active');
        }
    }
}
function BackLight(){
    document.addEventListener('keydown', function(event) {
        textarea.focus();
        for (let elem of elements) {
           if((elem.id == event.keyCode && !elem.dataset.about) || (elem.id == event.keyCode && elem.dataset.about == event.code)){
               if(elem == capsy) {
                    elem.classList.toggle('active');
               }
               else{
                    elem.classList.add('active');
               }
            }
        }    
    });

    document.addEventListener('keyup', function() {   
        NotActiveKey();
    });
}

function insertText(){

    document.addEventListener('mousedown', function(event) {
        let target = event.target.closest('span');
        if(!target) return;
        if(target !== capsy){
            target.classList.add('active');
        }    
        if(target.classList.contains('darkened') && target.id != 32)
        {
            if(target === capsy){
                capsy.classList.toggle('active');
                CapsLock();
            }
            else if(target === back){
                clearText();
            }
            else if(target === del){
                deleteText();
            }
            else if(target === ent){
                interText();
            }
            else if(target === tab){
                Tab();
            }
            else if(target === inleft){
                inLeftText();
            }
            else if(target === inright){
                inRightText();
            }
        }
        else
        {
            let char = target.textContent;
            textarea.value += char;
        }
    }); 

    document.addEventListener('mouseup', function(event) {
        let target = event.target.closest('span');
        if(!target) return;
        if(target != capsy){
            target.classList.remove('active');
        }
    });
}
BackLight();
insertText();

function clearText(){
    let text = textarea.value;
    textarea.value = text.slice(0, textarea.textLength - 1);
} 
function deleteText(){
    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd);
} 
function interText(){
    textarea.value += `\n`;
}
function inLeftText(){
    textarea.selectionEnd -= 1;
}
function inRightText(){
    textarea.selectionStart += 1;
}

function runOnKeys(func, ...keys) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.key);

      for (let key of keys) { 
        if (!pressed.has(key)) {
          return;
        }
      }
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.key);
    });

}

runOnKeys(
    () => ChangeLang(),
    "Alt",
    "Shift"
);
runOnKeys(
    () => CapsLock(),
    "CapsLock"
);
runOnKeys(
    () => Tab(),
    "Tab"
);
function ChangeLang(){
    for( let i = 0; i < matrix.length; i++ ){
        for( let j = 0; j < matrix[i].length; j++ ){
            for (let elem of elements) {
                if(elem.id == matrix[i][j].keyCode){ 
                    switch (elem.innerHTML) {
                        case matrix[i][j].en:
                            elem.innerHTML = matrix[i][j].ru;
                            langru = true;
                            break;
                        case matrix[i][j].shifted_en:
                            elem.innerHTML = matrix[i][j].shifted_ru;
                            langru = true;
                            break;
                        case matrix[i][j].shifted_ru:
                            elem.innerHTML = matrix[i][j].shifted_en;
                            langru = false;
                            break;
                        case matrix[i][j].ru:
                            elem.innerHTML = matrix[i][j].en;
                            langru = false;
                            break;
                      }       
            }        
        }
    }
  }
  localStorage.setItem('key', langru);
}

function CapsLock(){
    for( let i = 0; i < matrix.length; i++ ){
        for( let j = 0; j < matrix[i].length; j++ ){
            for (let elem of elements) {
                if(elem.id == matrix[i][j].keyCode){
                    switch (elem.innerHTML) {
                        case matrix[i][j].shifted_en:
                            elem.innerHTML = matrix[i][j].en;
                            break;
                        case matrix[i][j].en:
                            elem.innerHTML = matrix[i][j].shifted_en;
                            break;
                        case matrix[i][j].shifted_ru:
                            elem.innerHTML = matrix[i][j].ru;
                            break;
                        case matrix[i][j].ru:
                            elem.innerHTML = matrix[i][j].shifted_ru;
                            break;
                      }      
                }      
            }
        }
    }
}
function Tab(){
    event.preventDefault();
    textarea.value += `\t`;
}