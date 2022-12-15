import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriarkComponent } from './triark.component';

describe('TriarkComponent', () => {
  let component: TriarkComponent;
  let fixture: ComponentFixture<TriarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
