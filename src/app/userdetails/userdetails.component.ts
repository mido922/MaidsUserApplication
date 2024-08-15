import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css',
})
// export class UserdetailsComponent implements OnInit {
//   userId: string | null = '';
//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.userId = this.route.snapshot.paramMap.get('id');
//     // Use this.userId to fetch and display user details
//   }
// }
export class UserdetailsComponent implements OnInit {
  userId: string | null = '';
  httpClient = inject(HttpClient);
  data: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fetchData(this.userId);

    // Use this.userId to fetch and display user details
  }
  fetchData(userId: any) {
    this.httpClient
      .get('https://reqres.in/api/users/' + userId.toString())
      .subscribe((data: any) => {
        this.data = data.data;
        // console.log(this.data);
      });
  }
}
