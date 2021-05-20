.PHONY: help
help:
	@echo "build - run 'npm run create'"
	@echo "clean - remove node modules and package-lock.json"
	@echo "start - run 'npm start'"

.PHONY: build
build:
	npm run create
	npm i --package-lock-only

.PHONY: clean
clean:
	rm -rf /node_modules
	rm -rf package-lock.json

.PHONY: start
start:
	npm start