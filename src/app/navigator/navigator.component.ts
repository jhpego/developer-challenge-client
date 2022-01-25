import { Component } from '@angular/core';
import { NavItem } from 'src/models/Shared.model';
import { NavigationService } from 'src/services/navigation.service';


@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  title = 'Navigator';
  menu : NavItem[];
constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.menu = this.navigationService.getMenu();
  }



}
