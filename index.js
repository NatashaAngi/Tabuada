const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicatorInput = document.querySelector("#multiplicator")
const title = document.querySelector ("#numero")
const multiplicationTable = document.querySelector("#multiplication-operations")

const tabela = (number,multiplicatorNumber) =>{ 
    multiplicationTable.innerHTML = " ";
    
    for( i = 1; i<= multiplicatorNumber; i++){

        const result = number * i

        const template = `<div class="row">
        <div class="operations"> ${number} x ${i} =  </div>
        <div class="result">  ${result}</div>
    </div>`;

    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template,"text/html")

    const row = htmlTemplate.querySelector(".row")

    multiplicationTable.appendChild(row)
    }

    title.innerText = number
}

multiplicationForm.addEventListener("submit", (e)=>{ e.preventDefault();
const multiplicationNumber = +numberInput.value;
const multiplicatorNumber = +multiplicatorInput.value;

if(!multiplicatorNumber||!multiplicationNumber) alert("insira um numero");

tabela(multiplicationNumber,multiplicatorNumber)
} )