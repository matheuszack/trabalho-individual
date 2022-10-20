const selecione = window.document.querySelector(".select");
const escolha = window.document.querySelector(".chave-escolha");
const buradio = window.document.querySelector(".radio-button");
const botao = window.document.querySelector("button");
const codificar = window.document.querySelector("#codificar");
const decodificar = window.document.querySelector("#decodificar");
//utilizando o const, pois ele não pode ser redefinido, assim mantendo seu valor de atribuição fixo.


 
selecione.addEventListener("click", function () {
  if (selecione.value == "base64") {
    escolha.style.display = "none";
  } else {
    if (selecione.value=='cifra') {
    escolha.style.display = "block";}
  }
});
//evento simples para a modificação da chave de escolha.
  
  function base64() {
    var texto = document.querySelector("#mensagem").value;
    if (codificar.checked) {
      var codificado = window.btoa(texto);
      return codificado;
    } else if (decodificar.checked) {
      var decodificado = window.atob(texto);
      return decodificado;
    }
  }//configuração  da base64 quando adicionado a mensagem.


  function cifraCesar() {
    var msg = document.querySelector("#mensagem").value;
    var numero = parseInt(document.querySelector("#rangenumber").value);
    var saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg[i] === msg[i].toUpperCase()) {
          saida += String.fromCharCode((msg.charCodeAt(i) + numero - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((msg.charCodeAt(i) + numero - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  numero + 26) % 26 + 97);
        } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 65 - numero + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(msg.charCodeAt(i));
        }
      }
      return saida;
    }
  }
 
  buradio.addEventListener("click", function () {
    if (codificar.checked) {
      botao.innerHTML = "<strong>Codificar Mensagem!</strong>";
    } else if (decodificar.checked) {
      botao.innerHTML = "<strong>Decodificar Mensagem!</strong>";
    }
  });
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecione.value === "base64") {
      resultado.innerText = base64();
    } else if (selecione.value === "cifra") {
      resultado.innerText = cifraCesar();
    }
  });
  
  
  
