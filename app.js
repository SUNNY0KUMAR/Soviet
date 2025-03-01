document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Getting user choices
        let party = document.getElementById("party").value;
        let stalinCriticism = document.querySelector('input[name="stalin_criticism"]:checked').value;
        let occupation = document.getElementById("occupation").value;
        let crimeElements = document.querySelectorAll('input[name="crime"]:checked');
        let rehabilitation = document.querySelector('input[name="rehabilitation"]:checked').value;

        let crimes = [];
        crimeElements.forEach(crime => crimes.push(crime.value));

        let resultPage = "canal.html"; 
        if (party === "yes" && stalinCriticism === "never" && crimes.length === 0 && occupation !== "former_noble") {
            resultPage = "safe.html";  
        } 
        else if (party === "no" || stalinCriticism === "yes" || crimes.includes("treason") || crimes.includes("espionage")) {
            resultPage = "siberia.html"; 
        } else if (occupation === "former_noble" || crimes.includes("religion")) {
            resultPage = "mine.html"; 
        } else if (rehabilitation === "refuse") {
            resultPage = "execution.html";
        }

        window.location.href = `loading.html?page=${resultPage}`;
    });
});
