import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Axios from "axios";
import {List} from './components/List'
import {User} from './interfaces/User'

export const App: React.FC = () => {

    const [users, setUsers] = useState<User[]>([])
    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(() => {
        Axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    }, [])

    function SubmitHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const user = inputEl.current?.value;
      // setUsers(Object.a(), )
    }

    return (
        <div className="container mt-2">
            <form onSubmit={SubmitHandler}>
                <input className="form-control" type="text" ref={inputEl} name="user"/>
                <button className="btn btn-primary" type="submit">Save</button>
            </form>

            <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <List data={users}/>
        </div>
    )
};

export default App;
