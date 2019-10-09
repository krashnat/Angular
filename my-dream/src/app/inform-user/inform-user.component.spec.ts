import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformUserComponent } from './inform-user.component';

describe('InformUserComponent', () => {
  let component: InformUserComponent;
  let fixture: ComponentFixture<InformUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
