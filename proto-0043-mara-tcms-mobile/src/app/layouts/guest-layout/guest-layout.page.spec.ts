import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuestLayoutPage } from './guest-layout.page';

describe('GuestLayoutPage', () => {
  let component: GuestLayoutPage;
  let fixture: ComponentFixture<GuestLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuestLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
