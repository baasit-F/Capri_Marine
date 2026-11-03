/* Capri Marine mockup — shared chrome + interactions */
(function () {
  const PHONE = "570-226-3819";
  const PHONE_TEL = "+15702263819";
  const TEXT = "570-470-0029";
  const TEXT_SMS = "+15704700029";
  const ADDRESS = "457 Lakeshore Drive, Lakeville, PA 18438";

  /* ---------- Hours (edit here; all times are lake time, America/New_York) ----------
     week = [Sun, Mon, Tue, Wed, Thu, Fri, Sat]; each day is ["09:00", "17:00"] or null (closed).
     The in-season schedule is used between inSeason.start and inSeason.end (MM-DD, inclusive);
     offSeason is used the rest of the year. */
  const D = ["09:00", "17:00"];
  const HOURS = {
    tz: "America/New_York",
    inSeason:  { label: "In-season hours",  start: "05-01", end: "10-31", week: [D, D, D, null, D, D, D] },
    offSeason: { label: "Off-season hours", week: [D, D, D, null, D, D, D] }
  };

  const I = {
    logo: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="20" cy="20" r="18.5"/><path d="M8 23c3 0 3-2.4 6-2.4s3 2.4 6 2.4 3-2.4 6-2.4 3 2.4 6 2.4"/><path d="M8 28c3 0 3-2.4 6-2.4s3 2.4 6 2.4 3-2.4 6-2.4 3 2.4 6 2.4"/><path d="M14 17.5 20 9l6 8.5" stroke-linejoin="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    text: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    boat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 15h18l-2.5 4H6.5Z"/><path d="M6 15V9h8l4 6"/><path d="M9 9V5"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4Z"/></svg>',
    anchor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="5" r="2"/><path d="M12 7v14M5 13a7 7 0 0 0 14 0M8 10h8"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="5" width="17" height="15" rx="1.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1 12H6Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5h16v11H9l-5 4Z"/><path d="M8 9.5h8M8 12.5h5"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/></svg>',
    ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 16 16 3l5 5L8 21Z"/><path d="m7 12 2 2M10 9l2 2M13 6l2 2"/></svg>',
    engine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 9h10l4 3v5H5Z"/><path d="M8 9V6h5v3M2 12h3M19 14h3"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 5 8 12l7 7"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m9 5 7 7-7 7"/></svg>'
  };
  window.CAPRI_ICONS = I;

  const page = document.body.dataset.page || "";
  const transparent = document.body.dataset.header === "transparent";

  /* ---------- Header ---------- */
  const header = document.createElement("header");
  header.className = "site-header" + (transparent ? " transparent" : "");
  header.innerHTML = `
    <div class="wrap">
      <a class="logo" href="index.html" aria-label="Capri Marine home">${I.logo}<span>Capri Marine</span></a>
      <div class="header-links">
        <a class="hide-sm" href="inventory.html">Inventory</a>
        <a class="hide-sm" href="service.html">Service</a>
        <a class="hide-sm" href="marina.html">Marina &amp; Storage</a>
        <a class="call-link" href="tel:${PHONE_TEL}" aria-label="Call ${PHONE}">${I.phone.replace("<svg", '<svg width="18" height="18"')} <span>${PHONE}</span></a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="site-menu"><span class="label">Menu</span><span class="bars"></span></button>
      </div>
    </div>`;
  document.body.prepend(header);

  /* ---------- Full-screen menu ---------- */
  const menu = document.createElement("div");
  menu.className = "menu-overlay";
  menu.id = "site-menu";
  menu.innerHTML = `
    <nav aria-label="Main">
      <ul class="menu-primary">
        <li><a href="inventory.html">Boats for Sale</a></li>
        <li><a href="service.html">Service</a></li>
        <li><a href="marina.html">Marina &amp; Storage</a></li>
        <li><a href="about.html">Our Story</a></li>
        <li><a href="lake-life.html">Lake Life</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <ul class="menu-secondary">
        <li><a href="inventory.html?condition=New">${I.boat} New Inventory</a></li>
        <li><a href="inventory.html?condition=Pre-Owned">${I.anchor} Pre-Owned</a></li>
        <li><a href="contact.html#quote">${I.star} Request a Quote</a></li>
        <li><a href="contact.html#service">${I.calendar} Book Service</a></li>
        <li><a href="marina.html#dry-dock">${I.info} 2026 Dry Dock</a></li>
        <li><a href="service.html#store">${I.bag} Ship's Store</a></li>
      </ul>
      <div class="menu-contact">
        <a href="tel:${PHONE_TEL}">${PHONE}</a> · Text <a href="sms:${TEXT_SMS}">${TEXT}</a><br>
        ${ADDRESS}
      </div>
    </nav>
    <div class="menu-visual" aria-hidden="true"></div>`;
  header.after(menu);

  const toggle = header.querySelector(".menu-toggle");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".label").textContent = open ? "Close" : "Menu";
  };
  toggle.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  if (transparent) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Footer ---------- */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap">
      <div class="foot-top">
        <div>
          <a class="logo" href="index.html">${I.logo}<span>Capri Marine</span></a>
          <p style="max-width:34ch;margin:0">Family-owned for 50+ years on Lake Wallenpaupack. Sales, service, storage and marina, all under one roof.</p>
          <div class="socials">
            <a href="https://www.facebook.com/478506935600968" aria-label="Facebook" target="_blank" rel="noopener">${I.fb}</a>
            <a href="https://www.instagram.com/capri_marine" aria-label="Instagram" target="_blank" rel="noopener">${I.ig}</a>
          </div>
        </div>
        <div>
          <h4>Boats</h4>
          <ul>
            <li><a href="inventory.html?make=Chaparral">Chaparral</a></li>
            <li><a href="inventory.html?make=Avalon">Avalon Pontoons</a></li>
            <li><a href="inventory.html">Aura Pontoons</a></li>
            <li><a href="inventory.html?condition=Pre-Owned">Pre-Owned</a></li>
            <li><a href="contact.html#quote">Trade-In Value</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="service.html">Engine Service</a></li>
            <li><a href="service.html#fiberglass">Fiberglass &amp; Gelcoat</a></li>
            <li><a href="service.html#detailing">Detailing</a></li>
            <li><a href="marina.html">Storage &amp; Slips</a></li>
            <li><a href="marina.html#dry-dock">Dry Dock</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>457 Lakeshore Drive<br>Lakeville, PA 18438</li>
            <li><a href="tel:${PHONE_TEL}">Call ${PHONE}</a></li>
            <li><a href="sms:${TEXT_SMS}">Text ${TEXT}</a></li>
            <li><a href="contact.html">Hours &amp; Directions</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 Capri Marine. All rights reserved.</span>
        <span>Design mockup · <a href="credits.html">Photo credits</a></span>
      </div>
    </div>`;
  document.body.append(footer);

  /* ---------- Mobile quick bar ---------- */
  const quick = document.createElement("nav");
  quick.className = "quick-bar";
  quick.setAttribute("aria-label", "Quick actions");
  quick.innerHTML = `
    <a href="tel:${PHONE_TEL}">${I.phone}Call</a>
    <a href="sms:${TEXT_SMS}">${I.text}Text</a>
    <a href="inventory.html">${I.boat}Boats</a>`;
  document.body.append(quick);

  /* ---------- AI assistant (scripted mock) ---------- */
  const launch = document.createElement("button");
  launch.className = "chat-launch";
  launch.innerHTML = `${I.chat}<span>Ask Capri</span>`;
  const panel = document.createElement("div");
  panel.className = "chat-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Capri Marine assistant");
  panel.innerHTML = `
    <div class="chat-head"><div><strong>Capri Assistant</strong><span>Typically replies instantly · AI demo</span></div><button aria-label="Close chat">×</button></div>
    <div class="chat-body"></div>
    <div class="chat-suggest">
      <button>Book a service</button><button>Storage options</button><button>Show me pontoons</button><button>Hours</button>
    </div>
    <form class="chat-form"><input type="text" placeholder="Ask about boats, service, storage…" aria-label="Message"><button aria-label="Send">${I.send}</button></form>`;
  document.body.append(launch, panel);

  const body = panel.querySelector(".chat-body");
  const add = (html, who) => {
    const m = document.createElement("div");
    m.className = "msg " + who;
    m.innerHTML = html;
    body.append(m);
    body.scrollTop = body.scrollHeight;
    return m;
  };
  const replies = [
    [/service|repair|engine|winteri|book|appoint/i, 'Happy to help. Our certified Mercury / MerCruiser technicians handle everything from winterization to repowers. <a href="contact.html#service">Book a service slot here</a>, or tell me your boat and what it needs and I\'ll pass it to the service desk.'],
    [/stor|slip|dock|dry|winter|stack/i, 'We offer indoor and outdoor winter storage, dry stack, seasonal slips and dry dock. <a href="marina.html">See storage options</a> or <a href="contact.html#storage">request a spot</a>. Spaces fill up early, so it pays to reserve now.'],
    [/pontoon|avalon|aura|tritoon/i, 'We carry Avalon luxury pontoons and Aura pontoons. Right now we have 25\' Catalina and LSZ Platinum models in stock. <a href="inventory.html?type=Pontoon">Browse pontoons</a>.'],
    [/chaparral|surf|bowrider|ssi|ssx/i, 'As a Platinum Chaparral dealer we stock SSi, SSX and Surf models. <a href="inventory.html?make=Chaparral">See Chaparral inventory</a>.'],
    [/hour|open|when/i, () => hoursStatus().text + '. We\'re open Mon–Tue and Thu–Sun, 9 AM – 5 PM, closed Wednesdays. <a href="contact.html">See full hours</a>, or call <a href="tel:' + PHONE_TEL + '">' + PHONE + '</a>.'],
    [/price|cost|quote|financ|trade/i, 'I can start a quote for you. <a href="contact.html#quote">Request pricing and trade-in value</a>, and a sales specialist will follow up the same day.'],
    [/where|address|direction|locat/i, 'We\'re at 457 Lakeshore Drive, Lakeville, PA 18438, right on Lake Wallenpaupack. <a href="contact.html">Get directions</a>.']
  ];
  const respond = (q) => {
    add(q.replace(/</g, "&lt;"), "user");
    const t = add('<span class="typing"><i></i><i></i><i></i></span>', "bot");
    setTimeout(() => {
      const hit = replies.find(([re]) => re.test(q));
      t.innerHTML = hit ? (typeof hit[1] === "function" ? hit[1]() : hit[1]) : 'Good question! I\'ll connect you with the team. Call <a href="tel:' + PHONE_TEL + '">' + PHONE + '</a>, text ' + TEXT + ', or <a href="contact.html">send a message</a>.';
      body.scrollTop = body.scrollHeight;
    }, 700);
  };
  let greeted = false;
  const openChat = (open) => {
    panel.classList.toggle("open", open);
    if (open && !greeted) {
      greeted = true;
      add("Hi! I'm the Capri Marine assistant. I can help you find a boat, book service or reserve storage. What can I do for you?", "bot");
    }
  };
  launch.addEventListener("click", () => openChat(!panel.classList.contains("open")));
  panel.querySelector(".chat-head button").addEventListener("click", () => openChat(false));
  panel.querySelectorAll(".chat-suggest button").forEach((b) => b.addEventListener("click", () => respond(b.textContent)));
  panel.querySelector(".chat-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    if (input.value.trim()) respond(input.value.trim());
    input.value = "";
  });
  document.querySelectorAll("[data-open-chat]").forEach((el) => el.addEventListener("click", (e) => { e.preventDefault(); openChat(true); }));

  /* ---------- Boat card renderer (used on home + inventory) ---------- */
  window.renderBoatCard = function (b) {
    const badge = b.clearance ? '<span class="badge alt">Clearance</span>' : `<span class="badge${b.condition === "Pre-Owned" ? " alt" : ""}">${b.condition}</span>`;
    return `
      <a class="boat-card" href="boat.html?id=${b.id}">
        <div class="img"><img src="assets/img/${b.img}" alt="${b.year} ${b.make} ${b.model}" loading="lazy">${badge}</div>
        <div class="body">
          <span class="make">${b.year} · ${b.make}</span>
          <h3>${b.model}</h3>
          <ul class="specs">
            <li>${I.ruler}${b.lengthLabel}</li>
            <li>${I.engine}${b.engine}</li>
          </ul>
          <div class="foot"><span class="price">Call for price</span><span class="more">View details →</span></div>
        </div>
      </a>`;
  };

  /* ---------- Rails ---------- */
  document.querySelectorAll("[data-rail]").forEach((wrap) => {
    const rail = wrap.querySelector(".rail");
    const prev = wrap.querySelector("[data-prev]");
    const next = wrap.querySelector("[data-next]");
    const step = () => rail.clientWidth * 0.8;
    prev && prev.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
    next && next.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
  });

  /* ---------- Tabs ---------- */
  document.querySelectorAll("[data-tabs]").forEach((root) => {
    const btns = root.querySelectorAll('[role="tab"]');
    const show = (id) => {
      btns.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === id)));
      root.querySelectorAll('[role="tabpanel"]').forEach((p) => (p.hidden = p.id !== "panel-" + id));
    };
    btns.forEach((b) => b.addEventListener("click", () => show(b.dataset.tab)));
    const hash = location.hash.replace("#", "");
    if ([...btns].some((b) => b.dataset.tab === hash)) show(hash);
    window.addEventListener("hashchange", () => {
      const h = location.hash.replace("#", "");
      if ([...btns].some((b) => b.dataset.tab === h)) show(h);
    });
  });

  /* ---------- Forms: Netlify-ready, graceful locally ---------- */
  document.querySelectorAll("form[data-netlify]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".form-success");
      const data = new URLSearchParams(new FormData(form)).toString();
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data })
        .catch(() => {})
        .finally(() => {
          form.reset();
          if (ok) ok.classList.add("show");
        });
    });
  });

  /* ---------- Live hours ---------- */
  const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const DAY_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const toMin = (t) => +t.slice(0, 2) * 60 + +t.slice(3);
  const fmtT = (t) => { const h = +t.slice(0, 2), m = t.slice(3), ap = h < 12 ? "AM" : "PM", h12 = h % 12 || 12; return h12 + (m === "00" ? "" : ":" + m) + " " + ap; };
  const lakeNow = () => {
    const parts = {};
    new Intl.DateTimeFormat("en-US", { timeZone: HOURS.tz, weekday: "short", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
      .formatToParts(new Date()).forEach((p) => (parts[p.type] = p.value));
    return { dow: DAY.indexOf(parts.weekday), md: parts.month + "-" + parts.day, min: +parts.hour * 60 + +parts.minute };
  };
  const inSeasonOn = (md) => { const { start, end } = HOURS.inSeason; return start <= end ? md >= start && md <= end : md >= start || md <= end; };
  const sameWeek = JSON.stringify(HOURS.inSeason.week) === JSON.stringify(HOURS.offSeason.week);
  const hoursStatus = () => {
    const now = lakeNow();
    const season = inSeasonOn(now.md) ? HOURS.inSeason : HOURS.offSeason;
    const today = season.week[now.dow];
    let open = false, text;
    if (today && now.min >= toMin(today[0]) && now.min < toMin(today[1])) { open = true; text = "Open now · until " + fmtT(today[1]); }
    else {
      for (let i = 0; i < 7; i++) {
        const d = (now.dow + i) % 7, h = season.week[d];
        if (!h || (i === 0 && now.min >= toMin(h[0]))) continue;
        text = "Closed now · opens " + (i === 0 ? "today" : i === 1 ? "tomorrow" : DAY_LONG[d]) + " at " + fmtT(h[0]);
        break;
      }
      text = text || "Closed now";
    }
    return { now, season, open, text };
  };
  const renderHours = (el) => {
    const { now, season, open, text } = hoursStatus();
    const order = [1, 2, 3, 4, 5, 6, 0], groups = [];
    order.forEach((d) => {
      const key = JSON.stringify(season.week[d]), last = groups[groups.length - 1];
      if (last && last.key === key) last.days.push(d); else groups.push({ key, h: season.week[d], days: [d] });
    });
    el.innerHTML =
      '<span class="hours-status ' + (open ? "open" : "closed") + '">' + text + "</span>" +
      (sameWeek ? "" : '<span class="hours-season">' + season.label + "</span>") +
      '<table class="hours-table">' + groups.map((g) =>
        '<tr' + (g.days.includes(now.dow) ? ' class="today"' : "") + '><th>' + DAY[g.days[0]] + (g.days.length > 1 ? "–" + DAY[g.days[g.days.length - 1]] : "") +
        "</th><td>" + (g.h ? fmtT(g.h[0]) + " – " + fmtT(g.h[1]) : "Closed") + "</td></tr>").join("") + "</table>";
  };
  const hoursEls = document.querySelectorAll("[data-hours]");
  hoursEls.forEach(renderHours);
  if (hoursEls.length) setInterval(() => hoursEls.forEach(renderHours), 60000);

  /* ---------- Reveal ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 })
    : null;
  window.observeReveal = (root) => (root || document).querySelectorAll(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  window.observeReveal();
})();
