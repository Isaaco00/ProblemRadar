from collectors.reddit import RedditCollector
from collectors.hackernews import HackerNewsCollector


class CollectorManager:

    def __init__(self):

        self.collectors = [
            HackerNewsCollector(),
            RedditCollector(),
        ]

    def collect(self, topic: str):

        evidence = []

        for collector in self.collectors:

            try:
                evidence.extend(
                    collector.collect(topic)
                )

            except Exception as e:

                print(
                    f"{collector.__class__.__name__} failed: {e}"
                )

        return evidence