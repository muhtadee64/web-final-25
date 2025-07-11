window.addEventListener("DOMContentLoaded", function () {
  const welcomeDiv = document.getElementById("welcome-message");
  const mainContent = document.getElementById("main-content");

  welcomeDiv.innerHTML = "<p>👋 Welcome to ElectroTech!</p>";
  welcomeDiv.style.backgroundColor = "#6a0dad";
  welcomeDiv.style.color = "white";
  welcomeDiv.style.padding = "20px";
  welcomeDiv.style.textAlign = "center";
  welcomeDiv.style.fontSize = "50px";
  welcomeDiv.style.position = "fixed";
  welcomeDiv.style.top = "0";
  welcomeDiv.style.left = "0";
  welcomeDiv.style.right = "0";
  welcomeDiv.style.zIndex = "9999";
  setTimeout(() => {
    welcomeDiv.style.display = "none";
    mainContent.style.display = "block";
  }, 4000);
});