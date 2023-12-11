import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() label: string = '';   //input() ile ben bu bileşene dışardan değer aktabiliyorum
  @Input() category: string = '';
  @Input() isActive: boolean = false;
  @Output() tabSelected = new EventEmitter<void>();  //output() dışarıya even göndermemi sağlıyor

  selectTab(): void {
    this.tabSelected.emit();   
  }
}
