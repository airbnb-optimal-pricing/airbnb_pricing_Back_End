# airbnb_pricing_Back_End
Back End Repo

# Virtual Reality Funding Platform

## Table of Contents

- [Dummy Data](#dummy-data)      
- [Auth Routes](#auth-routes)
  * [Register](#register)    
  * [Login](#login)    
- [User Routes](#user-routes)
  * [Get Users](#get-users)    
  * [Get User](#get-user)
  * [Get Projects by User ID](#get-projects-by-user-id)
  * [Delete User](#delete-user)
  * [Update User](#update-user)
- [Project Routes](#project-routes)
  * [Create Project](#create-project)    
  * [Get Projects](#get-projects)    
  * [Get Projects](#get-projects-1)    
  * [Update Project](#update-project)    
  * [Delete Project](#delete-project)
    

## API Documentation

### Dummy Data

#### Test users with projects

```
Users: [
  {
    "id": 1,
    "username": "admin",
    "password": "password"
    "name": "Leonel, Gabriel, and Mateo",
    "about": "We are a team of drone hobbyists.",
    "projects": [
      {
        "id": 1, 
        "projectName": "Drone Fanatics",
        "projectType": "Robotics",
        "description": "We would like to expand our photography drone creation and repair hobby into a business.",
        "fundingAmount": 5000.00,
        "user_id": 1, 
      }
    ]
  },
  {
    "id": 2, 
    "username": "admin2",
    "password": "password",
    "name": "Jayla",
    "about": "I created a small 3D printing business.",
    "projects": [
      {
        "id": 2, 
        "projectName": "Jayla's Trinkets",
        "projectType": "3D Printing",
        "description": "I currently run my business with one 3D printer. I would like to expand to four printers so I can increase my productivity and sales.",
        "fundingAmount": 15000.00,
        "user_id": 2,
      },
    ]
  },
  {
    "id": 3, 
    "username": "admin3",
    "password": "password",
    "name": "Aaliyah and Trinity",
    "about": "We are working to create drought resistance crops.",
    "projects": [
      {
        "id": 3, 
        "projectName": "Genexis Lab",
        "projectType": "Biotechnology",
        "description": "We currently have a small lab where we are working on creating drought resistant crops. We are in need of some new equipment and supplies.",
        "fundingAmount": 10000.00,
        "user_id": 3,
      },
    ]
  }
]
```

# Auth Routes
| Table | Method |       Endpoint |                      Description |
| ----- | :----: | -------------: | -------------------------------: |
| users |  POST  | /auth/register |            Registers a new user. |
| users |  POST  | /auth/login    | Logs in already registered user. |

## Register

### Registers a new user.

_Method URL:_ `/auth/register`

_HTTP Method:_ **[POST]**

#### Request Body 
| Name       |  Type  | Required |     Description |
| ---------  | :----: | -------: | --------------: |
| `username` | String |      Yes | Must be unique. |
| `password` | String |      Yes |                 |
| `name`     | String |      Yes |                 |
| `about`    | Text   |      Yes |                 |

#### Examples

```
{
  "username": "vrproject",
  "password": "ilovemoney",
  "name": "John",
  "about": "Tech developer"
}

```

#### Response

##### 201 (Created)

> If you successfully register a user, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing a username or password, the endpoint will return an HTTP response with a status code of `400`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Login

### Logs in an already registered user.

_Method URL:_ `/auth/login`

_HTTP Method:_ **[POST]**

#### Request Body

| Name       |  Type  |                                                Description |
| ---------- | :----: | ---------------------------------------------------------: |
| `username` | String |                           Must match username in database. |
| `password` | String | Must match password to corresponding username in database. |

#### Example

```
{
  "username": "vrproject",
  "password": "ilovemoney"
}
```

#### Response

```
{
  "name": "John",
  "about": "Tech developer"
}

##### 200 (OK)

> If you successfully log in, the endpoint will return an HTTP response with a status code `200`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# User Routes

## Get Users

### Gets a list of users.

_Method URL:_ `/users/`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If users are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If users are not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get User

### Gets user by ID.

_Method URL:_ `/users/:id`

_HTTP Method:_ **[GET]**

#### Return



#### Response

##### 200 (OK)

> If user with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Projects by User ID

### Gets all projects for specified user.

_Method URL:_ `/users/:id/projects`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If user with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete User

### Deletes user by ID.

_Method URL:_ `/users/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If user with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update User

### Updates user by ID.

_Method URL:_ `/users/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name       |  Type  | Required |     Description |
| ---------  | :----: | -------: | --------------: |
| `username` | String |      Yes | Must be unique. |
| `password` | String |      Yes |                 |
| `name`     | String |      Yes |                 |
| `about`    | Text   |      Yes |                 |

#### Example

```
{
  "username": "vrproject",
  "password": "ilovemoney",
  "name": "John",
  "about": "Tech developer"
}
```

#### Response

##### 200 (OK)

> If user with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# Project Routes

## Create Project

### Creates a project, with a project type, description, funding amount, and user id.

_Method URL:_ `/projects`

_HTTP Method:_ **[POST]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name             |  Type   | Required | Description |
| ---------------- | :-----: | -------: | ----------: |
| `projectName`    | String  |      Yes |             |
| `projectType`    | String  |      Yes |             |
| `description`    | String  |      Yes |             |
| `fundingAmount`  | Decimal |      Yes |             |
| `user_id`        | Integer |      Yes |             |

#### Example

```
{
  "projectName": "Test project 1",
  "projectType": "Tech",
  "description": "Small tech business test project 1",
  "fundingAmount": 5000.00,
  "user_id": 1, 
}
```

#### Response

##### 201 (Created)

> If project is created, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing any project information, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Projects

### Gets a list of projects.

_Method URL:_ `/projects`

_HTTP Method:_ **[GET]**

#### Headers

No headers needed. `/projects` is not a protected path.

#### Response

##### 200 (OK)

> If projects are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If projects are not found, the endpoint will return an HTTP response with a status code `404`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Get Projects

### Gets project by ID.

_Method URL:_ `/projects/:id`

_HTTP Method:_ **[GET]**

#### Headers

No headers needed. `/projects/:id` is not a protected path.

#### Response

##### 200 (OK)

> If project with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If project with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Update Project

### Updates project by ID.

_Method URL:_ `/projects/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name             |  Type   | Required | Description |
| ---------------- | :-----: | -------: | ----------: |
| `projectName`    | String  |      Yes |             |
| `projectType`    | String  |      Yes |             |
| `description`    | String  |      Yes |             |
| `fundingAmount`  | Decimal |      Yes |             |
| `user_id`        | Integer |      Yes |             |

#### Example

```
{
  "projectName": "Test project 1",
  "projectType": "Tech",
  "description": "Small tech business test project 1",
  "fundingAmount": 5000.00,
  "user_id": 1, 
}
```

#### Response

##### 200 (OK)

> If project with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If project with specified ID is not found and updated, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Delete Project

### Deletes project by ID.

_Method URL:_ `/projects/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If project with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If project with specified ID is not found and deleted, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.