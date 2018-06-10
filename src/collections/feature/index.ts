import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  template,
  url,
  schematic
} from '@angular-devkit/schematics';
import {
  dasherize,
  capitalize,
  classify,
  camelize
} from '@angular-devkit/core/src/utils/strings';
import { spaced } from '../../lib/strings';

// Instead of `any`, it would make sense here to get a schema-to-dts package and output the
// interfaces so you get type-safe options.
export function createFeature(options: any): Rule {
  // The chain rule allows us to chain multiple rules and apply them one after the other.
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('Schematic: ' + JSON.stringify(options));
    },

    mergeWith(
      apply(url('./files'), [
        template({
          name: dasherize(options.name),
          dasherizedName: dasherize(options.name),
          classifiedName: classify(options.name),
          camelizedName: camelize(options.name),
          spacedName: capitalize(spaced(options.name))
        })
      ])
    ),

    schematic('store', {
      featureName: options.name,
      path: options.name
    })

    // externalSchematic('@schematics/angular', 'component', {
    //   name: options.name
    // })
  ]);
}
