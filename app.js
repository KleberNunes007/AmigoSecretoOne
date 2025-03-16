let listaAmigos = [];


function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim(); 

  if (nome === "") {
    alert("Insira um nome!");
    return;
  }

  if (listaAmigos.includes(nome)) {
    alert("Nome duplicado!");
    return;
  }

  listaAmigos.push(nome);
  input.value = ""; 
  atualizarLista();
}

const input = document.getElementById("amigo");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo(); 
  }
});


function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  listaAmigos.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("APara ocorrer o sorteio, precisa de um nome!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  const nomeSorteado = listaAmigos[indiceSorteado];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Seu amigo secreto é: <strong>${nomeSorteado}</strong></li>`;
}