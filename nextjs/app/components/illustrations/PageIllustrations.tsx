"use client";
import HeroIllustration from "./HeroIllustration";
import { IconConnect, IconMail, IconClock, IconTemplate, IconBrain, IconSwitch, IconUsers, IconBuilding, IconChart, IconPlugin, IconTarget, IconStar, IconShield, IconZap, IconCheck, IconSend } from "./icons";

/* ── Shared card components ── */
const WindowDots = () => (
  <div className="hero-illo__card-header">
    <span className="hero-illo__dot hero-illo__dot--red" />
    <span className="hero-illo__dot hero-illo__dot--yellow" />
    <span className="hero-illo__dot hero-illo__dot--green" />
  </div>
);

const Bar = ({ w, delay }: { w: string; delay: string }) => (
  <div className="hero-illo__bar-track">
    <div className="hero-illo__bar-fill" style={{ width: w, animationDelay: delay }} />
  </div>
);

/* ═══════════════════════════════════════════
   PER-PAGE ILLUSTRATIONS
   Each uses the shared HeroIllustration base
   with unique center card + floating items
   ═══════════════════════════════════════════ */

/* ── Connectieverzoeken ── */
export function ConnectieIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: persoonlijke LinkedIn connectieverzoeken versturen met Elvatix — profielen worden automatisch gepersonaliseerd"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:8}}>
              <div style={{width:28,height:28,borderRadius:'50%',background:'linear-gradient(135deg,#9BBB0A,#B5D430)'}} />
              <div>
                <div style={{width:80,height:6,background:'rgba(155,187,10,0.2)',borderRadius:3,marginBottom:4}} />
                <div style={{width:52,height:4,background:'rgba(155,187,10,0.1)',borderRadius:2}} />
              </div>
            </div>
            <div style={{width:'100%',height:1,background:'rgba(155,187,10,0.1)',margin:'4px 0'}} />
            <div style={{display:'flex',gap:4,flexWrap:'wrap' as const}}>
              <div style={{padding:'3px 8px',borderRadius:9999,background:'rgba(155,187,10,0.12)',fontSize:8,fontWeight:600,color:'#7A9A00'}}>✓ Persoonlijk</div>
              <div style={{padding:'3px 8px',borderRadius:9999,background:'rgba(155,187,10,0.12)',fontSize:8,fontWeight:600,color:'#7A9A00'}}>25 tegelijk</div>
            </div>
            <Bar w="78%" delay="0.3s" />
            <Bar w="92%" delay="0.5s" />
            <Bar w="64%" delay="0.7s" />
          </div>
        </>
      }
      floats={[
        { icon: IconConnect, label: "Verbinden", position: 1 },
        { icon: IconSend, label: "Versturen", position: 2 },
        { icon: IconCheck, label: "Geaccepteerd", position: 3 },
        { icon: IconTarget, label: "Persoonlijk", position: 4 },
        { icon: IconZap, label: "Automatisch", position: 5 },
      ]}
    />
  );
}

