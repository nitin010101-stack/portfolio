// Select page turning buttons
const pageTurnbtn = document.querySelectorAll('.nextprev-btn');
pageTurnbtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    // Toggle the page turn animation
    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

// Select pages and contact button
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

// Handle contact button click to animate pages
contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

let totalPages = pages.length;
let pageNumber = 0;

// Function to reverse page index if necessary
function reverseIndex() {
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  } else if (pageNumber >= totalPages) {
    pageNumber = 0;
  }
}

// Handle back profile button click to go back to previous pages
const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    reverseIndex(); // Ensure the page number stays within bounds
    setTimeout(() => {
      pages[pageNumber].classList.remove('turn');
      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// Handle cover right page and page left transitions
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Set zIndex for the cover right page after delay
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

// Add class to cover right to initiate turn animation
setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100);

// Set zIndex for the page left after delay
setTimeout(() => {
  pageLeft.style.zIndex = -1;
}, 3200);
