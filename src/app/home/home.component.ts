import { Component, OnInit } from '@angular/core';
import { faUserFriends, faBookReader, faSearch, faKeyboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUserFriends = faUserFriends;
  faBookReader = faBookReader;
  faSearch = faSearch;
  faKeyboard = faKeyboard;
}
