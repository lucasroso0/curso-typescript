import { Tarefa } from "./tarefa";
export class GestorTarefas {
    private tarefas: Tarefa[] = [];

    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
    }

    atualizarStatus(id: number, status: string): void {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.status = status;
            console.log(`Status da tarefa ${tarefa.id} atualizado para: ${status}`);
        } else {
            console.log(`Tarefa com ID ${id} não encontrada.`);
        }
    }
    consultarTarefasPorProjeto(projeto: string): Tarefa[] {
        return this.tarefas.filter(t => t.projeto === projeto);
    }
}
