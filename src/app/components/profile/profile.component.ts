import { Component, OnInit } from "@angular/core";
import {
  ApiService,
  userDetails,
  userPost,
  PostComments
} from "../../services/api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  posts: Array<userPost>;
  userDetails: userDetails;

  private comments: Array<PostComments>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(this.userDetails);
    this.api.getComments().subscribe(
      data => {
        console.log("got comments");
        this.comments = data;
        this.getposts();
      },
      error => console.log(error)
    );
  }

  private getposts() {
    this.api.getPosts(this.userDetails.id).subscribe(
      data => {
        this.posts = data;
        this.posts.forEach(post => {
          post.comments = this.getSavedComments(post.id);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  private getSavedComments(postId: number) {
    const response: Array<PostComments> = [];
    this.comments.forEach(comment => {
      if (comment.postId == postId) {
        response.push(comment);
      }
    });
    return response;
  }
}
