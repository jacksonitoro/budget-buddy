# 💰 Budget Buddy


A full-stack personal finance application that helps users manage monthly budgets and track daily expenses.

Built as a hands-on software engineering project to demonstrate modern full-stack development, frontend architecture, REST API design, and DevOps practices using Agile development.

---

## Project Status

🟢 **Active Development**

**Current Milestone:** Sprint 9 Complete

**Current Version:** MVP 1.0

The project is developed incrementally using Agile methodology, with each sprint delivering a complete, tested, and stable vertical slice.

## Project Overview

Budget Buddy is a full-stack web application designed to help users plan monthly budgets, record daily expenses, and monitor their remaining balance in real time.

The application demonstrates the implementation of a complete frontend and backend architecture using modern web development technologies. Rather than focusing only on features, the project emphasizes software engineering principles including:

- Layered Architecture
- Separation of Concerns
- Reusable UI Components
- REST API Communication
- Incremental Agile Development
- Version Control with Git
- Continuous Refactoring

The project is being built as a portfolio-quality application that will progressively incorporate DevOps practices such as Docker, CI/CD pipelines, cloud deployment, and Kubernetes.

---

## Features

### ✅ Implemented

✅ Monthly Budget

✅ Expense Tracking

✅ Expense Categories

✅ Dashboard Summary

✅ Remaining Budget Calculation

✅ Expense History

✅ Delete Expense

✅ SQLite Persistence

✅ Dockerized Backend

✅ Dockerized Frontend

✅ Docker Compose

✅ REST API

### 🚧 Planned

- Dashboard charts and analytics
- Edit existing expenses
- Expense filtering and search
- Monthly reports
- CSV/PDF export
- User authentication
- GitHub Actions CI/CD
- Kubernetes deployment
- Cloud deployment (AWS/GCP)

---

## Technology Stack

### Frontend

- Next.js 15
- React 19
- JavaScript (ES6+)
- Tailwind CSS

### Backend

- Express.js
- Node.js

### Database

- SQLite
- SQLite3

### API

- RESTful API
- JSON

### Development Tools

- Git
- GitHub
- PyCharm/VS Code (recommended)
- npm

### Software Engineering

- Agile Development
- Feature Branch Workflow
- Component-Based Architecture
- Layered Architecture
- Reusable UI Components
- Separation of Concerns

### DevOps Stack

- Docker
- Docker Compose

### Planned
- GitHub Actions
- CI/CD Pipeline
- Kubernetes
- Nginx
- Cloud Deployment (AWS / GCP)

---

## Architecture

Budget Buddy follows a layered architecture that separates the user interface, business logic, and data storage into independent layers.

```text
                Browser
                    │
                    ▼
        Next.js Frontend (React)
                    │
            REST API (JSON)
                    │
                    ▼
          Express.js Backend
                    │
                    ▼
             SQLite Database
```

### Frontend

The frontend is built with **Next.js** and **React**, using reusable UI components and feature-based organization.

Responsibilities include:

- Rendering the user interface
- Managing component state
- Calling backend REST APIs
- Displaying dashboard statistics
- Managing forms and user interactions

---

### Backend

The backend is built with **Express.js**.

Responsibilities include:

- Processing HTTP requests
- Validating incoming data
- Business logic
- Database communication
- Returning JSON responses

---

### Database

SQLite provides lightweight persistent storage for:

- Monthly budgets
- Expense records
- Expense categories

---

### Software Design Principles

The project follows modern software engineering principles:

- Layered Architecture
- Separation of Concerns
- Single Responsibility Principle (SRP)
- Component Reusability
- Incremental Agile Development
- Vertical Slice Development
- Continuous Refactoring
- Stable Milestone Commits

---

## Project Structure

```text
budget-buddy/
│
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── expenses/
│   │   │   ├── forms/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   └── services/
│   └── public/
│
├── docs/             
├── docker-compose.yml          
├── k8s/               (Planned)
└── README.md
```

### Folder Responsibilities

| Folder | Responsibility |
|---------|----------------|
| `backend/` | REST API, business logic and database access |
| `frontend/app/` | Next.js application entry point |
| `components/dashboard/` | Dashboard-related components |
| `components/forms/` | Budget and expense forms |
| `components/expenses/` | Expense history components |
| `components/layout/` | Application layout (Header, future Footer) |
| `components/ui/` | Reusable UI components (Card, Button, Input, Select) |
| `services/` | Frontend API communication layer |

---

## Installation

### Prerequisites

Before running the project, ensure the following software is installed:

- Git
- VS Code (recommended IDE)
- Docker

---

### Quick Start (Recommended)

```bash
git clone https://github.com/jacksonitoro/budget-buddy.git

cd budget-buddy

docker compose up --build
```
---

Frontend

```text
http://localhost:3000
```

Backend

```text
http://localhost:5000
```
---

### Verify the Application

Open your browser:

```
http://localhost:3000
```

You should be able to:

- Create a monthly budget
- Add expenses
- Delete expenses
- Refresh without data loss
- View dashboard statistics
- View expense history
- Restart Docker Compose while preserving data

---

## Application Screenshots

### Dashboard

> Displays the monthly budget, total expenses, and remaining budget.

*(Screenshot coming soon)*

---

### Budget Management

> Create or update a monthly budget.

*(Screenshot coming soon)*

---

### Expense Management

> Record daily expenses using categorized entries.

*(Screenshot coming soon)*

---

### Expense History

> Displays all recorded expenses in a clean and responsive layout.

*(Screenshot coming soon)*


