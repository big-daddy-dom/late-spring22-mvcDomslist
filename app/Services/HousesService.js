import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  createHouse(houseData) {
    ProxyState.houses = [...ProxyState.houses, new House(houseData)];
  }
  deleteHouse(id) {
    ProxyState.houses = ProxyState.houses.filter((h) => h.id != id);
    ProxyState.houses = ProxyState.houses;
  }
}

export const housesService = new HousesService();
