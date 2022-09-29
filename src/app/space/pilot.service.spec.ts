import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { PilotService } from './pilot.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PilotAttrs } from './pilot';

export class HttpClientMock {
  get() { }
  post() { }
  put() { }
  delete() { }
}

describe('PilotService', () => {
  let pilotService: PilotService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useClass: HttpClientMock},
        PilotService
      ]
    });
    http = TestBed.inject(HttpClient);
    pilotService = TestBed.inject(PilotService);
  });

  describe('getPilot', () => {
    beforeEach(() => {
      const pilotAttrs = {id: 1, firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
      spyOn(http, 'get').and.returnValue(of(pilotAttrs));
    });

    it('should make a request for pilot', () => {
      pilotService.getPilot(1);
      expect(http.get).toHaveBeenCalledWith(`${environment.apiUrl}/pilots/1`);
    });
  });

  describe('savePilot', () => {
    let pilotAttrs: PilotAttrs;

    describe('when pilot has id', () => {
      beforeEach(() => {
        pilotAttrs = {id: 1, firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
        spyOn(http, 'put').and.returnValue(of(pilotAttrs));
      });

      it('should make post request', () => {
        pilotService.savePilot(pilotAttrs);
        expect(http.put).toHaveBeenCalledWith(`${environment.apiUrl}/pilots/1`, pilotAttrs);
      });
    });

    describe('when pilot has not id', () => {
      beforeEach(() => {
        pilotAttrs = {firstName: 'Mike', lastName: 'Tomsky', imageUrl: ''};
        spyOn(http, 'post').and.returnValue(of({...pilotAttrs, id: 1}));
      });

      it('should make put request', () => {
        pilotService.savePilot(pilotAttrs);
        expect(http.post).toHaveBeenCalledWith(`${environment.apiUrl}/pilots`, pilotAttrs);
      });
    });
  });
});
