import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemakanPage } from './semakan.page';

describe('SemakanPage', () => {
  let component: SemakanPage;
  let fixture: ComponentFixture<SemakanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemakanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemakanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
