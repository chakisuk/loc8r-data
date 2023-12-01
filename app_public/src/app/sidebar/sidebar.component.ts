import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // @ts-ignore
  @Input() content: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
