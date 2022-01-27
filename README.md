# node.js authentication mechanisms

## curl

```sh
curl -X POST localhost:3000/register -H 'Content-Type:application/json' \ -d '{"email":"johndoe@gmail.com", "name":"johndoe", "password":"password123", "passwordConfirmation":"password123"}'
```

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type:application/json' --cookie 'sid=s%3A8p17J1sXiZPgIVS2JPAQUEKdkew8Mkqq.D1dz9nn4QUh3wvnQWvwbPHzb7neLXDD8v%2BnBEYA0zSE'
```
