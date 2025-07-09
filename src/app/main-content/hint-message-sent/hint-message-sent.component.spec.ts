import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintMessageSentComponent } from './hint-message-sent.component';

describe('HintMessageSentComponent', () => {
  let component: HintMessageSentComponent;
  let fixture: ComponentFixture<HintMessageSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintMessageSentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HintMessageSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
