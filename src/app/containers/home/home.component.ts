import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ask$: Observable<Object>;

  constructor(public http: HttpClient,
              public router: Router) {
  }

  ngOnInit() {
    this.ask$ = this.http.get('https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty');
  }

  gotoTest() {
    this.router.navigate(['test']);
  }

}
