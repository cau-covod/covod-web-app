import ApiController from './api-controller';
import ApiConfig from './config';

/**
 * Provides deriving components with access to an CovodAPI instance. This
 * allows them to easily read the api configuration.
 */
abstract class ApiComponent {
  protected readonly api: ApiController;
  protected readonly config: ApiConfig;

  constructor(api: ApiController, config: ApiConfig) {
    this.api = api;
    this.config = config;
  }
}

export default ApiComponent;
