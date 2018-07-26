import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject)=>{
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this.notifyAll();
      resolver(user);
    });
  }
  
  userById(id: number): User {
    return this.dataStore.users.find(u=> u.id == id);
  }

  loadAll(){
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(userUrl)
          .subscribe(
            data => {
              this.dataStore.users = data;
              this.notifyAll();
            }, error => {
              console.error("On n'a pas réussi à récupérer les utilisateurs!");
            }
          );
  }

  notifyAll(){
    this._users.next(Object.assign({}, this.dataStore).users);
  }
}
