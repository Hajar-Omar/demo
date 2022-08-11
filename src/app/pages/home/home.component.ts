import { NewsService } from './../../services/news.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedCountry: string = 'eg';

  arrCountries = [{
    id: 'eg',
    name: 'Egypt'
  },
  {
    id: 'us',
    name: 'United States'
  },
  {
    id: 'uk',
    name: 'United Kingdom'
  },

  ];
  news: Array<any> = [];
  constructor(private _HttpClient: HttpClient, private _NewsService: NewsService) { }
  ngOnInit(): void {
    this.changeCountry(this.selectedCountry);
  }

  changeCountry(country: string) {
    this.selectedCountry = country;
    this._NewsService.getNews(country).subscribe((res) => {
      this.news = res.articles;
      console.log(this.news);
    }
    );
  }

}
