import { Pool } from "pg";

const connectionString = 'postgres://pzqyfhji:rlzXVrklVFIP4T4VKbfa-Gqg3S7ofdHu@kesavan.db.elephantsql.com/pzqyfhji';

const db = new Pool({ connectionString });

export default db;