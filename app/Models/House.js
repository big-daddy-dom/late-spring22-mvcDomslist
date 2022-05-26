import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(houseData) {
    this.id = generateId();
    this.rooms = houseData.rooms;
    this.bathrooms = houseData.bathrooms;
    this.floors = houseData.floors;
    this.color = houseData.color;
    this.description = houseData.description;
    this.imgUrl = houseData.imgUrl;
    this.price = houseData.price;
  }

  get Template() {
    /**html**/
    return `   
    
      
        <div class=" col-6 col-md-3">
        <div class="rounded shadow p-2" ">
          <img class="img-fluid" src="${this.imgUrl}" alt="">
          <h5 class="text-center">${this.rooms} | ${this.bathrooms} | ${this.color}</h5>
          <h4 class="text-center">$${this.price}</h4>
          <p>${this.description}</p>
          <input class="w-100" type="color" value="${this.color}">
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
        </div>
      </div>
        `;
  }
}
