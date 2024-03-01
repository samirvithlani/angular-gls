import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixHomeComponent } from './netflix-home.component';

describe('NetflixHomeComponent', () => {
  let component: NetflixHomeComponent;
  let fixture: ComponentFixture<NetflixHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetflixHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetflixHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
