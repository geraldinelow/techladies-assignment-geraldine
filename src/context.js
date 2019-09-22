import React, { Component } from 'react';
import {sectionList, detailList} from './data';

const ListContext = React.createContext();
//Provider
//Consumer

class ListProvider extends Component {
    state = { 
        list: [], 
        detailList:detailList
     }
     componentDidMount() {
         this.setLists();
         };
     setLists =() =>{
         let tempList =[];
         sectionList.forEach(item =>{
             const singleList = {...item};
             tempList = [...tempList,singleList];

         })
         this.setState(()=>{
             return {list:tempList}
         })
     };

getItem = (id) => {
    const list = this.state.list.find(item => item.id ===id);
    return list;
}

     handleDetail = (id) =>{
         const list = this.getItem(id);
         this.setState(()=>{
             return {detailList: list}
         })
     }
     contactMe = () =>{
        console.log('hello from contact me');
    }
    render() { 
        return ( 
            <ListContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                contactMe:this.contactMe,

            }}>
                {this.props.children}
            </ListContext.Provider>
         );
    }
} 
 
const ListConsumer = ListContext.Consumer;

export {ListProvider,ListConsumer};