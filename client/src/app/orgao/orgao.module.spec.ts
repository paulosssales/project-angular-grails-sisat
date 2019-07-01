import { OrgaoModule } from './orgao.module';

describe('OrgaoModule', () => {
  let orgaoModule: OrgaoModule;

  beforeEach(() => {
    orgaoModule = new OrgaoModule();
  });

  it('should create an instance', () => {
    expect(orgaoModule).toBeTruthy();
  });
});
