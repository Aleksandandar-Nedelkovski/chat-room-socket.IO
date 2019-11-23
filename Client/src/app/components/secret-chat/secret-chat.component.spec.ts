import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretChatComponent } from './secret-chat.component';

describe('SecretChatComponent', () => {
  let component: SecretChatComponent;
  let fixture: ComponentFixture<SecretChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
