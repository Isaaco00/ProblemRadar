from fastapi import FastAPI
from services.research import ResearchService

app = FastAPI()

research = ResearchService()


@app.get("/")
def root():
    return {
        "name": "ProblemRadar API",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/research")
def run_research(topic: str):

    return research.research(topic)