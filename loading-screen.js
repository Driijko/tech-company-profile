window.addEventListener("load", ()=> {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.opacity = 0;
  const timerId = setTimeout(()=> {
    loadingScreen.style.display = "none";
    const fadeIns = Array.from(document.querySelectorAll(".fade-in"));
    fadeIns.forEach(element => {
      element.style.opacity = 1;
    });
  }, 3000);
});