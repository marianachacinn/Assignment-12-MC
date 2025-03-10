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

// Task 3: Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById("inventoryList");
function addProductItem(productName) {
    const li = document.createElement("li");
    li.setAttribute("class", "product-item");
    li.textContent = productName;
    li.addEventListener("click", () => inventoryList.removeChild(li));
    inventoryList.appendChild(li);
}
//Test Cases:
//Clicking a button that calls your “add” function should add a new product item to the inventory list.
//Clicking on a product item should remove it from the list.

// Task 4: Business Customer Section – Handling Event Bubbling
const customerSection = document.getElementById("customerSection");
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");
});
document.querySelectorAll(".customer-card").forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("Customer card clicked");
        event.stopPropagation();
    });
});
//Test Cases:
//With stopPropagation(): Clicking a customer card logs only "Customer card clicked".
//Without stopPropagation(): Clicking a customer card logs messages from both the customer card and the customer 