import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';

export interface CanComponentDeactivated {
  canDeactived: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivatedGuard implements CanDeactivate<CanComponentDeactivated>{
  canDeactivate(component: CanComponentDeactivated,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactived();
  }
  
}
