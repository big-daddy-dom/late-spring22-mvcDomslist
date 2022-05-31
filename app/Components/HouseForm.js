export function getHouseForm(house = {}) {
  return /*html*/ `
         
<form
class="mb-3 col-12 bg-white p-3 mt-4"
onsubmit="app.housesController.${house.id ? `updateHouse('${house.id}')` : "createHouse()"}"
>
<h3>${house.id ? "Edit" + house.bedrooms : "List a house"} </h3>
<div class="row flex-row">
<div class="col-md-3">
<label for="" class="form-label">bedrooms</label>
<input
  required
  type="bedrooms"
  name="bedrooms"
  id="bedrooms"
  value="${house.bedrooms || 3}"
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
    value="${house.bathrooms || 2}"
    id="bathrooms"
    class="form-control"
    placeholder=""
    aria-describedby="helpId"
  />
</div>
  <div class="col-md-3">
    <label for="" class="form-label">levels</label>
    <input
      required
      type="levels"
      name="levels"
      id="levels"
      value="${house.levels || 2}"
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
      value="${house.price || 100}"
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
      value="${house.description || ""}"
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
      value="${house.imgUrl || ""}"
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
      value="${house.color || "#ffffff"}"
      id="color"
      class="form-control"
      placeholder=""
      aria-describedby="helpId"
    />
  </div>
  <div class="col-md-3">
  <label for="" class="form-label">year</label>
  <input
    required
    type="year"
    name="year"
    id="year"
    value="${house.year || 1990}"
    class="form-control"
    placeholder=""
    aria-describedby="helpId"
  />
</div>
</div>
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
  Close
</button>
${getButtons(house.id)}
</form>



`
}
// <button type="submit" class="btn btn-primary px-3 py-2" title="">
//   <i class="mdi mdi-plus"></i> Create
// </button>
function getButtons(id) {
  if (id) {
    return ` <button type="submit" class="btn btn-info px-3 py-2" title="edit a house"><i
    class="mdi mdi-pencil"></i>
  Save</button>`;
  } else {
    return ` <button type="submit" class="btn btn-primary px-3 py-2" title="create a house"><i
    class="mdi mdi-plus"></i>
  Create</button>`;
  }
}
