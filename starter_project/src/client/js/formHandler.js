// Replace checkForName with a function that checks the URL
import { validateUrl } from './validateUrl'

const serverURL = 'https://localhost:8000/api'
//function that clear form results 
function cleanUI(){
    document.getElementById("text").textContent= ``;
    document.getElementById("polarity").textContent= ``;
    document.getElementById("irony").textContent= ``;
    document.getElementById("confidence").textContent= ``;
    document.getElementById("subjectivity").textContent= ``;
}
function handleSubmit(event) {
    event.preventDefault();
    // Get the URL from the input field
    const urlInput = document.getElementById('name').value;
    // Function to send data to the server then get res and update the UI
    //inside it function to validate the url that sending to the server
async function getData () {
    try {
        const response = await fetch("http://localhost:8000/data",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url:urlInput})
        })
        if(response.status === 200){
            const data = await response.json();
            console.log(data);
            cleanUI()
            function udpateUI(){
                document.getElementById("text").textContent= `text:   ${data.text}`;
                document.getElementById("polarity").textContent= `polarity:    ${data.polarity}`;
                document.getElementById("irony").textContent= `irony:   ${data.irony}`;
                document.getElementById("confidence").textContent= `confidence:    ${data.confidence}`;
                document.getElementById("subjectivity").textContent= `subjectivity:   ${data.subjectivity}`;
            }
            udpateUI();
        }
    } catch (error) {
        console.log(error)
        
        cleanUI();
    }
}
    // Check if the URL is valid
    if(validateUrl(urlInput) === true ){
        //sending request to url to the backend
        console.log("URL is Valid");
        console.log("Sending data to server");
        getData();
        
        
    }else {
        alert("please enter valid url");
        cleanUI();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleSubmit);
    });
    
// Export the handleSubmit function
export { handleSubmit };

