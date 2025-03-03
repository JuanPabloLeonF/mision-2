import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivContainerShowFileComponent } from './div-container-show-file.component';

describe('DivContainerShowFileComponent', () => {
  let component: DivContainerShowFileComponent;
  let fixture: ComponentFixture<DivContainerShowFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivContainerShowFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivContainerShowFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
