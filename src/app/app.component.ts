import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPostComponent } from "./components/card-post/card-post.component";
import { InputPostComponent } from "./components/input-post/input-post.component";
import { PostService } from './shared/services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPostComponent, InputPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'timeline-app';

  private postService = inject(PostService);

  posts: any[] = [];

  ngOnInit() {
    this.postService.getPosts().subscribe(result => {
      console.log(result);
      this.posts = result.data;
    });
  }
}
