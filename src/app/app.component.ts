import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
$(document).ready(function(){
  $('#myBtn').click(function(){
    $('.toast').toast({delay: 2000});
    $('.toast').toast('show');
  });
});
