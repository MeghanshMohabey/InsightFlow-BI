function detectDataset(columns) {
  const lowerColumns = columns.map((col) => col.toLowerCase());

  const healthcareKeywords = [
    "patient",
    "doctor",
    "hospital",
    "disease",
    "treatment",
  ];

  const financeKeywords = [
    "amount",
    "expense",
    "transaction",
    "payment",
    "finance",
  ];

  const salesKeywords = ["product", "sales", "revenue", "customer", "profit"];

  const containsKeyword = (keywords) => {
    return keywords.some((keyword) =>
      lowerColumns.some((col) => col.includes(keyword)),
    );
  };

  if (containsKeyword(healthcareKeywords)) {
    return "healthcare";
  }

  if (containsKeyword(salesKeywords)) {
    return "sales";
  }

  if (containsKeyword(financeKeywords)) {
    return "finance";
  }

  return "unknown";
}

module.exports = detectDataset;
