function showComponent(componentId) {
    // Hide all component contents
    const allComponents = document.querySelectorAll('.component-content');
    allComponents.forEach(component => {
        component.style.display = 'none';
    });
    // Show the selected component
    const selectedComponent = document.getElementById(componentId);
    if (selectedComponent) {
        selectedComponent.style.display = 'block';
    }
    // Update active button state
    const allButtons = document.querySelectorAll('.component-button');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`[onclick="showComponent('${componentId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function openTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let content of tabContents) {
        content.classList.remove('active');
    }
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let button of tabButtons) {
        button.classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
}

// Simple Slideshow Functionality
let currentSlideIndex = 0;
const totalSlides = 11; // Update this if you add/remove slides

function changeSlide(direction) {
    // Get all slides
    const slides = document.querySelectorAll('.slideshow-slide');
    
    // Hide current slide
    slides[currentSlideIndex].classList.remove('active');
    
    // Calculate new slide index
    currentSlideIndex += direction;
    
    // Loop back if needed
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Show new slide
    slides[currentSlideIndex].classList.add('active');
    
    // Update counter
    document.getElementById('slide-counter').textContent = `${currentSlideIndex + 1} / ${slides.length}`;
}

// Initialize with components tab open
document.addEventListener('DOMContentLoaded', () => {
    showComponent('AddCollectionForm');
    openTab('components');
    
    // Initialize slide counter
    document.getElementById('slide-counter').textContent = `1 / ${totalSlides}`;
});