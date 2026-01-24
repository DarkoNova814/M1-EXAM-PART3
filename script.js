const factText = document.getElementById("fact");
const button = document.getElementById("new-fact-btn");

async function getRandomHistoricalPerson() {
  factText.textContent = "Loading a historical figure...";

  try {
    const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary");
    const data = await response.json();
    
    factText.textContent = `Historical Figure: ${data.title}\n\n${data.extract}`;
  } catch (error) {
    factText.textContent = "Couldn't fetch a historical figure right now.";
    console.error("Error:", error);
  }
}

button.addEventListener("click", getRandomHistoricalPerson);

getRandomHistoricalPerson();