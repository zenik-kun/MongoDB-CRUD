"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function addTopic() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Title and description are required!');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            });

            if(response.ok) {
                router.push('/');
            }

            else {
                throw new Error('Failed to create a topic');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form 
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
        >
            <input 
                className="border border-slate-500 px-8 py-2" 
                type="text"
                placeholder="Topic Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <input 
                className="border border-slate-500 px-8 py-2" 
                type="text" 
                placeholder="Topic Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button 
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                type="submit"
            >
                Add Topic
            </button>
        </form>

    )
}