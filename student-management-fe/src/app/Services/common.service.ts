import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {Major} from "../model/major";
import {Student} from "../model/student";
import { throwError } from 'rxjs/internal/observable/throwError';
const httpOptions:{header: HttpHeaders} = {
  header: new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: 'my-auth-token'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private REST_API_SERVER:string = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public getAllStudent(): Observable<Student[]> {
    const url = `${this.REST_API_SERVER}students`;
    return this.httpClient.get<Student[]>(url).pipe(catchError(this.handleError));
  }
  public addStudent(data: Student): Observable<Student> {
    const url = `${this.REST_API_SERVER}students`;
    return this.httpClient.post<Student>(url, data).pipe(catchError(this.handleError));
  }

  public getAllMajor(): Observable<Major[]> {
    const url: string = `${this.REST_API_SERVER}majors`;
    return this.httpClient.get<Major[]>(url).pipe(catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }


}
