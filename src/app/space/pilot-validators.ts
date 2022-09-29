import { AbstractControl, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { ajax } from 'rxjs/ajax';

export class PilotValidators {
  static pilotName(formControl: AbstractControl): ValidationErrors | null {
    return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {pilotName: true};
  }

  static pilotForbidden(formControl: AbstractControl): Observable<ValidationErrors | null> {
    if (!formControl.value) { return of(null); }
    const url = `${environment.apiUrl}/forbidden-names?name=${formControl.value.toUpperCase()}`;
    return ajax.getJSON<Array<{name: string}>>(url).pipe(
      map((pilots) => pilots.length > 0 ? {pilotForbidden: true} : null)
    );
  }
}
