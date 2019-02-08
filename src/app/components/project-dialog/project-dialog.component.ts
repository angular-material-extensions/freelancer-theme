import { Component, Inject } from '@angular/core';
import { Project } from '../../../config.interface';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Project) {}
}
