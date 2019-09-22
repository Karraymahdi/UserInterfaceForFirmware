import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [Service]
})
export class ControlComponent implements OnInit {

  constructor(private http: HttpClient, private ser: Service , private com: AppComponent) {
  }
  ngOnInit() {
  }

}
