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

  document.getElementById("listings").innerHTML = template;
}

export class HousesController {
  constructor() {
    console.log("Houses controller loaded", ProxyState.houses);
    ProxyState.on("houses", _drawHouses);
    this.getHouses();
    this.viewHouses();
  }

  viewHouses() {
    let form = getHouseForm();
    document.getElementById("form-body").innerHTML = form;
    _drawHouses();
  }

  async getHouses() {
    await housesService.getHouses();
  }

  async createHouse() {
    window.event.preventDefault();
    let form = window.event.target;
    let houseData = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      color: form.color.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      year: form.year.value,
    };

    housesService.createHouse(houseData);
    // @ts-ignore
    form.reset();
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("form-modal")
    ).hide();
  }
  async updateHouse(id) {
    window.event.preventDefault();
    let form = window.event.target;
    let houseData = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,

      // @ts-ignore
      color: form.color.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      price: form.price.value,
    };
    await housesService.updateHouse(houseData, id);
  }

  openCreateForm() {
    let form = getHouseForm();
    document.getElementById("form-body").innerHTML = form;
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("form-modal")
    ).show();
  }
  openEditForm(id) {
    let house = ProxyState.houses.find((h) => h.id == id);
    console.log("open form", house);
    let updateForm = getHouseForm(house);
    document.getElementById("form-body").innerHTML = updateForm;
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("form-modal")
    ).show();
  }

  deleteHouse(id) {
    housesService.deleteHouse(id);
  }
}
