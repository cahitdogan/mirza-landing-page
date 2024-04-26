const inputContainers = document.querySelectorAll("#iletisim form p");
const labels = document.querySelectorAll("#iletisim form label");
const inputs = document.querySelectorAll("#iletisim form input, #iletisim form textarea");

for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    
    input.addEventListener("focus", () => {
        inputContainers[index].classList.add("focus");
        labels[index].classList.add("focus");
        labels[index].classList.add("clicked");
    });

    input.addEventListener("blur", () => {
        inputContainers[index].classList.remove("focus");
        labels[index].classList.remove("focus");

        if (input.value === "") {
            labels[index].classList.remove("clicked");
        }
    });

    input.addEventListener("click", () => {
        labels[index].classList.add("clicked");
    });
}