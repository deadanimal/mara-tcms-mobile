import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JadualKuliahPage } from './jadual-kuliah.page';

describe('JadualKuliahPage', () => {
  let component: JadualKuliahPage;
  let fixture: ComponentFixture<JadualKuliahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadualKuliahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JadualKuliahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
