import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { <%= classifiedModuleName %>Component } from './<%= dasherizedModuleName %>.component';

describe('<%= classifiedModuleName %>Component', () => {
  let fixture: ComponentFixture<<%= classifiedModuleName %>ParentComponent>;
  let component: <%= classifiedModuleName %>Component;
  let debugElement: DebugElement;
  let html: any;

  function updateComponent() {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
  }

  function startComponent() {
    updateComponent();
    debugElement = query('<%= selector %>');
    component = debugElement.componentInstance;
    html = debugElement.nativeElement;
  }

  function query(
    cssSelector: string,
    container: DebugElement = fixture.debugElement
  ): DebugElement {
    return container.query(By.css(cssSelector));
  }

  function queryAll(
    cssSelector: string,
    container: DebugElement = fixture.debugElement
  ): DebugElement[] {
    return container.queryAll(By.css(cssSelector));
  }

  @Component({
    template: `
      <<%= selector %>></<%= selector %>>
    `
  })
  class <%= classifiedModuleName %>ParentComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        <%= classifiedModuleName %>Component,
        <%= classifiedModuleName %>ParentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classifiedModuleName %>ParentComponent);
  });

  it('should create', fakeAsync(() => {
    startComponent();

    expect(component).toBeTruthy();
  }));
});
