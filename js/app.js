let guris = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == '') {
  alert('escreva o nome de um amigo !');
  return;
    }

    if (guris.includes(nomeAmigo.value)) {
      alert('nome ja adicionado !');
      return;
    }
    let listaAmigos = document.getElementById('lista-amigos');
    guris.push(nomeAmigo.value)
    if(listaAmigos.textContent == '') {
      listaAmigos.textContent = nomeAmigo.value;
    } else {
      listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

 function sortear() {
  if (guris.length < 4) {
    alert('adicione pelo menos 4 guris !');
    return;
  }
    embaralha(guris);
    let sorteio = document.getElementById('lista-sorteio');

    for( let i = 0; i < guris.length; i++) {

        if (i == guris.length - 1) {
          sorteio.innerHTML = sorteio.innerHTML + guris[i] + '-->' + guris[0] + '<br>'
        } else {
          sorteio.innerHTML = sorteio.innerHTML + guris[i] + '-->' + guris[i+1] + '<br>'
        }

    }
 }

 function embaralha(guris) {
    for ( let indice = guris.length; indice; indice--) { 
         const indiceAleatorio = Math.floor(Math.random() * indice);

         //atribuição via destructuring
         [guris[indice - 1], guris[indiceAleatorio]] =
            [guris[indiceAleatorio], guris[indice - 1]];
    }
 }

 function reiniciar() {
    guris = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
 }