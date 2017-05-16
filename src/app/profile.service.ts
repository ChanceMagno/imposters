import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProfileService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  updateProfile(profile, userUID){
    var userInFirebase = this.getUserById(userUID);
    userInFirebase.update({
        bio: profile.bio,
        joinDate: profile.joinDate,
        location: profile.location,
        jobStatus: profile.jobStatus,
        specialty: profile.specialty,
        portfolioSite: profile.portfolioSite,
        github: profile.github,
        linkedIn: profile.linkedIn,
    })
  }

  
}