export interface IPostsRes {
  "data": IPosts[]
}

export interface IPosts {
  "id": string;
  "image":string;
  "likes": number;
  "tags": string[

    ];
  "text": string;
  "publishDate": string;
  // "owner": {
  //   "id": "60d0fe4f5311236168a109ca",
  //   "title": "ms",
  //   "firstName": "Sara",
  //   "lastName": "Andersen",
  //   "picture": "https://randomuser.me/api/portraits/women/58.jpg"
  // }
}
