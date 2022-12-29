import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommentsComponent} from './comments.component';
import {CommentService} from '../services/comments.service';
import {CommentComponent} from '../comment/comment.component';
import {CommentFormComponent} from '../commentForm/commentForm.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CommentsComponent, CommentComponent, CommentFormComponent],
  exports: [CommentsComponent],
  providers: [CommentService]
})
export class CommentsModule {}
