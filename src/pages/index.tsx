import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ImagesComp from '@/ImagensComp/ImagesComp';

interface Produto {
  id: number;
  nome: string;
  image: string;  
  valor: number;
  descricao: string;
  detalhes: string;
}


interface ApiResponse {
  Produtos: Produto[];
}

const Home = () => {
  const router = useRouter();
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Produtos');
        const data: ApiResponse = await response.json();
        setProdutos(data.Produtos);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleSaibaMaisClick = async (produto: Produto) => {
    const produtoQuery = {
      id: produto.id.toString(),
      nome: produto.nome,
      image: produto.image,
      valor: produto.valor.toString(),
      descricao: produto.descricao,
      detalhes: produto.detalhes,
    };

    router.push({
      pathname: '/components/produtoDetalhado',
      query: produtoQuery,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Lista de Produtos</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <li key={produto.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div
                onClick={() => handleSaibaMaisClick(produto)}
                className="max-w-full mx-auto cursor-pointer"
              >
                <Link href="/components/produtoDetalhado" passHref>
                  <div>
                    <ImagesComp src={produto.image} alt={produto.nome} />
                  </div>
                </Link>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{produto.nome}</h2>
            <div className="text-justify p-2">
              <p className="text-gray-600 mb-4">{produto.descricao}</p>
              <p className="text-lg font-bold mb-4">R$ {produto.valor}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => handleSaibaMaisClick(produto)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Saiba mais
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;