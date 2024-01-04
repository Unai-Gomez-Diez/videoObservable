import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Interfaces } from './interfaces';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "video"
  public hasError: boolean = false;
  public post$!: Observable<Interfaces>;
  constructor(private postService: PostsService) {
    this.post$ = this.postService.getPost().pipe(
      catchError(error => {
        console.error(error);
        this.hasError = true;
        return [];
      }))
  }
}
