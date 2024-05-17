import { useState } from 'react'

function MemeForm({memes, setMemes, deleteMeme}) {

    const URL = 'http://localhost:3000/memes'

    const [img_url, setImgUrl] = useState('')
    const [caption, setCaption] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept' : 'application/json'},
            body: JSON.stringify( {img_url: img_url, caption: caption, likes: 0 } )
            //body: JSON.stringify({img_url, caption}) // You can type it only once when it repeats itself.
        })
        .then(res => res.json())
        .then( newMeme => setMemes([...memes, newMeme]))

        setImgUrl('')
        setCaption('')


    }


    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="img_url">Image URL:</label>

            <input name="img_url" 
            type="text" 
            onChange={e=> setImgUrl(e.target.value)} //onCHange changes our state
            value={img_url} //gives the state the ability to change the form. Ex. it resets the input box. Line 13, 14.
            />

            <label htmlFor="caption">Caption:</label>

            <input name="caption" 
            type="text" 
            onChange={e=> setCaption(e.target.value)}
            value={caption} 
            />

            <input type="submit" value="Add Meme" />

        </form>
    )

}

export default MemeForm