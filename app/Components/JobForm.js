export function getJobForm() {
  return /*html */ `
    <form
class="mb-3 col-12 bg-white p-3 mt-4"
onsubmit="app.jobsController.createJob()"
>
<h3>List a House</h3>
<div class="row flex-row">

  <div class="col-md-3">
    <label for="" class="form-label">title</label>
    <input
      required
      type="text"
      name="title"
      id="title"
      class="form-control"
      placeholder=""
      aria-describedby="helpId"
    />
  </div>
  <div class="col-md-3">
    <label for="" class="form-label">pay</label>
    <input
      required
      type="text"
      name="pay"
      id="pay"
      class="form-control"
      placeholder=""
      aria-describedby="helpId"
    />
  </div>

  <div class="col-12 mb-2">
    <label for="" class="form-label">Description</label>
    <input
      type="text"
      name="description"
      id="description"
      placeholder="Tell us about the job..."
      class="form-control"
      maxlength="75"
      placeholder=""
      aria-describedby="helpId"
    />
  </div>
  <div class="col-6">
    <label for="" class="form-label">Image Url</label>
    <input
      required
      type="text"
      name="imgUrl"
      id="imgUrl"
      class="form-control"
      placeholder=""
      aria-describedby="helpId"
    />
  </div>
  <div class="col-6">
    <label for="" class="form-label">company</label>
    <input
      required
      type="text"
      name="company"
      id="company"
      class="form-control"
      placeholder=""
      aria-describedby="helpId"
    />
  </div>
</div>
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
  Close
</button>
<button type="submit" class="btn btn-primary px-3 py-2" title="">
  <i class="mdi mdi-plus"></i> Create
</button>
</form>
    
    
    `;
}
