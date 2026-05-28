let lista = [];
 
lista.push(10);
lista.push(9);
lista.push(8);
lista.push(7);
lista.push(6);
lista.push(5);
lista.push(4);
lista.push(3);
lista.push(2);
lista.push(1);

console.log("lista inicial:");
console.log(lista);

lista.pop();
lista.pop();
lista.pop();

console.log("remove tres elementos:");
console.log(lista);

lista.sort((a,b) => a - b);

console.log("a lista esta ordenada:");
console.log(lista);

let somar = lista.reduce((total,numero) => total + numero, 0);

console.log("a soma dos elementos:");
console.log(soma);

console.log("mostra todos os valores:");
lista.forEach((valor) => {
    console.log(valor);
});

let maior6 = lista.filter((numero) => numero > 6);

let encontrar = lista.find((numero) => numero === 10);

console.log("elementos encontrados:");
console.log(encontrados);

console.log("a quantidade de elemento:");
console.log(lista.length);

lista.splice(20,60,80);
lista.splice(12,16);
lista.splice(2,4,6);

console.log("lista após usar o splice:");
Console.log(lista);

let alunos = [];
alunos.push({nome:"Vitória", idade: 16});
alunos.push({nome:"Alicya", idade: 16});
alunos.push({nome:"Cilda", idade: 16});
alunos.push({nome:"Maria", idade: 16});
alunos.push({nome:"Heloisa", idade: 16});
alunos.push({nome:"Cecilia", idade: 16});
alunos.push({nome:"Jordania", idade: 16});
alunos.push({nome:"José", idade: 16});
alunos.push({nome:"Gabriel", idade: 16});
alunos.push({nome:"Jordão", idade: 16});

console.log("lista de alunos:");
console.log(alunos);

let produtos = [
    {"id": 1,
    "nome": "Vitória",
    "idade": 16,
    "cidade": "mauriti",
    },

 {"id": 2,
    "nome": "Alicya",
    "idade": 16,
    "cidade": "mauriti",
    },

     {"id": 3,
    "nome": "Maria",
    "idade": 16,
    "cidade": "mauriti",
    },

    {"id": 4,
    "nome": "Cilda",
    "idade": 16,
    "cidade": "mauriti",
    },

     {"id": 5,
    "nome": "Heloisa",
    "idade": 16,
    "cidade": "mauriti",
    },

     {"id": 6,
    "nome": "Cecilia",
    "idade": 16,
    "cidade": "mauriti",
    },

     {"id": 7,
    "nome": "Jordania",
    "idade": 16,
    "cidade": "mauriti",
    },

     {"id": 8,
    "nome": "José",
    "idade": 16,
    "cidade": "mauriti",
    },

     {"id": 9,
    "nome": "Gabriel",
    "idade": 16,
    "cidade": "mauriti",
    },

     {"id": 10,
    "nome": "JORDÃO",
    "idade": 16,
    "cidade": "mauriti",
    },
];

let jsonDados = 
JSON.stringify(dados,null,3);

console.log("JSON dos dados:");
Console.log(jsonDados);
