import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrenciesComponent } from './show-currencies.component';

describe('ShowCurrenciesComponent', () => {
  let component: ShowCurrenciesComponent;
  let fixture: ComponentFixture<ShowCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCurrenciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
