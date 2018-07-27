import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;//IN PX

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // private mediaMatcher: MediaQueryList = matchMedia(`(min-width): ${SMALL_WIDTH_BREAKPOINT}px`);
  public innerWidth: any;
  private users: Observable<User[]>;
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  private isDarkTheme: boolean ;  
  private isLeft: boolean ; 
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isDarkTheme = false;
    this.isLeft = true;
    this.innerWidth = window.innerWidth;
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() =>{
      if(this.isScreenSmall()){
        this.sidenav.close();
      }
    });
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

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir(){
    this.isLeft = !this.isLeft;
  }

  
  public get direction() : string {
    return this.isLeft? "ltr" : "rtl";
  }
  

}
