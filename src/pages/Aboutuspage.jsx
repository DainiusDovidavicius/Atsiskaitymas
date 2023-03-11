import React from "react";
import Header from "../components/Header";
import "./Aboutuspage.css";

function Aboutuspage() {
  return (
    <div>
      <Header />
      <div className="tekstas">
        <p>
          „GG Arena“ - tai viena didžiausių elektroninio sporto arenų visoje
          Europoje. Pas mus veiklos sau ras kiekvienas atvykęs. Arenoje iš viso
          yra net 52 kompiuteriai, kurie yra suskirstyti į STANDART ir VIP.
          Patyrę „gamer‘iai“ žaisdami VIP kompiuteriais galės mėgautis
          populiariausiais ir mėgstamiausiais žaidimais per profesionalių
          elektroninio sporto atstovų patvirtintus „BenQ“ monitorius, su net 240
          hercų atnaujinimo dažniu ir specialiais valdymo įrankiais. Klientų
          patogumui yra naudojami specialūs, žaidimams pritaikyti „Logitech“
          komponentai ir patogi, valdoma kėdė.
        </p>
        <p>
          Norintiems ypatingų patogumų, siūlome rinktis VIP kambarius, dar
          kitaip vadinamus „Boot Camp“. Tokių kambarių arenoje yra net trys:
          vienas keturvietis ir du penkiaviečiai. Šiuose kambariuose galėsite
          visiškai atsipalaiduoti ir pilnai pasinerti į virtualųjį pasaulį.
          Kambariuose mūsų klientai ras galingiausių specifikacijų VIP
          kompiuterius, turinčius naujosios kartos „GeForce RTX“ 3 serijos
          vaizdo plokštes su net 12 GB darbinės atminties. Šių kompiuterių darbą
          apdoroja naujausi „AMD Ryzen 7“ 8 branduolių procesoriai bei KINGSTON
          operatyvioji darbinė atmintis. Gera patirtis garantuota!
        </p>
        <p>
          Norintiems padaryti pertraukėles tarp žaidimų, siūlome prisėsti
          poilsio zonoje, atsigerti kavos ar gaivaus gėrimo bei suvalgyti
          užkandį. O besiilsint, per didžiulį projektorių galės stebėti
          elektroninio sporto transliaciją ar kitas tuo metu vykstančias
          rungtynes. „GG Arenoje“ taip pat yra organizuojami įvairūs turnyrai,
          yra galimybė švęsti gimtadienius ar kitas asmenines šventes.
        </p>
        <p>
          Mes dirbame visą parą, todėl „GG Arenos“ kolektyvas yra nusiteikęs
          maloniai jus priimti visada. Kiekvieną mėnesį pas mus vyksta įvairios
          akcijos, o nuolatinius klientus esame linkę nustebinti įvairiomis
          dovanomis. Esant kokiems nesklandumams ar neaiškumams nesidrovėkite ir
          klauskite administracijos darbuotojų, kurie visada jums padės.
          Laukiame jūsų visų jau dabar!
        </p>
        <h1 className="visit">You Will Find Us Here:</h1>
        <h1 className="visit">Savanorių pr.15A</h1>
        <iframe
          className="map"
          title="1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.9100184875897!2d25.249232215569343!3d54.67601208198438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd947658edcabf%3A0xd44e44d708fb7d29!2sSavanori%C5%B3%20pr.%2015A%2C%2003126%20Vilnius!5e0!3m2!1slt!2slt!4v1678531428056!5m2!1slt!2slt"
        ></iframe>
      </div>
    </div>
  );
}

export default Aboutuspage;
