import { databaseHelper } from "../Database/DatabaseHelper.js";

function randomIdGenerator() {
  return (
    Math.random().toString(16).substring(2) +
    Math.random().toString(16).substring(2)
  );
}

function doesUserExistInDb(email) {
  return databaseHelper.doesUserExistInDb(email);
}

function generateUniqueUserId() {
  let _id = randomIdGenerator();
  while (databaseHelper.isUserIdAlreadyExist(_id)) {
    _id = randomIdGenerator();
  }
  return _id;
}

function setupUserInDatabase(user) {
  try {
    databaseHelper.setupUser(user);
    return true;
  } catch (e) {
    return false;
  }
}

export { doesUserExistInDb, setupUserInDatabase, generateUniqueUserId };
