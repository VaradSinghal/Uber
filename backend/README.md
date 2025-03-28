# /user/register Endpoint Documentation

## Description
The `/user/register` endpoint allows new users to register. It validates the input data and, on successful registration, returns a JWT token along with the created user object.

## Request Body
- `fullname`: An object containing:
  - `firstname` (string): Must be at least 3 characters long.
  - `lastname` (string): Must be at least 3 characters long.
- `email` (string): Must be a valid email address.
- `password` (string): Must be at least 5 characters long.

## Response Status Codes
- **201 Created:** Registration successful. Returns a JSON object with the JWT token and the created user.
- **400 Bad Request:** Validation errors. Returns the list of errors if any field fails to meet the requirements.

## Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Example Response (Success)
```json
{
  "token": "<JWT Token>",
  "user": {
    // ...user details...
  }
}
```

## Example Response (Validation Error)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
    // ...other errors...
  ]
}
```
