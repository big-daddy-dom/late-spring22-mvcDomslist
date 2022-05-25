import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { getHouseForm } from "../Components/HouseForm.js";

function _drawHouses() {
  // get all the houses and build a template
  let houses = ProxyState.houses;
  let template = "";
  houses.forEach((h) => {
    template += h.Template;
    console.log();
  });

  document.getElementById("listings").innerHTML = " The Houses go here";
}

export class HousesController {
  constructor() {
    console.log("Houses controller loaded", ProxyState.houses);
    ProxyState.on("houses", _drawHouses);
    this.viewHouses();
  }

  viewHouses() {
    let form = getHouseForm();
    document.getElementById("form-body").innerHTML = form;
    _drawHouses();
  }

  createHouse() {
    window.event.preventDefault();
    let form = window.event.target;
    let houseData = {
      rooms: form.rooms.value,
      bathrooms: form.bathrooms.value,
      floors: form.floors.value,
      color: form.color.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      price: form.price.value,
    };

    housesService.createHouse(houseData);
    form.reset();
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("form-modal")
    ).hide();
  }

  deleteHouse(id) {
    housesService.deleteHouse(id);
  }
}
