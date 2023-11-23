import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public value: string = 'Rick sanches';
  public value1: string = 'Human';
  public value2: string = 'Milky way';
  public value3: string = 'Earth';
  public value4: string = '0110110101011';
}
