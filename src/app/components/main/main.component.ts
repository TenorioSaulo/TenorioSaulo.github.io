import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';  // <--- Adicione isso

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgOptimizedImage],  // <--- Adicione aqui
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
