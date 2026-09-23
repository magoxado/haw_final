import { DetailPage } from "@/components/site"

export default function AboutPage() {
  return (
    <DetailPage title="Rólam">
      <h2 className="text-2xl font-semibold">Horváth Ágnes, fejlesztő, tanácsadó. (Megújítás mestere)</h2>
      <p>Business coach, management tréner, szocio- és művészetterapeuta.</p>
      <p>
        Agrármenedzser és közgazdász végzettséggel rendelkezem, és munkám során mindig kiemelt figyelmet fordítok az
        emberi kapcsolatokra és az innovációra.
      </p>
      <p>
        Évek során tudatosan építettem fel a karrierem; dolgoztam 2 fős cégtől a 400 fősig. Többféle típusú vezetővel,
        különböző típusú munkatársakkal dolgoztam együtt. Ezekre a munkákra, feladatokra mindig úgy tekintettem, mint
        egy-egy megtanulandó fejezet a szakmámhoz, még akkor is, ha ez sokszor nehéz volt.
      </p>
      <p>
        2003-ban végeztem a SZIE-VTI-n agrármenedzserként, utána SZIE-GTK-n közgazdászként. Azóta szerelem nekem ez a
        terület. Szakdolgozataimat is ezen a területen írtam (coaching, vezetési tanácsadás, valamint ERP).
      </p>
      <p>
        Nagyon fontosnak tartom a folyamatszabályozást, a tanulást és az intuíciót. Az elmúlt öt év során jelentős
        tapasztalatot szereztem az emberi erőforrás területén, majd szocio- és művészetterapeuta képesítést is
        szereztem. Számomra az emberek és a hatékonyság összekapcsolása a fő fókusz.
      </p>
      <p>
        Nagyon sokszor tapasztaltam, hogy minden megvan, mégsem történik meg a változás. Művészetterápia eszközeivel át
        lehet segíteni a személyt és a csoportot a nehézségeken. Ezáltal egy komplex fejlesztési szolgáltatást tudok
        nyújtani.
      </p>
      <blockquote className="border-t border-border pt-4">
        <p>
          „Nagyon megoldásfókuszú vagyok. A felmerülő problémákra, mint lehetőségekre tekintek. Nagyon felvillanyoz,
          ahogy elkezdődik a folyamat, kerülnek felszínre az újabb és újabb javaslatok, ötletek és amelyekből a végén
          kikerekedik egy megvalósítható, minden oldalról jól megtámogatott terv. Csodálatos ez a folyamat.”
        </p>
        <footer className="mt-4 text-sm text-muted-foreground">
          Forrás:{" "}
          <a
            href="https://read-blog.blog.hu/2021/01/25/haw-the_way_rendszer_a_munkadban"
            className="text-foreground underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            HAW the way rendszer a munkádban
          </a>
        </footer>
      </blockquote>
      <blockquote className="border-t border-border pt-4">
        <p>
          „Azóta az önbizalmam is sokat erősödött. Jobban meg tudom fogalmazni, mit szeretnék. Nem vagyok görcsös, nem
          félek őszintének lenni az interjúkon, hiszen ahogy Ági mondta nekem: a HR-s is egy ember, a saját álmaival és
          érzelmeivel. Csak ajánlani tudom mindenkinek.”
        </p>
        <footer className="mt-4 text-sm text-foreground">Márton Róbert, Athénból</footer>
      </blockquote>
    </DetailPage>
  )
}
