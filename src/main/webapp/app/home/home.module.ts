import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipstertest5SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipstertest5SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Jhipstertest5HomeModule {}
