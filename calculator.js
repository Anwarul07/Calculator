let string = '';
let input = document.querySelector("input");
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            console.log(string);
            input.value = string;
        } else {
            string = string + e.target.innerHTML;
            input.value = string;
            console.log(e.target)
        }
        if (e.target.innerHTML === "C") {
            input.value = '';
            string = ''
        }
        else if (e.target.innerHTML === 'Del') {
            string = string.slice(0, -4);
            input.value = string;
        }
        else if(e.target.innerHTML==="%"){

        }
    })
});

