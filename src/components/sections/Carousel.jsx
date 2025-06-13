import React, { useState, useRef } from "react";
import "./Carousel.css";

const Carousel = ({
  items = [],
  renderItem = (item) => (
    <div className="default-carousel-item">
      {item.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title || "Carousel item"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {item.title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {item.title}
          </h3>
        )}
        {item.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  ),
  className = "",
  showArrows = true,
  showIndicators = true,
  autoPlay = false,
  interval = 5000,
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  if (!Array.isArray(items)) {
    console.error("Carousel: items prop must be an array");
    return null;
  }

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    if (autoPlay) {
      clearInterval(autoPlayRef.current);
    }
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    if (autoPlay) {
      startAutoPlay();
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  };

  const goToNext = () => {
    if (items.length === 0) return;
    const nextIndex = (currentIndex + 1) % items.length;
    goToSlide(nextIndex);
  };

  const goToPrevious = () => {
    if (items.length === 0) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlide(prevIndex);
  };

  const startAutoPlay = () => {
    if (autoPlay && items.length > 0) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, interval);
    }
  };

  React.useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, autoPlay, items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={`carousel ${className}`}
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      {showArrows && items.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-prev"
            onClick={goToPrevious}
            aria-label="Previous slide">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="carousel-arrow carousel-arrow-next"
            onClick={goToNext}
            aria-label="Next slide">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-slide">
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {showIndicators && items.length > 1 && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
