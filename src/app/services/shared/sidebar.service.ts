import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-plus' },
        { titulo: 'ProgressBar', url: '/progress', icono: ' mdi mdi-currency-usd' },
        { titulo: 'Graficas', url: '/graficas1', icono: 'mdi mdi-chart-histogram' }
      ]
    }
  ];

  constructor() { }
}
