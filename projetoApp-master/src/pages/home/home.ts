import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
import { ExerciseListPage } from '../exercise-list/exercise-list';
import { AddExercisePage } from '../add-exercise/add-exercise';
import { ProfileListPage } from '../profile-list/profile-list';
import { ListTreinoPage } from '../list-treino/list-treino';
import { AddTreinoPage } from '../add-treino/add-treino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthServiceProvider) {}


  signOut() {
    this.authService.signOut()
    .then(() => {
      this.navCtrl.setRoot(SigninPage);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  ExerciciosRedirect() {
      this.navCtrl.push(ExerciseListPage);
  }

  ProfileRedirect() {
    this.navCtrl.push(ProfileListPage);
}

TreinoRedirect() {
  this.navCtrl.push(ListTreinoPage);
}

}