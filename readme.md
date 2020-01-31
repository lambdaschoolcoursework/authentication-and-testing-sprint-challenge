## Questions

**What is the purpose of using sessions?**

Sessions are a form of authentication and allows users to access protected endpoints.

**What does bcrypt do to help us store passwords in a secure manner?**

Bcrypt hashes passwords multiple times so that we don't store plain passwords in our database.

**What does bcrypt do to slow down attackers?**

With bcrypt, you can set a number of 'rounds'. Bcrypt will salt and hash that number of times making it difficult and time-consuming to decrypt.

**What are the three parts of the JSON Web Token?**

The three parts of a JWT are the header, the payload, and the signature.