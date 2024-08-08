import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Hakkımda'
}

export default function About() {
  return (
    <main className="container mx-auto content flex flex-col gap-8 py-6 max-[767px]:max-w-full max-[767px]:px-4">
      <p className="leading-7">
        1996 yılında İstanbul {"Pendik'te"} doğdum. İlkokul eğitim ve öğretimimi
        tamamladıktan sonra lise tercihimi Tuzla Teknik ve Endüstri Meslek
        Lisesi Bilgisar bölümünü seçip bu alanda çeşitli eğitimler almaya başladım. Programlama olarak C# yazılım dili ve veri tabanı olarak ise MSSQL sorgu dilinde eğitimler aldım. Lise
        3. sınıfta Web-Tasarım dalını seçerek HTML5, CSS3, Javascript, JQuery ve photoshop eğitimi alarak son 2 yılımı bu şekilde tamamlayıp mezun oldum.
      </p>
      <p className="leading-7">
        Lise eğitim ve öğretimimi tamamladıktan sonra 2014 yılında Sakarya Üniversitesi Bilgisayar Programcılığı bölümüne geçiş yaparak burada 2 yıl alanımla ilgili eğitim aldım. Aldığım eğitimler ise sırasıyla C, C#, PHP dilleri
        üzerinde temel seviye eğitim aldıktan sonra 2016 yılında 3.0 ortalama ile mezun oldum.
      </p>
      <p className="leading-7">
        Üniversite mezuniyetinin ardından bir takım sebeplerden dolayı farklı sektörlerde deneyim sahibi oldum. 2019 yılı Temmuz ayında İstanbul {"Kadıköy'de"} bulunan Smartpro bilgisayar akademisinde
        işkur destekli olarak 6 aylık bir eğitim süresinden geçtim, burada Frontend alanında çeşitli eğitimler aldım. Aldığım eğitimler sırasıyla HTML5, CSS3, SCSS, Bootstrap, Javascript, React eğitimlerini
        aldıktan sonra eğitimi tamamlayıp ardından iş başvuruları yapmaya başladım. 
      </p>
      <p className="leading-7">
        2020 Şubat ayında İstanbul {"Kartal'da"} bulunan Eron Software adında bir startup firmada Frontend (React) developer olarak çalışmaya başladım. 2 adet e-ticaret sitesi geliştirdim ve yaklaşık
        1 yıla yakın kadar bir süre zarfından sonra oradan ayrılıp BilgeAdam teknoloji şirketi bünyesinde outsource olarak GKG (Global Kapital Group) şimdiki adıyla Trive isimli firmada çalışmaya başladım.
        Burada da aynı şekilde Frontend developer pozisyonunda çalıştım ve yaklaşık 1.5 yıl çalıştıktan sonra buradan ayrıldım ve Demirören Medyadan iş teklifi aldım. Burada da aynı şekilde olduğu gibi Frontend developer
        olarak çalışmaya başladım ve 2 yıl çalıştıktan sonra buradan ayrılıp Paramtech şirketinde Senior title alarak Senior Frontend developer olarak çalışmaya başladım ve aktif olarak halen burada çalışıyorum.
      </p>
      <p className="leading-7">
        Çalışmış olduğum şirketlerde kullandığım ve halen aktif olarak kullanıyor olduğum tech stackler, ekip bilgisi, proje bilgisi ve çalışma şekli gibi detaylı bilgilere <Link href='/experiences' className="text-[#ff642d] font-semibold">Deneyimlerim</Link> sayfasından ulaşabilirsiniz.
      </p>
      <p className="leading-7">
        Kişilik olarak ise öğrenmeyi ve öğretmeyi kendisine prensip edinmiş, açık sözlü, ekip çalışmasına yatkın birisiyim. Mesleğim ile ilgili yeni teknolojileri, kütüphaneleri ve frameworkleri sürekli takip ederek güncel kalmaya çalışıyorum. Örneğin kullanmış olduğum bir kütüphane yada modüle kendi web
        sayfasından ve npm üzerinde dökümantasyonunu okuyarak hangi methodların eklenip veya hangilerinin kaldırıldığını (deprecated) takip ederim. Bunların dışında diğer Javascript teknolojileriyle aktif olarak ilgileniyorum, bunlar mobil uygulama tarafında React Native ve backend tarafında ise Node
      </p>
    </main>
  );
}
