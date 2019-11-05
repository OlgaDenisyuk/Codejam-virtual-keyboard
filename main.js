const matrix = [
    row0 = [
        {keyCode: 192, shifted_ru: '�', shifted_en: '~', en: '`', ru: '�', width:1 },
        {keyCode: 49, shifted_ru: '!', shifted_en: '!', en: '1', ru: '1', width:1 },
        {keyCode: 50, shifted_ru: '"', shifted_en: '@', en: '2', ru: '2', width:1 },
        {keyCode: 51, shifted_ru: '�', shifted_en: '#', en: '3', ru: '3', width:1 },
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
    row1 = [
        {keyCode: 9, title: 'Tab', width:1 },
        {keyCode: 81, shifted_ru: '�', shifted_en: 'Q', en: 'q', ru: '�', width:1 },
        {keyCode: 87, shifted_ru: '�', shifted_en: 'W', en: 'w', ru: '�', width:1 },
        {keyCode: 69, shifted_ru: '�', shifted_en: 'E', en: 'e', ru: '�', width:1 },
        {keyCode: 82, shifted_ru: '�', shifted_en: 'R', en: 'r', ru: '�', width:1 },
        {keyCode: 84, shifted_ru: '�', shifted_en: 'T', en: 't', ru: '�', width:1 },
        {keyCode: 89, shifted_ru: '�', shifted_en: 'Y', en: 'y', ru: '�', width:1 },
        {keyCode: 85, shifted_ru: '�', shifted_en: 'U', en: 'u', ru: '�', width:1 },
        {keyCode: 73, shifted_ru: '�', shifted_en: 'I', en: 'i', ru: '�', width:1 },
        {keyCode: 79, shifted_ru: '�', shifted_en: 'O', en: 'o', ru: '�', width:1 },
        {keyCode: 80, shifted_ru: '�', shifted_en: 'P', en: 'p', ru: '�', width:1 },
        {keyCode: 219, shifted_ru: '�', shifted_en: '{', en: '[', ru: '�', width:1 },
        {keyCode: 221, shifted_ru: '�', shifted_en: '}', en: ']', ru: '�', width:1 },
        {keyCode: 220, shifted_ru: '/', shifted_en: '|', en: '\\', ru: '\\', width:1 },
        {keyCode: 46, title: 'Del', width:1 },
    ],
    row2 = [
        {keyCode: 20, title: 'CapsLock', width:2 },
        {keyCode: 65, shifted_ru: '�', shifted_en: 'A', en: 'a', ru: '�', width:1 },
        {keyCode: 83, shifted_ru: '�', shifted_en: 'S', en: 's', ru: '�', width:1 },
        {keyCode: 68, shifted_ru: '�', shifted_en: 'D', en: 'd', ru: '�', width:1 },
        {keyCode: 70, shifted_ru: '�', shifted_en: 'F', en: 'f', ru: '�', width:1 },
        {keyCode: 71, shifted_ru: '�', shifted_en: 'G', en: 'g', ru: '�', width:1 },
        {keyCode: 72, shifted_ru: '�', shifted_en: 'H', en: 'h', ru: '�', width:1 },
        {keyCode: 74, shifted_ru: '�', shifted_en: 'J', en: 'j', ru: '�', width:1 },
        {keyCode: 75, shifted_ru: '�', shifted_en: 'K', en: 'k', ru: '�', width:1 },
        {keyCode: 76, shifted_ru: '�', shifted_en: 'L', en: 'l', ru: '�', width:1 },
        {keyCode: 59, shifted_ru: '�', shifted_en: ':', en: ';', ru: '�', width:1 },
        {keyCode: 222, shifted_ru: '�', shifted_en: '"', en: "'", ru: '�', width:1 },
        {keyCode: 13, value:"\n", title: 'Enter', width:2 },
    ],
    row3 = [
        {keyCode: 16, code: 'ShiftLeft', title: 'Shift', width:2 },
        {keyCode: 90, shifted_ru: '�', shifted_en: 'Z', en: 'z', ru: '�', width:1 },
        {keyCode: 88, shifted_ru: '�', shifted_en: 'X', en: 'x', ru: '�', width:1 },
        {keyCode: 67, shifted_ru: '�', shifted_en: 'C', en: 'c', ru: '�', width:1 },
        {keyCode: 86, shifted_ru: '�', shifted_en: 'V', en: 'v', ru: '�', width:1 },
        {keyCode: 66, shifted_ru: '�', shifted_en: 'B', en: 'b', ru: '�', width:1 },
        {keyCode: 78, shifted_ru: '�', shifted_en: 'N', en: 'n', ru: '�', width:1 },
        {keyCode: 77, shifted_ru: '�', shifted_en: 'M', en: 'm', ru: '�', width:1 },
        {keyCode: 188, shifted_ru: '�', shifted_en: '<', en: ',', ru: '�', width:1 },
        {keyCode: 190, shifted_ru: '�', shifted_en: '>', en: '.', ru: '�', width:1 },
        {keyCode: 191, shifted_ru: ',', shifted_en: '?', en: '/', ru: '.', width:1 },
        {keyCode: 38, title: '&uarr;', width:1 },
        {keyCode: 16, code: 'ShiftRight', title: 'Shift', width:2 },
    ],
    row4 = [
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

document.body.append(container);
container.append(textarea);
container.append(keyboard);

container.className = 'container';
keyboard.className = 'keyboard';

let keycont = document.querySelector('.keyboard');


function addKey(){
    for( let i = 0; i < matrix.length; i++ ){
       let row =  document.createElement('div');
       keyboard.append(row);
       row.className = 'row' + i;
       for( let j = 0; j < matrix[i].length; j++ ){
        let key =  document.createElement('span');
        row.append(key);
        key.className = 'key' + matrix[i][j].width;
            if(matrix[i][j].en){
                key.innerHTML = matrix[i][j].en;
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

function BackLight(){
    document.addEventListener('keydown', function(event) {
        textarea.focus();
        for (let elem of elements) {
           if((elem.id == event.keyCode && !elem.dataset.about) || (elem.id == event.keyCode && elem.dataset.about == event.code)){
                elem.classList.add('active');
            }
        }    
    });

    document.addEventListener('keyup', function(event) {
        for (let elem of elements) {
        elem.classList.remove('active');
        }
    });
}
BackLight();
function insertText(){
    document.addEventListener('mousedown', function(event) {
        if(event.target.classList.contains('darkened') && event.target.id != 32) return;
        else
        {
            let char = event.target.textContent;
            let start = textarea.selectionStart;
	        let end = textarea.selectionEnd;
            let finText = textarea.value.substring(0, start) + char + textarea.value.substring(end);
            textarea.value = finText;
            textarea.focus();
            textarea.selectionEnd = ( start == end )? (end + char.length) : end ;
            event.target.classList.add('active');
        }
    });
    document.addEventListener('mouseup', function(event) {
            event.target.classList.remove('active');
    });
}
insertText();
