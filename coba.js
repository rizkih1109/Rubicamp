const fs = require('fs');
const object = JSON.parse(fs.readFileSync("Todo.json", 'utf-8'))
const command = process.argv[2], id = process.argv[3], submit = process.argv.slice(3).join(" ")
let Oindex = id - 1, count = object.length + 1;


if(!command || command == 'help'){
    console.log(`
    >>> JS TODO <<<
    $ node todo.js <command>
    $ node todo.js list
    $ node todo.js task <task_id>
    $ node todo.js add <task_content>
    $ node todo.js delete <task_id>
    $ node todo.js complete <task_id>
    $ node todo.js uncomplete <task_id>
    $ node todo.js list:outstanding asc|desc
    $ node todo.js list:complete asc|desc
    $ node todo.js tag <task_name_1> <task_name_2> ... <task_name_N>
    $ node todo.js filter:<tag_name>
    `)
} else {
    switch(command) {
        case "list":
            console.log('Daftar Pekerjaan')
            object.forEach((item, index) => {
                console.log(`${index + 1}. [${item.complete ? "x" : " "}] ${item.title}`)
            }); break;
        case "task":
            for (let i in object[Oindex]) console.log(`${i}: ${object[Oindex][i]}`)
            break;
        case "add":
            if(submit){
                console.log(`${submit} telah ditambahkan`)
                object.push({"ID":count, "title": submit, "complete": false, "tag":""})
                fs.writeFileSync("Todo.json", JSON.stringify(object), "utf-8")
            } else if (!submit || submit == " ") return
            break;
        case "delete":
            console.log(`${object[Oindex].title} telah dihapus dari daftar`)
            object.splice(Oindex, 1)
            for (let i = 0; i < object.length; i++) object[i].ID = i + 1
            fs.writeFileSync("Todo.json", JSON.stringify(object), "utf-8")
            break;
        case "complete":
            console.log(`${object[Oindex].title} telah selesai`)
            object[Oindex].complete = true;
            fs.writeFileSync("Todo.json", JSON.stringify(object), "utf-8")
            break;
        case "uncomplete":
            console.log(`${object[Oindex].title} status selesai dibatalkan`)
            object[Oindex].complete = false;
            fs.writeFileSync("Todo.json", JSON.stringify(object), "utf-8")
            break;
        case "list:outstanding":
            console.log('Daftar Pekerjaan')
            let yet = []
            for (let i of object) {
                if (!i.complete) {
                    i.complete = "[ ]"
                    yet.push(`${i.ID}. ${i.complete} ${i.title}`)
                }
            }
            if (id == "asc") console.log(yet.join("\n"))
            else if (id == "desc") console.log(yet.reverse().join("\n"))
            break;
        case "list:completed":
            console.log('Daftar Pekerjaan')
            let fix = []
            for (let i of object) {
                if (i.complete) {
                i.complete = "[x]"
                fix.push(`${i.ID}. ${i.complete} ${i.title}`)}
            }
            if (id == "asc") console.log(fix.join("\n"))
            else if (id == "desc") console.log(fix.reverse().join("\n"))
            break;
        case "tag":
            console.log(`${process.argv.slice(4)} telah ditambahkan ke daftar ${object[object.findIndex(i => i.ID = id).title]}`)
            object[Oindex].tag = process.argv.slice(4)
            fs.writeFileSync("Todo.json", JSON.stringify(object), "utf-8")
            break;
        case "filter":
            console.log(`Daftar Pekerjaan`)
            console.log(command.slice(7))
            for (let i of object) {
                if (i.tag.includes(command.slice(7))) {
                    if (i.complete) {
                        i.complete = "[x]"
                        console.log(`${i.ID}. ${i.complete} ${i.title}.`)
                    } else if (!i.complete) {
                        i.complete = "[ ]"
                        console.log(`${i.ID}. ${i.complete} ${i.title}.`)
                    }
                }
            }
    }
}