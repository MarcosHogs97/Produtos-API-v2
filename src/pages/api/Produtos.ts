import type { NextApiRequest, NextApiResponse } from 'next'
import listaProdutos from '../../../data/listaProdutos'
import Produto from '../../../model/produto';

interface ApiResponse {
  Produtos: Produto[];
}

export default function Produtos(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse|string>
) {
  if (req.method === "GET") {
    res.status(200).json({ Produtos: listaProdutos });
  } else {
    res.status(405).json("Erro 405 Método Não Permitido!!!");
  }
}