/* ── InMails ── */
export function InMailsIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: gepersonaliseerde LinkedIn InMails versturen met Elvatix — tot 25 unieke berichten tegelijk vanuit Recruiter Seat"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'flex',gap:6,marginBottom:6}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'#9BBB0A',flexShrink:0,marginTop:2}} />
              <div style={{flex:1}}>
                <div style={{width:'90%',height:5,background:'rgba(155,187,10,0.15)',borderRadius:3,marginBottom:3}} />
                <div style={{width:'70%',height:5,background:'rgba(155,187,10,0.1)',borderRadius:3}} />
              </div>
            </div>
            <div style={{display:'flex',gap:6,marginBottom:6}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'#B5D430',flexShrink:0,marginTop:2}} />
              <div style={{flex:1}}>
                <div style={{width:'85%',height:5,background:'rgba(155,187,10,0.15)',borderRadius:3,marginBottom:3}} />
                <div style={{width:'55%',height:5,background:'rgba(155,187,10,0.1)',borderRadius:3}} />
              </div>
            </div>
            <div style={{display:'flex',gap:6}}>
              <div style={{width:8,height:8,borderRadius:'50%',background:'#7A9A00',flexShrink:0,marginTop:2}} />
              <div style={{flex:1}}>
                <div style={{width:'75%',height:5,background:'rgba(155,187,10,0.15)',borderRadius:3,marginBottom:3}} />
                <div style={{width:'60%',height:5,background:'rgba(155,187,10,0.1)',borderRadius:3}} />
              </div>
            </div>
            <div style={{marginTop:8,padding:'4px 10px',borderRadius:6,background:'linear-gradient(135deg,#9BBB0A,#7A9A00)',fontSize:8,fontWeight:700,color:'white',textAlign:'center' as const}}>Verzenden</div>
          </div>
        </>
      }
      floats={[
        { icon: IconMail, label: "InMail", position: 1 },
        { icon: IconUsers, label: "25 tegelijk", position: 2 },
        { icon: IconTemplate, label: "Jouw stijl", position: 3 },
        { icon: IconCheck, label: "Controle", position: 4 },
        { icon: IconClock, label: "Follow-up", position: 6 },
      ]}
    />
  );
}

/* ── Custom GPT ── */
export function CustomGPTIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: ingebouwde Custom GPT assistenten van Elvatix — prompt engineering zonder technische kennis"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'flex',flexDirection:'column' as const,gap:6}}>
              <div style={{alignSelf:'flex-end',background:'rgba(155,187,10,0.12)',padding:'4px 10px',borderRadius:'10px 10px 2px 10px',fontSize:8,color:'#5C8A00',maxWidth:'70%'}}>Maak het vriendelijker</div>
              <div style={{alignSelf:'flex-start',background:'rgba(155,187,10,0.06)',border:'1px solid rgba(155,187,10,0.1)',padding:'4px 10px',borderRadius:'10px 10px 10px 2px',fontSize:8,color:'#374151',maxWidth:'80%'}}>
                <div style={{width:'100%',height:4,background:'rgba(155,187,10,0.15)',borderRadius:2,marginBottom:3}} />
                <div style={{width:'70%',height:4,background:'rgba(155,187,10,0.1)',borderRadius:2}} />
              </div>
              <div style={{alignSelf:'flex-end',background:'rgba(155,187,10,0.12)',padding:'4px 10px',borderRadius:'10px 10px 2px 10px',fontSize:8,color:'#5C8A00',maxWidth:'70%'}}>Korter en directer</div>
              <div style={{alignSelf:'flex-start',background:'rgba(155,187,10,0.06)',border:'1px solid rgba(155,187,10,0.1)',padding:'4px 10px',borderRadius:'10px 10px 10px 2px',fontSize:8,color:'#374151',maxWidth:'80%'}}>
                <div style={{width:'90%',height:4,background:'rgba(155,187,10,0.15)',borderRadius:2,marginBottom:3}} />
                <div style={{width:'50%',height:4,background:'rgba(155,187,10,0.1)',borderRadius:2}} />
              </div>
            </div>
          </div>
        </>
      }
      floats={[
        { icon: IconBrain, label: "Instructie-GPT", position: 1 },
        { icon: IconTemplate, label: "Template-GPT", position: 2 },
        { icon: IconZap, label: "Geen prompts nodig", position: 3 },
        { icon: IconStar, label: "Jouw stijl", position: 4 },
        { icon: IconCheck, label: "Betere output", position: 5 },
      ]}
    />
  );
}

