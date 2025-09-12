import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductContext';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('cadastro');

  return (
    <ProductProvider>
      <div className="app">
        <Header />
        
        <nav className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'cadastro' ? 'active' : ''}`}
            onClick={() => setActiveTab('cadastro')}
          >
            📝 Cadastrar Produto
          </button>
          <button 
            className={`nav-tab ${activeTab === 'lista' ? 'active' : ''}`}
            onClick={() => setActiveTab('lista')}
          >
            📋 Listar Produtos
          </button>
        </nav>

        <main className="main-content">
          {activeTab === 'cadastro' && (
            <div className="tab-content">
              <h2>Cadastrar Novo Produto</h2>
              <ProductForm />
            </div>
          )}
          
          {activeTab === 'lista' && (
            <div className="tab-content">
              <h2>Lista de Produtos</h2>
              <ProductList />
            </div>
          )}
        </main>
      </div>
    </ProductProvider>
  );
}

export default App;