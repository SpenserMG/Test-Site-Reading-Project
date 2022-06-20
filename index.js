function boldtext() {
    var userInput = document.getElementById("entry").value;

    //var charArray = userInput.toCharArray();

    var display = userInput.bold();

    document.getElementById("displayContainer").innerHTML = display;
}

// This was the original hardcoded fetch request that I was trying when first grappling with fetch

// window.addEventListener("load", () => {
//     //CIRRO.init()
//     fetch('http://localhost:8080/hello?message=' +, {
//     })
//         .then(response => console.log(response))
// })

async function tryingFetch() {
    const inputChanged = await doFetch();
    document.getElementById("displayContainer").innerHTML = inputChanged;
    document.getElementById("entry").value = "";
}

async function doFetch() {
    //var inputChanged = ""
    const entryInput = document.getElementById("entry");
    const inputValue = entryInput.value;
    const fetchurl = `https://readgood.azurewebsites.net/hello?message=${inputValue}`
    return fetch(fetchurl)
        .then(response => response.json())
        .then((response) => response.textBlock)
        //.then(json => { document.getElementById("displayContainer").innerHTML = json })
        .catch(err => console.log(err))
}