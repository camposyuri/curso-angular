import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    SubNgIfComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
