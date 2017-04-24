import { BaseRequestOptions, RequestOptionsArgs, RequestOptions } from '@angular/http';

import { environment } from '../environments/environment';

export class CustomRequestOptions extends BaseRequestOptions {
  merge(options?: RequestOptionsArgs): RequestOptions {
    if (environment.production) {
      options.url = '/' + window.location.pathname.split('/')[1] + options.url;
    }
    let result = super.merge(options);
    result.merge = this.merge;
    return result;
  }
}

