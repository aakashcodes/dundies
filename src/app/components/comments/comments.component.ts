import { Component, Input, OnInit } from '@angular/core';
import { PostComments } from "../../services/api.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() inputComment: PostComments ;
  constructor() { }

  ngOnInit() {
  }

}
