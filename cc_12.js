//task 1
const dashboard = document.getElementById("dashboard");
const dashboardAlt = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

dashboard.appendChild(revenueCard);
//Test Cases:
//When you open your business dashboard, you should see the new Revenue metric card within the dashboard container.

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
const metricCards = document.querySelectorAll(".metric-card");
Array.from(metricCards).forEach(card => {
    card.innerText += " - Updated";
    card.style.backgroundColor = "lightgray";
});
//Test Cases:
//Each metric card should show the updated text or style change after the JavaScript runs.
