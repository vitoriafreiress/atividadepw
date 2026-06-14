let lista = [];

lista.push(1);
lista.push(2);
lista.push(3);
lista.push(4);
lista.push(5);
lista.push(6);
lista.push(7);
lista.push(8);
lista.push(9);
lista.push(10);

console.log("Lista inicial:");
console.log(lista);

lista.pop();
lista.pop();
lista.pop();

console.log("Remover 3 elementos:");
console.log(lista);

lista.sort((a, b) => a - b);

console.log("Lista ordenada:");
console.log(lista);

let soma = lista.reduce((total, numero) => total + numero, 0);

console.log("Soma dos elementos:");
console.log(soma);

console.log("Todos os valores:");
lista.forEach((valor) => {
    console.log(valor);
});

let maioresQue10 = lista.filter((numero) => numero > 10);

console.log("Números maiores que 10:");
console.log(maioresQue10);

let encontrado = lista.find((numero) => numero === 7);

console.log("Elemento encontrado:");
console.log(encontrado);

console.log("Quantidade de elementos:");
console.log(lista.length);

lista.splice(6, 8, 16);

lista.splice(2, 4);

lista.splice(7, 11, 15);

console.log("Lista após usar splice:");
console.log(lista);

let alunos = [];

alunos.push({ nome: "Vitória", idade: 16 });
alunos.push({ nome: "Alicya", idade: 16 });
alunos.push({ nome: "Maria", idade: 16 });
alunos.push({ nome: "Cilda", idade: 16 });
alunos.push({ nome: "Heloisa", idade: 16 });
alunos.push({ nome: "Cecilia", idade: 16 });
alunos.push({ nome: "Jordania", idade: 16 });
alunos.push({ nome: "José", idade: 16 });
alunos.push({ nome: "Gabriel", idade: 16 });
alunos.push({ nome: "Jordão", idade: 16 });

console.log("Lista de alunos:");
console.log(alunos);
