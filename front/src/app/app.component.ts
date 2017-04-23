import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.data = this.http.get('/api/cars/find')
      .map((response: Response) => response.json());
  }
}
