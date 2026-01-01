import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionBanner } from './subscription-banner';

describe('SubscriptionBanner', () => {
  let component: SubscriptionBanner;
  let fixture: ComponentFixture<SubscriptionBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
