document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the page from reloading

        // Getting user choices
        let party = document.getElementById("party").value;
        let stalinCriticism = document.querySelector('input[name="stalin_criticism"]:checked')?.value;
        let occupation = document.getElementById("occupation").value;
        let crimeElements = document.querySelectorAll('input[name="crime"]:checked');
        let rehabilitation = document.querySelector('input[name="rehabilitation"]:checked')?.value;

        // Getting crimes as an array
        let crimes = [];
        crimeElements.forEach(crime => crimes.push(crime.value));

        // Default result page
        let resultPage = "canal.html";

        // Fix: Use `crimes.length` instead of `crimeList.length`
        if (party === "yes" && stalinCriticism === "never" && crimes.length === 0 && occupation !== "former_noble") {
            resultPage = "safe.html";  // ✅ Redirect to SAFE page
        } 
        else if (party === "no" || stalinCriticism === "yes" || crimes.includes("treason") || crimes.includes("espionage")) {
            resultPage = "siberia.html"; // Sent to harshest camps
        } 
        else if (occupation === "former_noble" || crimes.includes("religion")) {
            resultPage = "mines.html"; // Forced into hard labor mines
        } 
        else if (rehabilitation === "refuse") {
            resultPage = "execution.html"; // Considered dangerous, executed
        }

        // Redirect user to the determined page
        window.location.href = resultPage;
    });
});
