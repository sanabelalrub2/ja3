const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const createProductElement = (product) => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}" alt="${product.title}" style="width:100px; height:auto;">
      <p>${product.description}</p>
      <button onclick="redirectToProductDetails(${product.id})">Details</button>
    `;
    return productDiv;
  };
  
  fetchProducts().then(products => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const productDiv = createProductElement(product);
      productList.appendChild(productDiv);
    });
  });
  
  const redirectToProductDetails = (productId) => {
    window.location.href = `product.html?id=${productId}`;
  };
  