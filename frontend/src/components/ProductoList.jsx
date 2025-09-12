import React, { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, loading, error, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="alert alert-error">
          ❌ {error}
        </div>
        <button 
          onClick={loadProducts}
          className="btn btn-secondary"
        >
          🔄 Tentar Novamente
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📦</div>
        <h3>Nenhum produto cadastrado</h3>
        <p>Cadastre seu primeiro produto na aba "Cadastrar Produto"</p>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="list-header">
        <p className="product-count">
          📊 Total de produtos: <strong>{products.length}</strong>
        </p>
        <button 
          onClick={loadProducts}
          className="btn btn-secondary btn-sm"
          disabled={loading}
        >
          🔄 Atualizar
        </button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;