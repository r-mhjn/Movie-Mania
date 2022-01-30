docker-build:
	docker-compose up --build --no-start
start-app: docker-build
	docker-compose start app 
restart-app: docker-build
	docker-compose restart app
stop-app:
	docker-compose stop app