export const postNewJoke = async (joke) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(joke)
    }
    
    const response = await fetch("http://localhost:8088/jokes", postOptions);

}