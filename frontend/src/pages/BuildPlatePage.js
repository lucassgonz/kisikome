import React, { useEffect, useState } from 'react';
import api from '../services/api';

const BuildPlatePage = () => {
  const [baseOptions, setBaseOptions] = useState([]);
  const [sides, setSides] = useState([]);
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedSides, setSelectedSides] = useState([]);

  useEffect(() => {
    // Supondo que o backend filtre pelo tipo
    api.get('/products?category=base').then(res => setBaseOptions(res.data));
    api.get('/products?category=side').then(res => setSides(res.data));
  }, []);

  const handleAddPlate = () => {
    api.post('/cart', {
      custom_plate: {
        base: selectedBase,
        sides: selectedSides
      }
    }).then(() => alert('Marmita adicionada ao carrinho!'))
      .catch(() => alert('Erro ao adicionar marmita'));
  };

  return (
    <div>
      <h1>Monte sua Marmita</h1>

      <h2>Escolha a Base</h2>
      {baseOptions.map(b => (
        <button
          key={b.id}
          onClick={() => setSelectedBase(b)}
          className={selectedBase?.id === b.id ? 'selected' : ''}
        >
          {b.name}
        </button>
      ))}

      <h2>Acompanhamentos</h2>
      {sides.map(s => (
        <div key={s.id}>
          <input
            type="checkbox"
            checked={selectedSides.includes(s)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedSides([...selectedSides, s]);
              } else {
                setSelectedSides(selectedSides.filter(side => side.id !== s.id));
              }
            }}
          />
          {s.name}
        </div>
      ))}

      <button onClick={handleAddPlate}>Adicionar Marmita ao Carrinho</button>
    </div>
  );
};

export default BuildPlatePage;
