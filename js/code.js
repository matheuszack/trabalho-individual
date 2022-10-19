const selecione = window.document.querySelector(".select");
const escolha = window.document.querySelector(".chave-escolha");
const radiobtn = window.document.querySelector(".radio-button");
const btn = window.document.querySelector("button");
const codificar = window.document.querySelector("#codificar");
const decodificar = window.document.querySelector("#decodificar");
//utilizando o const, pois ele não pode ser redefinido, assim mantendo seu valor de atribuição fixo.



selecione.addEventListener("click", function () {
    if (selecione.value == "cifra") {
      escolha.style.display = "block";
    } else {
      escolha.style.display = "none";
    }
  });
//evento simples para a modificação da chave de escolha.
  function base64() {
    let mensagem = document.querySelector("#mensagem").value;
  
    if (codificar.checked) {
      let codificado = window.btoa(mensagem);
      return codificado;
    } else if (decodificar.checked) {
      let decodificado = window.atob(mensagem);
      return decodificado;
    }
  }//configuração  da base64 quando adicionado a mensagem.

 
  
  function cifraCesar() {
    let msg = document.querySelector("#mensagem").value;
    let chave = parseInt(document.querySelector("#rangenumber").value);
    let saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg[i] === msg[i].toUpperCase()) {
          saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
        } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(msg.charCodeAt(i));
        }
      }
      return saida;
    }
  }
  radiobtn.addEventListener("click", function () {
    if (codificar.checked) {
      btn.innerHTML = "<strong>Codificar Mensagem!</strong>";
    } else if (decodificar.checked) {
      btn.innerHTML = "<strong>Decodificar Mensagem!</strong>";
    }
  });
  
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecione.value === "base64") {
      resultado.innerText = base64();
    } else if (selecione.value === "cifra") {
      resultado.innerText = cifraCesar();
    }
  });
  
  