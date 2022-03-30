import Database from '@replit/database';
import getReplitUrl from "../Server/get-replit-url.js";

const dbUrl = await getReplitUrl();

export default new Database(dbUrl)