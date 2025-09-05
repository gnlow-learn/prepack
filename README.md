# prepack

## 실패
```
$ deno run -A mod.ts
undefined
No sourcemap found at a.js.map.
error: Uncaught (in promise) TypeError: r is not a function
    at https://esm.sh/prepack@0.2.54/denonext/prepack.mjs:2126:32699
    at ext:deno_node/_fs/_fs_readFile.ts:46:21
    at eventLoopTick (ext:core/01_core.js:179:7)
```
