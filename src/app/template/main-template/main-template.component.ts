import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { MenuComponent } from '../../component/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-template',
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.css'
})
export class MainTemplateComponent {

}
