const datatesti = [
  {
    name: "Monkey D Luffy",
    image: "./assets/images/luffy.jpg",
    comment: "Mantap pisan jasanya!",
    rating: 5,
  },
  {
    name: "Roronoa Zoro",
    image: "./assets/images/zoro.jpg",
    rating: 5,
    comment: "Pelayanannya ramah!",
  },
  {
    name: "Vinsmoke Sanji",
    image: "./assets/images/sanji.jpg",
    rating: 4,
    comment: "Rekomended banget!",
  },
  {
    name: "Nico Robin",
    image: "./assets/images/robin.jpg",
    rating: 3,
    comment: "Yah Lumayan",
  },
  {
    name: "God Usop",
    image: "./assets/images/usop.jpg",
    rating: 2,
    comment: "Tidak sesuai permintaan",
  },
];

function showTestimonial() {
  let testiForHtml = "";

  datatesti.forEach((item) => {
    testiForHtml += `
        <div class="testimonial">
            <img src=${item.image} class="profile-testimonial" />
            <p class="quote">"${item.comment}"</p>
            <p class="author">- ${item.name}</p>
            <p class="rating-pt">${item.rating} <img src="./assets/images/star.png" width="15px"></p>
        </div>`;
  });

  document.getElementById("testimonials").innerHTML = testiForHtml;
}
showTestimonial();

// filtering function
function filterTesti(rating) {
  let testiForHtml = "";

  const dataFilter = datatesti.filter((data) => data.rating === rating);

  if (dataFilter.length === 0) {
    testiForHtml = `<h3>Data not found!</h3>`;
  } else {
    dataFilter.forEach((item) => {
      testiForHtml += `
            <div class="testimonial">
                <img src=${item.image} class="profile-testimonial" />
                <p class="quote">"${item.comment}"</p>
                <p class="author">- ${item.name}</p>
                <p class="rating-pt">${item.rating} <img src="./assets/images/star.png" width="15px"></p>
            </div>`;
    });
  }
  document.getElementById("testimonials").innerHTML = testiForHtml;
}
