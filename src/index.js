function setCookie(key, value) {
  document.cookie = key + "=" + value + ";";
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("about-nav-menu");

  setCookie("logged", "false");
});
