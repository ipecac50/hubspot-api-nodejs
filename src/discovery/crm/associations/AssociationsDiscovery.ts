import { createConfiguration } from '../../../../codegen/crm/associations/configuration'
import { BatchApi, RequestContext, ResponseContext, TypesApi } from '../../../../codegen/crm/associations/index'
import { Observable } from '../../../../codegen/crm/associations/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class AssociationsDiscovery {
  public batchApi: BatchApi
  public typesApi: TypesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.batchApi = new BatchApi(configuration)
    this.typesApi = new TypesApi(configuration)
  }
}
