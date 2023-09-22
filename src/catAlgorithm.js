function removeAllChildNodes() {
    while (document.getElementById("output").firstChild) {
        console.log(document.getElementById("output").removeChild(document.getElementById("output").firstChild));
        // console.log(document.getElementById("output").firstChild);     
        document.getElementById("output").removeChild(document.getElementById("output").firstChild)
    }
}

function generateCats (amountOfIterations) {
    console.log("clicjk");
    removeAllChildNodes();
    let amountOfCats = 1;
    let counter = 0;
    let child = document.createElement("p");
    child.innerText = "🐱";
    document.getElementById("output").appendChild(child);

    for (let i = 0; i < amountOfIterations; i++) {

    };
    console.log(amountOfCats);
};