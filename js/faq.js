const faqBarButtons = document.querySelectorAll("#sss article button");

faqBarButtons.forEach(element => {
    element.addEventListener("click", function() {
        switch (element.ariaExpanded) {
            case "false":
                element.ariaExpanded = "true";
                break;
            case "true":
                element.ariaExpanded = "false";
        }
    }); 
});