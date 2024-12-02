import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = `${environment.API_URL}/posts?populate=*`;
    return this.http.get<any>(url);
  }

  postPost(content: string) {
    const token = "todobienpajaro";
    const userDocId = "xwfpcvznev9ew8jtpq2dnb1w"

    const url = `${environment.API_URL}/posts`;

    const body = JSON.stringify({
      data: {
        user: userDocId,
        content: content,
      }
    })

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    return this.http.post<any>(url, body, { headers: headers });
  }
}
