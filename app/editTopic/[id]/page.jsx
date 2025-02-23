import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        })

        if (!response.ok) {
            throw new Error("Failed to fetch topic!")
        }

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditTopic({ params }) {
    const { id } = params;
    const { topic } = await getTopicById(id);
    const { title, description } = topic;

    await getTopicById(id);

    return (
        <EditTopicForm id={id} title={title} description={description} />
    )
}