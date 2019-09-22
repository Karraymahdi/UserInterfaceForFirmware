import {Component, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Service} from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})

@Injectable()
export class AppComponent implements  OnInit {

  constructor(private http: HttpClient, private ser: Service ) {
  }
  history =  [];
  STATUS = [];
  info = [];
  DW1000SETTINGS = [];
  CONTROL = [];
  tagsettings = [];
  private i: number;
  ngOnInit(): void {
    // push all the  Groups arrays in a locals array
   this.ser.getarrays().subscribe(data => {
     for (this.i = 0 ; this.i < data.STATUS.length ; this.i++) {
       this.STATUS.push(data.STATUS[this.i]);
     }
     for (this.i = 0 ; this.i < data.info.length ; this.i++) {
       this.info.push(data.info[this.i]);
     }
     for (this.i = 0 ; this.i < data.DW1000SETTINGS.length ; this.i++) {
       this.DW1000SETTINGS.push(data.DW1000SETTINGS[this.i]);
     }
     for (this.i = 0 ; this.i < data.tagsettings.length ; this.i++) {
       this.tagsettings.push(data.tagsettings[this.i]);
     }
     for (this.i = 0 ; this.i < data.CONTROL.length ; this.i++) {
       this.CONTROL.push(data.CONTROL[this.i]);
     }
   });
  }
}
