import { Note } from "./App";
import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";


type NotesLayoutProps = {
    notes: Note[];
}

export function NoteLayout({ notes }: NotesLayoutProps) {
    const { id } = useParams();
    console.log(useParams());
    console.log(`This is the id: ${id}`)
    const note = notes.find(n => n.id === id);

    if (note === null || note === undefined) {
        return <Navigate to="/" replace />
    }
    console.log(note);
    return <Outlet context={note} />
}

export function useNote() {
    return useOutletContext<Note>()
}