import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  comments: Comment[];

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.commentService.getAll().subscribe((commentsOut: Comment[]) => {
      this.comments = commentsOut;
    })
  }
}
