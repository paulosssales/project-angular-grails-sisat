import { SolicitanteModule } from './solicitante.module';

describe('SolicitanteModule', () => {
  let solicitanteModule: SolicitanteModule;

  beforeEach(() => {
    solicitanteModule = new SolicitanteModule();
  });

  it('should create an instance', () => {
    expect(solicitanteModule).toBeTruthy();
  });
});
