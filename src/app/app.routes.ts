import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

export const routes: Routes = [
    { path: 'page/:id', component: UserlistComponent },
    { path: '', component: UserlistComponent },
    { path: 'users/:id', component: UserdetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }