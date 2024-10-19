Bu yapıda, CSS kullanarak sayfanın arka planı ve metin üzerinde çeşitli animasyonlar ve görsel efektler uygulandı. Yapıyı adım adım açıklayarak nasıl çalıştığını anlatayım:

### 1. **HTML ve Body Yapısı**

- `html` ve `body` elementlerine `height: 100%` ve `display: flex` verilmiş. Bu sayede sayfa, tarayıcı penceresinin tamamını kaplayacak şekilde ayarlanmış. İçerik merkezlenmiş ve dikey/ yatay ortalanmış.

```css
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b0c0c;
}
```

- **Sonuç:** Sayfa ortasına yerleştirilen içerik ile temiz bir düzen sağlanmış.

### 2. **Arka Plan (Background)**

- Arka plan, iki adet `linear-gradient` kullanılarak bir ızgara (grid) oluşturulmuş. Bu, arka plana kağıt benzeri bir görünüm kazandırıyor. Ayrıca, animasyon ile bu ızgara deseninin hareket etmesi sağlanıyor.

```css
background-image: linear-gradient(
    90deg,
    rgba(232, 222, 222, 0.1) 1px,
    transparent 1px
  ), linear-gradient(rgba(244, 239, 239, 0.1) 1px, transparent 1px);
background-size: 30px 30px;
animation: gradientMove 10s linear infinite;
```

- **`background-size: 30px 30px`:** Arka plandaki grid yapısının boyutunu belirler.
- **`animation: gradientMove 10s linear infinite`:** Arka plandaki grid’in sürekli ve yavaş bir şekilde hareket etmesini sağlar.

```css
@keyframes gradientMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 30px 30px;
  }
}
```

- **Sonuç:** Arka planın hareket etmesiyle sayfaya derinlik ve dinamiklik katılmış.

### 3. **Metin (h1) ve Parlama Efekti (Glow Effect)**

- `h1` elementine büyük bir font boyutu (`font-size: 15vw`) atanmış. Bu, ekran boyutuna göre dinamik olarak değişen bir boyuttur.
- `text-shadow` kullanılarak metne parlama (glow) efekti verilmiş ve bu efekt `@keyframes` ile zamanla değişen bir animasyon haline getirilmiş.

```css
h1 {
  color: rgb(29, 117, 232);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.6),
    0 0 30px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.6);
  font-size: 15vw;
  animation: glowEffect 2s ease-in-out infinite alternate;
}
```

- **`@keyframes glowEffect`:** Metnin `text-shadow` değerlerinin zamanla değişmesini sağlar. Parlama, belirli bir süre boyunca güçlenip sonra zayıflar ve bu döngü sürekli devam eder.

```css
@keyframes glowEffect {
  0% {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.3),
      0 0 30px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.3);
  }
  100% {
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.9), 0 0 40px rgba(0, 255, 255, 0.9),
      0 0 60px rgba(0, 255, 255, 0.9), 0 0 80px rgba(0, 255, 255, 0.9);
  }
}
```

- **Sonuç:** Metin parlama efekti ile etkileşimli ve dikkat çekici hale geliyor. Parlaklık, belirli aralıklarla artıyor ve azalıyor.

### 4. **Kutu (Box) Animasyonu**

- `.box` sınıfı, kutunun hafifçe büyüyüp küçülmesini sağlayan bir `@keyframes` animasyonuna sahip.

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: scale(1);
  animation: boxScale 2s ease-in-out infinite alternate;
}
```

- **`@keyframes boxScale`:** Kutunun `scale` değerini sürekli olarak değiştiren bir animasyon. Kutunun hafifçe büyüyüp küçülmesi, kutunun etkileşimli görünmesini sağlar.

```css
@keyframes boxScale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}
```

- **Sonuç:** Kutu sürekli hafif bir şekilde büyüyüp küçülüyor, bu da kullanıcıya dinamik bir his veriyor.

### 5. **Responsive Tasarım**

- Farklı cihazlar için `font-size` ayarını medya sorguları ile optimize ettik. `vw` birimi kullanarak ekran boyutuna göre metinlerin dinamik olarak boyutlandırılmasını sağladık.

```css
@media (max-width: 768px) {
  h1 {
    font-size: 20vw; /* Küçük ekranlarda başlık boyutunu küçültüyoruz */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 25vw; /* Daha küçük cihazlar için başlığı daha da küçültüyoruz */
  }
}
```

- **Sonuç:** Farklı ekran boyutlarına göre başlık boyutu otomatik olarak ayarlanarak, taşma sorunları önlenmiş oluyor.

### Genel Sonuç:

Bu yapı, etkileşimli ve animasyonlu bir arka plan ile büyük bir metin üzerinde odaklanan bir tasarım sunuyor. Sayfa ortasında yer alan metin, parlama efektiyle dikkat çekici hale getirilmiş ve kutunun hafif hareketiyle sayfanın genel dinamizmi artırılmış. Bu tasarım, daha etkileşimli ve modern bir web sayfası deneyimi sunmak için optimize edilmiştir.
