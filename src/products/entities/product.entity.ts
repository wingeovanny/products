export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
  ) {}

  updateWith({
    name = this.name,
    description = this.description,
    price = this.price,
  }: {
    name?: string;
    description?: string;
    price?: number;
  }) {
    return new Product(this.id, name, description, price); // (1)
  }
}
