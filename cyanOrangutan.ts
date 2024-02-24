import { PGlite } from "import { PGlite } from "npm:@electric-sql/pglite"";

const db = new PGlite()
await db.query("select 'Hello world' as message;")
