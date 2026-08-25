 "use client";
import {useState} from "react";

const nav=[["Dashboard","📊"],["Campaigns","📢"],["Products","📦"],["Instagram","📸"],["Facebook","📘"],["Activity","📜"],["Analytics","📈"],["Demo Mode","🧪"],["Settings","⚙️"]];
const products0=[{id:1,title:"LKPD Informatika Kelas X (2026)",file:"LKPD-Informatika-X-2026.pdf",size:"2.4 MB",downloads:642},{id:2,title:"Template Canva Marketing Bisnis",file:"Template-Canva-Bisnis.pdf",size:"1.8 MB",downloads:300}];
const campaigns0=[{id:1,name:"Otomatisasi LKPD Gratis",keys:["LKPD","MAU LKPD","INFORMATIKA"],platform:"Both",product:1,active:true},{id:2,name:"Promo Template Canva",keys:["CANVA","TEMPLATE"],platform:"Instagram",product:2,active:true},{id:3,name:"Modul Etika Digital",keys:["ETIKA","MODUL"],platform:"Facebook",product:1,active:true}];

function Stat({label,value,icon,note,tone=""}) {
  return <div className="gm-stat"><div><span>{label}</span><b>{icon}</b></div><strong className={tone}>{value}</strong><small>{note}</small></div>;
}

