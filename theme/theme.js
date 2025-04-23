const palette = [
  {
    // turkuaz
    text: '#00CCBB',
    bgColor: opacity => `rgba(0, 204, 187, ${opacity})`,
  },
  {
    // gece mavisi
    text: '#003366',
    bgColor: opacity => `rgba(0, 51, 102, ${opacity})`,
  },
  {
    // mercan
    text: '#FF6F61',
    bgColor: opacity => `rgba(255, 111, 97, ${opacity})`,
  },
  {
    // lavanta
    text: '#B57EDC',
    bgColor: opacity => `rgba(181, 126, 220, ${opacity})`,
  },
  {
    // zeytin yeşili
    text: '#808000',
    bgColor: opacity => `rgba(128, 128, 0, ${opacity})`,
  },
  {
    // koyu gri
    text: '#333333',
    bgColor: opacity => `rgba(51, 51, 51, ${opacity})`,
  }
]

// Başlangıçta tema indeksi
let currentThemeIndex = 0;

// Tema renklerini içeren nesne
export let themeColors = {
  ...palette[currentThemeIndex]
};

// Bir sonraki temaya geçiş yapan fonksiyon
export const cycleTheme = () => {
  // İndeksi bir artır, palette uzunluğuna ulaşınca sıfırla (döngüsel geçiş)
  currentThemeIndex = (currentThemeIndex + 1) % palette.length;
  // themeColors nesnesini güncelle
  themeColors = {
    ...palette[currentThemeIndex]
  };
  return themeColors;
};