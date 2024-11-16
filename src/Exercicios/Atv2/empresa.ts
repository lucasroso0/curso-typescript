import { Funcionario } from "./funcionario";

export class Empresa{
    private funcionarios: Funcionario[] = [];

    adicionarFuncionario(funcionario:Funcionario): void{
        this.funcionarios.push(funcionario)
    }
    atualizarSalario(matricula: number, salario: number): void {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (funcionario) {
            funcionario.salario = salario;
            console.log(`Salário atualizado para R$ ${salario} para o funcionário com matrícula ${matricula}.`);
        } else {
            console.log(`Funcionário com matrícula ${matricula} não encontrado.`);
        }
    }
    consultarFuncionario(matricula:number): Funcionario|undefined{
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if(funcionario){
            console.log(`Funcionario ${funcionario.nome} encontrado com a Matricula ${matricula}`)
            return funcionario;
        }
        else{
            console.log(`Funcionário com matrícula ${matricula} não encontrado.`);
            return undefined;
        }
    }
    
}