import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusPage } from './meus.page';

describe('MeusPage', () => {
  let component: MeusPage;
  let fixture: ComponentFixture<MeusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
