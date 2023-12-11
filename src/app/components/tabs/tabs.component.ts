import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

  export class TabsComponent {
    @Input() tabs: { label: string; category: string }[] = [];  //tanımladığım tabs değişkeninde her bir tab bir label ve bir category içeriyor
    @Input() selectedCategory: string = 'nowPlaying';
    @Output() categorySelected = new EventEmitter<string>();
  
    selectCategory(category: string): void {
      this.categorySelected.emit(category);
    }
}
