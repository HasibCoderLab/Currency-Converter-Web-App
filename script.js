const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
const dropDown = document.querySelectorAll(".dropDown select");
const btn = document.querySelector(" form button ");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropDown) {
    for (let currCode in countryList) {
        // console.log(countryList);
        
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        // Condition
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        }else if (select.name === "to" && currCode === "BDT") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change" ,(evt) =>{
    updateFlag(evt.target);
    });
};
const updateFlag = (element) =>{
    let currCode = element.value;
    let  countryCode  = countryList[currCode];
    let newSrc  =  `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

console.log(currCode);

}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateExchangeRate();
    
});

const updateExchangeRate = async () =>{
    let amount = document.querySelector("input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }

    const URL = `${Base_URL}${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = (amtVal * rate).toFixed(2);

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

window.addEventListener("load" , () =>{
    updateExchangeRate();
});