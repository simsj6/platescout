## Jenny Sims
### Assignment 8

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jYpz8rDY)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24004076&assignment_repo_type=AssignmentRepo)

## Live URLs

- **Client:** https://platescout.vercel.app
- **Server:** https://platescout-jennysims.onrender.com
- **Server health check:** https://platescout-jennysims.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

## What I learned during deployment

Deployement is a lot simpler than I expected. I thought we had to keep track of more than we do, and I expected the process to be much more involved overall. It really came down to "use GitHub to connect to these free deployment sites, make sure they're connected properly, and you're good to go". Connecting Vercel to Render was the most confusing, but I think that was just because the steps to do the connection came after trying to test that the backend worked (when the frontend didn't), so it wasn't too bad once I continued on.