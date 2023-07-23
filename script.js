

document.addEventListener("DOMContentLoaded", () => {
   
    const apiUrl = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";
  
   
    function fetchDogFacts() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => displayDogFacts(data))
        .catch((error) => console.error("Error fetching dog facts:", error));
    }
  
    
    function displayDogFacts(facts) {
      const dogFactsContainer = document.querySelector(".dog-facts");
      dogFactsContainer.innerHTML = "";
  
      facts.forEach((fact) => {
        const factElement = document.createElement("p");
        factElement.textContent = fact.fact;
        dogFactsContainer.appendChild(factElement);
      });
    }
  
   
    const loadFactsButton = document.querySelector(".btn-load-facts");
    loadFactsButton.addEventListener("click", () => {
      fetchDogFacts();
    });
  
   
    fetchDogFacts();
  });
  