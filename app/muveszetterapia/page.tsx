import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ArtTherapyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <p className="eyebrow mb-3 text-center">Terápia</p>
      <h1 className="mb-12 text-center text-4xl font-medium md:text-6xl">Művészetterápia</h1>

      <div className="flex justify-center mb-8">
        <div className="relative w-64 h-80">
          <Image
            src="/images/muveszet.jpg"
            alt="Művészetterápia"
            fill
            className="object-cover rounded-lg"
          />
          <figcaption className="text-center mt-2 text-sm text-muted-foreground">
            Szia! Örülök, hogy itt vagy!
          </figcaption>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-lg mb-4">
          Miért művészetterápia? Van benne valami természetes, valami magától értetődő, mégis felszabadító és
          gondolkodásra késztető.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Mire jó?</h2>

        <p className="mb-3">
          Segítségével a saját erőforrásokat aktivizálni tudjunk. -- Valljuk be, erre nagy szükség van mostanában.
        </p>

        <p className="mb-3">
          Segít abban, hogy az önmagunkról alkotott képen javítani tudjuk. -- Valljuk be, erre nagy szükség van
          mostanában.
        </p>

        <p className="mb-3">
          Amikor alkotunk, akkor öngyógyító folyamatok zajlanak és ezek hatásai meg is maradnak. -- Valljuk be, erre
          nagy szükség van mostanában.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mit történik?</h2>

        <p className="mb-3">
          A terápiás folyamat során szabadon alkothatsz, megnyilvánulhatsz, mozoghatsz, nem foglak sem befolyásolni, sem
          irányítani. <strong>Önmagad lehetsz.</strong> -- Valljuk be, erre nagy szükség van mostanában.
        </p>

        <p className="mb-3">
          Ítélkezés nélkül foglak visszatükrözni, ezáltal jobban <strong>el tudod magad fogadni</strong>, igyekszem,
          hogy rávezesselek arra, hogy a különböző élményeidet, folyamataidat átértékeld és elfogadd olyannak,
          amilyenek. -- Valljuk be, erre nagy szükség van mostanában.
        </p>

        <p className="mb-3">
          A folyamat során megélt tapasztalataid alapján fejlődni, növekedni fogsz. Tapasztalataidat nyitottan, szabadon
          fogod látni és ezeket be is tudod az <strong>énkép</strong>edbe illeszteni. -- Valljuk be, erre nagy szükség
          van mostanában.
        </p>

        <p className="mb-3">
          A terápia középppontjában nem a problémáid, lelki zavaraid állnak, hanem <strong>Te</strong>. -- Valljuk be,
          erre nagy szükség van mostanában.
        </p>

        <p className="mb-3">
          A művészetterápia lehetővé teszi, hogy szimbólumokon és metaforákon keresztül kommunikálj ahelyett, hogy
          verbalizálni próbálnád, amit érzel. A művészet abban is segíthet, hogy hozzáférjen az eltárolt emlékekhez,
          amelyek esetleg nem csak beszéddel jönnek elő.
        </p>

        <p className="mb-3">
          Terápia során a feltétel nélküli <strong>elfogadás</strong>sal dolgozom, ami azt jelenti, úgy vagy jó, ahogy
          vagy. Szabadon vállalhatod önmagad, bármit előhozhatsz Magadból, fájdalmas, szégyenletes, félelmetes dolgokat
          is. Biztonságot nyújtok, Feléd fordulok. -- Valljuk be, erre nagy szükség van mostanában.
        </p>

        <p className="mb-3">
          Amit még tőlem kapsz, az az aktív, értő <strong>figyelem</strong>. -- Valljuk be, erre nagy szükség van
          mostanában.
        </p>

        <p className="mb-3">
          A terápián történteket és az elhangzottakat teljes <strong>diszkréció </strong>védi.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Milyen eszközöket használok?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-medium mb-2">
              <strong>Képzőművészet:</strong>
            </h3>
            <p>Festék, rajzolás, tépés, ragasztás.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              <strong>Zene:</strong>
            </h3>
            <p>
              Hozott vagy a csoport témájához kapcsolódóan választott. A zene lehet passzív, avagy zenehallgatás vagy
              aktív, ami közös zenélést jelent.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">
              <strong>Mozgás:</strong>
            </h3>
            <p>
              Mozgásterápia során egy olyan folyamaton mehetsz keresztül, amely során a mozgás és a képzelet
              találkozásán keresztül felszabadul az éned kreatív ereje és képessé válsz a belső harmóniád
              újrateremtésére. Testünk mindenre emlékszik és lehetőségünk van arra, hogy ezeket az emlékeket "át tudjuk
              írni" kellemesre, harmónikusra, még akkor is ha az előtte traumatikus volt. Testünk és lelkünk egy
              egységet alkot. Rendelkezünk egy olyan "nyelvvel", amely a személyiségünkből, élettörtenetünkből
              származik. Mozgásterápia során ezt a nyelvet "használjuk", azaz a testünk nyelvét és ezáltal testünket a
              gyógyulás szolgálatába állítjuk.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              <strong>Irodalom:</strong>
            </h3>
            <p>
              "Mindannyian olvassuk magunkat és a világot avégett, hogy megragadhassuk, mik vagyunk és hol vagyunk.
              Azért olvasunk, hogy megértsünk valamit, vagy hogy elinduljunk a megértés útján." /Manguel/
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="mb-4">A terápia történhet csoportos vagy egyéni formában.</p>

        <blockquote className="border-l-4 border-primary pl-4 italic text-lg mb-6">
          <p className="mb-2">„A művészetterápia a folyamatról szól, nem a termékről."</p>
          <footer>Sorbara</footer>
        </blockquote>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full md:w-auto">
            <Link href="/muveszetterapia/csoportok">Aktuális csoportok</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
