import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommentInterface} from '../types/comments.interface';

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(
        'http://localhost:3000/comments'
    );
  }

  createComment(
      text: string,
      parentId: null|string
  ): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(
        'http://localhost:3000/comments',
        {
          body: text,
          parentId,
          createdAt: new Date().toISOString(),
          userId: '1',
          username: 'John'
        }
    );
  }

  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(
        `http://localhost:3000/comments/${id}`,
        {
          body: text
        }
    );
  }

  deleteComment(id: string): Observable<{}> {
    return this.httpClient.delete(`http://localhost:3000/comments/${id}`);
  }
}
