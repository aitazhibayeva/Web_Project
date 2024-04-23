import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from '../../service/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { BrondauComponent } from '../../brondau/brondau.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isAuth!: boolean;

  constructor(
    private tokenStorage: TokenStorageService,
    private matDialog: MatDialog // Добавлен MatDialog в конструктор
  ) { }

  ngOnInit(): void {
    this.isAuth = !!this.tokenStorage.getUserId();
  }

  @ViewChild('myHeader')
  header!: ElementRef;
  sticky!: number;


  ngAfterViewInit() {
    this.sticky = this.header.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > this.sticky) {
      this.header.nativeElement.classList.add('sticky');
    } else {
      this.header.nativeElement.classList.remove('sticky');
    }
  }

  logout(){
    this.tokenStorage.logOut();
  }

  openDialog(){ 
    this.matDialog.open(BrondauComponent, { 
      width: '800px', 
    }) 
  }
}
