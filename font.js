const ul = document.querySelector(".list-group");

const displayProducts = () => {
  const html = `
  <div class="col mt-5">
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <p class="card-text"> price</p>
      <p class="card-text"> brand</p>
      <a href="#" class="btn btn-primary">Buy It Now </a>
    </div>
  </div>
</div>

  `;
};

const getData = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWZkZWIzNTgxNzAwMTVjMjI3MDkiLCJpYXQiOjE2MjUwNTUxOTksImV4cCI6MTYyNjI2NDc5OX0.7iWVJHAsRtVZQp-fg2i5UsDxH-lGvBdX3abGB789JG8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
    });
};

// getData();
