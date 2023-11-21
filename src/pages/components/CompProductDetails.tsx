import ImagesComp from "@/ImagensComp/ImagesComp";
import Link from "next/link";
;

export default function CompDetails(props:any) {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="max-w-xl mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
                    <h1 className="text-2xl font-semibold mb-2">{props.nome}</h1>
                    <ImagesComp src={props.image} alt={props.nome} />
                    <div className="text-justify p-2">
                        <p className="text-gray-700 my-2 ">
                            <strong>Descrição:</strong> {props.descricao}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Detalhes:</strong> {props.detalhes}
                        </p>
                        <p className="text-lg font-bold mb-4">
                            <strong>Valor: R$</strong> {props.valor}
                        </p>
                    </div>
                    <Link href={`/`}>
                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                Saiba mais
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}