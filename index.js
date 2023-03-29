const btnEl = document.getElementById("btn");
const cheadE1 = document.getElementById("chead");

const apiKey = "lf5DAyElnBzRBKdxQ50uvQ==HAi76StBNZtrGn7x";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    // loading time message for user
    cheadE1.innerText = "updating joke...";
    btnEl.disabled = true;
    btnEl.innerText = "wait";

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    // while the joke is showing to the user
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    cheadE1.innerText = data[0].joke;
  } catch (error) {
    cheadE1.innerText = "error occured, try again later";
    btnEl.disabled = true;
    btnEl.innerText = "☠";
  }
}

btnEl.addEventListener("click", getJoke);
