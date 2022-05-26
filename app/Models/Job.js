import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor(jobData) {
    this.id = generateId();
    this.title = jobData.title;
    this.pay = jobData.pay;
    this.description = jobData.description;
    this.company = jobData.company;
    this.imgUrl = jobData.imgUrl;
  }
  get Template() {
    return `
      <div class=" col-6 col-md-3">
        <div class="rounded shadow p-2" ">
          <img class="img-fluid" src="${this.imgUrl}" alt="">
          <h5 class="text-center">${this.title} | ${this.company} | $${this.pay}/hr</h5>
          <p>${this.description}</p>
          <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')"><i class="mdi mdi-delete"></i></button>
        </div>
      </div>
        `;
  }
}
