import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { Comment } from './../model/comment';

@Component({
  selector: 'app-comment-id',
  templateUrl: './comment-id.component.html',
  styleUrls: ['./comment-id.component.css']
})
export class CommentIdComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  id: number;

  comment: Comment = new Comment(0, 0, '', '', '');

  ngOnInit() {
  }

  findById() {
    this.commentService.get(this.id).subscribe((commentOut: Comment) => {
      this.comment = commentOut;
    })
  }
}
