import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  templateUrl: './contactmanager-app.component.html',
  styles: []
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconRegisry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegisry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg')
    );
  }

  ngOnInit() {
  }

}
