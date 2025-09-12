import React from 'react';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getStockStatus = (quantity) => {
    if (quantity === 0) return { text: 'Sem estoque', class: 'out-of-stock' };
    if (quantity <= 5) return { text: 'Estoque baixo', class: 'low-stock' };
    return { text: 'Em estoque', class: 'in-stock' };
  };

  const stockStatus = getStockStatus(product.quantity);

  return (
    <div className="product-card">
      <div className="product-header">
        <h3 className="product-name" title={product.name}>
          {product.name}
        </h3>
        <span className={`stock-badge ${stockStatus.class}`}>
          {stockStatus.text}
        </span>
      </div>

      <div className="product-details">
        <div className="detail-item">
          <span className="label">💰 Preço:</span>
          <span className="value price">{formatPrice(product.price)}</span>
        </div>

        <div className="detail-item">
          <span className="label">📦 Estoque:</span>
          <span className="value">{product.quantity} unidades</span>
        </div>

        <div className="detail-item">
          <span className="label">📅 Cadastrado:</span>
          <span className="value date">{formatDate(product.createdAt)}</span>
        </div>

        <div className="detail-item">
          <span className="label">🔢 ID:</span>
          <span className="value">#{product.id}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;