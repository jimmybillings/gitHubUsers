import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from '../users.interface';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public searchBy(userName: string): Observable<Users> {
    return this.http.get(`https://api.github.com/search/users?q=${userName}`)
      .map((res: Response) => res.json());
  }
}
