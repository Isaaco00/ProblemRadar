from services.processors.cleaner import Cleaner
from services.processors.deduplicator import Deduplicator
from services.processors.scorer import Scorer


class EvidencePipeline:

    def __init__(self):
        self.cleaner = Cleaner()
        self.deduplicator = Deduplicator()
        self.scorer = Scorer()

    def process(self, evidence):

        evidence = self.cleaner.clean(evidence)

        evidence = self.deduplicator.remove_duplicates(evidence)

        evidence = self.scorer.score(evidence)

        return evidence