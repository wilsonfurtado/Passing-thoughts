import React, {useState, useEffect} from "react"
import Thoughts from "./Thoughts"
import { v4 as uuidv4 } from 'uuid';

export const PassingBar = () => {

    const [value, setValue] = useState("")
    const [id, setId] = useState(0)

    useEffect(() => {
        if(id && value) {
            const listThoughts = document.getElementById("list-thoughts")
            const li = document.createElement("li")
            li.id = id
            li.className = "list-group-item"
            li.innerHTML = value
            listThoughts.appendChild(li)
            setValue("")

            setTimeout(() => {
                    document.getElementById(id).remove();
                }, 15000)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        setId(uuidv4())
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    } 

    return (
        <main>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="field01" className="form-label">Ajoutez une note elle restera affiché 15 secondes puis disparaitra.</label>
                    <input type="text" className="form-control" id="field01" value={value} onChange={handleChange} placeholder="Tapez une note..." / >
                </div>
                <button type="submit" className="btn btn btn-success col-12">Ajouter</button>
            </form>
            <Thoughts />
        </main>
    )
}
