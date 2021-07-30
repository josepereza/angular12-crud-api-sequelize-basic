import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.css']
})
export class ListadoPostsComponent implements OnInit {
posts:any[]=[]
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe((data:any)=>{
      this.posts=data
    })
  }

}
