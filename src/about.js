function getCookie(key) {
  const keyEq = key + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(keyEq) === 0) {
      return cookie.substring(keyEq.length, cookie.length);
    }
  }

  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("oui");
  const nav = document.getElementById("about-nav-menu");

  const loggedStatus = getCookie("logged");

  if (loggedStatus !== null && loggedStatus === "true") {
    nav.innerHTML = `
                    <li><a href="formAction.html">Home</a></li>
        `;
  } else {
    nav.innerHTML = `
        <li><a href="index.html">Home</a></li>
        `;
  }
});
