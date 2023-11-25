let string = "";
let input = document.querySelector('.ta')
let buttons = document.querySelectorAll(".key")
let arr = Array.from(buttons);
console.log(arr);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e)=> {
        
        if ( e.target.innerHTML == '='){
            string= eval(string)
            console.log(string);
            input.value = string;
        }
        else if ( e.target.innerHTML == 'c'){
            string = '';
            input.value=string
        }
        else {
            string += e.target.innerHTML;
            console.log(string);
            input.value = string;
        }
    })
})
console.log(input);