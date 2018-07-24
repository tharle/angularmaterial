import { Component, OnInit, HostListener } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;//IN PX

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // private mediaMatcher: MediaQueryList = matchMedia(`(min-width): ${SMALL_WIDTH_BREAKPOINT}px`);
  public innerWidth: any;
  
  constructor() { }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  isScreenSmall(): boolean{
    // console.log("Media matches: "+this.mediaMatcher.matches);
    // return this.mediaMatcher.matches;
    return this.innerWidth <= SMALL_WIDTH_BREAKPOINT;
  }

}
