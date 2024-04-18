import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {UserService} from '../../service/user.service';
import {ImageUploadService} from '../../service/image-upload.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
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

}
