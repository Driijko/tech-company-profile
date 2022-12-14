// VIEWPORT ///////////////////////////////////////////////////////////////
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty("--res", window.innerWidth * window.innerHeight);
const viewportOrientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";

// MODALS///////////////////////////////////////////////////////
// CHAT MODAL ////////////////////////////////
const chatModal = document.getElementById("chat-modal");
const chatModalOpeners = Array.from(document.getElementsByClassName("chat-modal-opener"));
const chatModalClosers = Array.from(document.getElementsByClassName("chat-modal-closer"));


chatModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    chatModal.open = true;
    chatModal.querySelector("input").focus();
  });
});

chatModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    chatModal.open = false;
  });
});

// LOG IN MODAL ////////////////////////////////
const logInModal = document.getElementById("log-in-modal");
const logInModalOpeners = Array.from(document.getElementsByClassName("log-in-modal-opener"));
const logInModalClosers = Array.from(document.getElementsByClassName("log-in-modal-closer"));


logInModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    logInModal.open = true;
    logInModal.querySelector("input").focus();
  });
});

logInModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    logInModal.open = false;
  });
});

// SITE MENU MODAL ////////////////////////////////
const siteMenuModal = document.getElementById("site-menu-modal");
const siteMenuModalOpeners = Array.from(document.getElementsByClassName("site-menu-modal-opener"));
const siteMenuModalClosers = Array.from(document.getElementsByClassName("site-menu-modal-closer"));


siteMenuModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    siteMenuModal.open = true;
    siteMenuModal.querySelector("input").focus();
  });
});

siteMenuModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    siteMenuModal.open = false;
  });
});

// LIVE CHAT //////////////////////////////////////////////////////////
const liveChatSubmitButton = document.getElementById("live-chat-submit");
const chatArea = document.getElementById("chat-area");
const liveChatUserInput = document.getElementById("live-chat-user-input");

liveChatSubmitButton.addEventListener("click", e => {
    e.preventDefault();
    console.log(liveChatUserInput.value);
    const userMessageContainer = document.createElement("div");
    userMessageContainer.className = "user-message-container";
    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = liveChatUserInput.value; 
    userMessageContainer.appendChild(userMessage);
    chatArea.appendChild(userMessageContainer);
    liveChatUserInput.value = "";
});
