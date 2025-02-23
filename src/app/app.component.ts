import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'action-egg';
  numbersArray2017: number[] = Array.from({ length: 178 - 5 + 1 }, (_, i) => i + 5);
  numbersArray2016: number[] = Array.from({ length: 311 }, (_, i) => i + 1); 
  numbersArray2015: number[] = Array.from({ length: 306 }, (_, i) => i + 1); 


  get daysUntilSpringFestival(): number {
    const springFestival2026 = new Date('2026-02-17'); // 2026 年春节日期
    const today = new Date();
    const timeDiff = springFestival2026.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // 转换为天数
  }
}
