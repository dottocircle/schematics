import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  template,
  url
} from '@angular-devkit/schematics';
import {
  dasherize,
  classify,
  capitalize,
  camelize
} from '@angular-devkit/core/src/utils/strings';
import { spaced } from '../../lib/strings';

// Instead of `any`, it would make sense here to get a schema-to-dts package and output the
// interfaces so you get type-safe options.
export function createReducer(options: any): Rule {
  // The chain rule allows us to chain multiple rules and apply them one after the other.
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('Schematic: ' + JSON.stringify(options));
    },

    mergeWith(
      apply(url('./files'), [
        template({
          dasherizedName: dasherize(options.name),
          classifiedName: classify(options.name),
          camelizedName: camelize(options.name),
          spacedName: capitalize(spaced(options.name)),
          path: dasherize(options.path)
        })
      ])
    )
  ]);
}
