import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, flatMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app-state';
import { loadWeather } from '../../store/weather/weather.actions';
import { selectWeather } from '../../store/weather/weather.selectors';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user!: User;
  weather$!: Observable<Weather | null>;
  userId!: number;
  editMode: boolean = false;
  showWeatherInfo: boolean = false;

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe((data: User) => {
      this.user = data;
    });
    this.weather$ = this.store.pipe(select(selectWeather));
  }

  loadWeather(location: string): void {
    this.showWeatherInfo = true;
    this.store.dispatch(loadWeather({ location }));
  }

  hideWeatherInfo() {
    this.showWeatherInfo = false
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  updateUser() {
    this.userService.updateUser(this.user);
    this.toggleEditMode();
    this.userService.updateUser(this.user).subscribe(
      (updatedUser: User) => {
        console.log('User updated successfully:', updatedUser);
      },
      error => {
        console.error('Error updating user:', error);
      }
    );
  }
}
