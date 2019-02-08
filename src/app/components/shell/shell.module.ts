import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent]
})
export class ShellModule {}
