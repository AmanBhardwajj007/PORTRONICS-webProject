import React from 'react'
import i1 from '../image/11.jpg'
import i2 from '../image/22.jpg'
import i3 from '../image/33.jpg'

export default function Slider() {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={i1} class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={i2} class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src={i3} class="d-block w-100"/>
    </div>
  </div>
  
</div>
    </div>
  )
}
