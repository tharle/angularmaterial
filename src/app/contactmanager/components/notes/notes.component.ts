import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[];
  dataSource: MatTableDataSource<Note>;
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.displayedColumns = ['date', 'title'];

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
