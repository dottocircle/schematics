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
// import * as ts from 'typescript';

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
          featureName: classify(options.featureName),
          path: dasherize(options.path)
        })
      ])
    ),
    // addReducerToState(options)
  ]);
}

// function addReducerToState(options: any) {
//   return (host: Tree) => {
//     if (!options.state && !options.stateInterface) {
//       return host;
//     }

//     const statePath = `/${options.path}/${options.state}`;

//     if (options.state) {
//       if (!host.exists(statePath)) {
//         throw new Error(`The Specified state path ${statePath} does not exist`);
//       }
//     }

//     const componentPath =
//       `/${options.path}/` +
//       (options.flat ? '' : stringUtils.dasherize(options.name) + '/') +
//       stringUtils.dasherize(options.name) +
//       '.component.ts';

//     const text = host.read(componentPath);

//     if (text === null) {
//       throw new SchematicsException(`File ${componentPath} does not exist.`);
//     }

//     const sourceText = text.toString('utf-8');

//     const source = ts.createSourceFile(
//       componentPath,
//       sourceText,
//       ts.ScriptTarget.Latest,
//       true
//     );

//     const stateImportPath = buildRelativePath(componentPath, statePath);
//     const storeImport = insertImport(
//       source,
//       componentPath,
//       'Store',
//       '@ngrx/store'
//     );
//     const stateImport = options.state
//       ? insertImport(
//           source,
//           componentPath,
//           `* as fromStore`,
//           stateImportPath,
//           true
//         )
//       : new NoopChange();

//     const componentClass = source.statements.find(
//       stm => stm.kind === ts.SyntaxKind.ClassDeclaration
//     );
//     const component = componentClass as ts.ClassDeclaration;
//     const componentConstructor = component.members.find(
//       member => member.kind === ts.SyntaxKind.Constructor
//     );
//     const cmpCtr = componentConstructor as ts.ConstructorDeclaration;
//     const { pos } = cmpCtr;
//     const stateType = options.state
//       ? `fromStore.${options.stateInterface}`
//       : 'any';
//     const constructorText = cmpCtr.getText();
//     const [start, end] = constructorText.split('()');
//     const storeText = `private store: Store<${stateType}>`;
//     const storeConstructor = [start, `(${storeText})`, end].join('');
//     const constructorUpdate = new ReplaceChange(
//       componentPath,
//       pos,
//       `  ${constructorText}\n\n`,
//       `\n\n  ${storeConstructor}`
//     );

//     const changes = [storeImport, stateImport, constructorUpdate];
//     const recorder = host.beginUpdate(componentPath);

//     for (const change of changes) {
//       if (change instanceof InsertChange) {
//         recorder.insertLeft(change.pos, change.toAdd);
//       } else if (change instanceof ReplaceChange) {
//         recorder.remove(pos, change.oldText.length);
//         recorder.insertLeft(change.order, change.newText);
//       }
//     }

//     host.commitUpdate(recorder);

//     return host;
//   };
// }