/* ── Reminders ── */
export function RemindersIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: automatische gepersonaliseerde follow-up reminders in LinkedIn Recruiter met Elvatix"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            {[{t:'InMail verzonden',d:'Vandaag',active:true},{t:'Follow-up #1',d:'Over 3 dagen',active:false},{t:'Follow-up #2',d:'Over 6 dagen',active:false}].map((item,i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:8,padding:'5px 0',borderBottom: i<2 ? '1px solid rgba(155,187,10,0.08)' : 'none'}}>
                <div style={{width:6,height:6,borderRadius:'50%',background: item.active ? '#9BBB0A' : 'rgba(155,187,10,0.2)',flexShrink:0}} />
                <div style={{flex:1}}>
                  <div style={{fontSize:9,fontWeight:600,color: item.active ? '#374151' : '#9ca3af'}}>{item.t}</div>
                  <div style={{fontSize:7,color:'#9ca3af'}}>{item.d}</div>
                </div>
                {item.active && <div style={{fontSize:7,padding:'2px 6px',borderRadius:4,background:'rgba(155,187,10,0.15)',color:'#7A9A00',fontWeight:600}}>Live</div>}
              </div>
            ))}
          </div>
        </>
      }
      floats={[
        { icon: IconClock, label: "Getimed", position: 1 },
        { icon: IconMail, label: "Uniek bericht", position: 2 },
        { icon: IconCheck, label: "Niet herhalend", position: 3 },
        { icon: IconTarget, label: "Relevant", position: 4 },
        { icon: IconZap, label: "25 tegelijk", position: 6 },
      ]}
    />
  );
}

/* ── Template Instructies ── */
export function TemplatesIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: recruitment templates automatisch persoonlijk maken met Elvatix — upload je eigen stijl en instructies"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{fontSize:8,fontWeight:700,color:'#374151',marginBottom:6,textTransform:'uppercase' as const,letterSpacing:'0.05em'}}>Template</div>
            <div style={{width:'100%',height:5,background:'rgba(155,187,10,0.12)',borderRadius:3,marginBottom:4}} />
            <div style={{width:'85%',height:5,background:'rgba(155,187,10,0.08)',borderRadius:3,marginBottom:4}} />
            <div style={{width:'70%',height:5,background:'rgba(155,187,10,0.06)',borderRadius:3,marginBottom:8}} />
            <div style={{display:'flex',gap:4}}>
              <div style={{flex:1,padding:'3px 6px',borderRadius:4,background:'rgba(155,187,10,0.1)',fontSize:7,fontWeight:600,color:'#7A9A00',textAlign:'center' as const}}>Korter</div>
              <div style={{flex:1,padding:'3px 6px',borderRadius:4,background:'rgba(155,187,10,0.1)',fontSize:7,fontWeight:600,color:'#7A9A00',textAlign:'center' as const}}>Luchtiger</div>
              <div style={{flex:1,padding:'3px 6px',borderRadius:4,background:'linear-gradient(135deg,#9BBB0A,#7A9A00)',fontSize:7,fontWeight:700,color:'white',textAlign:'center' as const}}>Toepassen</div>
            </div>
          </div>
        </>
      }
      floats={[
        { icon: IconTemplate, label: "Jouw template", position: 1 },
        { icon: IconBrain, label: "AI herschrijft", position: 2 },
        { icon: IconStar, label: "Tone of voice", position: 3 },
        { icon: IconUsers, label: "Op schaal", position: 4 },
        { icon: IconCheck, label: "Jij keurt goed", position: 5 },
      ]}
    />
  );
}

/* ── Recruitment/Sales Switch ── */
export function SalesSwitchIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: Elvatix Recruitment Sales Switch — wissel tussen kandidaten en prospects in één omgeving"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'flex',borderRadius:8,overflow:'hidden',marginBottom:8}}>
              <div style={{flex:1,padding:'6px 8px',background:'linear-gradient(135deg,#9BBB0A,#7A9A00)',fontSize:8,fontWeight:700,color:'white',textAlign:'center' as const}}>Recruitment</div>
              <div style={{flex:1,padding:'6px 8px',background:'rgba(155,187,10,0.08)',fontSize:8,fontWeight:600,color:'#9ca3af',textAlign:'center' as const}}>Sales</div>
            </div>
            <Bar w="88%" delay="0.3s" />
            <Bar w="72%" delay="0.5s" />
            <Bar w="95%" delay="0.7s" />
          </div>
        </>
      }
      floats={[
        { icon: IconSwitch, label: "Eén klik", position: 1 },
        { icon: IconUsers, label: "Kandidaten", position: 2 },
        { icon: IconTarget, label: "Prospects", position: 3 },
        { icon: IconStar, label: "Jouw toon", position: 4 },
        { icon: IconMail, label: "25 berichten", position: 6 },
      ]}
    />
  );
}

