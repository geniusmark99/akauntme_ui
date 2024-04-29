import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'swiper-widget',
    standalone: true,
    templateUrl: './swiper-widget.html',
    styleUrl: './swiper-widget.css'
})
export class SwiperWidget {
    @ViewChild('swiperWrapper', { static: true }) swiperWrapper!: ElementRef;

    currentIndex = 0;

    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.swiperWrapper.nativeElement.style.transition = 'transform 0.3s ease-in-out'; // Add transition
            this.swiperWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 100}%)`; // Update transform
        }
    }

    nextSlide() {
        this.currentIndex++;
        // this.swiperWrapper.nativeElement.children.length
        if (this.currentIndex < this.currentIndex - 1) {
            // this.currentIndex++;
            this.swiperWrapper.nativeElement.style.transition = 'transform 0.3s ease-in-out'; // Add transition
            this.swiperWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 100}%)`; // Update transform
        }
    }




}
