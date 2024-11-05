import { Produto } from './produto';

export class Estoque {

    listaProdutos: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
    }
    atualizarQuantidade(id:number,quantidade:number):void{
      const indice =  this.listaProdutos.findIndex(p => p.id === id)
      if(indice < 0)
      {
        console.log('produto não localizado')
      }
      else
      {
        this.listaProdutos[indice].quantidade = quantidade
        // console.log('O Pruduto é ')
        // // this.listaProdutos[indice].quantidade = quantidade;  
      }
    }
    removerProduto(produto: Produto): void {
        const index = this.listaProdutos.indexOf(produto);
        this.listaProdutos.splice(index, 1);
    }

    listarProdutos(): Produto[] {
        return this.listaProdutos;
    }
}