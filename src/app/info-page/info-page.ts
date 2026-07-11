import { Component } from '@angular/core';
import { InfoHeaderIntro } from '../info-header-intro/info-header-intro';

@Component({
  selector: 'app-info-page',
  imports: [InfoHeaderIntro],
  templateUrl: './info-page.html',
  styleUrl: './info-page.css',
})
export class InfoPage {}
