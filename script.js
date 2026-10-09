```javascript
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");
    input.value = "";

    addMessage(
        "Message sent successfully! 🎉 We'll connect the real AI engine next.",
        "bot"
    );
});

function addMessage(text, sender) {
    const message = document.createElement("div");

    message.classList.add("message", sender);
    message.textContent = text;

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}
```
