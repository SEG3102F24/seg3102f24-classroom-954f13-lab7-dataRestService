import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorId: string = '';
  author: any = null;
  errorMessage: string = '';

  constructor(private authorsService: AuthorsService) {}

  searchAuthor() {
    this.authorsService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.errorMessage = '';
      },
      error: () => {
        this.author = null;
        this.errorMessage = 'Author not found.';
      }
    });
  }
}
