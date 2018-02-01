import { Component, OnInit, Input } from '@angular/core';
import { userPost } from "../../services/api.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() inputPost: userPost;
  constructor() { }

  ngOnInit() {
  }

}
