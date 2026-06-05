# Week 2 Express Profile API

A simple Node.js Express server that manages a small in-memory list of user profiles. The API supports retrieving existing profiles, adding new profiles, and deleting profiles by ID.

## What this project does

- Serves a JSON API using Express
- Stores profile data in memory while the server is running
- Provides endpoints for:
  - listing profiles
  - creating new profiles
  - deleting a profile by ID

## Getting started

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run dev
```

This starts the server on `http://localhost:5000`.

## API endpoints

### GET /api/profiles

Returns the current list of profiles.

Example response:

```json
[
  {
    "id": 1,
    "name": "Anshuman",
    "role": "Developer"
  }
]
```

### POST /api/profiles

Creates a new profile.

Request body:

```json
{
  "name": "Jane Doe",
  "role": "Designer"
}
```

Successful response:

```json
{
  "id": 2,
  "name": "Jane Doe",
  "role": "Designer"
}
```

### DELETE /api/profiles/:id

Deletes a profile by its numeric ID.

Example:

```bash
DELETE /api/profiles/1
```

Response:

```json
{
  "message": "Profile deleted successfully"
}
```

## Notes

- Data is stored in memory, so it resets when the server restarts.
- The project uses `nodemon` for development to automatically restart the server when `server.js` changes.
- The Express app listens on port `5000`.