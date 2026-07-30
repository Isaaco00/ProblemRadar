from typing import Any

from pydantic import BaseModel, Field


class Evidence(BaseModel):
    source: str
    title: str
    text: str

    url: str | None = None
    author: str | None = None
    created_at: str | None = None

    score: int = 0

    metadata: dict[str, Any] = Field(default_factory=dict)