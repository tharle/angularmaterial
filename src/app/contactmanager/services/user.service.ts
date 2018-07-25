import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userById(id: number): User {
    return this.dataStore.users.find(u=> u.id == id);
  }

  private _users: BehaviorSubject<User[]>;

  private dataStore:{
    users: User[];
  }


  constructor(private http: HttpClient) { 
    this.dataStore = {users: []};
    this._users = new BehaviorSubject<User[]>([]);
  }

  
  get users() : Observable<User[]> {
    return this._users.asObservable();
  }
  

  loadAll(){
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(userUrl)
          .subscribe(
            data => {
              this.dataStore.users = data;
              this._users.next(Object.assign({}, this.dataStore).users);
            }, error => {
              console.error("On n'a pas réussi à récupérer les utilisateurs!");
            }
          );
  }
}
