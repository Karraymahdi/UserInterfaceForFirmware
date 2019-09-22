import {Observable} from 'rxjs';

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DatePipe, formatDate} from '@angular/common';
@Injectable()
export class Service {
  constructor(private http: HttpClient) { }
   // Define API
  apiURL = 'http://localhost:8080/65535';
  getRequest(path , subpath ) {
     this.http.get<any>(this.apiURL + path + subpath ,
      {  responseType: 'json' , observe: 'response' }).
    subscribe((data) =>   {document.getElementById(subpath).innerText = data.body.Result ;
                           this.populate(subpath, data.status.toString() , 'GET', Date.now());  }, error => this.populate(subpath, error.status.toString(), 'GET' , Date.now()));
  }
  // insert the requests to history table
  populate(subpath, status, request, time) {
    const myFormattedDate = formatDate(time, 'HH:mm:ss', 'en');
    const s1 = document.getElementById('historyTable');
    const newrow = document.createElement('tr');
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');
    const TIME = document.createElement('td');
    col1.innerHTML = subpath;
    col2.innerHTML = status ;
    col3.innerHTML = request;
    TIME.innerHTML = myFormattedDate;
    newrow.appendChild(TIME);
    newrow.appendChild(col1);
    newrow.appendChild(col2);
    newrow.appendChild(col3);
    s1.appendChild(newrow);

  }
  postFile(fileToUpload: File) {
    const endpoint = 'http://localhost:8080/firmwareUpdater';
    const formData = new FormData();
    formData.append('file', fileToUpload, 'firmwareUpdate');
    this.http.post<any>(endpoint, formData, { responseType: 'json', observe: 'response'}).subscribe((val) => {
      this.populate(fileToUpload.name, val.status.toString() , 'POST' , Date.now() ); }, error1 =>  this.populate(fileToUpload.name, error1.status.toString() , 'POST' , Date.now())); }
  // post request method
  postrequest(path , subpath, Value) {
    this.http.post<any>(this.apiURL + path + subpath , {newValue : Value} , { responseType: 'json', observe: 'response'}).
    subscribe((data) =>   { // document.getElementById(subpath).innerText = data.body.Result ;
                            this.populate(subpath, data.status.toString() , 'POST' , Date.now() );  }, error => this.populate(subpath, error.status.toString(), 'POST' , Date.now()));
  }
  // get method for all the subpath of specific LolaN group
  getAll(path, info) {
    for (const subpath of info) {
      this.http.get<any>(this.apiURL + path + subpath ,
        { responseType: 'json' , observe: 'response' }).
      subscribe((data) =>   { document.getElementById(subpath).innerText = data.body.Result ;
                              this.populate(subpath, data.status.toString() , 'GET' , Date.now() );  } , error => this.populate(subpath, error.status.toString(), 'GET', Date.now())); }

}
// clear a specific result column
  clear(subpath) {
    document.getElementById(subpath).innerText = '';
  }
  // clear all results column
  clearAll(subpath) {
    for (const row of subpath) {
    document.getElementById(row).innerText = ''; }
  }
  // get all subpaths of all the groups from the backend
  getarrays(): Observable<any> {
  return this.http.get<any>('http://localhost:8080/arrays', { responseType: 'json'} );
}
}