---

# Project Roadmap

Budget Buddy is being developed incrementally using Agile methodology. Each sprint delivers a complete, tested, and stable vertical slice.

> Every sprint follows a structured workflow consisting of planning, implementation, review, refactoring, validation, stable commits, and retrospective before moving to the next sprint.

| Sprint | Objective | Status |
|---------|-----------|:------:|
| Sprint 1 | Backend Foundation | ✅ |
| Sprint 2 | REST API Development | ✅ |
| Sprint 3 | Frontend Foundation | ✅ |
| Sprint 4 | Frontend Integration | ✅ |
| Sprint 5 | Professional User Interface | ✅ |
| Sprint 6 | Frontend Architecture & Reusable Components | ✅ |
| Sprint 7 | Professional Documentation | ✅ |
| Sprint 8 | Docker & Docker Compose | ✅ |
| Sprint 9 | Expense Deletion & Full-Stack Integration | ✅ |
| Sprint 10 | GitHub Actions CI/CD | ⏳ |
| Sprint 11 | Cloud Deployment | ⏳ |
| Sprint 12 | Kubernetes | ⏳ |
| Sprint 13 | Monitoring & Observability  | ⏳ |


## Engineering Milestones

Each milestone represents a complete, tested, and stable vertical slice before moving to the next phase of development.

### Sprint 8
- Dockerized backend
- Dockerized frontend
- Docker Compose orchestration
- Persistent SQLite storage

### Sprint 9
- Added full-stack expense deletion
- Integrated frontend and backend changes
- Performed regression testing
- Validated persistence after container restart


### Long-Term Vision

The goal of Budget Buddy extends beyond building a budgeting application.

The project serves as a practical software engineering portfolio that demonstrates the complete software development lifecycle, including:

- Software Architecture
- Full-Stack Development
- REST API Design
- Database Design
- Git Workflow
- Agile Development
- Docker Containerization
- CI/CD Automation
- Kubernetes Orchestration
- Cloud Deployment
- Monitoring and Observability
- Continuous Improvement

---

# Software Engineering Process

Budget Buddy is developed using an iterative Agile workflow that emphasizes incremental delivery, continuous validation, and stable milestones.

## Development Workflow

```text
Vision
    ↓
Architecture
    ↓
Sprint Planning
    ↓
Vertical Slice Development
    ↓
Review
    ↓
Refactor
    ↓
Validation
    ↓
Commit
    ↓
Push
    ↓
Sprint Retrospective
```

Each sprint delivers a complete and tested feature before moving to the next iteration.

---

## Engineering Principles

The project follows the following software engineering principles:

- Architecture Before Features
- Domain-Driven Thinking
- Separation of Concerns
- Single Responsibility Principle (SRP)
- Layered Architecture
- Build Vertical Slices
- Incremental Development
- Test Every Layer
- Commit Stable Milestones
- Evidence-Based Debugging
- Clean Architecture Mindset
- Continuous Validation
- Continuous Improvement

---

## Git Workflow

Development follows a feature branch workflow.

```text
main
 │
 ├── feature/backend-foundation
 ├── feature/fullstack-foundation
 ├── feature/docker
 ├── feature/ci-cd
 └── feature/kubernetes
```

Each completed vertical slice is:

- Reviewed
- Verified
- Committed
- Pushed

before the next feature begins.

---

# Learning Outcomes

Budget Buddy is designed as more than a budgeting application.

It serves as a hands-on software engineering project that demonstrates the complete lifecycle of designing, developing, deploying, and continuously improving a modern full-stack application.

By studying or reproducing this project, learners can gain practical experience in:

## Software Engineering

- Requirements Analysis
- Software Architecture
- Layered Architecture
- Component-Based Design
- Separation of Concerns
- Single Responsibility Principle (SRP)
- Agile Development
- Sprint Planning
- Vertical Slice Development
- Incremental Refactoring
- Git Workflow
- Professional Project Documentation

---

## Frontend Development

- Next.js App Router
- React Components
- React Hooks
- State Management
- Component Communication
- Reusable UI Components
- Responsive Layout Design
- Tailwind CSS

---

## Backend Development

- Express.js
- REST API Design
- Routing
- Controllers
- Services
- Database Integration
- JSON Communication
- Error Handling

---

## Database

- SQLite
- Database Design
- CRUD Operations

---

## DevOps (Upcoming Sprints)

The project roadmap also demonstrates practical DevOps skills, including:

- Docker
- Docker Compose
- GitHub Actions
- CI/CD Pipelines
- Kubernetes
- Cloud Deployment
- Monitoring
- Testing

---

# Learning Path

This repository is intentionally organized so that learners can reproduce the project by following the same engineering process used during development.

Recommended learning sequence:

1. Understand the project architecture.
2. Study the backend implementation.
3. Build the REST API.
4. Develop the frontend one feature at a time.
5. Refactor into reusable components.
6. Containerize the application using Docker.
7. Build a CI/CD pipeline.
8. Deploy to the cloud.
9. Deploy with Kubernetes.
10. Add monitoring and automated testing.

Each stage builds on the previous one, mirroring the incremental Agile workflow used throughout this project.

---

## Who This Project Is For

This project is suitable for:

- Computer Science students
- Software Engineering students
- Self-taught developers
- Frontend developers
- Backend developers
- Full-Stack developers
- DevOps engineers
- Cloud engineers
- Digital Technology students

It is intended as a practical learning resource and portfolio project that demonstrates both technical implementation and disciplined software engineering practices.
