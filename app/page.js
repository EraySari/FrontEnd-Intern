import Into from "./Into";
import MidSection from "./MidSection";
import HomeBgSection from "./HomeBgSection";
import TeamSection from "./TeamSection";
import Metrics from "./Metrics";
import ContactSection from "./ContactSection";

function Page() {
  return (
    <>
      <HomeBgSection />
      <Into
        title={"Who we are"}
        text={
          "We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born."
        }
      />
      <MidSection />
      <TeamSection />
      <Metrics />
      <ContactSection />
    </>
  );
}

export default Page;

//relative konumu, içinde bulunan absolute pozisyonlu
//çocuk öğelerin referans noktası olarak da işlev görür.
//Yani, bir öğe relative olarak konumlandırılmışsa,
//onun içinde yer alan absolute pozisyonlu öğeler, relative öğeye göre konumlandırılır.

//en son hepsini first mid last gibi bölümlere ayir sonra onla ilili olanlari onun icinden cagir buraso cok karmasik olmasin

//display flex özelliklerini degistir. Bir yerden sonra column olsun mesela alt alta gelsin responsive icin

//85+ degil 85M

//her baslik ayni ozelliklere sahip onlar icin bir sinif olustur
