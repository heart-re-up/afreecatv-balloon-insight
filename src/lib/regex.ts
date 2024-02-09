/**
 * 다중 접속자의 사용자 아이디에 따라오는 괄호를 제거한다.
 */
export const NORMALIZE_USER_ID = /\w+(?=\(\d?\))?/g;
export const NORMALIZE_USER_NICK = /\w+(?=\(\d?\))?/g;
// export const NORMALIZE_USER_ID = /(\w+)(?<!\(\d+\)?)/g;
