import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadualPeperiksaanPage } from './jadual-peperiksaan.page';

describe('JadualPeperiksaanPage', () => {
  let component: JadualPeperiksaanPage;
  let fixture: ComponentFixture<JadualPeperiksaanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadualPeperiksaanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadualPeperiksaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
