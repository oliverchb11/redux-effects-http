import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Data } from 'src/app/interfaces/usuario-response.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  
  private activedRoute = inject(ActivatedRoute);
  private usuarioService = inject(UsuariosService);
  public usuario!: Data | undefined
  
  ngOnInit(): void {
    this.getParams()
  }

  private getParams(): void{
    this.activedRoute.params
    .pipe(
      switchMap(({id}) => this.usuarioService.getUserById(id))
    )
    .subscribe((user) => {
      this.usuario = user.data;
    })
  }
}