/* ── Voor Recruitmentbureaus ── */
export function BureausIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: recruitment automation voor bureaus — schaalbare outreach via LinkedIn met behoud van kwaliteit"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div className="hero-illo__metric">
              <span className="hero-illo__metric-label">Outreach snelheid</span><Bar w="94%" delay="0.3s" />
            </div>
            <div className="hero-illo__metric">
              <span className="hero-illo__metric-label">Responsrate</span><Bar w="68%" delay="0.5s" />
            </div>
            <div className="hero-illo__metric">
              <span className="hero-illo__metric-label">Plaatsingen</span><Bar w="81%" delay="0.7s" />
            </div>
          </div>
        </>
      }
      floats={[
        { icon: IconZap, label: "Opschalen", position: 1 },
        { icon: IconUsers, label: "Team", position: 2 },
        { icon: IconChart, label: "Resultaten", position: 3 },
        { icon: IconSwitch, label: "Sales + Recruitment", position: 4 },
        { icon: IconShield, label: "Kwaliteit", position: 5 },
      ]}
    />
  );
}

/* ── Voor Corporate Recruiters ── */
export function CorporateIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: Elvatix voor corporate recruiters — sneller en persoonlijker werven met behoud van employer brand"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:8}}>
              <div style={{width:32,height:32,borderRadius:8,background:'linear-gradient(135deg,rgba(155,187,10,0.2),rgba(155,187,10,0.08))',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{width:16,height:16,borderRadius:4,background:'#9BBB0A'}} />
              </div>
              <div>
                <div style={{fontSize:9,fontWeight:700,color:'#374151'}}>Employer Brand</div>
                <div style={{fontSize:7,color:'#9ca3af'}}>Consistent in elk bericht</div>
              </div>
            </div>
            <Bar w="86%" delay="0.3s" />
            <Bar w="73%" delay="0.5s" />
            <Bar w="91%" delay="0.7s" />
          </div>
        </>
      }
      floats={[
        { icon: IconBuilding, label: "In-house", position: 1 },
        { icon: IconStar, label: "Employer brand", position: 2 },
        { icon: IconMail, label: "25 InMails", position: 3 },
        { icon: IconClock, label: "Follow-ups", position: 4 },
        { icon: IconShield, label: "Consistentie", position: 6 },
      ]}
    />
  );
}

/* ── Voor Detacheringsbureaus ── */
export function DetacheringIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: LinkedIn outreach voor detacheringsbureaus — twee doelgroepen in één flow met Elvatix"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:8}}>
              <div style={{padding:6,borderRadius:6,background:'rgba(155,187,10,0.08)',textAlign:'center' as const}}>
                <div style={{fontSize:7,fontWeight:700,color:'#7A9A00'}}>Kandidaten</div>
                <div style={{fontSize:14,fontWeight:800,color:'#9BBB0A'}}>↗</div>
              </div>
              <div style={{padding:6,borderRadius:6,background:'rgba(155,187,10,0.08)',textAlign:'center' as const}}>
                <div style={{fontSize:7,fontWeight:700,color:'#7A9A00'}}>Klanten</div>
                <div style={{fontSize:14,fontWeight:800,color:'#9BBB0A'}}>↗</div>
              </div>
            </div>
            <Bar w="85%" delay="0.3s" />
            <Bar w="76%" delay="0.5s" />
          </div>
        </>
      }
      floats={[
        { icon: IconUsers, label: "Kandidaten", position: 1 },
        { icon: IconTarget, label: "Opdrachtgevers", position: 2 },
        { icon: IconSwitch, label: "Één flow", position: 3 },
        { icon: IconClock, label: "Follow-up", position: 4 },
        { icon: IconZap, label: "Batch 25", position: 5 },
      ]}
    />
  );
}

