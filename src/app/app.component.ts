import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  ngOnInit(): void {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }
}
