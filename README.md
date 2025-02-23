
# HMC Code Assistant

A sophisticated coding assistant built with NestJS, utilizing OLLAMA for AI-powered code analysis and RAG (Retrieval-Augmented Generation) system for enhanced code understanding and generation capabilities.

## Overview

This project implements a modern coding assistant that combines the power of AI and traditional code analysis to provide developers with intelligent assistance during their development workflow. The system leverages OLLAMA's advanced language model capabilities and integrates with a RAG system to provide contextual and accurate code suggestions.

## Architecture

The system consists of three main components:

1. **NestJS Backend**
   - Handles API routing and request processing
   - Manages user interactions and state
   - Coordinates between OLLAMA and RAG systems

2. **OLLLAMA Integration**
   - Provides AI-powered code analysis
   - Generates contextual suggestions
   - Handles code understanding and explanation

3. **RAG System**
   - Enables retrieval-augmented code generation
   - Provides contextual code completions
   - Maintains knowledge base of code patterns

## Features

- AI-powered code analysis and suggestions
- Context-aware code completion
- Real-time code understanding
- Integration with popular IDEs
- Docker-based development environment
- GitHub Codespaces support

## Prerequisites

- Node.js 21+
- Docker
- Docker Compose
- GitHub Codespaces (optional)

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hmc-codeAssistant.git
   cd hmc-codeAssistant
   ```

2. Start the development environment:
   ```bash
   docker-compose up --build
   ```

3. Access the services:
    - Backend: http://localhost:3000
    - OLLAMA: http://localhost:7869

## Environment Configuration

Create a `.env` file in the project root with the following variables:

```makefile
OLLAMA_URL=http://ollama:7869
DB_URL=postgresql://user:password@bd:5432/database
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database
```

## GitHub Codespaces Configuration

The project includes a dev container configuration for seamless development in GitHub Codespaces. To use:

1. Open the repository in GitHub
2. Click the "Code" button
3. Select "Codespaces"
4. Click "New codespace"
5. Wait for the environment to provision

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Run tests
5. Submit a pull request

## License

[Your License]

## Acknowledgments

This project utilizes:
- [NestJS](https://nestjs.com/) for the backend framework
- [OLLLAMA](https://github.com/ollama-dev/ollama) for AI-powered code analysis
- [RAG System](https://www.rag-system.com/) for retrieval-augmented generation

## API Documentation

API documentation is available at [http://localhost:3000/api](http://localhost:3000/api) once the server is running.
```

