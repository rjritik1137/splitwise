import { User } from "../User/User.js";

import {
  doesUserExistInDb,
  generateUniqueUserId,
  setupUserInDatabase,
} from "../User/UserHelper.js";

function SignUp(req, res) {
  const { body } = req;
  const { email, name } = body;
  const user = new User({ name, email });
  if (!user.isValid()) {
    res.status(500).send({
      code: 1000,
      message:
        "Both User name and email id is mandatory and should be non empty",
    });
    return;
  }
  const isAlreadyExistingUser = doesUserExistInDb(user);
  if (isAlreadyExistingUser) {
    res.status(409).send({
      code: 409,
      message: "This email address already exist",
    });
    return;
  }
  const userId = generateUniqueUserId();
  user.setId(userId);
  const done = setupUserInDatabase(user);
  if (!done) {
    res.status(500).send({
      code: 1000,
      message: "internal server error",
    });
    return;
  }
  res
    .set({
      uid: userId,
    })
    .status(201)

    .send({
      code: 200,
      message: "User has been registered succesfully",
    });
}

export { SignUp };
