import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    //! No longer needed can be handled in routing module
    // to ensure the list is loaded on init
    // this is done to make the list and the detail sibling and only render one of them
    // this._router.navigate(['list'], { relativeTo: this._route });
    // this._router.events.subscribe((val: any) => {
    //   if (val.url && val.url == '/posts') {
    //     this._router.navigate(['posts/list']);
    //   }
    // });
  }
}
