import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-tagsetting',
  templateUrl: './tagsetting.component.html',
  styleUrls: ['./tagsetting.component.css'],
  providers: [Service]
})
export class TagsettingComponent implements OnInit {

  constructor(private http: HttpClient, private ser: Service , private com: AppComponent) {
  }

  ngOnInit() {
  }

}
