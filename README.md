# Project REST-Rant

## TECH USED
- **CSS Framework:** Bootstrap
- **Stack:** MongoDB, Express, NodeJS
- **Server-Side Rendering:** JSX
- **Node Modules:** method-override, dotenv, express-react-views

REST-Rant is an app where users can review restaurants.

## ROUTES
| Complete | Method    | Path                      |  Purpose                |
| -------- | --------- | ------------------------- | ----------------------- |
|  Y       |  GET       | /                         | Home page              |
|  Y       | GET       | /places                   | Places index page       |
|  Y       | POST      | /places                   | Create a new place      |
|  Y       | GET       | /places/new               | Form for adding place   |
|          | GET       | /places/:id               | Details about a place   |
|          | PUT       | /places/:id               | Update a place          |
|          | GET       | /places/:id/edit          | Form to edit a place    |
|          | DELETE    | /places/:id               | Delete a place          |
|          | POST      | /places/:id/rant          | Create a comment        |
|          | DELETE    | /places/:id/rant/:rantId  | Delete a comment        |
|     Y    | GET       |          *                | 404 page/wildcard route |

## FUTURE TASKS
 - [ ] finalize README
 - [ ] remove blue underline from links
 - [ ] add space between button and image on error404 page and Places page
 - [ ] Add Footer
 - [ ] list of package.json dependencies