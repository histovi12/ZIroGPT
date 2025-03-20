async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get AI response from API (Here, use OpenAI API or Hugging Face API)
    let response = await fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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 ",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: userInput })
    });

    let data = await response.json();
    let aiResponse = data.generated_text || "Sorry, I couldn't process that.";

    // Display AI response
    chatBox.innerHTML += `<p><strong>ZeroGPT:</strong> ${aiResponse}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
