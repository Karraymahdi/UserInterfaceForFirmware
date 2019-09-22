import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [Service]
})
export class HistoryComponent implements OnInit {
  constructor(private http: HttpClient, private ser: Service , private com: AppComponent) {
  }

  ngOnInit() {
  }

}
