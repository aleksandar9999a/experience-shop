import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  get profile() { return this.userDetailsService.profile; }
  get items() { return this.userDetailsService.items; }

  constructor(
    private userDetailsService: UserDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  close() {
    this.router.navigate([{ outlets: { formsOutlet: [] } }]);
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userDetailsService.loadUserdata(id);
    this.userDetailsService.searchByUserUID(id);
  }

}
