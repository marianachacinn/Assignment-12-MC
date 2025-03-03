Task 1: Business Dashboard – DOM Element Selection and Creation
Scenario:
Your company’s dashboard create a container element defined in your HTML as <div id="dashboard"></div>. You need to add a new metric card for “Revenue” dynamically.

Requirements:

Use both document.getElementById and document.querySelector to select the dashboard container.
Create a new <div> element using createElement to represent the metric card.
Use setAttribute to assign a class (e.g., "metric-card") and an id (e.g., "revenueCard") to the new element.
Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
Append the new metric card to the dashboard container using appendChild.
Test Cases:
When you open your business dashboard, you should see the new Revenue metric card within the dashboard container.

Submission:
Commit your changes to GitHub with the message:
📌 "Task 1 - Created Revenue Metric Card"

Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
Scenario:
Your dashboard now includes multiple metric cards (e.g., Revenue, Profit, Expenses). Use JavaScript to select these cards and update them uniformly.

Requirements:

Use document.querySelectorAll to select all elements with the class "metric-card".
Convert the resulting NodeList into an array (using Array.from or the spread operator).
Use an array method such as .forEach() to update each card’s inner text (for example, appending " - Updated" to the current text) or to modify their styles (e.g., changing the background color).
Test Cases:
Each metric card should show the updated text or style change after the JavaScript runs.

Submission:
Commit your changes to GitHub with the message:
📌 "Task 2 - Updated Metric Cards via Array Conversion"

Task 3: Dynamic Inventory Management – Adding and Removing Items
Scenario:
Your dashboard includes an inventory list for products. In your HTML, create an empty <ul id="inventoryList"></ul>. Then, create functionality to dynamically add new product items to this list and remove them upon user interaction.

Requirements:

Write a function that creates a new <li> element representing a product.
Use setAttribute to add a class (e.g., "product-item") or a custom data attribute to the <li>.
Append the new product item to the inventory list using appendChild.
Write a separate function that removes a specific <li> when it is clicked. Use removeChild within the inventory list to remove the clicked item.
Test Cases:

Clicking a button that calls your “add” function should add a new product item to the inventory list.
Clicking on a product item should remove it from the list.
Submission:
Commit your changes to GitHub with the message:
📌 "Task 3 - Implemented Dynamic Inventory List"

Task 4: Business Customer Section – Handling Event Bubbling
Scenario:
Your dashboard features a customer section where each customer is represented by a card. In your HTML, create a parent container <div id="customerSection"></div> that holds multiple customer cards (e.g., <div class="customer-card">). You need to demonstrate event bubbling and control it using stopPropagation().

Requirements:

Create a nested structure: a parent container with the id "customerSection" and multiple child elements with the class "customer-card".
Attach click event listeners to both the parent container and each customer card.
In the customer card's click event handler, log a message (e.g., "Customer card clicked") and call stopPropagation() so that the parent's event handler does not trigger.
Test the behavior by temporarily removing stopPropagation() to verify that, without it, clicking a customer card logs messages from both the customer card and the parent container.
Test Cases:

With stopPropagation(): Clicking a customer card logs only "Customer card clicked".
Without stopPropagation(): Clicking a customer card logs messages from both the customer card and the customer section.
Submission:
Commit your changes to GitHub with the message:
📌 "Task 4 - Demonstrated Event Bubbling in Customer Section"