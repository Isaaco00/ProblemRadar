import requests

from models.evidence import Evidence


class HackerNewsCollector:
    BASE_URL = "https://hn.algolia.com/api/v1/search"


    def collect(self, topic: str):

        response = requests.get(
            self.BASE_URL,
            params={
                "query": topic,
                "tags": "story",
            },
            timeout=15,
        )

        response.raise_for_status()

        data = response.json()

        evidence = []

        for item in data["hits"]:

            evidence.append(
                Evidence(
                    source="Hacker News",
                    title=item.get("title") or "Untitled",
                    text=item.get("story_text") or "",
                    url=item.get("url"),
                    author=item.get("author"),
                    created_at=item.get("created_at"),
                    score=item.get("points") or 0,
                    metadata={
                        "comments": item.get("num_comments", 0),
                    },
                )
            )

        return evidence