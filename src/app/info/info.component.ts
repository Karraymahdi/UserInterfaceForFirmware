import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [Service]
})
export class InfoComponent implements OnInit {

  constructor(private http: HttpClient, private ser: Service , private com: AppComponent) {
  }

  ngOnInit() {
  }

}
