
build: components
	@component build --dev

components: component.json
	@component install --dev

clean:
	@rm -fr build components template.js

test: build
	@open examples/index.html


.PHONY: build clean test
