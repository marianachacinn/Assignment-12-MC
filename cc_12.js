//task 1
console.log ('Task 1: Business Dashboard – DOM Element Selection and Creation')\
const dashboard = document.getElementById("dashboard");
const dashboardAlt = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

dashboard.appendChild(revenueCard);
//Test Cases:
//When you open your business dashboard, you should see the new Revenue metric card within the dashboard container.
