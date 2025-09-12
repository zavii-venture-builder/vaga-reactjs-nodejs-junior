import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: ''
  });
  const [success, setSuccess] = useState(false);

  const { addProduct, loading, error } = useProducts();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await addProduct({
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity)
    });

    if (result.success) {
      setFormData({ name: '', price: '', quantity: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const isFormValid = formData.name.trim() && 
                     formData.price && 
                     formData.quantity !== '' &&
                     parseFloat(formData.price) > 0 &&
                     parseInt(formData.quantity) >= 0;

  return (
    <div className="product-form-container">
      {success && (
        <div className="alert alert-success">
          ✅ Produto cadastrado com sucesso!
        </div>
      )}

      {error && (
        <div className="alert alert-error">
          ❌ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">
            Nome do Produto *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: Smartphone Galaxy"
            required
            disabled={loading}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">
              Preço (R$) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0.01"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">
              Quantidade em Estoque *
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="0"
              min="0"
              required
              disabled={loading}
            />
          </div>
        </div>

        <button 
          type="submit" 
          className={`btn btn-primary ${loading ? 'loading' : ''}`}
          disabled={!isFormValid || loading}
        >
          {loading ? '⏳ Cadastrando...' : '💾 Cadastrar Produto'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;