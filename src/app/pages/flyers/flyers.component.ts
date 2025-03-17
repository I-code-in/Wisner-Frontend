import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerImagesService } from 'src/app/services/banner-images.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flyers',
  imports: [CommonModule],
  templateUrl: './flyers.component.html',
  styleUrls: ['./flyers.component.css']
})
export class FlyersComponent implements OnInit, OnDestroy {
  slides: { url: string; title: string }[] = [];
  currentIndex: number = 0;
  autoSlideInterval: any;
  private subscription: Subscription = new Subscription();

  @ViewChild('sliderImage') sliderImage!: ElementRef<HTMLImageElement>;

  constructor(private bannerImagesService: BannerImagesService) {}

  ngOnInit(): void {
    this.getImagesFromBackend();
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.stopAutoSlide(); 
    this.autoSlideInterval = setInterval(() => {
      this.getNextSlider();
    }, 5000); 
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  getImagesFromBackend(): void {
    this.subscription = this.bannerImagesService.getBannerImages().subscribe((data) => {
      this.slides = data.map(item => ({
        url: `data:image/png;base64,${item.dir}`, 
        title: item.title
      }));
    });
  }

  getNextSlider(): void {
    this.applyFadeEffect(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    });
  }

  getPrevSlider(): void {
    this.applyFadeEffect(() => {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    });
  }

  getCurrentSlideUrl(): string {
    return this.slides.length > 0 ? this.slides[this.currentIndex].url : '';
  }

  private applyFadeEffect(callback: () => void): void {
    if (this.sliderImage) {
      this.sliderImage.nativeElement.style.opacity = '0'; // Fade out
      setTimeout(() => {
        callback(); // Change slide
        setTimeout(() => {
          this.sliderImage.nativeElement.style.opacity = '1'; // Fade in
        }, 50);
      }, 500);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
    this.subscription.unsubscribe(); 
  }
}