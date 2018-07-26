import { NgModule } from '@angular/core';
import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactmanagerAppComponent } from './contactmanager-app.component';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

@NgModule({
  imports: [
    ContactmanagerRoutingModule,
    SharedModule
  ],
  declarations: [ContactmanagerAppComponent, 
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent, 
    NotesComponent, 
    NewContactDialogComponent],
  entryComponents: [NewContactDialogComponent]
})
export class ContactmanagerModule { }
