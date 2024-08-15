import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})



export class UserlistComponent implements OnInit {
  httpClient = inject(HttpClient)
  data: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pageID = this.route.snapshot.paramMap.get('id');
    console.log(pageID)
    this.fetchData()
  }

  fetchData(){
    const pageID = this.route.snapshot.paramMap.get('id');
    console.log(pageID)

    const urlAddress = "https://reqres.in/api/users/?page=" + pageID

    this.httpClient.get(urlAddress).subscribe((data: any) => {
      console.log(data)
      this.data = data.data;
    });
  }
}