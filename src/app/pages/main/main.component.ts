import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonModule } from 'primeng/button';
import {MatListModule} from '@angular/material/list';
import {MediaMatcher} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule,MatSidenavModule,ButtonModule,MatListModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 

  showFiller = false;
  mobileQuery: MediaQueryList;
   
  fillerNav = [
    { label: 'Dashboard', icon: 'dashboard',route:'dashboard' },
    { label: 'Articles', icon: 'article',route:'articles' },
    { label: 'Add Article', icon: 'add' ,route:'create'},
  ];
  
  fillerContent = Array.from(
    {length: 1},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private _sharedService:SharedService,
    private _userService:UserService,
    private router:Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit () {
  
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout() {
    localStorage.removeItem('userToken')
   this.router.navigate([''])
  }



}
