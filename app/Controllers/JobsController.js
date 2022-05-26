import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getJobForm } from "../Components/JobForm.js";

function _drawJobs() {
  let jobs = ProxyState.jobs;
  let template = "";
  jobs.forEach((j) => {
    template += j.Template;
  });
  document.getElementById("listings").innerHTML = template;
}

export class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs);
    this.viewJobs();
  }

  viewJobs() {
    let form = getJobForm();
    document.getElementById("form-body").innerHTML = form;
    _drawJobs();
  }

  createJob() {
    window.event.preventDefault();
    let form = window.event.target;
    let jobData = {
      title: form.title.value,
      pay: form.pay.value,
      description: form.description.value,
      company: form.company.value,
      imgUrl: form.imgUrl.value,
    };
    jobsService.createJob(jobData);
    form.reset();
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("form-modal")
    ).hide();
  }

  deleteJob(id) {
    jobsService.deleteJob(id);
  }
}
