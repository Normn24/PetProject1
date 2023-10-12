"use strict";
document.addEventListener("DOMContentLoaded", function () {

  // Our Services
  let tabActive = document.querySelectorAll(".ourServices__items");
  let tabContent = document.querySelectorAll(".tabs__content li");

  tabActive.forEach((item) => {
    item.addEventListener('click', () => {

      tabActive.forEach((navLink) => {
        navLink.classList.remove('active');
        navLink.querySelector('.arrow__active').style.visibility = "hidden";
      });

      item.classList.add('active');
      item.querySelector('.arrow__active').style.visibility = "visible";

      const tabName = item.getAttribute('data-tab');
      tabContent.forEach((content) => {
        content.style.display = 'none';
      });

      const tabContentActive = document.querySelector(`[data-tab-content="${tabName}"]`);
      tabContentActive.style.cssText = `
      display: flex;
      justify-content: space-between;
      gap: 15px;
      `
    });
  });



  // Our Amazing Work
  const workLoadImages = [
    { image: "./images/work12.png", tabContent: "workLanding" },
    { image: "./images/work13.jpg", tabContent: "workLanding" },
    { image: "./images/work14.jpg", tabContent: "workLanding" },
    { image: "./images/work15.jpg", tabContent: "workLanding" },
    { image: "./images/work24.jpg", tabContent: "workWordpress" },
    { image: "./images/work25.jpg", tabContent: "workWordpress" },
    { image: "./images/work18.jpg", tabContent: "workweb" },
    { image: "./images/work19.jpg", tabContent: "workweb" },
    { image: "./images/work3.png", tabContent: "workgraphic" },
    { image: "./images/work4.png", tabContent: "workgraphic" },
    { image: "./images/work22.jpg", tabContent: "workweb" },
    { image: "./images/work23.jpg", tabContent: "workweb" },
    { image: "./images/work26.jpg", tabContent: "workWordpress" },
    { image: "./images/work27.jpg", tabContent: "workWordpress" },
    { image: "./images/work28.jpg", tabContent: "workWordpress" },
    { image: "./images/work1.png", tabContent: "workWordpress" },
    { image: "./images/work16.jpg", tabContent: "workLanding" },
    { image: "./images/work17.jpg", tabContent: "workLanding" },
    { image: "./images/work2.png", tabContent: "workgraphic" },
    { image: "./images/work5.png", tabContent: "workgraphic" },
    { image: "./images/work6.png", tabContent: "workgraphic" },
    { image: "./images/work7.png", tabContent: "workgraphic" },
    { image: "./images/work20.jpg", tabContent: "workweb" },
    { image: "./images/work21.jpg", tabContent: "workweb" },
  ];

  const loadMoreBtn = document.querySelector("#work__btn");
  const workContent = document.querySelector(".work__content");
  const loadingSpinner = document.createElement("div");

  let imageIndex = 0;

  function updateFilter() {
    const workTabs = document.querySelectorAll('.work__items');
    const workImages = document.querySelectorAll('.work__img');


    workTabs.forEach(tab => {
      tab.addEventListener('click', () => {

        workTabs.forEach(tab => tab.classList.remove('work__active'));
        tab.classList.add('work__active');

        const selectedCategory = tab.getAttribute('data-tab');

        workImages.forEach(image => {
          const imageCategory = image.getAttribute('data-tab-content');
          if (selectedCategory === 'all' || selectedCategory === imageCategory) {
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
          }
        });
      });
    });
  }
  updateFilter();

  loadingSpinner.className = "loading";
  loadMoreBtn.prepend(loadingSpinner);

  loadMoreBtn.addEventListener("click", function () {
    loadingSpinner.style.display = "block";

    setTimeout(function () {
      loadingSpinner.style.display = "none";

      for (let i = 0; i < 12; i++) {
        const uploadImg = document.createElement("img");
        const workImage = workLoadImages[imageIndex];

        uploadImg.src = workImage.image;
        uploadImg.setAttribute("data-tab-content", workImage.tabContent);
        uploadImg.className = "work__img";
        workContent.append(uploadImg);

        imageIndex++;
      }

      if (imageIndex === workLoadImages.length) {
        loadMoreBtn.style.display = "none";
      }

      updateFilter();
    }, 2000);
  });




  // Slider section
  const reviews = [
    {
      name: 'Jane Dom',
      prof: 'Data Analyst',
      image: './images/review4.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur neque nulla, reiciendis quae, quisquam sit dolorem esse eveniet obcaecati numquam. Vitae minus quaerat perferendis necessitatibus earum non ut facere iure pariatur mollitia. Porro, molestiae repellendus.'
    },
    {
      name: 'Jake Green',
      prof: 'Frontend Developer',
      image: './images/review3.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia, cum, ab adipisci magni cumque iure dolorem accusantium aliquid sunt repellendus. Accusantium, iure tempore?'
    },
    {
      name: 'Hasan Ali',
      prof: 'UX Designer',
      image: './images/review1.png',
      text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. '
    },
    {
      name: 'Angelina Oli',
      prof: 'Backend Developer',
      image: './images/review2.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde reprehenderit, ullam nihil nam, sit voluptates perferendis repellat placeat facilis modi, a consequuntur odio neque voluptatem beatae maxime explicabo asperiores?'
    }
  ];

  const sliderImages = document.querySelectorAll('.review__slider-img');
  const leftBtn = document.querySelector('.review__btn-left');
  const rightBtn = document.querySelector('.review__btn-right');

  let currentSlideIndex = 2;

  function showSlide(index) {
    sliderImages.forEach((slide) => {
      slide.classList.remove('review__active-img');
    });

    sliderImages[index].classList.add('review__active-img');
    const currentReview = reviews[index];

    const reviewText = document.querySelector('.review__text');
    const reviewName = document.querySelector(".review__title");
    const reviewProf = document.querySelector(".review__under");
    const mainImage = document.querySelector('.review__main-img');

    reviewText.classList.add('review__content-transition', 'review__content-hidden');
    reviewName.classList.add('review__content-transition', 'review__content-hidden');
    reviewProf.classList.add('review__content-transition', 'review__content-hidden');
    mainImage.classList.add('review__content-transition', 'review__content-hidden');


    setTimeout(() => {
      reviewText.textContent = currentReview.text;
      reviewName.textContent = currentReview.name;
      reviewProf.textContent = currentReview.prof;
      mainImage.src = currentReview.image;


      reviewText.classList.remove('review__content-hidden');
      reviewName.classList.remove('review__content-hidden');
      reviewProf.classList.remove('review__content-hidden');
      mainImage.classList.remove('review__content-hidden');
    }, 500);

  }

  sliderImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentSlideIndex = index;
      showSlide(currentSlideIndex);
    });
  });

  function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= sliderImages.length) {
      currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = sliderImages.length - 1;
    }
    showSlide(currentSlideIndex);
  }

  leftBtn.addEventListener('click', prevSlide);
  rightBtn.addEventListener('click', nextSlide);



  // Gallery section
  const loadBtn = document.querySelector('#gallery__btn');
  const divLeft = document.querySelector(".gallery__left")
  const divMiddle = document.querySelector(".gallery__middle")
  const divRight = document.querySelector(".gallery__right")
  const loadingSpinnerGallery = document.createElement("div");

  const imagesToAdd = [
    { location: divLeft, img: "./images/gallery20.png" },
    { location: divMiddle, img: "./images/gallery21.png" },
    { location: divRight, img: "./images/gallery19.png" },
    { location: divLeft, img: "./images/gallery22.png" },
    { location: divMiddle, img: "./images/gallery23.png" },
    { location: divRight, img: "./images/gallery24.png" },
  ];

  let clickCount = 0;
  let imgIndex = 0;

  loadingSpinnerGallery.className = "loading";
  loadBtn.prepend(loadingSpinnerGallery);

  loadBtn.addEventListener('click', function () {
    loadingSpinnerGallery.style.display = "block";

    setTimeout(function () {
      loadingSpinnerGallery.style.display = "none";

      for (let i = 0; i < imagesToAdd.length / 2; i++) {
        const imgObject = imagesToAdd[imgIndex];
        const imgGallery = document.createElement('img');
        const div = imgObject.location;

        imgGallery.src = imgObject.img;
        imgGallery.className = ("gallery__new")
        div.append(imgGallery);
        imgIndex++;
      }
      clickCount++;

      if (imgIndex === imagesToAdd.length) {
        loadBtn.style.display = 'none';
      }
    }, 2000);
  });
});
