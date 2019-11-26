import { Component } from '@angular/core';
import { StatusService } from './status.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarShopSPA';
  status: string;

  constructor(private apiService: StatusService) {
    this.read_status()
  }

  read_status() {
    this.apiService.get_status().subscribe((data: JSON) => this.status = data['data'])
    console.log(this.status)
  }
}
