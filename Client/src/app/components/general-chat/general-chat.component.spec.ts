import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralChatComponent } from './general-chat.component';

describe('GeneralChatComponent', () => {
  let component: GeneralChatComponent;
  let fixture: ComponentFixture<GeneralChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
