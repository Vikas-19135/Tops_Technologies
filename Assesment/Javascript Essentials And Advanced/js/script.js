
function createImageSlider(images) {
    if (!Array.isArray(images) || images.length === 0) {
      console.error("Invalid image list provided.");
      return;
    }
  
    // Container for slider
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
  
    // Display image
    const mainImage = document.createElement('img');
    mainImage.className = 'main-image';
    mainImage.src = images[0];
    sliderContainer.appendChild(mainImage);
  
    // Left button
    const leftButton = document.createElement('button');
    leftButton.className = 'slider-button left-button';
    leftButton.textContent = '<';
    sliderContainer.appendChild(leftButton);
  
    // Right button
    const rightButton = document.createElement('button');
    rightButton.className = 'slider-button right-button';
    rightButton.textContent = '>';
    sliderContainer.appendChild(rightButton);
  
    // Thumbnails container
    const thumbnailsContainer = document.createElement('div');
    thumbnailsContainer.className = 'thumbnails-container';
  
    images.forEach((image, index) => {
      const thumbnail = document.createElement('img');
      thumbnail.className = 'thumbnail';
      thumbnail.src = image;
  

      thumbnail.addEventListener('click', () => {
        mainImage.src = image;
        currentIndex = index;
      });
  
      thumbnailsContainer.appendChild(thumbnail);
    });
  
    sliderContainer.appendChild(thumbnailsContainer);
  
    // Functionality for left/right buttons
    let currentIndex = 0;
  
    leftButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      mainImage.src = images[currentIndex];
    });
  
    rightButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      mainImage.src = images[currentIndex];
    });
  
    document.body.appendChild(sliderContainer);
  }
  
  // Usage Example
  const images = [
    'Images/img1.jpg',
    'Images/img2.jpg',
    'Images/img3.jpg',
    'Images/img4.jpg',
    'Images/img5.jpg',
    'Images/img6.jpg',
    'Images/img7.jpg',
    'Images/img8.jpg'
  ];
  
  // Initialize the image slider
  createImageSlider(images);
  