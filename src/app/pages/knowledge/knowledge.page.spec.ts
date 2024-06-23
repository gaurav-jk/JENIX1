import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KnowledgePage } from './knowledge.page';

describe('KnowledgePage', () => {
  let component: KnowledgePage;
  let fixture: ComponentFixture<KnowledgePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
