export function getHouseForm() {
    return /*html*/ `
         
<form
class="mb-3 col-12 bg-white p-3 mt-4"
onsubmit="app.housesController.createHouse()"
>
<h3>List a House</h3>
<div class="row flex-row">
<div class="col-md-3">
<label for="" class="form-label">rooms</label>
<input
  required
  type="rooms"
  name="rooms"
  id="rooms"
  class="form-control"
  placeholder=""
  aria-describedby="helpId"
/>
</div>
  <div class="col-md-3">
  <label for="" class="form-label">bathrooms</label>
  <input
    required
    type="bathrooms"
    name="bathrooms"
    id="bathrooms"
    class="form-control"
    placeholder=""
    aria-describedby="helpId"
  />
</div>
  <div class="col-md-3">
    <label for="" class="form-label">floors</label>
    <input
      required
      type="floors"
      name="floors"
      id="floors"
      class="form-control"
      placeholder=""
      aria-describedby="helpId"
    />
  </div>
  <div class="col-md-3">
    <label for="" class="form-label">price</label>
    <input
      required
      type="price"
      name="price"
      id="price"
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
      placeholder="Tell us about the house..."
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
    <label for="" class="form-label">Color</label>
    <input
      required
      type="color"
      name="color"
      id="color"
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
