const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const surname = params.get("surname");
const email = params.get("email");
const fullname = name + " " + surname;

function setCookie(key, value) {
  document.cookie = key + "=" + value + ";";
}

function getCookie(key) {
  const keyEq = key + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(keyEq) === 0) {
      return cookie.substring(keyEq.length, cookie.length);
    }
  }

  return null; // Retorna null se a chave não for encontrada
}

document.addEventListener("DOMContentLoaded", () => {
  const resultDiv = document.getElementById("greeting-banner");

  if (name && surname && email) {
    setCookie("logged", "true");
    setCookie("userName", fullname);
    setCookie("userEmail", email);
    resultDiv.innerHTML = `
        <h2>Bem-vindo!</h2>
        <div id="user-greeting-container">
          <p><strong>${fullname}</strong></p>
          <p><strong>${email}</strong></p>
        </div>
        <img src="./images/sanduich.png" alt="" />
        <p><strong style="font-weight:bold;">Confira nossas novidades abaixo!</strong></p>
    `;
  } else {
    const storedUserName = getCookie("userName");
    const storedUserEmail = getCookie("userEmail");

    if (storedUserEmail && storedUserName) {
      resultDiv.innerHTML = `
          <h2>Bem-vindo!</h2>
        <div id="user-greeting-container">
          <p><strong>${storedUserName}</strong></p>
          <p><strong>${storedUserEmail}</strong></p>
        </div>
          <img src="./images/sanduich.png" alt="" />
          <p><strong style="font-weight:bold;">Confira nossas novidades abaixo!</strong></p>
      `;
    } else {
      resultDiv.innerHTML = `<p>ERRO: Não há dados para mostrar.</p>`;
    }
  }
});
