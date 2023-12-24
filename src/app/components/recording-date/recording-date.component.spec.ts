import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingDateComponent } from './recording-date.component';

describe('RecordingDateComponent', () => {
  let component: RecordingDateComponent;
  let fixture: ComponentFixture<RecordingDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordingDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordingDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
