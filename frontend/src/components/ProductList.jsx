export default function ProductList({ products }) {
  return (
    <div>
      <h2>Produtos Cadastrados</h2>
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.name} - R$ {p.price.toFixed(2)} ({p.quantity} unid.)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
