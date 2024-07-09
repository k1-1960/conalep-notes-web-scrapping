import fs from 'fs';

const writeCsvFile = (
  data: Record<string, string | number>[],
  fileName: string
) => {
  const csv = data.map((row) => Object.values(row).join(',')).join('\n');
  fs.writeFileSync(fileName, csv);
};

export default writeCsvFile;
