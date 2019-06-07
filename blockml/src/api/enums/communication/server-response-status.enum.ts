export enum ServerResponseStatusEnum {
  OK = 'OK',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
  SET_PROJECT_CREDENTIALS_ERROR_JSON_NOT_VALID = 'SET_PROJECT_CREDENTIALS_ERROR_JSON_NOT_VALID',
  SET_PROJECT_CREDENTIALS_ERROR_CAN_NOT_CREATE_SCHEMA_POSTGRES = 'SET_PROJECT_CREDENTIALS_ERROR_CAN_NOT_CREATE_SCHEMA_POSTGRES',
  SET_PROJECT_CREDENTIALS_ERROR_CAN_NOT_CREATE_DATASET = 'SET_PROJECT_CREDENTIALS_ERROR_CAN_NOT_CREATE_DATASET',
  REGISTER_ERROR_USER_ALREADY_EXISTS = 'REGISTER_ERROR_USER_ALREADY_EXISTS',
  REGISTER_ERROR_USER_IS_NOT_INVITED = 'REGISTER_ERROR_USER_IS_NOT_INVITED',
  DELETE_USER_ERROR_USER_IS_THE_SINGLE_ADMIN_IN_PROJECT = 'DELETE_USER_ERROR_USER_IS_THE_SINGLE_ADMIN_IN_PROJECT',
  GET_STATE_ERROR_USER_DOES_NOT_EXIST = 'GET_STATE_ERROR_USER_DOES_NOT_EXIST',
  LOGIN_ERROR_WRONG_PASSWORD = 'LOGIN_ERROR_WRONG_PASSWORD',
  LOGIN_ERROR_USER_DOES_NOT_EXIST = 'LOGIN_ERROR_USER_DOES_NOT_EXIST',
  LOGIN_ERROR_USER_DELETED = 'LOGIN_ERROR_USER_DELETED',
  LOGIN_ERROR_REGISTER_TO_SET_PASSWORD = 'LOGIN_ERROR_REGISTER_TO_SET_PASSWORD',
  VERIFY_EMAIL_ERROR_USER_DOES_NOT_EXIST = 'VERIFY_EMAIL_ERROR_USER_DOES_NOT_EXIST',
  RESET_PASSWORD_ERROR_USER_DOES_NOT_EXIST = 'RESET_PASSWORD_ERROR_USER_DOES_NOT_EXIST',
  UPDATE_PASSWORD_ERROR_TOKEN_EXPIRED = 'UPDATE_PASSWORD_ERROR_TOKEN_EXPIRED',
  CONFIRM_EMAIL_ERROR_USER_DOES_NOT_EXIST = 'CONFIRM_EMAIL_ERROR_USER_DOES_NOT_EXIST',
  INVITE_MEMBER_ERROR_USER_DELETED = 'INVITE_MEMBER_ERROR_USER_DELETED',
  API_ERROR = 'API_ERROR',
  AUTHORIZATION_EMAIL_ERROR = 'AUTHORIZATION_EMAIL_ERROR'
}
