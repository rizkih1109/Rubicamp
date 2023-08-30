import { rl } from "../models/connect.js";
import { barrier, showMenu, welcome } from "../university.js";
import { salam } from "../views/LoginViews.js";
import { unlock } from "../models/Login.js";

export default class LoginController {
    static login() {
        rl.question(`username: `, async (answer) => {
            await unlock(answer).then((x) => {
                if(answer == x.username) {
                    rl.question(`password: `, (answer2) => {
                        if(answer2 == x.password) {
                            salam(x);
                            showMenu()
                        } else {
                            console.log(`Username dan Password tidak sesuai, silahkan coba lagi`)
                            LoginController.login()
                        }
                    })
                }
            }).catch((x) => {
                console.log(`Username tidak tersedia, silahkan coba lagi`)
                LoginController.login()
            })     
        })
    }
}

