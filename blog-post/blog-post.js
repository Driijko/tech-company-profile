// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty("--res", window.innerWidth * window.innerHeight);
const viewportOrientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";

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

// ARTICLE SHARE MODAL ////////////////////////////////
const articleShareModal = document.getElementById("article-share-modal");
const articleShareModalOpeners = Array.from(document.getElementsByClassName("article-share-modal-opener"));
const articleShareModalClosers = Array.from(document.getElementsByClassName("article-share-modal-closer"));


articleShareModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    articleShareModal.open = true;
    articleShareModal.querySelector("a").focus();
  });
});

articleShareModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    articleShareModal.open = false;
  });
});

// COMMENT REPLIES /////////////////////////////////////////////
const replyButtons = Array.from(document.querySelectorAll(".reply-button"));
replyButtons.forEach(button => {
  button.addEventListener("click", e => {
    const replyInputForm = button.parentElement.parentElement.querySelector(".reply");
    replyInputForm.style.display = "block";
    const replyInput = replyInputForm.querySelector("input");
    replyInput.focus(); 
    replyInputForm.addEventListener("submit", e => submitReply(e));
    replyInput.addEventListener("blur", e => replyInputBlur(e));
  });
});

function submitReply(e) {
  e.preventDefault();
  e.target.style.display = "none";
}

function replyInputBlur(e) {
  e.target.parentElement.style.display = "none";
}

function openReplyAreas() {
  const replyAreas = Array.from(document.querySelectorAll(".replies"));
  if (window.innerWidth > 960) {
    replyAreas.forEach(replyArea => {
      replyArea.open = true;
    });
  }
  else {
    replyAreas.forEach(replyArea => {
      replyArea.open = false;
    });
  }
}

openReplyAreas();

window.addEventListener("resize", openReplyAreas);