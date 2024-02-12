const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: ["define", "var", "let"],
      correta: 1,
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: ["push()", "add()", "append()"],
      correta: 0,
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: ["==", "===", "=>"],
      correta: 1,
    },
    {
      pergunta: "Qual função JavaScript é usada para imprimir algo no console?",
      respostas: ["console.print()", "console.log()", "print()"],
      correta: 1,
    },
    {
      pergunta: "O que o método forEach() faz em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um objeto",
        "Cria uma nova matriz com os resultados da chamada de uma função para cada elemento da matriz",
        "Executa uma função uma vez para cada elemento do array",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a sintaxe correta para se referir a um elemento HTML pelo seu ID em JavaScript?",
      respostas: ["document.find('id')", "document.getElementById('id')", "document.query('id')"],
      correta: 1,
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: ["parseInt()", "stringToNumber()", "toNumber()"],
      correta: 0,
    },
    {
      pergunta: 'O que o operador "&&" representa em JavaScript?',
      respostas: ["Ou lógico", "E lógico", "Negação lógica"],
      correta: 1,
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: ["// Isso é um comentário", "/* Isso é um comentário */", "<!-- Isso é um comentário -->"],
      correta: 0,
    },
    {
      pergunta: "Qual é o método que retorna o comprimento de uma string em JavaScript?",
      respostas: ["string.length()", "lengthOf()", "length"],
      correta: 2,
    },
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector("#acertos span");
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
      dt.querySelector("span").textContent = resposta;
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item));
      dt.querySelector("input").value = item.respostas.indexOf(resposta);
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
  
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      };
  
      quizItem.querySelector("dl").appendChild(dt);
    }
  
    quizItem.querySelector("dl dt").remove();
  
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  