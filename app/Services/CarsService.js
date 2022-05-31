import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

class CarsService {
  async getCars() {
    // @ts-ignore
    const response = await axios.get(
      "https://bcw-sandbox.herokuapp.com/api/cars"
    );
    console.log("getCars", response.data);
    ProxyState.cars = response.data.map((c) => new Car(c));
  }
  async createCar(carData) {
    console.log("arrived in service", carData);
    // @ts-ignore
    const res = await axios.post(
      "https://bcw-sandbox.herokuapp.com/api/cars",
      carData
    );
    console.log("createCar", res.data);
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)];
  }

  async updateCar(carData, id) {
    // @ts-ignore
    const res = await axios.put(
      "https://bcw-sandbox.herokuapp.com/api/cars/" + id,
      carData
    );
    console.log("updateCar", res.data);
    let carIndex = ProxyState.cars.findIndex((c) => c.id === id);
    ProxyState.cars.splice(carIndex, 1, new Car(res.data));
    ProxyState.cars = ProxyState.cars;
  }

  async deleteCar(id) {
    // console.log('arrived in service', id);
    // NOTE find is cool but not necessary here
    // let car = ProxyState.cars.find(c => c.id == id)
    // console.log('car found',car);
    // NOTE filter creates a copy of the cars array but only includes cars that don't have the id selected
    // effectively removing the one we selected from the array AND triggering our listener with =

    // @ts-ignore
    const res = await axios.delete(
      "https://bcw-sandbox.herokuapp.com/api/cars/" + id
    );
    console.log("deleteCar", res.data);
    ProxyState.cars = ProxyState.cars.filter((c) => c.id != id);
    ProxyState.cars = ProxyState.cars;
  }
}

export const carsService = new CarsService();
