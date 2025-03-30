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

## /user/login Endpoint Documentation

### Description
The `/user/login` endpoint allows an existing user to authenticate using their email and password.

### Request Body
- `email` (string): Must be a valid email address.
- `password` (string): Must be at least 5 characters long.

### Response Status Codes
- **200 OK:** Login successful. Returns a JSON object with the JWT token and the user.
- **400 Bad Request:** Validation errors.
- **401 Unauthorized:** Invalid email or password.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Example Response (Success)
```json
{
  "token": "<JWT Token>",
  "user": {
    // ...user details...
  }
}
```

### Example Response (Error)
```json
{
  "message": "Invalid credentials"
}
```

## /user/profile Endpoint Documentation

### Description
The `/user/profile` endpoint returns the authenticated user's profile information. This endpoint requires a valid JWT token via an Authorization header or a cookie.

### Request
- Method: GET
- Headers: 
  - `Authorization: Bearer <JWT Token>` or cookie `token` must be present.

### Response Status Codes
- **200 OK:** Returns the user profile.
- **401 Unauthorized:** When authentication fails.

### Example Response (Success)
```json
{
  "user": {
    // ...user details...
  }
}
```

## /user/logout Endpoint Documentation

### Description
The `/user/logout` endpoint logs out the authenticated user. It clears the token cookie and blacklists the token to prevent further usage.

### Request
- Method: GET
- Headers: 
  - `Authorization: Bearer <JWT Token>` or cookie `token` must be present.

### Response Status Codes
- **200 OK:** Logout successful.
- **401 Unauthorized:** When authentication is invalid.

### Example Response (Success)
```json
{
  "message": "Logout successful"
}
```
