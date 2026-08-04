class Deduplicator:

    def remove_duplicates(self, evidence):

        seen = set()

        unique = []

        for item in evidence:

            key = (
                item.title.strip().lower(),
                item.source.strip().lower(),
            )

            if key not in seen:

                seen.add(key)

                unique.append(item)

        return unique