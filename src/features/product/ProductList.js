function ProductList() {
	// fetch products from the server
	return `
    <div class="row">
      <div class="col-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Product 1</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#/product/1" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Product 2</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#/product/2" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Product 3</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#/product/3" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default ProductList;
