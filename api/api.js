import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
var qs = require("qs");
import { devapi, projectapi } from "./currentapi";
const api = axios.create({ baseURL: devapi }, {
    headers: {
        "Content-Type": "application/json",
    },
});


export async function deleteStudentContact(student_contact_id) {
    try {
        const res = await api.delete(
            `/student/studentcontact/${student_contact_id}`
        );
        return res;
    } catch (err) {}
}



export async function updateLatLong(lat, long, student_id) {
    try {
        const res = await api.put(`/student/latlong/${lat}/${long}/${student_id}`);
        return res;
    } catch (err) {}
}





export async function createTacker(student_id, token_id) {
    var data = {
        student_id: student_id,
        token_id: token_id
    }
    try {
        let res = await api.post(`/messaging`, data);
        return res
    } catch (err) {}


}

export async function getTokenID(student_id) {
    let res = await api.get(`/student/messaging/${student_id}`);
    return res.data.results
}