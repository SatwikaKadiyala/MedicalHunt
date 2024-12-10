function applyFilters() {
    const college = document.getElementById("college").value;
    const category = document.getElementById("category").value;

    const filters = { college, category };

    fetch("/insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filters),
    })
        .then((response) => response.json())
        .then((data) => {
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";
            data.forEach((row) => {
                resultsDiv.innerHTML += `<p>${JSON.stringify(row)}</p>`;
            });
        })
        .catch((error) => console.error("Error:", error));
}
