from collectors.reddit import RedditCollector


class CollectorManager:

    def __init__(self):

        self.collectors = [
            RedditCollector(),
        ]

    def collect(self, topic: str):

        evidence = []

        for collector in self.collectors:

            evidence.extend(
                collector.collect(topic)
            )

        return evidence