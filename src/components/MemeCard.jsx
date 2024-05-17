function MemeCard({ meme, updateMeme, deleteMeme }) {

    const URL = "http://localhost:3000/memes"

    function handleIncrementsLikes (){
        fetch(`${URL}/${meme.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Accept' : 'application/json'},
            body: JSON.stringify({ likes: meme.likes + 1})
        })
        .then(res => res.json())
        .then(updatedMeme => updateMeme(updatedMeme))

    }

    function handleDelete(){
        fetch(`${URL}/${meme.id}`, {
            method: 'DELETE'              
        })
        .then(() => deleteMeme(meme.id))
    }

    return (
        <div className="card">

            <img src={meme.img_url} alt={meme.caption} />

            <p>{meme.caption}</p>

            <button onClick={handleIncrementsLikes}>{meme.likes} Likes</button>

            <button onClick={ handleDelete }>DELETE</button>

        </div>
    )

}

export default MemeCard