import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'a-portfolio';

  ngOnInit(): void {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }
}
