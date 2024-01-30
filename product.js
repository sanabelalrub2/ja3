const fetchProductDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (!productId) {
      console.error('Product ID not found in query parameters');
      return;
    }
  
    try {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      const product = response.data;
  
      const productDetails = document.getElementById('product-details');
      productDetails.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.thumbnail}" alt="${product.title}" style="width:100px; height:auto;">
        <p>${product.description}</p>
      `;
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  
  fetchProductDetails();
  