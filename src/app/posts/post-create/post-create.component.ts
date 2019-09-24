import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  onAddPost(form: NgForm){
    this.postsService.addPost(form.value).subscribe(data => {
      return data;
    });
    console.log(form.value);
    form.resetForm();
    // window.location.reload();
  }

  ngOnInit() {
  }

}
