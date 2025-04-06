const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("kgInput");
    const convertedWeight = document.getElementById("convertedWeight");
    const kgValue = parseFloat(input.value);

    if (isNaN(kgValue) || kgValue <= 0) {
        convertedWeight.classList.add("error");
        convertedWeight.innerHTML = "Please enter a valid number!";

        setTimeout(() => {
            convertedWeight.innerHTML = "--";
            convertedWeight.classList.remove("error");
        }, 3000);
    } else {
        const pounds = kgValue * 2.20462;
        convertedWeight.classList.remove("error");
        convertedWeight.textContent = pounds.toFixed(2) + " lbs";
    }
});



