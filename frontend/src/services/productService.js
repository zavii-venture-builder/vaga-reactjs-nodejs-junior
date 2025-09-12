const API_BASE_URL = 'http://localhost:3000/api';

class ProductService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Erro ${response.status}`);
      }

      return data.data || data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  async getAllProducts() {
    const response = await this.request('/products');
    return response.data || response;
  }

  async createProduct(productData) {
    const response = await this.request('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
    return response.data || response;
  }

  async getProductById(id) {
    const response = await this.request(`/products/${id}`);
    return response.data || response;
  }

  async updateProduct(id, productData) {
    const response = await this.request(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
    return response.data || response;
  }

  async deleteProduct(id) {
    const response = await this.request(`/products/${id}`, {
      method: 'DELETE',
    });
    return response.data || response;
  }
}

export const productService = new ProductService();