import { AmError } from '../../../src/barrels/am-error';
import { ApStruct } from '../../../src/barrels/ap-struct';
import { api } from '../../../src/barrels/api';
import { interfaces } from '../../../src/barrels/interfaces';

//

// yarn jest test/errors/08_model_sql_always_where_calc/e155_sql_always_where_calc_refs_missing_field.test.ts
jest.setTimeout(30000);
test('testName', () => {
  expect.assertions(3);

  return ApStruct.rebuildStruct({
    dir: 'test/errors/08_model_sql_always_where_calc/e155',
    weekStart: api.ProjectWeekStartEnum.Monday,
    connection: api.ProjectConnectionEnum.BigQuery,
    bqProject: 'flow-1202',
    projectId: 'unkProjectId',
    structId: 'unkStructId'
  }).then((struct: interfaces.Struct) => {
    const desiredError0Lines: interfaces.ErrorLine[] = [
      { line: 2, name: 'e155m.model', path: 'e155m.model' }
    ];

    expect(struct.errors[0].lines).toEqual(
      expect.arrayContaining(desiredError0Lines)
    );
    expect(struct.errors[0].title).toEqual(
      `sql_always_where_calc refs missing field`
    );
    expect(struct.errors[0].message).toEqual(
      `field "unk" is missing or not valid`
    );
  });
});
