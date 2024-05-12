function renderProducts(data) {
  const html = data.map(
    (item) => `
    <div class="col">
    <div class="card h-100">
      <img 
      src= "${item.thumbnail}"
      class="card-img-top" 
      alt="product-images" />
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
          ${item.description}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary"> $ ${item.price}</small>
      </div>
    </div>
  </div>
    `
  );

  console.log(html);

  const container = document.getElementById("product-container");
  container.innerHTML = html.join("");
}

console.log(products);

const productsFromSmartphones = products.filter(
    
    (item)=>item.category === 'smartphones'

)
renderProducts(products);

const categoryDiv = document.getElementById('category') 

categoryDiv.addEventListener('click', (e) => {

    const category = e.target.id;
    const temp = products.filter(products => products.category === category);
    renderProducts(temp)
})


