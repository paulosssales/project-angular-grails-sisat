import { ImpressoraModule } from './impressora.module';

describe('ImpressoraModule', () => {
  let impressoraModule: ImpressoraModule;

  beforeEach(() => {
    impressoraModule = new ImpressoraModule();
  });

  it('should create an instance', () => {
    expect(impressoraModule).toBeTruthy();
  });
});
