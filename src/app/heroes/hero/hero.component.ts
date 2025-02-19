import { Component } from '@angular/core';

@Component({ //CLASE CON UN DECORADOR, UNICAMENTE ESO
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'SpiderMan'
  }

  changeAge():void{
    this.age = 37;
  }

  resetForm():void{
    this.name = 'Iron Man';
    this.age= 45;
  }

}
