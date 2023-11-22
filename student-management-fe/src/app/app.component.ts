import {Component} from '@angular/core';

import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";

@Component({
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, MatBadgeModule, MatButtonModule,
    MatListModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatSliderModule, RouterLink, RouterLinkActive, MatTabsModule],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'StudentManagement';
}
