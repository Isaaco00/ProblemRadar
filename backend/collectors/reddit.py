from models.evidence import Evidence
import requests


class RedditCollector:
    BASE_URL = "https://www.reddit.com/r/all/search.json"

    def collect(self, topic: str):

        headers = {
            "User-Agent": "ProblemRadarBot/0.1 by Isaac"
        }

        params = {
            "q": topic,
            "limit": 10,
            "sort": "relevance"
        }

        try:
            response = requests.get(
                self.BASE_URL,
                headers=headers,
                params=params,
                timeout=15
            )

            response.raise_for_status()

            posts = response.json()["data"]["children"]

            evidence = []

            for post in posts:

                data = post["data"]

                evidence.append(
                    Evidence(
                        source="Reddit",
                        title=data["title"],
                        text=data.get("selftext", ""),
                        url="https://reddit.com" + data["permalink"],
                        author=data.get("author"),
                        created_at=str(data.get("created_utc")),
                        score=data["score"],
                        metadata={
                            "comments": data["num_comments"]
                        },
                    )
                )

            return evidence

        except Exception as e:

            import traceback

            traceback.print_exc()

            return []