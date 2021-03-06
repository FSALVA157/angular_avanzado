import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'DASHBOARD',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/dashboard/'},
        {titulo: 'ProgressBar', url: '/dashboard/progress'},
        {titulo: 'Gráficas', url: '/dashboard/grafica1'}
      ]
    }
  ];
  constructor() { }
}
