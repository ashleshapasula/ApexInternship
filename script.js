// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
  } else if (!emailPattern.test(email)) {
    formMessage.textContent = "Invalid email format.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    this.reset();
  }
});

// To-Do List Logic
function addTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.textContent = value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

