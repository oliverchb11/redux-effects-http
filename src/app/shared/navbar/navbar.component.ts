import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  private router = inject(Router);

  @ViewChild('idUser') public buscador!: ElementRef

  public search(id: string): void{
    if(!id) return
    console.log(id);
    this.router.navigateByUrl(`usuario/${id}`);
    this.buscador.nativeElement.value = ''
  }
}
