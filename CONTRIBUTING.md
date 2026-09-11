# Contributing to AutoApply AI

Thank you for your interest in contributing to AutoApply AI! This project is maintained by **Vishnu (vvishnukv)** with assistance from **Claude (Anthropic)**.

## How to Contribute

### Reporting Issues

- Search existing issues first to avoid duplicates
- Use the issue template when creating a new issue
- Provide clear steps to reproduce the problem
- Include relevant logs, screenshots, and environment details

### Submitting Pull Requests

1. **Fork the repository** and create a feature branch
2. **Follow the coding standards** (see [CLAUDE.md](CLAUDE.md))
3. **Write tests** for new functionality
4. **Run linting and tests** before submitting:
   ```bash
   # Backend
   cd backend
   ruff check app/
   ruff format app/
   pytest tests/ -v

   # Frontend
   cd frontend
   npm run lint
   npm run typecheck
   ```
5. **Update documentation** if needed
6. **Submit a PR** with a clear description of changes

### Code Style

- **Python**: async-first, structlog, Pydantic v2, SQLAlchemy 2.0 Mapped[] annotations
- **TypeScript**: strict mode, no `any`, React Query for server state, Zustand for UI state
- Max 300 lines per file
- Naming: snake_case (Python), PascalCase components / camelCase hooks (TypeScript)

### Development Setup

See [README.md](README.md#quick-start) for Docker and local development instructions.

## Project Ownership

- **Author & Maintainer**: Vishnu (vvishnukv) - [GitHub](https://github.com/vvishnukv)
- **Contributor**: Claude (Anthropic AI Assistant)

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).