# node circular dependencies issue ??

```bash
pnpm install
pnpm build
node swc-dist/index.js
```

outputs:

```txt
/~/workspace/xxx/swc-dist/index.js:13
	return _base.default;
				^
TypeError: Cannot read properties of undefined (reading 'default')
	at ...
```
