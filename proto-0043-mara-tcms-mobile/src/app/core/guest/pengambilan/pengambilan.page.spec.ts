import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengambilanPage } from './pengambilan.page';

describe('PengambilanPage', () => {
  let component: PengambilanPage;
  let fixture: ComponentFixture<PengambilanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengambilanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengambilanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
