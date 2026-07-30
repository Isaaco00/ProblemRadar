from fastapi import FastAPI

app = FastAPI(
    title="ProblemRadar API",
    description="Evidence-first research engine",
    version="0.1.0",
)

@app.get("/")
def root():
    return {
        "name": "ProblemRadar API",
        "status": "running",
        "version": "0.1.0",
    }