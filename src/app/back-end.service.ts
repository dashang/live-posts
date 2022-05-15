import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Post } from "./post.model";
import { PostService } from "./post.service";


/**
 * Database Path: https://live-posts-877b8-default-rtdb.firebaseio.com
 */

@Injectable({providedIn: 'root'})

export class BackEndService{

    constructor(private postService: PostService, private http: HttpClient) { }


    //Func 1 - Save
    saveData() {
        // Step 1 - get list of post from post.service
        const listOfPosts: Post[] = this.postService.getPosts();
        // step 2 - send list of post to backend
        this.http.put('https://live-posts-877b8-default-rtdb.firebaseio.com/post.json', 
        listOfPosts
        )
        .subscribe((res) => {
            console.log(res);
        });
    }
    
    //Func 2 - Fetch
  fetchData(){
      this.http.get<Post[]>(
          'https://live-posts-877b8-default-rtdb.firebaseio.com/post.json'
          ).pipe(
              tap((listOfPosts: Post[]) => {
                    console.log(listOfPosts);
                    // Send to post service

                    this.postService.setPosts(listOfPosts);
              })
          ).subscribe();
  }
}