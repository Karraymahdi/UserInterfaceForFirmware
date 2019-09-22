import {Component, OnInit, ViewChild} from '@angular/core';
import {Service} from '../service';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-firmware-updater',
  templateUrl: './firmware-updater.component.html',
  styleUrls: ['./firmware-updater.component.css'],
  providers: [Service]
})

export class FirmwareUpdaterComponent implements OnInit {
  constructor(private http: HttpClient, private ser: Service , private com: AppComponent) { }
  fileToUpload: File = null;
   private form1: HTMLFormElement;
  onFileChange(event: EventTarget) {
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const files: FileList = target.files;
    this.fileToUpload = files[0];
    console.log( this.fileToUpload);
    this.ser.postFile(this.fileToUpload);
    this.form1 = document.getElementById('formF') as HTMLFormElement;
    console.log(this.form1);
    this.form1.reset();
    this.fileToUpload = null;
  }

  ngOnInit() {
  }

}
