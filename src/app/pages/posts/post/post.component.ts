import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post: any;
  @Output() postclick = new EventEmitter<number>();

  onClick() {
    this.postclick.emit(this.post.id);
  }
}