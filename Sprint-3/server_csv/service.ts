import fs from 'fs'
import { AddTodoListForm, TodoListItem } from './util/model'

export class Service {
    constructor() {
    }

    async readTodoList(type:string = "") {
        const filePath = __dirname + '/TodoList.csv'
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: TodoListItem[] = []
        const headers = lines[0].split(',')
        for (let i = 1; i < lines.length; i++) {
            if (lines[i] == undefined || lines[i].trim() == "") {
                continue;
            }
            let words = lines[i].split(',');
            let task: {} = {};
            for (let j = 0; j < words.length; j++) {
                task[headers[j].trim()] = words[j];
            }
            // @ts-ignore
            result.push(task);
        }

        if(type){
            result = result.filter(item => item.type === type)
        }

        return result;
    }

    async addTodoList(post: AddTodoListForm) {
        const filePath = __dirname + '/TodoList.csv'
        console.log(post)
        const reformedInput = "\n" + post.id + "," + post.name + "," + post.description + ","  + post.duedate + "," + post.type + "," + post.completed

        await fs.appendFile(filePath, reformedInput, (e) => console.log(e))

        const csvFileData = await fs.readFileSync(filePath, 'utf8')
        console.log(csvFileData)
        return { 'status': 'ok' }
    }

    async deleteTodoList(id: string) {

        const filePath = __dirname + '/TodoList.csv'
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: string = "";
        for (let i = 0; i < lines.length; i++) {
            if (lines[i] == undefined || lines[i].trim() == "") continue;
            let words = lines[i].split(',');
            if (words[0] == id) continue;
            result = result + lines[i] + "\n"
        }
        await fs.promises.writeFile(filePath, result)

        return { 'result': 'deleted' }
    }

    // [done]
    async updateTodoList(
        id: string, 
        name: string, 
        description: string, 
        duedate: string, 
        type: string,
        completed:string) {

        const filePath = __dirname + '/TodoList.csv'
        const data = await fs.promises.readFile(filePath, 'utf-8')
        const lines = data.split('\n')
        let result: string = "";
        // console.log("service " + id + name + description + assignedto + duedate + status )
        for (let i = 0; i < lines.length; i++) {
            if (lines[i] == undefined || lines[i].trim() == "") continue;
            let words = lines[i].split(',');
            console.log(`words[0]: ${words[0]}, id: ${id}, ${words[0] == id}`)
            if (words[0] == id) {
                words[1] = "" + name;
                words[2] = "" + description;
                words[3] = "" + duedate;
                words[4] = "" + type;
                words[5] = "" + completed
                result = result + words.join(',') + "\n"
            } else {
                result = result + lines[i] + "\n"
            }
        }
        await fs.promises.writeFile(filePath, result)

        return { 'result': 'updated' }
    }
}