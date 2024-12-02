import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'input-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-post.component.html',
  styleUrl: './input-post.component.scss'
})
export class InputPostComponent {

  postContent: string = ""

  constructor(private postService: PostService) { }

  senData() {
    console.log(this.postContent)
    this.postService.postPost(this.postContent).subscribe({
      next: (data) => {
        console.log(data)
        alert("Publicado!")
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
