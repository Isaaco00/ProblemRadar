from datetime import datetime, timezone


class Scorer:

    def score(self, evidence):

        for item in evidence:

            relevance = self.relevance(item)

            engagement = self.engagement(item)

            freshness = self.freshness(item)

            item.evidence_score = round(
                relevance +
                engagement +
                freshness,
                2
            )

        return evidence

    def relevance(self, item):

        # V1:
        # Every collected item is assumed relevant
        # because the collector already searched
        # for the user's topic.

        return 50

    def engagement(self, item):

        return min(item.score / 50, 30)

    def freshness(self, item):

        if not item.created_at:
            return 0

        try:

            created = datetime.fromisoformat(
                item.created_at.replace("Z", "+00:00")
            )

            days = (
                datetime.now(timezone.utc) - created
            ).days

            if days <= 30:
                return 20

            if days <= 180:
                return 15

            if days <= 365:
                return 10

            return 5

        except Exception:

            return 0