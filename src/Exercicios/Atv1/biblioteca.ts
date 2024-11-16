import { Livro } from './livro';

export class Biblioteca {
    private acervo: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
    }

    registrarEmprestimo(codigo: number): void {
        const livro = this.acervo.find(l => l.codigo === codigo);
        if (livro) {
            if (livro.disponivel) {
                livro.disponivel = false;
                console.log('Livro emprestado. Agora está indisponível.');
            } else {
                console.log('Livro não está disponível para empréstimo.');
            }
        } else {
            console.log('Livro não encontrado.');
        }
    }    

    consultarDisponibilidade(codigo: number): boolean {
        const livro = this.acervo.find(l => l.codigo === codigo);
        if (livro) {
            return livro.disponivel;
        } else {
            console.log('Livro não encontrado.');
            return false;
        }
    }

    listarLivro(): Livro[] {
        return this.acervo;
    }
}
