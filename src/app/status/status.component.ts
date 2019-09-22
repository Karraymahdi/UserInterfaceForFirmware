import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [Service]
})
export class StatusComponent implements OnInit {

  constructor(private http: HttpClient, private ser: Service , private com: AppComponent) {
  }

  ngOnInit() {
  }

}
