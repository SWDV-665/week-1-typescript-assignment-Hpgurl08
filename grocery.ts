class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

const groceries: Grocery[] = [
    new Grocery('Milk', 3),
    new Grocery('Bread', 6),
    new Grocery('Eggs', 11),
];

// Export the groceries array so it can be used in other files if needed
export { groceries };