let buttons = document.getElementsByTagName('button');
let input = document.getElementById('inputbox');
let string = "";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
         else if(e.target.innerHTML == "%"){
            string = input.value / 100;
            input.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1)
                input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string
        }
        // console.log(e.target);
        // console.log(string);
    })
})


