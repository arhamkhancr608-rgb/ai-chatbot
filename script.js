```javascript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("chat-form");
    const input = document.getElementById("user-input");
    const messages = document.getElementById("messages");

    if (!form || !input || !messages) {
        alert("Chat elements not found. Please check index.html.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const text = input.value.trim();
        if (text === "") return;

        addMessage(text, "user");
        input.value = "";

        addMessage(
            "Your message works! The real AI connection is our next step. 🤖",
            "bot"
        );
    });

    function addMessage(text, sender) {
        const message = document.createElement("div");
        message.className = "message " + sender;
        message.textContent = text;

        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }
});
```
