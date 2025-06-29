// events.js

function newTask() {
  // get the list element from the DOM
  const submitButton = document.querySelector("#todoList");
  // get the value entered into the #todo input
  const submitText = document.querySelector("#todo").value;
  // render out the list
  submitButton.innerHTML += `
    <li> ${submitText}
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

function manageTasks(e) {
  // using the event find the li element closest to what they clicked
  const parent = e.target.closest("li");
  // did they click the delete or complete icon?
  if (e.target.getAttribute("data-function") === "delete") {
    parent.remove();
  }
  if (e.target.getAttribute("data-function") === "complete") {
    parent.classList.toggle("strike");
  }
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
