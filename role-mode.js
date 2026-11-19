const roleModeKey = "charity-management-mode";
const modeToggle = document.getElementById("mode-toggle");
const roleLinks = Array.from(document.querySelectorAll(".nav-item[data-role]"));
const roleElements = document.querySelectorAll("[data-role]");
const defaultPages = {
  admin: "fundraising-campaign.html",
  user: "request-aid.html"
};

function getStoredMode() {
  const storedMode = localStorage.getItem(roleModeKey);
  return storedMode === "admin" ? "admin" : "user";
}

function setMode(mode) {
  localStorage.setItem(roleModeKey, mode);
  document.body.dataset.mode = mode;

  roleElements.forEach((element) => {
    element.hidden = element.dataset.role !== mode;
  });

  modeToggle.setAttribute("aria-checked", String(mode === "admin"));
  modeToggle.setAttribute("aria-label", `Switch to ${mode === "admin" ? "user" : "admin"} mode`);
  modeToggle.querySelector(".mode-toggle-label").textContent = `${mode === "admin" ? "Admin" : "User"} mode`;

  const currentPage = window.location.pathname.split("/").pop();
  const currentLink = roleLinks.find((link) => link.getAttribute("href") === currentPage);
  if (currentLink && currentLink.dataset.role !== mode) {
    window.location.replace(defaultPages[mode]);
  }
}

modeToggle.addEventListener("click", () => {
  const nextMode = document.body.dataset.mode === "admin" ? "user" : "admin";
  setMode(nextMode);
});

setMode(getStoredMode());
