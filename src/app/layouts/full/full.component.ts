import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TablerIconsModule } from 'angular-tabler-icons';
import { AppTopstripComponent } from './top-strip/topstrip.component';
import { FooterComponent } from 'src/app/pages/footer/footer.component';

@Component({
  selector: 'app-full',
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    AppTopstripComponent,
    FooterComponent
  ],
  templateUrl: './full.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class FullComponent implements OnInit {

  @ViewChild('content', { static: true }) content!: MatSidenavContent;

  constructor() {}

  ngOnInit(): void {}
}
