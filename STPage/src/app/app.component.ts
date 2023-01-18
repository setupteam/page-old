import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'STPage';
  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {}

  openSnackBar() {
    this._snackBar.open("Ni nosotros sabemos!", 'X');
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {

    });
  }

}
