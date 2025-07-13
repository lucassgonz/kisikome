import { useParams } from 'react-router-dom';

export default function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">Detalhes do Produto: {id}</h1>
    </div>
  );
}
