// Career start used for the "years of experience" figure shown across the site.
// Months are 0-indexed: 6 = July.
export const CAREER_START = new Date(2025, 6, 1);

// Years of experience as a number rounded to 1 decimal (e.g. 1.3).
export const getExperienceYears = (now = new Date()) => {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth()) +
    (now.getDate() - CAREER_START.getDate()) / 30;
  return Math.max(0, Math.round((months / 12) * 10) / 10);
};

// Display string, e.g. "1.3" or "2" (no trailing ".0").
export const experienceLabel = () => String(getExperienceYears());
