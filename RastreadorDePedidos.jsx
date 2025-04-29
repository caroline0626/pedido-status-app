import { useState } from 'react';

const pedidosMock = {
  'ABC123': 'Lentes em confecção',
  'XYZ456': 'Montagem finalizada',
  'DEF789': 'Disponível para retirada',
};

export default function RastreadorDePedidos() {
  const [codigo, setCodigo] = useState('');
  const [status, setStatus] = useState('');
  const [erro, setErro] = useState('');

  const consultarPedido = () => {
    if (codigo.trim() === '') {
      setErro('Por favor, digite um código de pedido.');
      setStatus('');
      return;
    }
    const resultado = pedidosMock[codigo.trim().toUpperCase()];
    if (resultado) {
      setStatus(resultado);
      setErro('');
    } else {
      setErro('Pedido não encontrado. Verifique o código e tente novamente.');
      setStatus('');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0f2fe', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Rastrear Pedido</h1>
      <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Digite o código do pedido"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={consultarPedido} style={{ width: '100%', padding: '0.5rem', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Consultar
        </button>
        {status && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '1rem' }}>Status: {status}</p>}
        {erro && <p style={{ color: 'red', marginTop: '1rem' }}>{erro}</p>}
      </div>
    </div>
  );
}