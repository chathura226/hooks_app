import React, {useState,useEffect} from 'react';
import {v1 as uuidv1}from 'uuid';
import NewSongForm from './NewSongForm';
const SongList = () => {
    const [songs,setSongs]=useState([
        {title:'alomost home',id:1}, 
        {title:'memory gospel',id:2},
        {title:'this wild darkness',id:3}
    ]);
    //when using setSong function we have to use ...songs to spread the already exsisting array, otherwise it will replace the whole data with new ones
    const addSong=(title)=>{
        setSongs([...songs,{title:title,id: uuidv1()}])
    }
    
    const [age,setAge]=useState(20);

    // useEffect(()=>{//everytime component changes(any data inside components), renders this function will run
    //     console.log('useEffect Hook ran',songs)
    // })
    //if we want to run useEffect only when specific data chancges ,
    //we can add a second parameter as below(array of elements to watch)
    //useEffect(()=>{},[songs]);
    useEffect(()=>{
        console.log('useEffect hook ran',songs);
    },[songs]);
    useEffect(()=>{
        console.log('age useEffect hook ran',age);
    },[age]);
    return ( 
        <div className='song-list'>
            <ul>
                {songs.map(song =>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>setAge(age+1)}>Add one to age: {age}</button>
        </div>
     );
}
 
export default SongList;