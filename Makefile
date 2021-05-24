.PHONY: help
help:
	@echo "build - run 'npm run create'"
	@echo "clean - remove node modules and package-lock.json"
	@echo "scss  - start a watcher to automatically compile scss to css"
	@echo "start - run 'npm start'"

.PHONY: build
build:
	npm run create
	npm i --package-lock-only

.PHONY: clean
clean:
	rm -rf /node_modules
	rm -rf package-lock.json

.PHONY: scss
scss:
	npm run scss

.PHONY: start
start:
	npm start
	@echo "please navigate to localhost:8080 on your favorite browser"