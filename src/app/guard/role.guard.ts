import {Injectable} from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  MaybeAsync,
  GuardResult
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const userRole = localStorage.getItem('roleId')

    if(!userRole){
      this.router.navigate(['/'])
      return false;
    }

    const rolesAutorises: string[] = route.data['rolesAutorises'];

    console.log("role checké :", userRole)

    if(!rolesAutorises.includes(userRole)) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;

  } }
