import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { GameComponent } from '../game/game.component';
@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.css']
})
export class GameOverDialogComponent implements OnInit {

  constructor(private route: Router, private refDialog:MatDialogRef<GameComponent>) { }

  ngOnInit(): void {
  }
  reset():void{
    
    this.refDialog.close();
    this.refDialog.afterClosed().subscribe((result) => {
    });
    
  }

}
