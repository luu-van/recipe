import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple test', 'https://st3.depositphotos.com/10654668/15316/i/600/depositphotos_153165422-stock-photo-person-cooking-with-cookbook.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
