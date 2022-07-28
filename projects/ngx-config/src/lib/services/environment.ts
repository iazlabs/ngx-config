import { Inject, Injectable, Optional } from '@angular/core';
import { getObjectProperty } from '@azlabsjs/js-object';
import { ConfigMap, ConfigurationManager } from '../contracts';
import { ENVIRONMENT } from './tokens';

@Injectable({
  providedIn: 'root',
})
export class AppEnvironmentManager implements ConfigurationManager {
  constructor(
    @Inject(ENVIRONMENT) @Optional() private configuration: ConfigMap = {}
  ) {}

  load(configuration?: { [index: string]: any }): void {
    this.configuration = configuration ?? {};
  }

  get(key: string | undefined = undefined, default_: any = undefined) {
    if (key) {
      return (
        getObjectProperty(this.configuration ?? {}, key) ??
        default_ ??
        undefined
      );
    }
    return this.configuration ?? {};
  }
}
