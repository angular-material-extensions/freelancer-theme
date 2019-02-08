import { Component, Inject, OnInit } from '@angular/core';
import { Config, ConfigToken } from '../../../config';
import { Project } from '../../../config.interface';
import { ProjectDialogComponent } from '@app/components/project-dialog/project-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading: boolean;

  constructor(
    @Inject(ConfigToken)
    public config: Config,
    public dialog: MatDialog
  ) {}

  openProjectDialog(project: Project) {
    this.dialog.open(ProjectDialogComponent, {
      data: project
    });
  }
}
