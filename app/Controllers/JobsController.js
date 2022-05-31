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
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      pay: form.pay.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
    };
    jobsService.createJob(jobData);
    // @ts-ignore
    form.reset();
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("form-modal")
    ).hide();
  }

  deleteJob(id) {
    jobsService.deleteJob(id);
  }
}
