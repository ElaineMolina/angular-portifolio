import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioPageComponent } from './portifolio-page.component';

describe('PortifolioPageComponent', () => {
  let component: PortifolioPageComponent;
  let fixture: ComponentFixture<PortifolioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortifolioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortifolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
