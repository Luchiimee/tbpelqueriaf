function createCarouselControls(containerId) {
    let currentIndex = 0;
    const containerPrefix = `#${containerId}`;
  
    function showSlide(index) {
      const slides = document.querySelectorAll(`${containerPrefix} .carousel-item2`);
      const totalSlides = slides.length;
  
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
  
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
  
      slides[index].style.display = 'block';
      currentIndex = index;
      updateIndicators(currentIndex);
    }
  
    function nextCardSlide() {
      showSlide(currentIndex + 1);
    }
  
    function prevCardSlide() {
      showSlide(currentIndex - 1);
    }
  
    function currentCardSlide(index) {
      showSlide(index);
    }
  
    function updateIndicators(activeIndex) {
      const indicators = document.querySelectorAll(`${containerPrefix} .indicator`);
      indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
  
    return {
      showSlide,
      nextCardSlide,
      prevCardSlide,
      currentCardSlide
    };
  }
  
  // Crear controles para las tarjetas
  const carousel1Controls = createCarouselControls('carousel-container1');
  const carousel2Controls = createCarouselControls('carousel-container2');
  const carousel3Controls = createCarouselControls('carousel-container3');
  const carousel4Controls = createCarouselControls('carousel-container4');
  const carousel5Controls = createCarouselControls('carousel-container5');
  const carousel6Controls = createCarouselControls('carousel-container6');
  