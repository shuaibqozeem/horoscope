function generateHoroscope() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = new Date(birthdateInput);
    const zodiacSign = getZodiacSign(birthdate);
    const horoscope = generateHoroscopeForSign(zodiacSign);
    displayHoroscope(horoscope);
  }
  
  function getZodiacSign(birthdate) {
    const month = birthdate.getMonth() + 1; // Months are zero-based
    const day = birthdate.getDate();
  
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
      return "Capricorn";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
      return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
      return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      return "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
      return "Scorpio";
    } else {
      return "Sagittarius";
    }
  }
  
  function generateHoroscopeForSign(sign) {
    // Add your horoscope messages for each sign here
    const horoscopes = {
      "Capricorn": "CAPRICORN:You will have a great day ahead!♑",
      "Aquarius": "AQUQRIUS:Unexpected surprises are on the way for you.♒",
      "Pisces": "PICES:You might face challenges today, but stay positive.♓",
      "Aries": "ARIES:Your energy levels will be high today. Make the most of it!♈",
      "Taurus": "TAURUS:A day filled with productivity awaits you.'♉",
      "Gemini": "GEMINI:You will enjoy socializing and meeting new people today.♊",
      "Cancer": "CANCER:Take some time for self-care and relaxation today.♋",
      "Leo": "LEO:Your creative energy will shine brightly today.♌",
      "Virgo": "VIRGO: Focus on your goals, and you will achieve success.♍",
      "Libra": "LIBRA:Balance is key today. Pay attention to your needs as well as others'.♎",
      "Scorpio": "SCORPIO:Trust your instincts. They will guide you in the right direction.♏",
      "Sagittarius": "SAGITTARIUS:Keep an open mind today. Opportunities for growth are around you.♐"
    };
  
    return horoscopes[sign];
  }
  
  function displayHoroscope(horoscope) {
    const resultDiv = document.getElementById("horoscopeResult");
    resultDiv.innerText = horoscope;
  }
  