export default function Home(){
 const [tab,setTab]=useState("Dashboard"),[products,setProducts]=useState(products0),[campaigns,setCampaigns]=useState(campaigns0);
 const [comment,setComment]=useState(""),[result,setResult]=useState(null),[modal,setModal]=useState(null),[name,setName]=useState(""),[keys,setKeys]=useState("");

 const runDemo=()=>{
   const text=comment.toUpperCase();
   const c=campaigns.find(x=>x.active&&x.keys.some(k=>text.includes(k)));
   setResult(c?`✓ Keyword cocok dengan campaign “${c.name}”. DM PDF siap dikirim.`:"✕ Tidak ada keyword yang cocok.");
 };
 const addCampaign=()=>{
   if(!name||!keys)return;
   setCampaigns(v=>[...v,{id:Date.now(),name,keys:keys.split(",").map(x=>x.trim().toUpperCase()),platform:"Both",product:products[0].id,active:true}]);
   setName("");setKeys("");setModal(null);
 };
 const addProduct=()=>{
   if(!name)return;
   setProducts(v=>[...v,{id:Date.now(),title:name,file:name.replaceAll(" ","-")+".pdf",size:"—",downloads:0}]);
   setName("");setModal(null);
 };

 return <div className="gm-app">
  <header className="gm-header"><div className="gm-header-inner">
   <div className="gm-brand"><div className="gm-logo">H</div><div><div><b>HAMISAH</b><em>AUTO REPLY</em></div><small>Otomatisasi Instagram & Facebook dibuat sederhana.</small></div></div>
   <div className="gm-badges"><span>● IG Professional</span><span>● FB Page</span><span className="blue">● Webhook v19.0</span><button onClick={()=>setTab("Demo Mode")}>⚡ Demo Simulator</button></div>
  </div></header>

  <div className="gm-shell">
   <aside className="gm-side">
    <p className="gm-menu">MENU UTAMA</p>
    {nav.slice(0,3).map(([n,i])=><button className={tab===n?"on":""} onClick={()=>setTab(n)} key={n}><span>{i} {n}</span><small>{n==="Dashboard"?"Utama":n==="Campaigns"?campaigns.length:products.length}</small></button>)}
    <p className="gm-menu">KONEKSI META</p>
    {nav.slice(3,5).map(([n,i])=><button className={tab===n?"on":""} onClick={()=>setTab(n)} key={n}>{i} {n==="Instagram"?"Instagram API":"Facebook Page"}</button>)}
    <p className="gm-menu">MONITORING & TOOLS</p>
    {nav.slice(5).map(([n,i])=><button className={tab===n?"on":""} onClick={()=>setTab(n)} key={n}><span>{i} {n}</span>{n==="Activity"&&<small className="live">Live</small>}{n==="Demo Mode"&&<small className="sand">SANDBOX</small>}</button>)}
    <div className="gm-sidefoot">100% Meta Graph API Compliant<br/><span>No Scraping • Zero Selenium</span></div>
   </aside>

   <main className="gm-main">
    {tab==="Dashboard"&&<>
      <section className="gm-hero"><div><label>✨ Resmi API Meta Graph v19.0</label><h1>Otomatiskan Balasan Komentar & Kirim PDF dalam Detik</h1><p>Aplikasi mengawasi komentar Instagram & Facebook Page Anda, mencocokkan keyword produk, dan langsung mengirimkan tautan unduhan PDF aman melalui DM.</p><button onClick={()=>setTab("Campaigns")}>+ Buat Campaign Baru</button><button className="ghost" onClick={()=>setTab("Demo Mode")}>Uji di Demo Mode Sandbox</button></div></section>

      <div className="gm-sectionhead"><div><h2>Ringkasan Performa Sistem</h2><p>Statistik real-time pengolahan komentar dan pengiriman DM otomatis minggu ini.</p></div><span>🟢 Webhook Active</span></div>
      <div className="gm-stats">
       <Stat label="Total Comments" value="1,284" icon="💬" note="↑ 12% dari minggu lalu"/>
       <Stat label="Keyword Matched" value="942" icon="🎯" note="73.3% Match Rate" tone="sage"/>
       <Stat label="Instagram DM" value="618" icon="📸" note="Status: 100% Sent"/>
       <Stat label="FB Messenger" value="324" icon="📘" note="Status: 100% Sent"/>
       <Stat label="Active Campaigns" value={campaigns.filter(x=>x.active).length} icon="📢" note="Multi-keyword ready" tone="gold"/>
       <Stat label="Digital Products" value={products.length} icon="📄" note="PDF Files Secured"/>
       <div className="duplicate"><span>Duplicate Guard <b>100% Protection</b></span><strong>SHA-256 Deduplication Active</strong><small>Mencegah spam DM ganda untuk comment_id yang sama.</small></div>
      </div>

      <div className="gm-two">
       <section className="gm-card"><h3>Tren Komentar vs DM Terkirim</h3><p>Aktivitas otomatisasi 7 hari terakhir</p><div className="gm-chart">{[45,65,52,76,60,88,72].map((x,i)=><i key={i} style={{height:x+"%"}}/>)}</div></section>
       <section className="gm-card center"><h3>Distribusi Platform</h3><p>Instagram vs Facebook Page</p><div className="donut">65%</div><small>Instagram 65% • Facebook 35%</small></section>
      </div>

      <section className="gm-card"><div className="gm-cardhead"><div><h3>Aktivitas Terakhir (Live Webhook Feed)</h3><p>Log transaksi real-time balasan komentar dan pesan DM.</p></div><button className="link" onClick={()=>setTab("Activity")}>Lihat Semua Audit Log →</button></div>
       <div className="table"><table><thead><tr><th>Waktu</th><th>Platform</th><th>User</th><th>Komentar</th><th>Keyword</th><th>Campaign</th><th>Status</th></tr></thead>
       <tbody>{[["12:04","Instagram","@guru_kreatif","Saya mau LKPD","LKPD","Otomatisasi LKPD Gratis"],["11:58","Facebook","User Edu","Minta template","CANVA","Promo Template Canva"],["11:41","Instagram","@kelasdigital","Mau modul etika","ETIKA","Modul Etika Digital"]].map(r=><tr key={r[0]}>{r.map(x=><td key={x}>{x}</td>)}<td><b className="sent">Sent</b></td></tr>)}</tbody></table></div>
      </section>
    </>}

    {tab==="Campaigns"&&<section className="gm-page"><div className="gm-sectionhead"><div><label className="pill">📢 Rules Automation Hub</label><h2>Kelola Campaign & Multi-Keywords</h2><p>Atur aturan otomatisasi. Satu campaign dapat menangani banyak variasi keyword sekaligus.</p></div><button className="sagebtn" onClick={()=>setModal("campaign")}>+ Tambah Campaign Baru</button></div>
      {campaigns.map(c=><div className="campaign" key={c.id}><div><b>{c.name}</b><small>{c.keys.join(" • ")}</small></div><span>{c.platform}</span><span>{products.find(p=>p.id===c.product)?.title}</span><button className={c.active?"active":"off"} onClick={()=>setCampaigns(v=>v.map(x=>x.id===c.id?{...x,active:!x.active}:x))}>{c.active?"ACTIVE":"OFF"}</button></div>)}
    </section>}

    {tab==="Products"&&<section className="gm-page"><div className="gm-sectionhead"><div><label className="pill amber">🔒 Signed PDF Vault</label><h2>Digital Product & PDF Library</h2><p>Simpan dokumen digital (PDF, Modul, Template) untuk dikirim otomatis.</p></div><button className="sagebtn" onClick={()=>setModal("product")}>+ Tambah Produk Baru</button></div>
      <div className="productgrid">{products.map(p=><article key={p.id}><div className="pdf">PDF</div><div><b>{p.title}</b><small>{p.file}</small><small>{p.size} • {p.downloads} downloads</small><a>Preview / Kelola →</a></div></article>)}</div>
    </section>}

    {(tab==="Instagram"||tab==="Facebook")&&<section className="gm-page connection"><div className="platform">{tab==="Instagram"?"📸":"📘"}</div><h2>{tab==="Instagram"?"Koneksi Instagram Professional":"Koneksi Facebook Page"}</h2><p>API resmi Meta Graph v19.0 • OAuth 2.0</p><div className="connected"><b>✓</b><div><strong>{tab==="Instagram"?"Akun Terhubung: @hamisah.official":"Page Terhubung: Hamisah Edu Center"}</strong><small>Webhook Active • Token server-side</small></div><em>TERHUBUNG</em></div><div className="permissions"><div><b>API Access</b><small>Official Meta Graph API</small></div><div><b>Webhook</b><small>Real-time event listener</small></div><div><b>Messaging</b><small>Private Reply / Messenger</small></div><div><b>Security</b><small>Token server-side</small></div></div></section>}

    {tab==="Activity"&&<section className="gm-page"><div className="gm-sectionhead"><div><h2>Activity Audit Log (Real-time)</h2><p>Catatan setiap event webhook dan balasan yang dikirimkan.</p></div><span>🟢 LIVE</span></div><div className="filters"><input placeholder="Cari username / keyword..."/><select><option>Semua Platform</option><option>Instagram</option><option>Facebook</option></select><select><option>Semua Status</option><option>Sent</option><option>Failed</option></select></div><div className="table"><table><thead><tr><th>Timestamp</th><th>Platform</th><th>Username</th><th>Komentar</th><th>Keyword</th><th>Campaign</th><th>Status</th></tr></thead><tbody>{["@guru_kreatif_2026","@kelas_digital","@hamisah.edu"].map((u,i)=><tr key={u}><td>2026-08-25 12:{10+i}</td><td>{i===1?"Facebook":"Instagram"}</td><td>{u}</td><td>{i===1?"Minta template CANVA":"Saya mau LKPD"}</td><td>{i===1?"CANVA":"LKPD"}</td><td>{i===1?"Promo Template Canva":"Otomatisasi LKPD Gratis"}</td><td><b className="sent">Sent</b></td></tr>)}</tbody></table></div></section>}

    {tab==="Analytics"&&<section className="gm-page"><h2>Analitik & Performa Keyword</h2><p>Visualisasi keyword yang paling sering diminta oleh pengguna.</p><div className="gm-two"><section className="gm-card"><h3>Frekuensi Request Per Keyword</h3><div className="barchart">{[["LKPD",88],["CANVA",67],["ETIKA",54],["TEMPLATE",42],["MODUL",31]].map(([x,h])=><div key={x}><i style={{height:h+"%"}}/><small>{x}</small></div>)}</div></section><section className="gm-card"><h3>Jam Sibuk Komentar</h3><div className="heat">{Array.from({length:24},(_,i)=><i key={i}/>)}</div><b>Peak activity: 19.00–21.00</b></section></div></section>}

    {tab==="Demo Mode"&&<section className="gm-page"><div className="demohero"><label>🧪 Meta Webhook Simulator</label><h2>Demo Mode Sandbox</h2><p>Uji coba alur kerja otomatisasi tanpa perlu menghubungkan akun Meta asli.</p></div><div className="demo"><section className="gm-card"><h3>💬 Simulator Komentar Masuk</h3><label>Isi Komentar Pengguna</label><textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder="Tolong kirimkan file LKPD dong min"/><div className="quick"><button onClick={()=>setComment("Halo min, saya mau LKPD Informatika")}>LKPD</button><button onClick={()=>setComment("Minta template CANVA dong!")}>CANVA</button><button onClick={()=>setComment("Apakah ada modul ETIKA digital?")}>ETIKA</button></div><button className="sagebtn wide" onClick={runDemo}>⚡ Simulasi Webhook Matcher</button>{result&&<div className={result[0]==="✓"?"okbox":"badbox"}>{result}</div>}</section><div className="phone"><div><b>Hamisah Official</b><small>Active now • Automated</small></div><div className="chat"><span>Pesan simulasi akan muncul di sini.</span>{result?.[0]==="✓"&&<><p className="userbubble">{comment}</p><p className="botbubble">Halo kak! 👋 Terima kasih sudah berkomentar.<br/><br/>📥 Berikut link download yang kamu minta.</p></>}</div><small>Powered by Meta Graph API Direct Messages</small></div></div></section>}

    {tab==="Settings"&&<section className="gm-page"><h2>Settings & Production Specifications</h2><p>Konfigurasi Environment, Database SQL Schema, dan Endpoint Next.js Webhook Handler.</p><div className="specs"><div><b>Environment Variables</b><code>META_APP_ID<br/>META_APP_SECRET<br/>META_VERIFY_TOKEN<br/>INSTAGRAM_ACCESS_TOKEN<br/>FACEBOOK_PAGE_ACCESS_TOKEN<br/>DATABASE_URL</code></div><div><b>Database Schema</b><code>campaigns<br/>products<br/>activity_logs<br/>comment_id UNIQUE<br/>deduplication guard</code></div><div><b>Webhook</b><code>/app/api/webhooks/meta/route.js<br/><br/>GET → verification<br/>POST → event listener</code></div></div></section>}
   </main>
  </div>

  <footer className="gm-footer"><b>Hamisah Social Auto Reply</b><span>© 2026 Hamisah • All Rights Reserved</span><small>Built with Next.js, Tailwind CSS & Official Meta Graph API</small></footer>

  {modal&&<div className="modal"><div className="modalbox"><h3>{modal==="campaign"?"Tambah Campaign Baru":"Tambah Produk PDF Baru"}</h3>{modal==="campaign"?<><input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama Campaign"/><input value={keys} onChange={e=>setKeys(e.target.value)} placeholder="Keyword: LKPD, CANVA, ETIKA"/></>:<input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama Produk"/>}<div><button onClick={()=>setModal(null)}>Batal</button><button className="sagebtn" onClick={modal==="campaign"?addCampaign:addProduct}>Simpan</button></div></div></div>}
 </div>;
}
