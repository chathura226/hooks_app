import React,{useState} from 'react'

const NewSongForm = ({addSong}) => {
    const [title,setTitle]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();//stopping the default action of submit in forms (refreshing the page)
        addSong(title);
        setTitle('');
    }
    //setTitle(e.target.value uses for taking the value inside the field at each moment and apply it to state
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song Name: </label>
            <input type="text" value={title} placeholder='Enter a song name' required onChange={(e)=>setTitle(e.target.value)}/> 
            
            <input type="submit" value="Add Song"/> 
        </form>
     );
}
 
export default NewSongForm;