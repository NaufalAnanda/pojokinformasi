import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { U as Users, Q as Quote, a as MapPin } from "../_libs/lucide-react.mjs";
import { M as MapContainer, T as TileLayer, P as Polygon, a as Tooltip } from "../_libs/react-leaflet.mjs";
import "../_libs/leaflet.mjs";
import "../_libs/react-leaflet__core.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function MapDesa() {
  const posisi = [-8.60453475014928, 116.43341124057771];
  const zoom = 13;
  const style_polygon = {
    color: "#FF0000",
    weight: 2,
    fillColor: "#8888dd",
    fillOpacity: 0.5
  };
  const polygon_desa = [
    [
      [
        [-8.626993056288505, 116.44115209579469],
        [-8.626801905744808, 116.44142031669618],
        [-8.626509870005071, 116.44167780876161],
        [-8.626408984878877, 116.44168317317964],
        [-8.626260312012166, 116.44157588481904],
        [-8.62611694883532, 116.44156515598299],
        [-8.62564559535511, 116.44141495227815],
        [-8.625305770887, 116.44146859645845],
        [-8.624733368497715, 116.4411896467209],
        [-8.624680270816501, 116.4409911632538],
        [-8.624297967291401, 116.44078195095064],
        [-8.623984690503232, 116.44049227237703],
        [-8.623603702898535, 116.4404332637787],
        [-8.623109892698523, 116.44017577171327],
        [-8.622961218533407, 116.43997728824615],
        [-8.622574793846574, 116.43974661827089],
        [-8.621964166573209, 116.43935501575471],
        [-8.621730535007599, 116.43923163414003],
        [-8.621434213588413, 116.43903851509096],
        [-8.621110314788641, 116.43899023532869],
        [-8.620881992517045, 116.4387220144272],
        [-8.620431727530304, 116.43834114074708],
        [-8.619943223020266, 116.43833577632905],
        [-8.61927560205458, 116.43785297870636],
        [-8.619047278674662, 116.43742382526399],
        [-8.618458426212019, 116.43690884113313],
        [-8.61838408822184, 116.43674254417421],
        [-8.61808787840837, 116.43664062023164],
        [-8.618162216456842, 116.43622756004335],
        [-8.61771618794694, 116.43617928028108],
        [-8.617530811521405, 116.43613636493683],
        [-8.61750426217572, 116.43590569496156],
        [-8.617344966062511, 116.43593251705171],
        [-8.616957345240001, 116.4360398054123],
        [-8.616751366205149, 116.4356428384781],
        [-8.616284096485623, 116.43583059310915],
        [-8.61603453173979, 116.43576622009279],
        [-8.615880544899541, 116.43565356731416],
        [-8.615536315594907, 116.43587350845338],
        [-8.615361703994, 116.43580913543703],
        [-8.61523325003842, 116.43573537468912],
        [-8.615123069572217, 116.43564015626909],
        [-8.614986608593801, 116.43551141023637],
        [-8.61477475343821, 116.43530219793323],
        [-8.614459535256486, 116.43500983715059],
        [-8.614533874018242, 116.43480062484743],
        [-8.61455511366176, 116.43461287021638],
        [-8.614194039559464, 116.4343822002411],
        [-8.614257758543754, 116.43392622470857],
        [-8.614236518883533, 116.43382966518404],
        [-8.614018812297351, 116.43375992774965],
        [-8.613988305517065, 116.43355071544649],
        [-8.613945826165146, 116.43311083316804],
        [-8.613675020184463, 116.4330679178238],
        [-8.61366440033817, 116.43249928951265],
        [-8.613016589148206, 116.43240809440614],
        [-8.61263499528592, 116.43218815326692],
        [-8.612274556640003, 116.43203258514406],
        [-8.612035609140804, 116.43219888210298],
        [-8.611971889782225, 116.43246710300447],
        [-8.611728161212621, 116.43270313739778],
        [-8.611568862666545, 116.43299281597137],
        [-8.611283081051063, 116.4333736896515],
        [-8.611038822965616, 116.43332540988922],
        [-8.611182191860985, 116.43394231796266],
        [-8.611070682724845, 116.43431246280672],
        [-8.61076882053706, 116.4346343278885],
        [-8.610391812913626, 116.43466651439668],
        [-8.610312163367638, 116.43517613410951],
        [-8.61035464312757, 116.43558382987976],
        [-8.609871435576848, 116.4356964826584],
        [-8.609520976967174, 116.43573939800264],
        [-8.60912910230187, 116.4358949661255],
        [-8.608620190940199, 116.43612027168275],
        [-8.608030781143716, 116.43634021282197],
        [-8.607925675309122, 116.43586277961732],
        [-8.607612198577305, 116.43595933914185],
        [-8.60697499706016, 116.43619537353517],
        [-8.606865278334674, 116.43627583980562],
        [-8.606642948894702, 116.4366352558136],
        [-8.6067656872143, 116.43678814172748],
        [-8.6067364821029, 116.43700271844865],
        [-8.606529929345193, 116.43696516752246],
        [-8.606126367355056, 116.43697053194047],
        [-8.605471474032049, 116.4367961883545],
        [-8.60551395433527, 116.43745332956316],
        [-8.605103370124736, 116.4374613761902],
        [-8.604694917424787, 116.4373701810837],
        [-8.604455965140266, 116.43735408782959],
        [-8.604105513541402, 116.4372816681862],
        [-8.603524569853853, 116.43727898597719],
        [-8.602938549681564, 116.43732726573946],
        [-8.602885626303843, 116.43782347440721],
        [-8.602254836189116, 116.43786370754242],
        [-8.600811789442373, 116.43784761428834],
        [-8.599852324906866, 116.43784761428834],
        [-8.59979391361551, 116.43777251243593],
        [-8.599226277710098, 116.4377671480179],
        [-8.599023999862837, 116.43777519464494],
        [-8.599013848570655, 116.43760889768602],
        [-8.598758962305531, 116.43737286329272],
        [-8.598668690045498, 116.43717974424364],
        [-8.598708516045244, 116.43660575151445],
        [-8.598737893128487, 116.43633484840394],
        [-8.598862681224144, 116.43546044826509],
        [-8.598889231877482, 116.43478453159334],
        [-8.598934389027251, 116.43446803092958],
        [-8.597592408855247, 116.43416762351991],
        [-8.597035810833352, 116.43395841121675],
        [-8.596727821633756, 116.43386721611023],
        [-8.596881816264839, 116.43310010433198],
        [-8.597359730238754, 116.43326640129091],
        [-8.597784542154047, 116.43331468105316],
        [-8.597422610320502, 116.43174827098848],
        [-8.597227439372537, 116.43053054809572],
        [-8.596951317288285, 116.42965614795686],
        [-8.59627161650087, 116.4298278093338],
        [-8.596091070774326, 116.42911434173585],
        [-8.595593435638886, 116.42938792705537],
        [-8.594972793803336, 116.42911434173585],
        [-8.594590460264703, 116.42879784107208],
        [-8.594489566627713, 116.428599357605],
        [-8.594293089468053, 116.42876029014589],
        [-8.59371525180255, 116.42896950244905],
        [-8.593269194490384, 116.42907679080965],
        [-8.592799086763788, 116.42912507057191],
        [-8.592141389030099, 116.42900705337526],
        [-8.59205642542032, 116.42811655998231],
        [-8.591599745691719, 116.42815947532655],
        [-8.590761858363727, 116.4282774925232],
        [-8.590677579870619, 116.42857789993288],
        [-8.589594288239114, 116.42836332321168],
        [-8.589692217802797, 116.42761230468751],
        [-8.588831954819444, 116.42750501632692],
        [-8.587897502236816, 116.4274835586548],
        [-8.588004333215617, 116.4268183708191],
        [-8.587898127542058, 116.4261317253113],
        [-8.588354811727458, 116.42588496208192],
        [-8.587919368679138, 116.42534852027894],
        [-8.58835837235542, 116.42505884170534],
        [-8.588464577900165, 116.42457067966463],
        [-8.58840085457691, 116.4241522550583],
        [-8.58844864707036, 116.42394840717317],
        [-8.588782526964446, 116.42397522926332],
        [-8.589594997716846, 116.4238625764847],
        [-8.589853733345675, 116.42388939857484],
        [-8.590421930424071, 116.42450630664827],
        [-8.590696836725101, 116.4246189594269],
        [-8.591339375855181, 116.42462432384491],
        [-8.591891640022633, 116.42448484897615],
        [-8.592309632698019, 116.42453849315645],
        [-8.592591074394512, 116.42468333244325],
        [-8.59311147547174, 116.42538607120515],
        [-8.59347132509738, 116.42539680004121],
        [-8.5936412516638, 116.42531096935272],
        [-8.593604080233895, 116.42495691776276],
        [-8.5937315251212, 116.42462432384491],
        [-8.593742145526559, 116.4240610599518],
        [-8.59435218101386, 116.42347097396852],
        [-8.594632863626275, 116.42332077026369],
        [-8.595163882266412, 116.42295598983766],
        [-8.595635544279308, 116.42272531986238],
        [-8.596177181851939, 116.42308473587038],
        [-8.596489435503058, 116.42314910888673],
        [-8.59687176712622, 116.42340123653413],
        [-8.597424023234325, 116.42398059368135],
        [-8.597884496980807, 116.42452239990236],
        [-8.598542954334627, 116.42477989196777],
        [-8.598875875383968, 116.42527341842653],
        [-8.599305995724206, 116.4258635044098],
        [-8.599724918151917, 116.42574548721315],
        [-8.599300108412061, 116.4252144098282],
        [-8.59928417803752, 116.4246565103531],
        [-8.599549684191938, 116.42427027225494],
        [-8.599847050864009, 116.42427563667299],
        [-8.600245309434131, 116.42450630664827],
        [-8.601040773158559, 116.42458140850069],
        [-8.601470891040877, 116.4249086380005],
        [-8.601607630754252, 116.42533242702486],
        [-8.602018549432897, 116.42568111419679],
        [-8.60243539100314, 116.42599493265155],
        [-8.602915210487938, 116.4265823364258],
        [-8.603570300625819, 116.4272850751877],
        [-8.604010374400524, 116.42817288637163],
        [-8.604296432060277, 116.42871737480165],
        [-8.605095002237016, 116.42904192209245],
        [-8.605390010149202, 116.42920553684236],
        [-8.606016594273255, 116.42978489398958],
        [-8.606264476182377, 116.430401802063],
        [-8.606524667419816, 116.43054664134979],
        [-8.607140629636511, 116.4306002855301],
        [-8.607422060315692, 116.43068075180055],
        [-8.608222620560012, 116.43098115921022],
        [-8.609001921120269, 116.43124401569366],
        [-8.609733881188411, 116.43069148063661],
        [-8.609717951252888, 116.43022477626802],
        [-8.611017865697304, 116.42962932586671],
        [-8.612322803046096, 116.42923772335054],
        [-8.613591606526116, 116.42822384834291],
        [-8.61606365436885, 116.42802000045778],
        [-8.617016715816609, 116.42793416976929],
        [-8.617855675320499, 116.42806291580202],
        [-8.619424951019269, 116.42913579940797],
        [-8.61987097751294, 116.42965078353882],
        [-8.62025328551714, 116.43060564994813],
        [-8.62035948211636, 116.43138885498048],
        [-8.62139774228191, 116.43178582191469],
        [-8.621695091784048, 116.43282651901245],
        [-8.623487927714107, 116.43415689468385],
        [-8.623795895133316, 116.43435001373292],
        [-8.624018905866395, 116.43558382987976],
        [-8.62584356523511, 116.43761157989503],
        [-8.625503740945112, 116.43988609313966],
        [-8.625981402335546, 116.4403259754181],
        [-8.62655485492232, 116.44028306007387],
        [-8.626894678266561, 116.44073367118837]
      ]
    ]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MapContainer,
    {
      center: posisi,
      zoom,
      style: { height: "100%", width: "100%" },
      className: "z-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TileLayer,
          {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Polygon, { positions: polygon_desa, pathOptions: style_polygon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { sticky: true, children: "Wilayah Desa Gelora" }) })
      ]
    }
  );
}
const heroImgKetua = "/assets/ketua-CBKaKKq-.jpg";
const heroImgSekre = "/assets/nurul-CPRIFJCS.jpg";
const heroImgBendahara = "/assets/sisna-9pdYIRV0.jpg";
const heroImgHumas = "/assets/ecak-d0eP1J6g.jpg";
const heroImgAcara1 = "/assets/kayla-Dpiskubt.jpg";
const heroImgAcara2 = "/assets/aris-BFsQ04HD.jpg";
const heroImgPDD1 = "/assets/wilda-ButK7v5Q.jpg";
const heroImgPDD2 = "/assets/leli-5pIPPwtF.jpg";
const heroImgPerkap1 = "/assets/ahsan-D0S74J9c.jpg";
const heroImgPerkap2 = "/assets/naufall-KGGKGLUk.jpg";
const heroImgDpk = "/assets/budpk-Bp5092be.jpg";
const pengurus = [{
  name: "-",
  role: "DPK",
  photo: heroImgDpk
}, {
  name: "Rizky Agung Kurniawan",
  role: "Ketua Kelompok",
  photo: heroImgKetua
}, {
  name: "-",
  role: "Sekretaris",
  photo: heroImgSekre
}];
const divisi1 = [{
  name: "-",
  role: "Bendahara",
  photo: heroImgBendahara
}, {
  name: "-",
  role: "Divisi Humas",
  photo: heroImgHumas
}, {
  name: "-",
  role: "Divisi Acara",
  photo: heroImgAcara1
}, {
  name: "-",
  role: "Divisi Acara",
  photo: heroImgAcara2
}];
const divisi2 = [{
  name: "-",
  role: "Divisi PDD",
  photo: heroImgPDD1
}, {
  name: "-",
  role: "Divisi PDD",
  photo: heroImgPDD2
}, {
  name: "-",
  role: "Divisi Perlengkapan",
  photo: heroImgPerkap1
}, {
  name: "Naufal Pramudya Ananda",
  role: "Divisi Perlengkapan",
  photo: heroImgPerkap2
}];
const dusun = ["Dusun Serengat", "Dusun Rungkang", "Dusun Rungkang Barat", "Dusun Gerami", "Dusun Gerami Timur", "Dusun Dasan Tinggi", "Dusun Dasan Tinggi Utara"];
function TentangKami() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary", children: "Tentang Kami" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl font-extrabold text-foreground sm:text-5xl", children: "Kelompok KKN PMD Desa Gelora." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground sm:text-lg", children: "Mahasiswa pengabdian masyarakat yang berkolaborasi dengan warga 7 dusun untuk membangun ekosistem ekonomi hijau berkelanjutan." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Profil Kelompok" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 grid max-w-4xl gap-4 md:grid-cols-3", children: pengurus.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 text-center transition-all hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-leaf-soft text-2xl font-extrabold text-primary shadow-sm ring-2 ring-primary/20", children: m.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.photo, alt: `Foto ${m.name}`, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.name !== "-" ? m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") : "-" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-bold text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: m.role })
      ] }, m.role)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: divisi1.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 text-center transition-all hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-leaf-soft text-xl font-extrabold text-primary shadow-sm ring-2 ring-primary/20", children: m.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.photo, alt: `Foto ${m.name}`, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.name !== "-" ? m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") : "-" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-sm font-bold text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: m.role })
      ] }, m.role)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: divisi2.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 text-center transition-all hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-leaf-soft text-xl font-extrabold text-primary shadow-sm ring-2 ring-primary/20", children: m.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.photo, alt: `Foto ${m.name}`, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.name !== "-" ? m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") : "-" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-sm font-bold text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: m.role })
      ] }, m.role)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-16 grid gap-5 md:grid-cols-2", children: [{
      from: "Kepala Desa Gelora",
      role: "Pemerintah Desa"
    }, {
      from: "Dosen Pembimbing Lapangan",
      role: "Universitas Mataram"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-secondary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-foreground/85", children: '"Program Ekonomi Hijau ini menjadi langkah nyata kolaborasi mahasiswa dan warga Gelora — bukan hanya mengurangi sampah, tetapi menumbuhkan kemandirian ekonomi dari halaman rumah kita sendiri."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: s.from }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.role })
      ] })
    ] }, s.from)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Profil Desa Gelora" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-7 ring-1 ring-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-foreground/85", children: "Desa Gelora berlokasi di Kecamatan Sikur, Kabupaten Lombok Timur, Nusa Tenggara Barat. Selain mengandalkan sektor pertanian, roda ekonomi masyarakat juga digerakkan oleh usaha kreatif lokal, salah satunya adalah produksi batu bata. Secara administratif, desa ini terdiri dari 7 dusun yaitu:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: dusun.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-leaf-soft/70 px-4 py-3 text-sm font-semibold text-primary", children: d }, d)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 relative h-[450px] w-full overflow-hidden rounded-3xl bg-muted ring-1 ring-border shadow-sm z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapDesa, {}) })
    ] })
  ] });
}
export {
  TentangKami as component
};