/* ── Case Study Manpower ── */
export function ManpowerIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: case study Manpower — 65 uur werk teruggewonnen in 1,7 uur met Elvatix, responspercentage stijging van 40% naar 43%"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{textAlign:'center' as const,marginBottom:8}}>
              <div style={{fontSize:24,fontWeight:900,color:'#9BBB0A',lineHeight:1}}>65→1.7</div>
              <div style={{fontSize:8,color:'#9ca3af',marginTop:2}}>uur bespaard</div>
            </div>
            <div className="hero-illo__metric">
              <span className="hero-illo__metric-label">Respons 43%</span><Bar w="43%" delay="0.3s" />
            </div>
            <div className="hero-illo__metric">
              <span className="hero-illo__metric-label">Geaccepteerd +17%</span><Bar w="67%" delay="0.5s" />
            </div>
          </div>
        </>
      }
      floats={[
        { icon: IconZap, label: "30 sec/bericht", position: 1 },
        { icon: IconChart, label: "+43% respons", position: 2 },
        { icon: IconCheck, label: "+17% acceptatie", position: 3 },
        { icon: IconUsers, label: "+25 kandidaten", position: 4 },
        { icon: IconStar, label: "Kwaliteit behouden", position: 6 },
      ]}
    />
  );
}

/* ── Case Study Vibe Group ── */
export function VibeGroupIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: case study Vibe Group — meer kwalitatieve gesprekken en minder werkdruk dankzij Elvatix"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:4}}>
              {[{n:'Lisa',v:'45 min/dag'},{n:'Mila',v:'+31% reacties'},{n:'Ramon',v:'38% respons'},{n:'Sophie',v:'20 gesprekken'}].map((r,i) => (
                <div key={i} style={{padding:4,borderRadius:6,background:'rgba(155,187,10,0.06)',border:'1px solid rgba(155,187,10,0.08)'}}>
                  <div style={{fontSize:8,fontWeight:700,color:'#374151'}}>{r.n}</div>
                  <div style={{fontSize:7,color:'#7A9A00',fontWeight:600}}>{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      }
      floats={[
        { icon: IconChart, label: "4-6 uur/week", position: 1 },
        { icon: IconStar, label: "Kwalitatief", position: 2 },
        { icon: IconUsers, label: "Team resultaat", position: 3 },
        { icon: IconCheck, label: "Minder werkdruk", position: 4 },
        { icon: IconShield, label: "Employer brand", position: 5 },
      ]}
    />
  );
}

/* ── Integraties LinkedIn ── */
export function IntegratiesIllustration() {
  return (
    <HeroIllustration
      ariaLabel="Illustratie: Elvatix Chrome-extensie voor LinkedIn Recruiter Seat — installeer in 10 minuten, geen extra tools nodig"
      centerCard={
        <>
          <WindowDots />
          <div className="hero-illo__card-body">
            <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:8}}>
              <div style={{width:20,height:20,borderRadius:4,background:'linear-gradient(135deg,#9BBB0A,#7A9A00)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
              </div>
              <div style={{fontSize:9,fontWeight:700,color:'#374151'}}>Elvatix Extension</div>
              <div style={{fontSize:7,padding:'2px 6px',borderRadius:4,background:'rgba(155,187,10,0.15)',color:'#7A9A00',fontWeight:600,marginLeft:'auto'}}>Active</div>
            </div>
            <Bar w="100%" delay="0.2s" />
            <div style={{marginTop:6,display:'flex',gap:4}}>
              <div style={{flex:1,textAlign:'center' as const,fontSize:7,fontWeight:600,color:'#9ca3af'}}>Recruiter Seat ✓</div>
              <div style={{flex:1,textAlign:'center' as const,fontSize:7,fontWeight:600,color:'#9ca3af'}}>LinkedIn ✓</div>
            </div>
          </div>
        </>
      }
      floats={[
        { icon: IconPlugin, label: "Chrome extensie", position: 1 },
        { icon: IconShield, label: "100% veilig", position: 2 },
        { icon: IconZap, label: "< 10 min setup", position: 3 },
        { icon: IconCheck, label: "Plug & play", position: 4 },
        { icon: IconUsers, label: "Teams", position: 5 },
      ]}
    />
  );
}
