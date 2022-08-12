
export interface IPosts {
  data: IPostsData[];
  total: number;
  page: number;
  limit: number;
}

export interface IPostsData {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: IOwner;
}

export interface IOwner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
