import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, defer } from 'rxjs';
import { asyncError, asyncData } from '../testing/async-observable-helpers';

describe('AuthorService', () => {
  let authorService: AuthorService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    authorService = new AuthorService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(authorService).toBeTruthy();
  });

  it('should get authors', () => {
    const expectedAuthors = [
      { id:1, age:27, name:'marouane'}
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedAuthors));

    authorService.getAuthors().subscribe(
      authors => expect(authors).toEqual(expectedAuthors, 'expected authors'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    authorService.getAuthors().subscribe(
      authors => fail('expected an error, not authors'),
      error  =>  expect(error.message).toContain('Http failure response for (unknown url)')
    );
  });

});


