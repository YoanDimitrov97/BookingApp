# BookingApp
This is a learning project, for the MERN stack. So far only the server side with Node.js is created. 
To test things you can use Postman, Insomnia or any other REST calls to localhost:8000/

So far we can CRUD hotels, rooms and users

## Project setup
```
npm install
```

### Start the server 
```
npm run start
```

### Register User
```
POST: localhost:8000/auth/register
```
{
  "name":"Test",
  "email":"test@gmail.com",
  "password":"test",
  "isAdmin":true
}
```

### Login User
```
POST: localhost:8000/auth/login
```
{
  "name":"Test",
  "password":"test"
}
```

### Create Hotel
```
POST: localhost:8000/hotels
```
{
	"name": "Hotel Marinela3",
	"type": "hotel",
	"city": "Sofia",
	"address": "Blvd \"James Bourchier\" 100, 1407 g.k. Lozenets, Sofia",
	"distance": "500",
	"title": "Luxurious Hotel in Sofia",
	"desc": "This is Hotel Marinela, a hotel in the capital city of Sofia, Bulgaria...",
	"cheapestPrice": "120"
}
```
