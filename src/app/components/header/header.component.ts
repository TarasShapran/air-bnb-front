import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string;

  constructor(private transferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.transferService.currentUserSubject.subscribe(value => {
      if (value) {
        this.email = value.email;
      }
    })
  }

}
