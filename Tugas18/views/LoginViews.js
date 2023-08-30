import { unlock } from "../models/Login.js";
import { barrier } from "../university.js";

export function salam(data) {
    barrier()
    console.log(`Welcome, ${data.username}. Your access level is : ${data.role.toUpperCase()}`)
}