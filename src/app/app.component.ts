import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-portfolio';

  constructor(meta: Meta) {
    meta.addTags([
      {
        name: 'description',
        // eslint-disable-next-line max-len
        content: 'Adam Hansen personlige portfolie'
      },
      {
        name: 'keywords',
        content: 'cv, portfolio, ionic, firebase, angular'
      }
    ]);
  }
}
