import { Config } from '@stencil/core';
import {angularOutputTarget} from "@stencil/angular-output-target";

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      directivesProxyFile:
        '../ds-pichincha-angular/projects/library/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        '../ds-pichincha-angular/projects/library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
