# CST-391 MCP – My Christian Playlist

This repository is a **monorepo** for the *My Christian Playlist (MCP)* application, developed for **CST-391 – JavaScript Web Application Development**.

The project is split into two main parts: a backend API and a frontend web application.

---

## Repository Structure

CST-391_MCP/
├── MCP-API/ # Backend REST API (Node.js / Express / TypeScript)
├── MCP-APP/ # Frontend Angular application
└── .gitignore

---

## MCP-API (Backend)

The backend API handles:
- Songs
- Albums
- Themes
- Database access and validation

**Tech stack:**
- Node.js
- Express
- TypeScript
- MySQL

See `MCP-API/README.md` for setup and run instructions.

---

## MCP-APP (Frontend)

The frontend application provides:
- Song browsing and creation
- Album and theme display
- REST API integration with MCP-API

**Tech stack:**
- Angular
- TypeScript
- HTML / CSS

See `MCP-APP/README.md` for setup and run instructions.

---

## Notes

- Each project can be developed and run independently.
- This monorepo structure keeps frontend and backend logically separated while sharing a single Git history.
