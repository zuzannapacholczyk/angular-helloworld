import { TestBed, inject } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

import { DummyService } from "./dummy.service";

describe("DummyService", () => {
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      providers: [DummyService]
    });
  });

  it("should be created", inject([DummyService], (service: DummyService) => {
    expect(service).toBeTruthy();
  }));
});
