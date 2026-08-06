Problem 001

sqlite3 GLIBC mismatch

Cause

Binary compiled against incompatible glibc.

Resolution

Rebuilt in Docker environment.

Rebuild dependency inside the container.

Problem  002

TLS handshake timeout

Resolution

Pulled base image manually and retried build.