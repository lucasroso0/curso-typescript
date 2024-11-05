import {Produto} from './model/produto'
import {Estoque} from './model/estoque'

const produto1 = new Produto(1,'Chocolate',5.00,2)
const estoque = new Estoque()

estoque.adicionarProduto(new Produto(1,'Chocolate1',5.10,2))
estoque.adicionarProduto(new Produto(2,'Chocolate2',5.20,3))
estoque.adicionarProduto(new Produto(3,'Chocolate3',5.30,4))
estoque.adicionarProduto(new Produto(4,'Chocolate4',5.40,5))
estoque.adicionarProduto(new Produto(5,'Chocolate5',5.50,6))

console.log(estoque.listaProdutos)

estoque.atualizarQuantidade(2,10)

console.log(estoque.listaProdutos)

