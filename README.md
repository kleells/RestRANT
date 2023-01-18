# Project REST-Rant

REST-Rant is an app where users can review restaurants.

ROUTES
| Complete | Method    | Path                      |  Purpose                |
| -------- | --------- | ------------------------- | ----------------------- |
|     Y    | GET       | /                         | Home page               |
|          | GET       | /places                   | Places index page       |
|          | POST      | /places                   | Create a new place      |
|          | GET       | /places/new               | Form for adding place   |
|          | GET       | /places/:id               | Details about a place   |
|          | PUT       | /places/:id               | Update a place          |
|          | GET       | /places/:id/edit          | Form to edit a place    |
|          | DELETE    | /places/:id               | Delete a place          |
|          | POST      | /places/:id/rant          | Create a comment        |
|          | DELETE    | /places/:id/rant/:rantId  | Delete a comment        |
|     Y    | GET       |          *                | 404 page/wildcard route |