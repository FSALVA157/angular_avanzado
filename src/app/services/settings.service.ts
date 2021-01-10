import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public atributo = document.querySelector('#theme');

  constructor() {
    const tema = localStorage.getItem('theme') || "./assets/css/colors/green-dark.css";
    

    this.atributo.setAttribute('href',tema);

   }

   changeTheme(tema: string){
    const url = `./assets/css/colors/${tema}.css`;
    this.atributo.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.tildarTheme(tema,url);
  }

  tildarTheme(tema: string,url: string){
    const botones = document.querySelectorAll('.selector'); ;
    botones.forEach(boton => {
      boton.classList.remove('working');
      let aux: string = boton.getAttribute('data-theme');
      let clase: string = `./assets/css/colors/${aux}.css`;
      
      if (clase === url){
          boton.classList.add('working');
      }
    });   
  }


}
