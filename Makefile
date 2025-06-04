.PHONY: show-help
help: show-help

VERSION=0.0.1
BUILD=`date +%FT%T%z`
GIT_HASH=`git rev-parse HEAD`
DOCKER_TAG_VERSION=$(shell date +"%Y-%m-%d_%H.%M.%S")

EXEC_SERVER=server

BUILD_DIR=build
BUILD_CMD_DIR=$(BUILD_DIR)/cmd

CMD_MKDIR=mkdir -p
CMD_RM=rm -rf
CMD_GO=go
CMD_CD=cd

LDFLAGS=-ldflags "-X main.Version=$(VERSION) -X main.Build=$(BUILD) -X main.GitHash=$(GIT_HASH)"

###
### run start
###
.PHONY: start
start:
	npm start

##
## build targets
##

.PHONY: build
build: export BUILD_PATH = $(BUILD_DIR)/dist
build: directories
	npm run-script build

.PHONY: directories
directories:
	$(CMD_MKDIR) $(BUILD_CMD_DIR)

.PHONY: clean
clean:
	$(CMD_RM) $(BUILD_DIR)

##
## docker
##
.PHONY: docker
docker: export BUILD_PATH = $(BUILD_DIR)/dist
docker: export NODE_ENV = development
docker: clean
	npm install
	npm run-script build
	#npm run-script build:docker
	#npm run-script build:docker && mv build dist
	#@$(CMD_MKDIR) build
	#mv dist build
	@echo "Git Hash: $(GIT_HASH)" > ./build/container_info.txt
	@echo "Build Date: $(BUILD)" >> ./build/container_info.txt
	@echo "Version: $(VERSION)" >> ./build/container_info.txt
	#
	cp -a deploy/Dockerfile ./build/
	cp -a deploy/nginx.conf ./build/
	cp -a deploy/health_check.html ./build/dist
	#cp -a landing/* ./build/dist
	#
	docker build -t about-ui:latest build

##
## alpha
##
.PHONY: alpha
alpha: export BUILD_PATH = $(BUILD_DIR)/dist
alpha: export NODE_ENV = alpha
alpha: clean
	npm install
	npm run-script build:alpha
	#npm run-script build:alpha && mv build dist
	#@$(CMD_MKDIR) build
	#mv dist build
	@echo "Git Hash: $(GIT_HASH)" > ./build/container_info.txt
	@echo "Build Date: $(BUILD)" >> ./build/container_info.txt
	@echo "Version: $(VERSION)" >> ./build/container_info.txt
	#
	cp -a deploy/Dockerfile ./build/
	cp -a deploy/nginx.conf ./build/
	cp -a deploy/health_check.html ./build/dist
	#cp -a landing/* ./build/dist
	#
	docker build -t about-ui:latest build
	docker tag about-ui:latest 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:alpha
	docker tag about-ui:latest 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:alpha-$(DOCKER_TAG_VERSION)
	docker push 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:alpha
	docker push 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:alpha-$(DOCKER_TAG_VERSION)

##
## beta
##
.PHONY: beta
beta: export BUILD_PATH = $(BUILD_DIR)/dist
beta: export NODE_ENV = beta
beta: clean
	npm install
	npm run-script build:beta
	# npm run-script build:beta && mv build dist
	# @$(CMD_MKDIR) build
	# mv dist build
	@echo "Git Hash: $(GIT_HASH)" > ./build/container_info.txt
	@echo "Build Date: $(BUILD)" >> ./build/container_info.txt
	@echo "Version: $(VERSION)" >> ./build/container_info.txt
	#
	cp -a deploy/Dockerfile ./build/
	cp -a deploy/nginx.conf ./build/
	cp -a deploy/health_check.html ./build/dist
	#cp -a landing/* ./build/dist
	#
	docker build -t about-ui:latest build
	docker tag about-ui:latest 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:beta
	docker tag about-ui:latest 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:beta-$(DOCKER_TAG_VERSION)
	docker push 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:beta
	docker push 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:beta-$(DOCKER_TAG_VERSION)

##
## prod
##
.PHONY: prod
prod: export BUILD_PATH = $(BUILD_DIR)/dist
prod: export NODE_ENV = production
prod: clean
	npm install
	npm run-script build:prod
	#npm run-script build:prod && mv build dist
	#@$(CMD_MKDIR) build
	#mv dist build
	@echo "Git Hash: $(GIT_HASH)" > ./build/container_info.txt
	@echo "Build Date: $(BUILD)" >> ./build/container_info.txt
	@echo "Version: $(VERSION)" >> ./build/container_info.txt
	#
	cp -a deploy/Dockerfile ./build/
	cp -a deploy/nginx.conf ./build/nginx.conf
	cp -a deploy/health_check.html ./build/dist
	#cp -a landing/* ./build/dist
	#
	docker build -t about-ui:latest build
	docker tag about-ui:latest 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:stable
	docker tag about-ui:latest 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:stable-$(DOCKER_TAG_VERSION)
	docker push 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:stable
	docker push 846905504112.dkr.ecr.us-east-1.amazonaws.com/about-ui:stable-$(DOCKER_TAG_VERSION)

##
## help
##
.PHONY: show-help
show-help:
	@echo "============================================================================================="
	@echo " targets:"
	@echo "   start:        run server"
	@echo "   build:        build server"
	@echo " "
	@echo "============================================================================================="
