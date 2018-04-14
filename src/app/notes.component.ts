import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';

interface Note {
  text: string;
}

@Component({
  selector: 'notes',
  template: `Notes list:
  <ul>
    <li *ngFor="let note of notes; let i=index">
      {{note.text}}
      <button (click)="remove(i)">remove</button>
    </li>
  </ul>
  <textarea [(ngModel)]="text"></textarea>
  <button (click)="add()">Add</button>`})
@Injectable()
export default class NotesComponent {
  notes: Note[] = [
    {text: 'Note one'},
    {text: 'Note two'}
  ];

  private notesUrl = `http://localhost:8080/notes`; // URL to web api
  private text: string;

  constructor(private http: HttpClient) {
    this.getNotes();
  }

  remove(idx) {
    this.notes.splice(idx, 1);
  }

  async getNotes(): void {
    this.notes = await this.http.get<Note[]>(this.notesUrl)
      .do(notes => console.log(notes))
      .toPromise();
  }

  add() {
    const note = {text: this.text};
    this.notes.push(note);
    this.text = '';
  }
}
