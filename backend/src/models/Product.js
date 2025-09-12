export class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = parseFloat(price);
    this.quantity = parseInt(quantity);
    this.createdAt = new Date().toISOString();
  }

  static validate(data) {
    const errors = [];

    if (!data.name || data.name.trim().length === 0) {
      errors.push('Nome é obrigatório');
    }

    if (!data.price || isNaN(data.price) || parseFloat(data.price) <= 0) {
      errors.push('Preço deve ser um número maior que zero');
    }

    if (!data.quantity || isNaN(data.quantity) || parseInt(data.quantity) < 0) {
      errors.push('Quantidade deve ser um número maior ou igual a zero');
    }

    return errors;
  }
}