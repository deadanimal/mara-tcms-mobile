import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeputusanPeperiksaanPage } from './keputusan-peperiksaan.page';

describe('KeputusanPeperiksaanPage', () => {
  let component: KeputusanPeperiksaanPage;
  let fixture: ComponentFixture<KeputusanPeperiksaanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeputusanPeperiksaanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeputusanPeperiksaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
