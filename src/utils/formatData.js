function formatData(data) {
  let result = "";

  for (const key in data) {
    result += `\n## ${key}\n`;
    const items = Array.isArray(data[key]) ? data[key] : [data[key]];

    items.forEach((item) => {
      for (const subKey in item) {
        result += `- ${subKey}: ${item[subKey]}\n`;
      }
      result += "\n";
    });
  }

  return result;
}
export default formatData;
