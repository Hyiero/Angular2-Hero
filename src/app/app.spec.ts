import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('App: ', function() {
   describe('Component: ', function () {
       beforeEach( function() {
           TestBed.configureTestingModule({
               imports: [RouterTestingModule,MaterialModule.forRoot()],
               declarations: [AppComponent],
               providers : []
           });
       });

        it('should have app component be defined',function(){
           //Arrange
           var component = TestBed.createComponent(AppComponent); //Creates an instance of our component
           
           //Act
           component.detectChanges(); //Digest our component and any actions commited before this

           //Assert
           expect(component.debugElement.componentInstance).toBeDefined();
       });
   })
});