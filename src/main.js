import React, { useEffect, useState } from 'react';
import { BiTrash } from "react-icons/bi";
import firebase from './firebase.js';
import Nav from './Nav.js';
import "./css/styles.css";

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

// export default class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: this.props.isAuthed,
//             uid: this.props.uid,
//             currentItem: '',
//             items: [],
//             done: true,
//         }

//     }

//     componentDidMount() {
//         console.log(this.state.user)
//         const itemsRef = firebase.database().ref('items');
//         itemsRef.on('value', (snapshot) => {
//             let items = snapshot.val();
//             let newState = [];
//             for (let item in items) {
//                 newState.push({
//                     id: item,
//                     todo: items[item].todo
//                 });
//             }
//             this.setState({
//                 items: newState
//             });
//             console.log(this.state.items)
//         });
//     }

//     removeItem(itemId) {
//         const itemRef = firebase.database().ref(`/items/${itemId}`);
//         itemRef.remove();
//     }



//     render() {

//         return (
//             )
//     }
// }

export default function Main(props) {

    const [user, setUser] = useState(props.isAuthed)
    const [uid, setUid] = useState(props.uid)
    const [items, setItems] = useState(null)
    const [done, setDone] = useState(true)
    const [] = useState()

    function removeItem(itemId) {
        const itemRef = firebase.database().ref(`/users/${uid}/${itemId}`);
        itemRef.remove();
    }

    useEffect(
        () => {
            console.log(user)
            const itemsRef = firebase.database().ref(`/users/${uid}`);
            itemsRef.on('value', (snapshot) => {
                let items = snapshot.val();
                let newState = [];
                for (let item in items) {
                    newState.push({
                        id: item,
                        todo: items[item].todo
                    });
                }

                if (newState.length === 0) {
                    setItems(null);
                }
                else {
                    setItems(newState);
                }
                console.log(items)
            });
        }
    )

    return (
        <div className="App">
            <Nav active={user} login={() => props.login()} logout={() => props.logout()} />
            {user ?
                <div className="todo-list box">
                    {items ? items.map((item) => {
                        return (<div className="todo-item">
                            <input id="strike" type="checkbox" /><p for="strike" class="strikethrough" style={{ color: "black" }} key={item.id}>{item.todo} </p> <BiTrash style={{ marginLeft: "auto", cursor: "pointer" }} onClick={() => removeItem(item.id)} className="icon" />
                        </div>)
                    }) : <h4>Add items to the docket to create your personalised todo-list.<br/>[Nav -> Add item]</h4>}

                </div>
                :
                <div className="todo-list box">
                    <h4>User needs to authenticate for the application prior to using it.<br/>[Nav -> Login]</h4>
                </div>}

        </div>
    );
}
