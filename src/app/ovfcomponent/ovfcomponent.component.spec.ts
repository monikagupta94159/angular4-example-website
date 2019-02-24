import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OVFComponentComponent } from './ovfcomponent.component';

describe('OVFComponentComponent', () => {
  let component: OVFComponentComponent;
  let fixture: ComponentFixture<OVFComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OVFComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OVFComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
