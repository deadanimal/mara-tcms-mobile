import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatihanIndustriPage } from './latihan-industri.page';

describe('LatihanIndustriPage', () => {
  let component: LatihanIndustriPage;
  let fixture: ComponentFixture<LatihanIndustriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatihanIndustriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatihanIndustriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
