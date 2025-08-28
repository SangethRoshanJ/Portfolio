from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional
import os
from database import SessionLocal, Contact, init_db

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, replace with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database
init_db()

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

# Routes
@app.get("/")
async def read_root():
    return {"message": "Welcome to BA Portfolio API"}

@app.get("/resume")
async def get_resume():
    resume_path = "assets/Sangethroshan_BA_Resume.pdf"
    if os.path.exists(resume_path):
        return FileResponse(resume_path, filename="Sangethroshan_BA_Resume.pdf")
    return {"error": "Resume not found"}

@app.post("/contact")
async def create_contact(contact: ContactRequest):
    try:
        db = SessionLocal()
        db_contact = Contact(
            name=contact.name,
            email=contact.email,
            message=contact.message
        )
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        return {"message": "Contact information saved successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()

@app.get("/ai-buddy")
async def ai_buddy(question: str):
    # Basic AI buddy responses - This can be enhanced with more sophisticated AI later
    responses = {
        "resume": "You can download my resume from the /resume endpoint",
        "linkedin": "You can find my LinkedIn profile at www.linkedin.com/in/sangeth-roshan-j-11070418a",
        "projects": "You can find my projects in the Projects section of the website",
        "contact": "Feel free to use the contact form to get in touch with me",
        "freelance": "Check out my Freelancing page for available services and rates",
        "certifications": "View my professional certifications on the Certifications page",
        "experience": "You can find my work experience and education details in the Experience section"
    }
    
    question = question.lower()
    for key, response in responses.items():
        if key in question:
            return {"response": response}
    
    return {"response": "I'm your AI buddy! How can I help you navigate through the portfolio? You can ask about resume, LinkedIn, projects, certifications, freelancing, or contact information."}
