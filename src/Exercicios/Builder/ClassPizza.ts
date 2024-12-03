interface PizzaBuilder {
    reset(): void;
    setSize(size: string): void;
    setDough(dough: string): void;
    addTopping(topping: string): void;
    getResult(): Pizza;
  }
  
export class Pizza {
    size: string | null = null;
    dough: string | null = null;
    toppings: string[] = [];
  
    display() {
      console.log(`Tamanho: ${this.size}`);
      console.log(`Massa: ${this.dough}`);
      console.log(`Ingredientes: ${this.toppings.join(", ")}`);
    }
  }

export class PepperoniPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;
  
    constructor() {
      this.pizza = new Pizza();
      this.reset();
    }
  
    reset() {
      this.pizza = new Pizza();
    }
  
    setSize(size: string) {
      if (size !== "média") {
        throw new Error("Tamanho da Pepperoni deve ser média.");
      }
      this.pizza.size = size;
    }
  
    setDough(dough: string) {
      if (dough !== "tradicional") {
        throw new Error("Massa da Pepperoni deve ser tradicional.");
      }
      this.pizza.dough = dough;
    }
  
    addTopping(topping: string) {
      const validToppings = ["Queijo", "Pepperoni"];
      if (!validToppings.includes(topping)) {
        throw new Error("Ingrediente inválido para Pepperoni.");
      }
      this.pizza.toppings.push(topping);
    }
  
    getResult(): Pizza {
      return this.pizza;
    }
  }
  
export class MargheritaPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;
  
    constructor() {
      this.pizza = new Pizza();
      this.reset();
    }
  
    reset() {
      this.pizza = new Pizza();
    }
  
    setSize(size: string) {
      if (size !== "grande") {
        throw new Error("Tamanho da Margherita deve ser grande.");
      }
      this.pizza.size = size;
    }
  
    setDough(dough: string) {
      if (dough !== "fina") {
        throw new Error("Massa da Margherita deve ser fina.");
      }
      this.pizza.dough = dough;
    }
  
    addTopping(topping: string) {
      const validToppings = ["Queijo", "Tomate", "Manjericão"];
      if (!validToppings.includes(topping)) {
        throw new Error("Ingrediente inválido para Margherita.");
      }
      this.pizza.toppings.push(topping);
    }
  
    getResult(): Pizza {
      return this.pizza;
    }
  }


  export class PizzaDirector {
    private builder: PizzaBuilder;
  
    constructor(builder: PizzaBuilder) {
      this.builder = builder;
    }
  
    setBuilder(builder: PizzaBuilder) {
      this.builder = builder;
    }
  
    createMargheritaPizza() {
      this.builder.reset();
      this.builder.setSize("grande");
      this.builder.setDough("fina");
      this.builder.addTopping("Queijo");
      this.builder.addTopping("Tomate");
      this.builder.addTopping("Manjericão");
    }
  
    createPepperoniPizza() {
      this.builder.reset();
      this.builder.setSize("média");
      this.builder.setDough("tradicional");
      this.builder.addTopping("Queijo");
      this.builder.addTopping("Pepperoni");
    }
  }
