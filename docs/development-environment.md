# Budget Buddy Development Environment

## Purpose

This document describes the local development environment required to build,
run, and maintain the Budget Buddy project.

---

# Development Workspace

Project Location

C:\Dev\budget-buddy

Reason

- Avoid OneDrive file locking
- Improve Docker performance
- Prevent node_modules synchronization issues

---

# Required Software

| Software | Version |
|----------|----------|
| Git | latest |
| Docker Desktop | 28.x |
| Node.js | v22.x (host) |
| npm | v10.x |
| VS Code | latest |

---

# Project Structure

budget-buddy/
├── backend/
├── frontend/
├── docs/
└── README.md

---

# Docker Images

Backend

budget-buddy-backend

Frontend

budget-buddy-frontend

---

# Useful Commands

Start frontend

npm run dev

Backend

npm start

Build backend image

docker build -t budget-buddy-backend:v1 .

Build frontend image

docker build -t budget-buddy-frontend:v1 .

Docker Compose

docker compose up --build

---

# Docker Maintenance

Inspect

docker system df

List images

docker images

List containers

docker ps -a

List volumes

docker volume ls

Cleanup

docker container prune

docker image prune -a

docker builder prune -a

---

# Troubleshooting

## Docker Build

- Verify Docker Desktop is running.
- Check internet connectivity.
- Verify node:20-bookworm-slim can be pulled.

## OneDrive

Do not develop inside OneDrive.

Always work from

C:\Dev\budget-buddy

---

# Engineering Principles

- Architecture before features
- Build vertical slices
- Commit stable milestones
- Evidence-based debugging
- Infrastructure maintenance
- Continuous validation

---

Last Updated

Sprint 8