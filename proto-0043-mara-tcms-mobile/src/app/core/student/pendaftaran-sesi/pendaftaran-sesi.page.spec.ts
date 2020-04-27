import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendaftaranSesiPage } from './pendaftaran-sesi.page';

describe('PendaftaranSesiPage', () => {
  let component: PendaftaranSesiPage;
  let fixture: ComponentFixture<PendaftaranSesiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranSesiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendaftaranSesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
