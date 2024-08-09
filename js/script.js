// play video function

function openVideoPopup() {
  var popup = document.getElementById('videoPopup');
  var video = document.getElementById('popupVideo');
  popup.style.display = 'block';
  video.play();
}

function closeVideoPopup() {
  var popup = document.getElementById('videoPopup');
  var video = document.getElementById('popupVideo');
  popup.style.display = 'none';
  video.pause();
  video.currentTime = 0; // Reset video to start
}

// about us function
function aboutUs() {
  let page = 'aboutus.html';
  window.open(page, '_blank');
}



// // Smooth Scroll for internal links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });


// contact form
document.addEventListener('DOMContentLoaded', function () {
  const openPopup = document.getElementById('openPopup');
  const popupForm = document.getElementById('popupForm');
  const closePopup = document.getElementById('closePopup');
  const loginForm = document.getElementById('loginForm');

  // Open the popup
  openPopup.addEventListener('click', function () {
    popupForm.style.display = 'flex';
  });

  // Close the popup
  closePopup.addEventListener('click', function () {
    popupForm.style.display = 'none';
  });

  // Close the popup when clicking outside of it
  window.addEventListener('click', function (event) {
    if (event.target === popupForm) {
      popupForm.style.display = 'none';
    }
  });

  // Form submission
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Form validation and submission logic
    alert('Form submitted!');
    popupForm.style.display = 'none';
  });
});



// camera search functionality
document.getElementById('searchBox').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  filterCameras(query);
});

document.querySelectorAll('.form-check-input').forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    filterCameras();
  });
});

function filterCameras(query = '') {
  const selectedBrands = Array.from(document.querySelectorAll('.form-check-input:checked')).map(cb => cb.nextElementSibling.innerText.toLowerCase());
  const cameraListings = document.getElementById('cameraListings').children;

  for (let camera of cameraListings) {
    const cameraName = camera.getAttribute('data-name').toLowerCase();
    const cameraBrand = camera.getAttribute('data-brand').toLowerCase();
    const matchesQuery = query === '' || cameraName.includes(query);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(cameraBrand);

    if (matchesQuery && matchesBrand) {
      camera.style.display = '';
    } else {
      camera.style.display = 'none';
    }
  }
}