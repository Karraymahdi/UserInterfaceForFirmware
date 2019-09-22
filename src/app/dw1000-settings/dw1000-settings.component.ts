import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-dw1000-settings',
  templateUrl: './dw1000-settings.component.html',
  styleUrls: ['./dw1000-settings.component.css'],
  providers: [Service]
})
export class DW1000SETTINGSComponent implements OnInit {

  constructor(private http: HttpClient, private ser: Service , private com: AppComponent) {
  }

  ngOnInit() {
  }

}
