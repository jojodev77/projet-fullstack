import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InesComponent } from './ines.component';

describe('InesComponent', () => {
  let component: InesComponent;
  let fixture: ComponentFixture<InesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
