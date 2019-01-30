import * as constants from '../../../src/app/constants/_index';
import * as api from '../../../src/app/api/_index';

const userId = 't2-user@example.com';
const userPassword = '123123';
const userEmailVerificationToken = 'abcdef';

function resetData() {
  cy.deletePack({ user_ids: [userId] });
  cy.seedPack({
    users: [
      {
        user_id: userId,
        password: userPassword,
        email_verified: false,
        email_verification_token: userEmailVerificationToken
      }
    ]
  });
}

describe('t2-confirm-email', () => {
  afterEach(() => {
    cy.noLoading();
  });

  const infoText = 'Email is confirmed';

  it(`good token - should see "${infoText}", redirect to ${
    constants.PATH_LOGIN
  }`, () => {
    resetData();
    cy.basicVisit(
      constants.PATH_CONFIRM_EMAIL + '?token=' + userEmailVerificationToken
    );
    cy.get('[data-cy=message]').should('contain', infoText);
  });

  it(`bad token - should see ${
    api.ServerResponseStatusEnum.CONFIRM_EMAIL_ERROR_USER_DOES_NOT_EXIST
  }, redirect to ${constants.PATH_LOGIN}`, () => {
    cy.basicVisit(constants.PATH_CONFIRM_EMAIL + '?token=notExistingToken');
    cy.url().should('include', constants.PATH_LOGIN);
    cy.get('[data-cy=message]').should(
      'contain',
      api.ServerResponseStatusEnum.CONFIRM_EMAIL_ERROR_USER_DOES_NOT_EXIST
    );
  });
});
