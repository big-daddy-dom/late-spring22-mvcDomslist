import { generateId } from "../Utils/generateId.js";

export class Job{
    constructor(jobData){
        this.id = generateId()
        this.title = jobData.title
        this.pay = jobData.pay
        this.description = jobData.description
        this.company = jobData.company

    }
    get Template(){
        return `
      <div class=" col-6 col-md-3">
        <div class="rounded shadow p-2" ">
          <img class="img-fluid" src="${this.imgUrl}" alt="">
          <h5 class="text-center">${this.make} | ${this.model} | ${this.year}</h5>
          <h4 class="text-center">$${this.price}</h4>
          <p>${this.description}</p>
          <input class="w-100" type="color" value="${this.color}">
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete"></i></button>
        </div>
      </div>
        `
      }
}