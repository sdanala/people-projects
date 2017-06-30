import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Welcome to the People and Projects with {{name}}!!</h1><p>Your code component goes below this!</p>`,
})
export class AppComponent  { name = 'Angular'; }