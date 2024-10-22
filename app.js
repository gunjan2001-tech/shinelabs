

// for carousel2  

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
