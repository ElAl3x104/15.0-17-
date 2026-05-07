import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-foo',
 standalone: true,
 imports: [JsonPipe],
 templateUrl: './foo.html',
 styleUrls: ['./foo.css']
})
export class FooComponent {
   data!: Object; //Il ‘!’ serve a creare variabili non inizializzate
   loading: boolean=false;
   o! :Observable<Object>;
   constructor(public http: HttpClient) {}
   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }

      makeCompactPost(): void {

      console.log("here");

      this.loading = true;

      this.o = this.http.post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      );

      this.o.subscribe(this.getData1);
    }

    getData1 = (d: Object) =>
    {
      this.data = new Object(d);
      this.loading = false;
    }
 }


