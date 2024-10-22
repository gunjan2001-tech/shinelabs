

// for carousel2  

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carosuel2 .carosel1-container');
  const nextButton = document.querySelector('.carosuel2 .next-button');
  const prevButton = document.querySelector('.carosuel2 .prev-button');
  
  // Get original cards
  const originalCards = Array.from(carousel.children);
  const cardWidth = originalCards[0].offsetWidth;
  const totalCards = originalCards.length;

  // Clone the first and last card
  const firstClone = originalCards[0].cloneNode(true);
  const lastClone = originalCards[totalCards - 1].cloneNode(true);

  // Add clones to the carousel
  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, originalCards[0]);

  let currentIndex = 1; // Start at the first real card (after the clone)
  const totalItems = carousel.children.length;

  function getOffset() {
      return -currentIndex * cardWidth;
  }

  function updateCarousel(instant = false) {
      carousel.style.transition = instant ? 'none' : 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(${getOffset()}px)`;
  }

  function handleTransitionEnd() {
      if (currentIndex === 0) {
          currentIndex = totalCards;
          updateCarousel(true);
      } else if (currentIndex === totalItems - 1) {
          currentIndex = 1;
          updateCarousel(true);
      }
  }

  nextButton.addEventListener('click', () => {
      if (currentIndex >= totalItems - 1) return;
      currentIndex++;
      updateCarousel();
  });

  prevButton.addEventListener('click', () => {
      if (currentIndex <= 0) return;
      currentIndex--;
      updateCarousel();
  });

  carousel.addEventListener('transitionend', handleTransitionEnd);

  // Update carousel on window resize
  window.addEventListener('resize', () => {
      cardWidth = originalCards[0].offsetWidth;
      updateCarousel(true);
  });

  // Initialize the carousel position
  updateCarousel(true);
});



// for buttons 


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






// document.addEventListener('DOMContentLoaded', function () {
//   // Select the "Light's Out" header
//   const lightColumnHeader = document.querySelector('.light');
  
//   // Select all cells in the "Light's Out" column
//   const lightOutColumns = document.querySelectorAll('.lights-out-column');

//   // Add event listener for mouseover (hover)
//   lightColumnHeader.addEventListener('mouseover', function() {
//     // Change background color of all cells in "Light's Out" column
//     lightOutColumns.forEach(function(cell) {
//       cell.style.backgroundColor = '#F8AD79'; // Desired hover color
//     });
//   });

//   // Add event listener for mouseout (when hover stops)
//   lightColumnHeader.addEventListener('mouseout', function() {
//     // Reset background color of all cells
//     lightOutColumns.forEach(function(cell) {
//       cell.style.backgroundColor = ''; // Reset to default
//     });
//   });
// });



// document.addEventListener('DOMContentLoaded', function () {
//   // Select the headers for each column
//   const lightColumnHeader = document.querySelector('.light');
//   const otherMixesColumnHeader = document.querySelector('th:nth-child(3)');
//   const melatoninColumnHeader = document.querySelector('th:nth-child(4)');
//   const otcDrugsColumnHeader = document.querySelector('th:nth-child(5)');

//   // Select all cells for each column
//   const lightOutColumns = document.querySelectorAll('.lights-out-column');
//   const otherMixesColumns = document.querySelectorAll('td:nth-child(3)');
//   const melatoninColumns = document.querySelectorAll('td:nth-child(4)');
//   const otcDrugsColumns = document.querySelectorAll('td:nth-child(5)');

//   // Function to apply hover effect
//   function applyHoverEffect(header, cells, color) {
//     header.addEventListener('mouseover', function () {
//       cells.forEach(function (cell) {
//         cell.style.backgroundColor = color;
//       });
//     });
//     header.addEventListener('mouseout', function () {
//       cells.forEach(function (cell) {
//         cell.style.backgroundColor = '';
//       });
//     });
//   }

//   // Apply hover effects with desired colors
//   applyHoverEffect(lightColumnHeader, lightOutColumns, '#F8AD79');
//   applyHoverEffect(otherMixesColumnHeader, otherMixesColumns, '#F8AD79');
//   applyHoverEffect(melatoninColumnHeader, melatoninColumns, '#F8AD79');
//   applyHoverEffect(otcDrugsColumnHeader, otcDrugsColumns, '#F8AD79');
// });

document.addEventListener('DOMContentLoaded', function () {
  // Select the headers for each column
  const lightColumnHeader = document.querySelector('.light');
  const otherMixesColumnHeader = document.querySelector('th:nth-child(3)');
  const melatoninColumnHeader = document.querySelector('th:nth-child(4)');
  const otcDrugsColumnHeader = document.querySelector('th:nth-child(5)');

  // Select all cells for each column
  const lightOutColumns = document.querySelectorAll('.lights-out-column');
  const otherMixesColumns = document.querySelectorAll('td:nth-child(3)');
  const melatoninColumns = document.querySelectorAll('td:nth-child(4)');
  const otcDrugsColumns = document.querySelectorAll('td:nth-child(5)');

  // Function to apply hover effect
  function applyHoverEffect(header, cells, color) {
    header.addEventListener('mouseover', function () {
      cells.forEach(function (cell) {
        cell.style.backgroundColor = color;
        cell.style.border = 'none'; // Remove border on hover
      });
    });
    header.addEventListener('mouseout', function () {
      cells.forEach(function (cell) {
        cell.style.backgroundColor = '';
        cell.style.border = ''; // Reset to default border
      });
    });
  }

  // Apply hover effects with background color and no border
  applyHoverEffect(lightColumnHeader, lightOutColumns, '#F8AD79');
  applyHoverEffect(otherMixesColumnHeader, otherMixesColumns, '#F8AD79');
  applyHoverEffect(melatoninColumnHeader, melatoninColumns, '#F8AD79');
  applyHoverEffect(otcDrugsColumnHeader, otcDrugsColumns, '#F8AD79');
});
