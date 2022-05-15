import { EventEmitter,Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService{
  listChangedEvent: EventEmitter<Post[]> = new  EventEmitter();
    listOfPosts: Post[] = [
        // new Post(
        //   'Nature1',
        //   'Lorem Ipsum is simply dummy text of the printing but also the leap into' +
        //     'electronic typesetting,remaining essentially unchanged. It was popularised in' +
        //     'the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        //     'and more recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum.',
        //   'https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1600x900.jpg',
        //   'abc@test.com',
        //   new Date(),
        //   5
        // ),
        // new Post(
        //   'Hampi',
        //   'HAPI ply dummy text of the printing but also the leap into' +
        //     'electronic typesetting,remaining essentially unchanged. It was popularised in' +
        //     'the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        //     'and more recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum.',
        //   'https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1600x900.jpg',
        //   'abc@test.com',
        //   new Date(),
        //   3
        // ),
        // new Post(
        //   'ARAKU',
        //   'ARAKU is simply dummy text of the printing but also the leap into' +
        //     'electronic typesetting,remaining essentially unchanged. It was popularised in' +
        //     'the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        //     'and more recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum.',
        //   'https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1600x900.jpg',
        //   'abc@test.com',
        //   new Date(),
        //   2
        // ),
      ];

      getPosts(){
          return this.listOfPosts;
      }

      deletePost(index: number){
          this.listOfPosts.splice(index,1);
      }

      addPost(post: Post){
        this.listOfPosts.push(post);
      }

      updatePost(index :number, post: Post){
          this.listOfPosts[index]=post;
      }

        getPost(index: number){
            return this.listOfPosts[index];
        }

        likePost(index:number){
          this.listOfPosts[index].numberOfLikes += 1;
        }

        setPosts(listOfPosts: Post[]){
          this.listOfPosts = listOfPosts;
          this.listChangedEvent.emit(listOfPosts);
        }
}