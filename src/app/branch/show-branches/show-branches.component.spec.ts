import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBranchesComponent } from './show-branches.component';

describe('ShowBranchesComponent', () => {
  let component: ShowBranchesComponent;
  let fixture: ComponentFixture<ShowBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowBranchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
