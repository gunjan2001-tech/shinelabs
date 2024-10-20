document.addEventListener('DOMContentLoaded', function() {
  const carousel2 = document.querySelector('.carosuel2 .carosel1-container');
  const nextButton2 = document.querySelector('.carosuel2 .next-button');
  const prevButton2 = document.querySelector('.carosuel2 .prev-button');
  let currentIndex2 = 0;

  function updateCarousel2() {
      const screenWidth = window.innerWidth;
      let itemWidth;

      // For this carousel, we'll keep it to one item per view regardless of screen size
      itemWidth = 100;

      carousel2.style.transform = `translateX(-${currentIndex2 * itemWidth}%)`;
  }

  function getVisibleItems2() {
      // Always return 1 as we want to show only one item at a time
      return 1;
  }

  nextButton2.addEventListener('click', () => {
      const totalItems = carousel2.children.length;
      const visibleItems = getVisibleItems2();
      currentIndex2 = (currentIndex2 + 1) % totalItems;
      updateCarousel2();
  });

  prevButton2.addEventListener('click', () => {
      const totalItems = carousel2.children.length;
      const visibleItems = getVisibleItems2();
      currentIndex2 = (currentIndex2 - 1 + totalItems) % totalItems;
      updateCarousel2();
  });

  window.addEventListener('resize', updateCarousel2);
  updateCarousel2();
});





const oneTimePurchaseButton = document.getElementById('one-time-purchase');
const subscribeSaveButton = document.getElementById('subscribe-save');

oneTimePurchaseButton.addEventListener('click', function () {
  oneTimePurchaseButton.classList.add('active');
  subscribeSaveButton.classList.remove('active');
});

subscribeSaveButton.addEventListener('click', function () {
  subscribeSaveButton.classList.add('active');
  oneTimePurchaseButton.classList.remove('active');
});