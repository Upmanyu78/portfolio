// Get all the "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Loop through each button to add click event listener
readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal'); // Get the associated modal id
        const modal = document.getElementById(modalId);
        modal.style.display = "block"; // Show the modal
    });
});

// Get all the modals and close buttons
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Loop through each close button to add click event listener
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = "none"; // Hide the modal
    });
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle-progress');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);

        const span = circle.querySelector('.percentage');
        let count = 0;
        const interval = setInterval(() => {
            if (count < percentage) {
                count++;
                span.textContent = `${count}%`;
            } else {
                clearInterval(interval);
            }
        }, 20); // Adjust speed here if necessary
    });
});

// Select the elements you want to animate
const skillsGrid = document.querySelector('.skills-grid');
const skillsDescription = document.querySelector('.skills-description');

// Intersection Observer setup
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add classes to trigger animations when the element is in view
            if (entry.target === skillsGrid) {
                entry.target.classList.add('show-grid');
            }
            if (entry.target === skillsDescription) {
                entry.target.classList.add('show-description');
            }
        }
    });
}, {
    threshold: 0.1 // The percentage of the target's visibility required to trigger the callback
});

// Observe the elements
observer.observe(skillsGrid);
observer.observe(skillsDescription);

// Filter Portfolio Items
const filterItems = document.querySelectorAll('.portfolio-filter ul li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterItems.forEach(filter => {
  filter.addEventListener('click', function() {
    // Remove active class from all filters
    filterItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to the clicked filter
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');

    // Show or hide portfolio items based on the filter
    portfolioItems.forEach(item => {
      if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Add click event listener to the hamburger icon
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    // Function to animate progress circles
    function animateProgress() {
        const progressElements = document.querySelectorAll('.circle-progress');
    
        progressElements.forEach((element) => {
            const percentage = parseFloat(getComputedStyle(element).getPropertyValue('--percentage'));
            const percentageText = element.querySelector('.percentage');
            const totalDashLength = 408; // This should be equal to the stroke-dasharray value
            const targetDashOffset = totalDashLength - (totalDashLength * percentage) / 100;
    
            // Set initial state
            element.querySelector('circle:last-child').style.strokeDashoffset = totalDashLength;
            percentageText.textContent = `0%`;
    
            // Animate progress
            let currentPercentage = 0;
            const interval = setInterval(() => {
                if (currentPercentage <= percentage) {
                    // Update percentage text and stroke dash offset
                    percentageText.textContent = `${currentPercentage}%`;
                    element.querySelector('circle:last-child').style.strokeDashoffset = totalDashLength - (totalDashLength * currentPercentage) / 100;
                    currentPercentage++;
                } else {
                    clearInterval(interval);
                }
            }, 20); // Adjust the interval timing for smoothness
        });
    }
    
    // Call the function to start the animation
    animateProgress();
      
    let touchStartX = 0;
let touchEndX = 0;

// Function to handle swipe actions
function handleSwipe() {
  const sidebar = document.getElementById('sidebar');
  // Detect swipe right to open (only if sidebar is closed)
  if (touchEndX > touchStartX && !sidebar.classList.contains('active')) {
    sidebar.classList.add('active');
  }
  // Detect swipe left to close (only if sidebar is open)
  if (touchEndX < touchStartX && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
}

// Listen for touch start
document.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
});

// Listen for touch end
document.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});
    // Open Sidebar when clicking the hamburger icon
  document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
  });

  // Close Sidebar when clicking the close icon
  document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
  });

  // Close Sidebar when a link in the sidebar is clicked
  document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('sidebar').classList.remove('active');
    });
  });
  
