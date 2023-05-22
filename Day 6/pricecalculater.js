class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const distanceCost = distanceInKm * this.costPerKm;
      const timeCost = timeInMinutes * this.costPerMinute;
      const totalCost = this.baseFare + distanceCost + timeCost;
  
      return totalCost;
    }
  }
  const calculator = new UberPriceCalculator(5, 2.5, 0.1);
  const price = calculator.calculatePrice(25,12);
  console.log(`The estimated Uber price is ${price.toFixed(2)}`);