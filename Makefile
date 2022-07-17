help:
	cat Makefile

test:
	nbdoc_test
	npm run build

watch:
	watchmedo shell-command --command nbdoc_build --pattern="*.ipynb" --recursive --drop

docs: .FORCE
	npm run start

nb: .FORCE
	jupyter lab

update: .FORCE
	nbdoc_update
	nbdoc_build

install: .FORCE
	npm install -g npm@">=8.14.0"
	pip install -Ur requirements.txt
	jupyter labextension install @jupyterlab/vega5-extension

.FORCE:
