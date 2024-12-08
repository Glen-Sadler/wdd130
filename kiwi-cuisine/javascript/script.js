// Select all menu items and the modal elements
const menuItems = document.querySelectorAll('.menu-content div');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const closeModalBtn = document.getElementById('close-modal');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');

// Array to hold the menu data
let menuData = [];
let currentIndex = 0;

// Populate menuData with all menu items
menuItems.forEach((item, index) => {
  const imgSrc = item.querySelector('img').src;
  const title = item.querySelector('h2').textContent;
  const desc = item.querySelector('p').textContent;
  const price = item.querySelector('h2:last-of-type').textContent;

  menuData.push({
    imgSrc,
    title,
    desc,
    price,
  });
});

// Add click event to open modal
menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (window.innerWidth > 900) {
      // Only allow modal on larger screens
      currentIndex = index; // Set current index to the clicked item
      updateModalContent(currentIndex);
      modal.style.display = 'flex';
      modal.classList.add('show'); // Add transition class
    }
  });
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.classList.remove('show'); // Remove transition class
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modal.classList.remove('show'); // Remove transition class
  }
});

// Function to update the modal content with the current index
function updateModalContent(index) {
  const item = menuData[index];
  modalImg.src = item.imgSrc;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalPrice.textContent = item.price;
}

// Function to show the next or previous slide
function navigateSlide(direction) {
  currentIndex = (currentIndex + direction + menuData.length) % menuData.length;
  updateModalContent(currentIndex);
}

// Function to update the modal content with the current index
function updateModalContent(index) {
  const item = menuData[index];

  // Add the fade class to create the fade effect
  modalImg.classList.add('fade');
  modalTitle.classList.add('fade');
  modalDesc.classList.add('fade');
  modalPrice.classList.add('fade');

  // Update the content after a short delay for the fade-in effect
  setTimeout(() => {
    modalImg.src = item.imgSrc;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
    modalPrice.textContent = item.price;

    // Remove the fade class to reset for future transitions
    modalImg.classList.remove('fade');
    modalTitle.classList.remove('fade');
    modalDesc.classList.remove('fade');
    modalPrice.classList.remove('fade');
  }, 150); // Delay slightly less than animation-duration (1.5s)
}

// Function to show the next or previous slide
function navigateSlide(direction) {
  currentIndex = (currentIndex + direction + menuData.length) % menuData.length;
  updateModalContent(currentIndex);
}

// Add event listeners to the navigation buttons
prevSlideBtn.addEventListener('click', () => {
  navigateSlide(-1); // Show previous slide
});

nextSlideBtn.addEventListener('click', () => {
  navigateSlide(1); // Show next slide
});
