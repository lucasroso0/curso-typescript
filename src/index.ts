// import {Biblioteca} from './Exercicios/Atv1/biblioteca'
// import {Livro} from './Exercicios/Atv1/livro'

// const biblioteca = new Biblioteca()

// biblioteca.adicionarLivro(new Livro(102,'A volta','Lian Horst',false));
// biblioteca.adicionarLivro(new Livro(133,'Sede de Sangue','Leonardo Person',false));
// biblioteca.adicionarLivro(new Livro(11,'A volta','Helena Brits' ,true));

// console.log(biblioteca.listarLivro());
// console.log("\n");
// console.log(biblioteca.registrarEmprestimo(11));
// console.log("\n");
// console.log(biblioteca.consultarDisponibilidade(133));




// import { Funcionario } from './Exercicios/Atv2/funcionario'
// import { Empresa } from './Exercicios/Atv2/empresa'

// const empresa = new Empresa()
// empresa.adicionarFuncionario(new Funcionario(1512,'Gabriel','T.I',1900))
// empresa.adicionarFuncionario(new Funcionario(1212,'Carlos','Diretor',3900))
// empresa.adicionarFuncionario(new Funcionario(1012,'Henrique','RH',2500))
// console.log("\n");

// empresa.atualizarSalario(1512,2500)
// console.log("\n");

// empresa.consultarFuncionario(1512)
// console.log("\n");
// empresa.consultarFuncionario(1)


// import { Hotel } from "./Exercicios/Atv3/hotel";
// import { Reserva } from "./Exercicios/Atv3/reserva";

// const hotel = new  Hotel();
// hotel.registrarReserva(new Reserva(1,'Lucas',new Date('2024-12-13'),new Date('2024-12-20')));
// hotel.registrarReserva(new Reserva(2,'Carlos',new Date('2024-09-10'),new Date('2024-09-15')));
// hotel.registrarReserva(new Reserva(3,'Daniel',new Date('2024-08-13'),new Date('2024-08-20')));
// console.log("\n");
// console.log(hotel.listarReservas());
// console.log("\n");
// hotel.cancelarReserva(1);
// console.log("\n");
// console.log(hotel.ConsultarStatusQuarto(1));
// console.log("\n");
// console.log(hotel.ConsultarStatusQuarto(2));
// console.log("\n");

// import { Tarefa } from "./Exercicios/Atv4/tarefa";
// import { GestorTarefas } from "./Exercicios/Atv4/gestortarefas";

//     const tarefa1 = new Tarefa(1, 'Desenvolver backend da aplicação', 'Pendente', 'Projeto A');
//     const tarefa2 = new Tarefa(2, 'Criar interface do usuário', 'Em Andamento', 'Projeto A');
//     const tarefa3 = new Tarefa(3, 'Escrever documentação', 'Pendente', 'Projeto B');

//     const gestor = new GestorTarefas();

//     gestor.adicionarTarefa(tarefa1);
//     gestor.adicionarTarefa(tarefa2);
//     gestor.adicionarTarefa(tarefa3);

//     gestor.atualizarStatus(1, 'Concluída');

//     console.log('\nTarefas do Projeto A:');
//     const tarefasProjetoA = gestor.consultarTarefasPorProjeto('Projeto A');
//     tarefasProjetoA.forEach(tarefa => {
//         console.log(`ID: ${tarefa.id}, Descrição: ${tarefa.descricao}, Status: ${tarefa.status}`);
//     });

//     console.log('\nTarefas do Projeto B:');
//     const tarefasProjetoB = gestor.consultarTarefasPorProjeto('Projeto B');
//     tarefasProjetoB.forEach(tarefa => {
//         console.log(`ID: ${tarefa.id}, Descrição: ${tarefa.descricao}, Status: ${tarefa.status}`);
//     });








// Atividade do Factory e do Builder

import { EditorPDF  } from "./Exercicios/Factory Method/Factory";
import { EditorDOCX } from "./Exercicios/Factory Method/Factory";
import { EditorXLSX } from "./Exercicios/Factory Method/Factory";
import { EditorTXT  } from "./Exercicios/Factory Method/Factory";

function main() {
    const editorPDF = new EditorPDF();
    editorPDF.gerenciarArquivo();

    const editorDOCX = new EditorDOCX();
    editorDOCX.gerenciarArquivo();

    const editorXLSX = new EditorXLSX();
    editorXLSX.gerenciarArquivo();

    const editorTXT = new EditorTXT();
    editorTXT.gerenciarArquivo();
}

main();


import{PepperoniPizzaBuilder} from "./Exercicios/Builder/ClassPizza"
import { Pizza } from "./Exercicios/Builder/ClassPizza";
import { MargheritaPizzaBuilder } from "./Exercicios/Builder/ClassPizza";
import { PizzaDirector } from "./Exercicios/Builder/ClassPizza";
// Criando os Builders
const margheritaBuilder = new MargheritaPizzaBuilder();
const pepperoniBuilder = new PepperoniPizzaBuilder();

// Criando o Diretor
const director = new PizzaDirector(margheritaBuilder);

// Criando uma pizza Margherita usando o Diretor
director.createMargheritaPizza();
const margheritaPizza = margheritaBuilder.getResult();
console.log("Pizza Margherita:");
margheritaPizza.display();

// Criando uma pizza Pepperoni usando o Diretor
director.setBuilder(pepperoniBuilder);
director.createPepperoniPizza();
const pepperoniPizza = pepperoniBuilder.getResult();
console.log("Pizza Pepperoni:");
pepperoniPizza.display();

// Criando uma pizza personalizada diretamente com o Builder
const customPizzaBuilder = new MargheritaPizzaBuilder();
customPizzaBuilder.setSize("média");
customPizzaBuilder.setDough("tradicional");
customPizzaBuilder.addTopping("Queijo");
customPizzaBuilder.addTopping("Pepperoni");
const customPizza = customPizzaBuilder.getResult();
console.log("Pizza Personalizada:");
customPizza.display();
