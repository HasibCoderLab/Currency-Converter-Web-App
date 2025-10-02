const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropDown = document.querySelectorAll(".dropDown select");

for (let select of dropDown) {
    for (let currCode in countryList) {
        console.log(countryList);
        
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        }else if (select.name === "to" && currCode === "BDT") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }
}
