import { AmError } from '../../../src/barrels/am-error';
import { ApStruct } from '../../../src/barrels/ap-struct';
import { api } from '../../../src/barrels/api';
import { interfaces } from '../../../src/barrels/interfaces';

//

// yarn jest test/errors/01_yaml/e296_udfs_are_not_supported_for_postgres.test
jest.setTimeout(30000);
test('testName', () => {
  expect.assertions(3);

  return ApStruct.rebuildStruct({
    dir: 'test/errors/01_yaml/e296',
    weekStart: api.ProjectWeekStartEnum.Monday,
    connection: api.ProjectConnectionEnum.PostgreSQL,
    bqProject: 'flow-1202',
    projectId: 'unkProjectId',
    structId: 'unkStructId'
  }).then((struct: interfaces.Struct) => {
    const desiredError0Lines: interfaces.ErrorLine[] = [
      { line: 3, name: 'e296.view', path: 'e296.view' }
    ];

    expect(struct.errors[0].lines).toEqual(
      expect.arrayContaining(desiredError0Lines)
    );
    expect(struct.errors[0].title).toEqual(
      `UDFs are not supported for ${api.ProjectConnectionEnum.PostgreSQL}`
    );
    expect(struct.errors[0].message).toEqual(`parameter "udfs" is useless`);
  });
});
