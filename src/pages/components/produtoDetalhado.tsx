import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CompDetails from './CompProductDetails';

interface Produto {
  id: number;
  nome: string;
  image: string;
  valor: number;
  descricao: string;
  detalhes: string;
}

const ProdutoDetalhes = () => {
  const router = useRouter();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    // Verifica se há um produto no estado do router
    if (router.query && router.query.id) {
      const produtoData: Produto = {
        id: Number(router.query.id),
        nome: router.query.nome as string,
        image: router.query.image as string,
        valor: Number(router.query.valor),
        descricao: router.query.descricao as string,
        detalhes: router.query.detalhes as string,
      };
      setProduto(produtoData);
    }
  }, [router.query]);

  if (!produto) {
    // Pode ser exibida uma mensagem de carregamento aqui, se necessário
    return null;
  }


  return (
    <CompDetails id={produto.id} nome={produto.nome} image={produto.image} valor={produto.valor} descricao={produto.descricao} detalhes={produto.detalhes} />
  );
};

export default ProdutoDetalhes;