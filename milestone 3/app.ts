const form = document.getElementById('form') as HTMLFormElement;
const display = document.getElementById('generate-resume') as HTMLDivElement

form.addEventListener('submit',(event: Event) => {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value 
    const email = (document.getElementById('email') as HTMLInputElement).value 
    const contact = (document.getElementById('contact') as HTMLInputElement).value 
    const education = (document.getElementById('education') as HTMLInputElement).value 
    const experience = (document.getElementById('experience') as HTMLInputElement).value 
    const skills = (document.getElementById('skills') as HTMLInputElement).value 

    // generating the resume content dynamically
    const htmlResume = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Contact:</b>${contact}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // displaying our generated resume
    if(display){
        display.innerHTML=htmlResume;
    }else{
        console.error('display element is missing')
    }

});