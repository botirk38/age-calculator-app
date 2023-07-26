export default function calculateAge(day, month, year) {
    const dob = new Date(year, month - 1, day); // because month is 0-based in JavaScript date
    const today = new Date();
  
    let ageYear = today.getFullYear() - dob.getFullYear();
    let ageMonth = today.getMonth() - dob.getMonth();
    let ageDay = today.getDate() - dob.getDate();
  
    // handle if today's month or day is less than dob's month or day
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += (ageMonth < 0) ? 12 : 0;
  
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageDay += (ageDay < 0) ? lastDayOfMonth : 0;
    }
  
    return {
      years: ageYear,
      months: ageMonth,
      days: ageDay
    };
  }
  

