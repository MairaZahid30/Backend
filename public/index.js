
const loadUsersButton = document.getElementById("loadUsers");
const usersList = document.getElementById("usersList");
const message = document.getElementById("message");

loadUsersButton.addEventListener("click", async () => {
  message.textContent = "Loading users...";
  usersList.replaceChildren();

  try {
    const response = await fetch("http://localhost:5000/api/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    if (users.length === 0) {
      message.textContent = "No users found.";
      return;
    }

    message.textContent = "";

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "user-card";

      const name = document.createElement("h3");
      name.textContent = user.name;

      const email = document.createElement("p");
      email.textContent = user.email;

      card.append(name, email);
      usersList.appendChild(card);
    });
  } catch (error) {
    message.textContent =
      "Could not load users. Check that your API is running.";
    console.error(error);
  }
});
