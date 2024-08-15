import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { RouterLink } from '@angular/router';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserlistComponent,
    UserdetailsComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaidsUserApplication';
}