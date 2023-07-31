class Smoothie {
    constructor(flavor, size, toppings) {
      this.flavor = flavor;
      this.size = size;
      this.toppings = toppings;
    }
  
    getDescription() {
      return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.toppings.join(', ')}.`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('orderButton');
    const smoothieForm = document.getElementById('smoothieForm');
    const smoothieOutput = document.getElementById('smoothieOutput');
  
    orderButton.addEventListener('click', () => {
      const flavor = smoothieForm.flavor.value;
      const size = smoothieForm.size.value;
      const toppings = Array.from(smoothieForm.toppings.selectedOptions, option => option.value);
  
      const smoothie = new Smoothie(flavor, size, toppings);
      smoothieOutput.textContent = smoothie.getDescription();
    });
  });
  