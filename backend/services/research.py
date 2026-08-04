from services.collector_manager import CollectorManager
from services.evidence_pipeline import EvidencePipeline


class ResearchService:

    def __init__(self):
        self.collector_manager = CollectorManager()
        self.pipeline = EvidencePipeline()

    def research(self, topic: str):

        raw_evidence = self.collector_manager.collect(topic)

        processed_evidence = self.pipeline.process(raw_evidence)

        return {
            "topic": topic,
            "sources": len(processed_evidence),
            "evidence": processed_evidence,
        }