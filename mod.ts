import { Prepack } from "./deps/prepack.js"

console.log(Prepack.prepackSources([
    {
        fileContents: `console.log("hi")`
    }
]).code)
