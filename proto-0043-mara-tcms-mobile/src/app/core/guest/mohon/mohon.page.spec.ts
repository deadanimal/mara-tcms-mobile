import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MohonPage } from './mohon.page';

describe('MohonPage', () => {
  let component: MohonPage;
  let fixture: ComponentFixture<MohonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MohonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
