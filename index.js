function boldtext() {
    var userInput = document.getElementById("entry").value;

    //var charArray = userInput.toCharArray();

    var display = userInput.bold();

    document.getElementById("displayContainer").innerHTML = display;
}



// This is just a namespace 

//window.onload = CIRRO.init;

// window.addEventListener("load", () => {
//     //CIRRO.init()
//     fetch('http://localhost:8080/hello?message=' +, {
//     })
//         .then(response => console.log(response))
// })

async function tryingFetch() {
    const inputChanged = await doFetch();
    document.getElementById("displayContainer").innerHTML = inputChanged;
}


async function doFetch() {
    //var inputChanged = ""
    const entryInput = document.getElementById("entry");
    const inputValue = entryInput.value;
    const fetchurl = `http://localhost:8080/hello?message=${inputValue}`
    fetch(fetchurl)
        .then(response => { return response.json() })
        .then((response) => { console.log(response) })
        //.then(json => { document.getElementById("displayContainer").innerHTML = json })
        .catch(err => console.log(err))
}

//document.getElementById("displayContainer").innerHTML = inputChanged;