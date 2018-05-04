import { Component } from '@angular/core'

@Component({
  selector: 'about',
  template: `
    <header class="container">
      <h1 myTextDecoration='overline'>Something about races</h1>
      
      <p>Races are usually pretty awesome, schedule to race today!</p>
    </header>
    <p>MyDate pipe: {{dateStr|mydate:'/'}}</p>
    `
})
export class AboutComponent {
  dateStr = '20180508';

}
