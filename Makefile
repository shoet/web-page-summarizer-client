.DEFAULT_GOAL := help

.PHONY: build
build: ## Build SPA and Go server
	npm run build && go build -o bin/server main.go

.PHONY: deploy
deploy: ## Deploy SPA and Go server by Serverless
	sls deploy --verbose

.PHONY: help
help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
