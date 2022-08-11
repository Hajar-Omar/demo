import { NewsService } from './../../services/news.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: Array<any> = [];
  constructor(private _HttpClient: HttpClient, private _NewsService: NewsService) { }
  ngOnInit(): void {
    this._NewsService.getNews().subscribe((res) => {
      this.news = res.articles;
      console.log(this.news);
    }
    );
  }

}
