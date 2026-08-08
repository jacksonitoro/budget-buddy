# Sprint Log

---

# Sprint 8 — Docker Compose & Full-Stack Containerization

## Objective

Containerize the complete Budget Buddy application and ensure both the frontend and backend can run together using Docker Compose.

## Completed

- ✅ Backend Dockerfile
- ✅ Frontend Dockerfile
- ✅ Docker Compose configuration
- ✅ Backend and frontend network communication
- ✅ SQLite persistent storage using Docker volumes
- ✅ Environment variable configuration
- ✅ Production container builds
- ✅ Full application startup using a single command (`docker compose up`)
- ✅ Verified persistence after container restart

## Validation

Successfully verified:

- Budget creation
- Expense creation
- Dashboard updates
- Expense history persistence
- Container restart (`docker compose down` / `docker compose up`)
- SQLite database persistence

## Lessons Learned

- Developing inside OneDrive can create file synchronization problems.
- Docker build cache can consume several gigabytes and should be cleaned regularly.
- Production builds often expose issues hidden during local development.
- Root-cause analysis is more valuable than applying temporary fixes.
- Docker Compose simplifies running multi-container applications.

## Outcome

The application can now be started consistently on any machine using Docker Compose.

---

# Sprint 9 — Feature Enhancement & Documentation

## Objective

Extend the application with additional functionality while maintaining a stable architecture.

## Completed

- ✅ Expense deletion feature
- ✅ Backend DELETE endpoint
- ✅ Frontend delete integration
- ✅ Automatic UI refresh after deletion
- ✅ README restructuring
- ✅ Documentation improvements

## Validation

Successfully verified:

- Expense creation
- Expense deletion
- Browser refresh persistence
- Docker restart persistence
- Dashboard recalculation

## Lessons Learned

- Small vertical slices reduce integration risk.
- New features can be added safely when architecture responsibilities are clearly separated.
- Stable commits after every completed slice make debugging significantly easier.

## Outcome

The application now supports complete expense lifecycle management (Create, Read and Delete).

---

# Sprint 10 — Continuous Integration

## Objective

Automate project validation using GitHub Actions.

## Completed

- ✅ GitHub Actions workflow
- ✅ Automatic build on every push
- ✅ Backend dependency installation
- ✅ Frontend production build
- ✅ Backend Docker image validation
- ✅ Frontend Docker image validation

## Validation

GitHub-hosted Ubuntu runner successfully:

- Installed project dependencies
- Built the backend
- Built the frontend
- Built both production Docker images

All workflow steps completed successfully.

## Lessons Learned

- Continuous Integration validates every commit before deployment.
- CI should verify deployment artifacts, not only application source code.
- Docker image validation catches deployment issues early.
- Automated validation increases confidence in future development.

## Outcome

Every push to the repository is now automatically validated through GitHub Actions before future deployment work.

---

# Next Sprint

## Sprint 10 — Next Vertical Slice

- Docker Compose validation inside GitHub Actions
- Automated application startup
- Backend health checks
- Frontend availability checks
- Automatic container shutdown after validation

## Evidence

- Git commit:
  Sprint 10: validate Docker image builds in CI

- GitHub Actions:
  Workflow #2 passed successfully

- Docker:
  Backend image built successfully

- Docker:
  Frontend image built successfully