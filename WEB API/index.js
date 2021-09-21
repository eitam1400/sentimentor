`use strict`

const content = document.getElementById('feeling-area');
const btn = document.getElementById('btn-revealer');

const ACCESS = `https://sentim-api.herokuapp.com/api/v1/`;

btn.onclick = () => {
    const userFeelings = content.value();
    const result = document.getElementById("result"); //get the result element
    result.innerText = "3...2...1...";
    let povLoading = document.getElementById("loading");
    povLoading.style.visibility = "visible";
}

const feelingGetter = fetch(ACESS,{
    method: "POST", 
    headers: {
        Accept: "application/json", "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: userText })
});


