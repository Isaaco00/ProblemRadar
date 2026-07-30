from services.collector_manager import CollectorManager


class ResearchService:

    def __init__(self):
        self.collector = CollectorManager()

    def research(self, topic: str):

        evidence = self.collector.collect(topic)

        return {
            "topic": topic,
            "sources": len(evidence),
            "evidence": evidence,
        }