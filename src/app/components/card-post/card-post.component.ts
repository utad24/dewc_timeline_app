import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-post',
  standalone: true,
  imports: [],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.scss'
})
export class CardPostComponent {

  @Input() post: any;

  constructor() { }




}
