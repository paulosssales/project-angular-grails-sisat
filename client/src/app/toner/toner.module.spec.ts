import { TonerModule } from './toner.module';

describe('TonerModule', () => {
  let tonerModule: TonerModule;

  beforeEach(() => {
    tonerModule = new TonerModule();
  });

  it('should create an instance', () => {
    expect(tonerModule).toBeTruthy();
  });
});
