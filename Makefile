.PHONY: help build-dev build-prod run-dev run-prod stop clean logs shell test

# Default target
help:
	@echo "Available commands:"
	@echo "  make build-dev    - Build development Docker image"
	@echo "  make build-prod   - Build production Docker image"
	@echo "  make run-dev      - Run development server with hot reload"
	@echo "  make run-prod     - Run production server"
	@echo "  make stop         - Stop all running containers"
	@echo "  make clean        - Remove containers and images"
	@echo "  make logs         - Show container logs"
	@echo "  make shell        - Open shell in development container"
	@echo "  make test         - Run tests in container"

# Build development image
build-dev:
	docker-compose --profile dev build hooks-demo-dev

# Build production image
build-prod:
	docker-compose --profile prod build hooks-demo-prod

# Run development server
run-dev:
	docker-compose --profile dev up hooks-demo-dev

# Run production server
run-prod:
	docker-compose --profile prod up -d hooks-demo-prod

# Stop containers
stop:
	docker-compose down

# Clean up containers and images
clean:
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -f

# Show logs
logs:
	docker-compose logs -f

# Open shell in development container
shell:
	docker-compose --profile dev exec hooks-demo-dev sh

# Run tests
test:
	docker-compose --profile dev run --rm hooks-demo-dev npm test

# Install dependencies
install:
	docker-compose --profile dev run --rm hooks-demo-dev npm install

# Build for production locally
build:
	docker-compose --profile dev run --rm hooks-demo-dev npm run build
