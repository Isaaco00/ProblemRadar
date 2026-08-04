from typing import Any

from pydantic import BaseModel, Field


class Evidence(BaseModel):
    source: str
    title: str
    text: str

    url: str | None = None
    author: str | None = None
    created_at: str | None = None

    # Original score from the source
    score: int = 0

    # ProblemRadar's evaluation score
    evidence_score: float = 0.0

    metadata: dict[str, Any] = Field(default_factory=dict)