var chatArea = document.getElementById("chatArea");
var userInput = document.getElementById("userInput");
var sendBtn = document.getElementById("sendBtn");

// Chat memory
var chats = [];

// Fake AI responses (roman urdu + english mix)
function getFakeReply(userMsg) {
  userMsg = userMsg.toLowerCase();

  if (userMsg.indexOf("hello") !== -1 || userMsg.indexOf("hi") !== -1 || userMsg.indexOf("salam") !== -1) {
    return "Hello bhai 👋! kya haal hai?";
  } else if (userMsg.indexOf("how are you") !== -1 || userMsg.indexOf("kese ho") !== -1) {
    return "mein bilkul theek hoon 😃 tum sunao?";
  } else if (userMsg.indexOf("name") !== -1 || userMsg.indexOf("naam") !== -1) {
    return "mera naam AI dost hai ";
  } else if (userMsg.indexOf("bye") !== -1 || userMsg.indexOf("khuda hafiz") !== -1) {
    return "Allah Hafiz 👋 apna khayal rakhna!";
  } else if (userMsg.indexOf("time") !== -1 || userMsg.indexOf("waqt") !== -1) {
    return "⏰ abhi ka time hai: " + new Date().toLocaleTimeString();
  } else if (userMsg.indexOf("date") !== -1 || userMsg.indexOf("tareekh") !== -1) {
    return "📅 aaj ki tareekh: " + new Date().toDateString();
  } else if (userMsg.indexOf("allah") !== -1) {
    return "Allah sabse bara hai ❤️";
  } else if (userMsg.indexOf("joke") !== -1 || userMsg.indexOf("mazaq") !== -1) {
    return "😂 ek joke suno: ek bacha exam me white paper blank chhod aya... likha tha 'ye paper bijli se chal raha hai' ⚡";
  } else if (userMsg.indexOf("weather") !== -1 || userMsg.indexOf("mosam") !== -1) {
    return "🌤 mosam ka to pata nahi, lekin tumhara mood bohot acha lag raha hai 😎";
  } else if (userMsg.indexOf("pakistan") !== -1) {
    return "Pakistan Zindabad 🇵🇰!";
  } else if (userMsg.indexOf("love") !== -1 || userMsg.indexOf("mohabbat") !== -1) {
    return "Love sabse khoobsurat ehsaas hai ❤️";
  } else if (userMsg.indexOf("study") !== -1 || userMsg.indexOf("parhai") !== -1) {
    return "padhai success ki key hai 📚 mehnat zaroor rang layegi!";
  } else if (userMsg.indexOf("food") !== -1 || userMsg.indexOf("khana") !== -1) {
    return "🍲 bhai khana ka zikr sun ke bhook lag gayi 😂 tumhe kya pasand hai?";
  } else if (userMsg.indexOf("cricket") !== -1) {
    return "🏏 cricket hum sab ka favourite hai, tumhe kon sa player pasand hai?";
  } else if (userMsg.indexOf("dua") !== -1) {
    return "Allah tumhe hamesha khush rakhe aur success de 🤲";
  } else if (userMsg.indexOf("good morning") !== -1) {
    return "Good Morning 🌅 utho aur din ko positive banao!";
  } else if (userMsg.indexOf("good night") !== -1) {
    return "Good Night 🌙 sweet dreams!";
  } else {
    // random default replies
    var replies = [
      "acha acha, aur batao 🤔",
      "hmm samjh gya 😃",
      "wah bhai mazay ki baat hai 🚀",
      "nice 👍",
      "thoda aur explain karo?",
      "hahaha mazay aa gaye 😂",
      "interesting... aur sunao?",
      "acha seriously? 👀",
      "wah yaar zabardast 😍",
      "hmmm... acha point hai 🤓"
    ];
    var randomIndex = Math.floor(Math.random() * replies.length);
    return replies[randomIndex];
  }
}

// Render messages
function renderChats() {
  chatArea.innerHTML = "";
  for (var i = 0; i < chats.length; i++) {
    var msg = chats[i];
    var div = document.createElement("div");
    div.className = "message " + (msg.sender === "user" ? "user-msg" : "ai-msg");
    div.textContent = msg.text;
    chatArea.appendChild(div);
  }
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Send message
function sendMessage() {
  var text = userInput.value.replace(/^\s+|\s+$/g, "");
  if (!text) return;

  // User message
  chats.push({ sender: "user", text: text });
  renderChats();
  userInput.value = "";

  // AI typing effect
  var typingMsg = { sender: "ai", text: "typing..." };
  chats.push(typingMsg);
  renderChats();

  setTimeout(function () {
    chats.pop(); // remove typing...
    var reply = getFakeReply(text);
    chats.push({ sender: "ai", text: reply });
    renderChats();
  }, 1000);
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
