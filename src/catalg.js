function removeAllChildNodes() {
    while (document.getElementById("output").firstChild) {
        document.getElementById("output").removeChild(document.getElementById("output").firstChild)
    }
}

function printCats (amount) {
    let output = "";
    for (let i = 0; i < amount; i++) {
        output += "🐱 "; 
    }
    return output;
};

function generateCats (amountOfIterations) {
    console.log("clicjk");
    removeAllChildNodes();
    let amountOfCats = 1;
    let counter = 0;
    let child = document.createElement("p");
    child.innerText = "🐱";
    document.getElementById("output").appendChild(child);
    for (let i = 1; i < amountOfIterations; i++) {
        if (amountOfCats % 2 != 0 && counter == 0) {
            amountOfCats = amountOfCats + 5;
            counter = 1;
            let childN = document.createElement("p");
            childN.innerText = printCats(amountOfCats);
            document.getElementById("output").appendChild(childN);
        } else if (amountOfCats % 2 != 0 && counter == 1) {
            amountOfCats = amountOfCats + 13;
            counter = 0;
            let childN = document.createElement("p");
            childN.innerText = printCats(amountOfCats);
            document.getElementById("output").appendChild(childN);
        } else {
            amountOfCats = amountOfCats / 2;
            let childN = document.createElement("p");
            childN.innerText = printCats(amountOfCats);
            document.getElementById("output").appendChild(childN);
        };
    };
    console.log(amountOfCats);
};