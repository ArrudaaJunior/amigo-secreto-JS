// Inicializa um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um novo amigo à lista
function adicionar() {
    // Obtém o elemento input onde o usuário digita o nome do amigo
    let amigo = document.getElementById('nome-amigo');
    
    // Verifica se o input está vazio
    if (amigo.value == '') {
        alert('Digite o nome do amigo!'); // Mostra um alerta se estiver vazio
        return; // Sai da função
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(amigo.value)) {
        alert('Nome já foi adicionado!'); // Mostra um alerta se o nome já estiver na lista
        return; // Sai da função
    }

    // Obtém o elemento onde será mostrada a lista de amigos
    let listaAmigos = document.getElementById('lista-amigos');
    
    // Adiciona o nome do amigo ao array
    amigos.push(amigo.value);

    // Atualiza o conteúdo da lista de amigos exibida
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
    }

    // Limpa o campo de input para o próximo nome
    amigo.value = '';
}

// Função para sortear a ordem dos amigos
function sortear() {
    // Verifica se há pelo menos quatro amigos na lista
    if (amigos.length < 4) {
        alert('Adicione pelo menos quatro amigos!'); // Mostra um alerta se houver menos de quatro amigos
        return; // Sai da função
    }

    // Embaralha a lista de amigos
    embaralha(amigos);
    
    // Obtém o elemento onde será exibida a lista de sorteio
    let sorteio = document.getElementById('lista-sorteio');
    
    // Limpa o conteúdo anterior do sorteio
    sorteio.innerHTML = '';
    
    // Cria a nova lista de sorteio
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            // Último amigo aponta para o primeiro
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            // Amigo atual aponta para o próximo
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

// Função para excluir um amigo da lista
function excluirAmigo(index) {
    // Remove um amigo da lista pelo índice
    amigos.splice(index, 1);
    
    // Atualiza a lista de amigos exibida
    atualizarLista();
    
    // Atualiza a lista de sorteio exibida
    atualizarSorteio();
}

// Função para embaralhar a lista de amigos
function embaralha(lista) {
    // Percorre a lista de trás para frente
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Troca os elementos usando desestruturação
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para limpar a exibição do sorteio
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    // Cria um parágrafo para cada amigo na lista
    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista exibida
        lista.appendChild(paragrafo);
    }
}

// Função para reiniciar a lista de amigos e limpar a exibição
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
