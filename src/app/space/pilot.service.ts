import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pilot, PilotAttrs } from './pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>(`${environment.apiUrl}/pilots`).pipe(
      map((data) => data.map((pilotAttrs) => new Pilot(pilotAttrs)))
    );
  }

  getPilot(id: number) {
    return this.http.get<PilotAttrs>(`${environment.apiUrl}/pilots/${id}`).pipe(
       map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  savePilot(pilotAttrs: PilotAttrs): Observable<Pilot> {
    if (pilotAttrs.id) {
      return this.updatePilot(pilotAttrs);
    } else {
      return this.createPilot(pilotAttrs);
    }
  }

  private createPilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.post<PilotAttrs>(`${environment.apiUrl}/pilots`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }

  private updatePilot(data: PilotAttrs): Observable<Pilot> {
    return this.http.put<PilotAttrs>(`${environment.apiUrl}/pilots/${data.id}`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }



}
