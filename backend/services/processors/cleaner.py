import re


class Cleaner:

    def clean(self, evidence):

        for item in evidence:

            item.title = self.clean_text(item.title)

            item.text = self.clean_text(item.text)

        return evidence

    def clean_text(self, text):

        if not text:
            return ""

        # Remove HTML tags
        text = re.sub(r"<[^>]+>", "", text)

        # Normalize whitespace
        text = " ".join(text.split())

        return text.strip()