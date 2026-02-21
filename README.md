# CST-391 MCP – My Christian Playlist

This repository is a monorepo for the **My Christian Playlist (MCP)** application, developed for **CST-391 – JavaScript Web Application Development**.

The application demonstrates full-stack web development using a REST API backend and two separate frontend clients built with different JavaScript frameworks.

---

## Repository Structure

```
CST-391_MCP/
├── MCP-API/        # Backend REST API (Node.js / Express / TypeScript)
├── MCP-APP/        # Angular frontend application
├── MCP-REACT/      # React frontend application
└── .gitignore
```

---

## MCP-API (Backend)

The backend REST API provides structured access to application data and supports full CRUD operations.

### Core Resources

* Songs
* Albums
* Themes
* Artists (Added during Milestone refinements)

### Responsibilities

* Database access and validation
* RESTful routing (GET, POST, PUT, DELETE)
* Server-side filtering and search
* Data integrity enforcement (Song–Album relationship)

### Tech Stack

* Node.js
* Express
* TypeScript
* MySQL

See `MCP-API/README.md` for setup and run instructions.

---

## MCP-APP (Frontend – Angular)

The Angular application was developed to demonstrate structured, component-based front-end architecture integrated with the REST API.

### Features

* Song browsing and creation
* Album display and management
* Theme classification
* REST API integration

### Tech Stack

* Angular
* TypeScript
* HTML / CSS
* Bootstrap

See `MCP-APP/README.md` for setup and run instructions.

---

## MCP-REACT (Frontend – React)

The React application provides equivalent functionality using a modern functional component architecture with hooks.

### Features

* Album creation and editing (controlled components)
* REST API integration
* Routing with React Router
* State management using hooks
* Responsive layout using Bootstrap

### Notes on Implementation

* Advanced client-side filtering is not fully implemented (basic universal search only).
* Strict mobile-first methodology was not applied, though the application is responsive.
* The Artist table was introduced in later refinements to improve relational clarity.

### Tech Stack

* React
* JavaScript (ES6+)
* React Router
* Axios
* Bootstrap

See `MCP-REACT/README.md` for setup and run instructions.

---

## Design Philosophy

This project emphasizes:

* Separation of concerns (API vs. UI layers)
* RESTful architecture
* Reusable component-based frontend design
* Clear relational database modeling
* Independent frontend clients consuming a shared backend

---

## Development Notes

* Each project (API, Angular app, React app) can be developed and run independently.
* The monorepo structure maintains logical separation while preserving a unified Git history.
* The backend must be running before either frontend client can successfully retrieve or modify data.

---

If you'd like, I can also create updated sub-README files for **MCP-API**, **MCP-APP**, and **MCP-REACT** so everything is consistent and professionally structured.
