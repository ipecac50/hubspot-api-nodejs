import { createConfiguration } from '../../../../../codegen/cms/blogs/authors/configuration'
import { BlogAuthorsApi, RequestContext, ResponseContext } from '../../../../../codegen/cms/blogs/authors/index'
import { Observable } from '../../../../../codegen/cms/blogs/authors/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class AuthorsDiscovery {
  public blogAuthorsApi: BlogAuthorsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.blogAuthorsApi = new BlogAuthorsApi(configuration)
  }
}
