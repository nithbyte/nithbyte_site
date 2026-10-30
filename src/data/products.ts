export interface ProductApplication {
  name: string;
  type: "Web Application" | "Mobile Application" | "Tablet / KDS" | "Mobile Application (Owner & Customer)";
  description: string;
  targetAudience: string;
  features: string[];
}

export interface ProductModule {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName?: string;
}

export interface ProductRole {
  title: string;
  description: string;
  responsibilities: string[];
}

export interface ProductWorkflowStep {
  step: string;
  title: string;
  description: string;
  badge?: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
  highlight?: string;
}

export interface ProductGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  type: "desktop" | "mobile";
  badge: string;
  description: string;
  image?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  appType: string;
  previewNote: string;
  stats: {
    label: string;
    value: string;
  }[];
  applications: ProductApplication[];
  modules: ProductModule[];
  configurableOptions?: {
    title: string;
    description: string;
    items: string[];
  }[];
  roles: ProductRole[];
  benefits: ProductBenefit[];
  workflow: ProductWorkflowStep[];
  gallery: ProductGalleryItem[];
  faqs: ProductFaq[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "mbyte",
    slug: "mbyte",
    name: "MByte",
    code: "PROD-01",
    category: "Pharmaceutical Distribution Management & Field Force Automation",
    tagline: "Smarter Pharmaceutical Distribution. Stronger Field Operations.",
    shortDesc: "MByte is a comprehensive pharmaceutical distribution and field-force automation platform that connects company administrators, territory managers and medical representatives through an integrated web application and mobile application.",
    fullDesc: "It helps pharmaceutical businesses manage employees, territories, doctors, pharmacies, products, field visits, orders, collections and operational performance from a centralized platform. Engineered for high compliance and operational clarity, MByte bridges field execution with head-office intelligence.",
    appType: "Web Application + Mobile Application",
    previewNote: "Production interface showcase of MByte pharma operations console and representative mobile dispatch.",
    stats: [
      { label: "Architecture", value: "Cloud Web + Offline Mobile" },
      { label: "Deployment", value: "Multi-Territory Ready" },
      { label: "Core Sync", value: "Geofenced Activity Engine" },
      { label: "Compliance", value: "Role-Based Audit Logging" },
    ],
    applications: [
      {
        name: "Head Office Web Application",
        type: "Web Application",
        description: "Central command center for pharma executives, supply chain controllers, and territory dispatchers to manage field activities, track distribution pipelines, and analyze market penetration.",
        targetAudience: "Super Admins, Company Admins & Territory Managers",
        features: [
          "Business dashboard and analytics",
          "Employee and representative management",
          "Territory mapping and hierarchy allocation",
          "Doctor and pharmacy master registries",
          "Pharmaceutical product catalog & batch tracking",
          "Stockist and inventory-related management",
          "Visit planning, frequency schedules & route approvals",
          "Attendance and field movement tracking",
          "Orders management and fulfillment workflows",
          "Collections management and payment reconciliation",
          "Comprehensive business reporting and field analytics",
          "Company branding, configuration, and role permissions",
        ],
      },
      {
        name: "Field Representative Mobile Application",
        type: "Mobile Application",
        description: "Handheld operational tool for Medical Representatives (MRs) to view assigned daily beats, record physician visits, demonstrate product visual aids, and log spot bookings.",
        targetAudience: "Medical Representatives & Field Territory Managers",
        features: [
          "Today's assigned visits and optimized tour plan",
          "Doctor and pharmacy interactive directory",
          "Visit activity, call reporting, and discussion logs",
          "Digital attendance with one-tap clock-in",
          "GPS positioning and verified clinic geofencing",
          "Interactive digital product visual aids and detailing cards",
          "Sample distribution and promotional material recording",
          "On-the-spot order creation and booking submission",
          "Collection recording and payment vouchers where authorized",
          "Offline data storage and automatic synchronization for supported workflows",
        ],
      },
    ],
    modules: [
      {
        id: "field-force",
        title: "Field Force Automation & Beat Planning",
        description: "Intelligent scheduling, territory allocation, and geo-verified doctor visit execution.",
        features: [
          "Monthly Tour Plan (MTP) and Daily Call Report (DCR) synchronization",
          "GPS-assisted clinic check-ins with geofenced location validation",
          "Digital attendance logging with leave tracking and route deviations",
          "Doctor call history, specialization profiles, and engagement scores",
        ],
      },
      {
        id: "distribution-sales",
        title: "Distribution, Orders & Stockist Network",
        description: "End-to-end pharmaceutical order processing and supply chain coordination.",
        features: [
          "Central stockist catalog and distributor pricing slabs",
          "Primary and secondary order intake with real-time stock checks",
          "Outstanding dues tracking and field collection acknowledgment",
          "Return goods authorization (RGA) and batch expiry tracking",
        ],
      },
      {
        id: "detailing-analytics",
        title: "Visual Detailing & Executive Intelligence",
        description: "Interactive promotional tools for field visits backed by executive KPI dashboards.",
        features: [
          "Interactive digital visual aids with slide analytics for product detailing",
          "Sample inventory ledger with accountability tracking by representative",
          "Territory performance comparison and sales target realization",
          "Automated PDF and Excel reports for executive review meetings",
        ],
      },
    ],
    roles: [
      {
        title: "Super Administrator",
        description: "Platform controller responsible for global system health, tenant configuration, and multi-organization setups.",
        responsibilities: [
          "Global system configuration and security governance",
          "Multi-tenant provisioning and database integrity checks",
          "API integrations and custom workflow parameters",
        ],
      },
      {
        title: "Company Administrator",
        description: "Executive or commercial director overseeing company-wide pharmaceutical operations and product divisions.",
        responsibilities: [
          "Setting company policies, product lines, and territory structures",
          "Managing employee rosters and role-based permissions",
          "Reviewing consolidated sales, orders, and payment collections",
        ],
      },
      {
        title: "Territory Manager",
        description: "Regional sales head guiding field teams, approving visit plans, and monitoring local market targets.",
        responsibilities: [
          "Approving Monthly Tour Plans and reviewing daily call reports",
          "Monitoring representative attendance and visit compliance",
          "Managing distributor relationships and resolving stockist escalations",
        ],
      },
      {
        title: "Medical Representative",
        description: "Field professional executing daily doctor meetings, pharmacy visits, detailing sessions, and order booking.",
        responsibilities: [
          "Executing scheduled daily visits with verified geofencing",
          "Presenting product visual aids and detailing clinical benefits",
          "Logging sample dispensations, booking orders, and capturing collections",
        ],
      },
    ],
    benefits: [
      {
        title: "Centralized Pharmaceutical Business Operations",
        description: "Consolidate territory registries, doctor databases, stockist networks, and sales pipelines into one unified corporate system.",
        highlight: "Unified Source of Truth",
      },
      {
        title: "Better Field-Force Visibility",
        description: "Eliminate blind spots with GPS-assisted route transparency, automated call reports, and real-time activity feeds.",
        highlight: "Real-Time Tracking",
      },
      {
        title: "Organized Territory Management",
        description: "Structure regions, divisions, and representative coverage dynamically without data duplication or territory overlaps.",
        highlight: "Zero Territory Friction",
      },
      {
        title: "Digital Visit & Attendance Tracking",
        description: "Automate daily attendance with geofenced clinic check-ins, reducing manual paperwork and administrative overhead.",
        highlight: "Geofenced Compliance",
      },
      {
        title: "Simplified Order & Collection Monitoring",
        description: "Accelerate order-to-dispatch cycles by capturing orders directly at pharmacy touchpoints and logging collections securely.",
        highlight: "Accelerated Cash Flow",
      },
      {
        title: "Improved Operational Reporting",
        description: "Empower leadership with instant access to territory sales trends, call compliance ratios, and representative productivity metrics.",
        highlight: "Data-Driven Decisions",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Territory & Beat Planning",
        description: "Company managers map territories, assign doctor databases, and configure monthly visit frequencies for field representatives.",
        badge: "HEAD OFFICE",
      },
      {
        step: "02",
        title: "Field Visit Execution",
        description: "Medical representatives check in via the mobile app, navigate assigned beats, present visual aids, and log call discussions.",
        badge: "MOBILE APP",
      },
      {
        step: "03",
        title: "Order & Collection Capture",
        description: "Representatives record stockist orders, log sample handovers, and submit payment collection references directly on site.",
        badge: "ON SITE",
      },
      {
        step: "04",
        title: "Reconciliation & Reporting",
        description: "Data syncs to the central web console for instant fulfillment scheduling, collection verification, and sales performance analytics.",
        badge: "AUTOMATION",
      },
    ],
    gallery: [
      {
        id: "mbyte-field-ops",
        title: "Field Operations Command Center",
        subtitle: "Kovel Designs Operations Hub • Real-time telemetry, representative call compliance, order booking & triage alerts.",
        type: "desktop",
        badge: "OPS COMMAND",
        description: "Centralized operations hub for territory managers showing real-time MR status, call compliance pacing, commercial revenue, and automated triage boards.",
        image: "/images/products/mbyte/mbyte-field-ops-command.jpg",
      },
      {
        id: "mbyte-stock-intelligence",
        title: "Product Presence & Stock Intelligence",
        subtitle: "Retail shelf availability telemetry, stock shortages, MR field audits, and geospatial distribution.",
        type: "desktop",
        badge: "STOCK TELEMETRY",
        description: "Retail shelf health monitoring, out-of-stock risk alerts, formulations filtering, and geospatial GIS stock mapping across authorized territories.",
        image: "/images/products/mbyte/mbyte-stock-intelligence.jpg",
      },
      {
        id: "mbyte-rep-workspace",
        title: "MR Workspace Mobile App",
        subtitle: "Handheld operational hub for Medical Representatives with target tracking and detailing decks.",
        type: "mobile",
        badge: "MR WORKSPACE",
        description: "Mobile representative dashboard featuring daily visit goals, Doctor Directory access, and offline-ready visual aids e-detailing libraries.",
        image: "/images/products/mbyte/mbyte-mr-workspace.jpg",
      },
      {
        id: "mbyte-todays-visits",
        title: "Today's Visits & Daily Beat Planner",
        subtitle: "Optimized field visit execution with priority filters, time slots, and DCR draft reporting.",
        type: "mobile",
        badge: "BEAT PLANNER",
        description: "Handheld visit planner displaying doctor profiles, clinic addresses, planned detailing items, and one-tap Daily Call Report submission.",
        image: "/images/products/mbyte/mbyte-todays-visits.jpg",
      },
    ],
    faqs: [
      {
        question: "Can MByte operate when medical representatives are in low-connectivity areas?",
        answer: "Yes. The MByte mobile application features offline data storage for supported workflows. Representatives can record visit activity, log orders, and browse doctor directories offline; all mutations synchronize automatically once an active internet connection is restored.",
      },
      {
        question: "How does MByte ensure that doctor visits are genuinely executed?",
        answer: "MByte incorporates GPS positioning and configurable clinic geofencing. Check-ins are validated against registered clinic coordinates, providing territory managers with authentic visit compliance timestamps.",
      },
      {
        question: "Can our company customize territory hierarchies and product divisions?",
        answer: "Yes. MByte provides comprehensive organizational configuration, allowing administrators to define multi-tier divisions (e.g., General, Cardio, Ortho), custom territory boundaries, and unique reporting hierarchies.",
      },
      {
        question: "Is MByte suitable for both small pharma distributors and large corporate enterprises?",
        answer: "Absolutely. MByte's modular architecture scales smoothly from regional distribution teams with 10 representatives to multi-state enterprise operations with hundreds of field staff across several divisions.",
      },
    ],
  },
  {
    id: "dinebyte",
    slug: "dinebyte",
    name: "DineByte",
    code: "PROD-02",
    category: "Restaurant Management & POS SaaS Platform",
    tagline: "One Platform. Every Restaurant Operation.",
    shortDesc: "DineByte is a complete restaurant management platform developed to bring billing, order management, kitchen operations, tables, inventory, employees and business reporting into one connected digital ecosystem.",
    fullDesc: "Designed for modern fine dining, quick-service restaurants (QSR), cafes, and cloud kitchens, DineByte synchronizes floor orders with kitchen display systems, centralizes inventory, and streamlines multi-channel delivery workflows.",
    appType: "Web Application + Mobile Application",
    previewNote: "Simulated dashboard preview of DineByte cloud POS register, live kitchen KDS board, and floor order manager.",
    stats: [
      { label: "Architecture", value: "Real-Time Cloud POS" },
      { label: "Hardware Support", value: "Thermal Printers & Tablets" },
      { label: "Kitchen Sync", value: "Sub-Second KOT Dispatch" },
      { label: "Multi-Tenant", value: "Single & Multi-Outlet" },
    ],
    applications: [
      {
        name: "Restaurant Cloud POS & Admin Console",
        type: "Web Application",
        description: "Comprehensive front-of-house billing station and back-office management console for restaurant owners, cashiers, and managers.",
        targetAudience: "Restaurant Owners, Cashiers & Store Managers",
        features: [
          "Rapid POS billing, split billing, and digital invoice generation",
          "Table layout editor, live floor status, and dine-in occupancy tracking",
          "Interactive Kitchen Display System (KDS) for chef stations",
          "Kitchen Order Ticket (KOT) routing with item-level modifications",
          "Menu catalog, price slabs, combo deals, and tax configuration",
          "Food item variants, add-ons, modifiers, and portion controls",
          "Ingredient-level inventory tracking and low-stock alerts",
          "Online order management and consolidated delivery aggregator screen",
          "Swiggy and Zomato workflow support for incoming dispatch coordination",
          "Comprehensive sales reports, item-wise profitability, and end-of-day register closure",
          "Multi-tenant SaaS architecture supporting single cafes to multi-chain brands",
        ],
      },
      {
        name: "Waiter & Captain Mobile Application",
        type: "Mobile Application",
        description: "Lightweight handheld application for floor captains and waiters to take orders table-side, punch modifiers, and instantly relay KOTs to the kitchen.",
        targetAudience: "Waiters, Captains & Floor Supervisors",
        features: [
          "Interactive table map with live occupancy indicators",
          "Visual digital menu with item tags, spice levels, and out-of-stock badges",
          "Table-side order taking with special cooking instructions",
          "Instant one-tap KOT firing to specific kitchen stations",
          "Order addition, item cancellation logs, and bill printing requests",
          "Live notification when kitchen marks dishes as ready for service",
        ],
      },
    ],
    modules: [
      {
        id: "pos-billing",
        title: "High-Speed Billing & Floor Operations",
        description: "Optimized for extreme counter velocity during peak dining hours.",
        features: [
          "Quick-touch POS interface supporting barcode scanners and touchscreen tablets",
          "Flexible payment processing: Cash, Cards, UPI, Wallets, and split tenders",
          "Visual table layout with color-coded reservation and dining states",
          "Customizable receipt headers, GST compliance, and promotional discounts",
        ],
      },
      {
        id: "kitchen-kds",
        title: "Kitchen Display System (KDS) & KOT Routing",
        description: "Eliminate paper chaos and kitchen miscommunications with digital order queues.",
        features: [
          "Color-coded kitchen tickets prioritized by preparation elapsed time",
          "Multi-station routing (e.g., Tandoor, Curry, Bar, Dessert station split)",
          "Real-time dish status updates from 'Cooking' to 'Ready to Serve'",
          "Audio-visual chime alerts for incoming dine-in, takeaway, or online orders",
        ],
      },
      {
        id: "inventory-aggregators",
        title: "Recipe Costing & Delivery Aggregators",
        description: "Tight control over food costs and unified delivery channel monitoring.",
        features: [
          "Recipe mapping with automated raw ingredient deductions on bill generation",
          "Swiggy and Zomato workflow support for consolidated delivery order tracking",
          "Vendor purchase orders, goods received notes (GRN), and wastage logs",
          "End-of-day reconciliation with cash drawer tracking and shift audits",
        ],
      },
    ],
    roles: [
      {
        title: "Super Administrator",
        description: "Platform engineering controller managing multi-restaurant accounts, software licenses, and cloud servers.",
        responsibilities: [
          "Restaurant onboarding, database provisioning, and license control",
          "Core system performance monitoring and platform security",
          "Managing system-wide updates and payment gateway connectors",
        ],
      },
      {
        title: "Restaurant Administrator",
        description: "General manager or restaurant owner with complete operational authority over outlets, staff, and finances.",
        responsibilities: [
          "Full access to financial analytics, margins, and sales reconciliations",
          "Menu creation, recipe definition, and price adjustments",
          "Staff roster management, role authorization, and audit logs",
        ],
      },
      {
        title: "Cashier",
        description: "Front-desk billing personnel responsible for rapid customer checkouts, bill printing, and payment collection.",
        responsibilities: [
          "Generating dine-in, takeaway, and counter bills quickly",
          "Accepting cash, card, and digital UPI payments",
          "Managing shift opening balance and day-end cash drawer closure",
        ],
      },
      {
        title: "Waiter",
        description: "Floor server taking orders table-side via mobile application or terminal.",
        responsibilities: [
          "Seating customers and taking table-side order punches",
          "Relaying dietary preferences and custom modifiers to the kitchen",
          "Delivering prepared dishes promptly upon kitchen notification",
        ],
      },
      {
        title: "Kitchen Staff",
        description: "Chefs and kitchen crew preparing dishes according to digital KDS tickets and printer chits.",
        responsibilities: [
          "Viewing preparation queues and prioritizing aging orders",
          "Marking completed items and signaling service readiness",
          "Updating ingredient out-of-stock statuses directly to floor",
        ],
      },
    ],
    benefits: [
      {
        title: "Faster POS Billing",
        description: "Process bills in seconds with an intuitive touchscreen layout, keyboard shortcuts, and integrated payment QR codes.",
        highlight: "Sub-Second Billing",
      },
      {
        title: "Better Order Coordination",
        description: "Eliminate miscommunicated tickets between floor staff and kitchen with instant digital KOT transmission.",
        highlight: "Zero Order Confusion",
      },
      {
        title: "Digital Kitchen Workflows",
        description: "Replace lost paper slips with clear, color-coded Kitchen Display screens that keep food preparation running smoothly.",
        highlight: "Paperless Kitchen",
      },
      {
        title: "Organized Menu & Inventory Management",
        description: "Track raw material consumption automatically through recipe deduction, reducing spoilage and preventing stockouts.",
        highlight: "Automated Recipe Deductions",
      },
      {
        title: "Centralized Business Monitoring",
        description: "Monitor real-time sales revenue, average table turn time, and top-performing dishes across all outlets from any device.",
        highlight: "Multi-Outlet Visibility",
      },
      {
        title: "Improved Operational Efficiency",
        description: "Synchronize dine-in, takeaway, and delivery aggregator workflows into a single cohesive operating rhythm.",
        highlight: "Unified Operations",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Order Capture",
        description: "Orders are punched by table-side waiters on mobile tablets, counter cashiers at the POS, or received via delivery channels.",
        badge: "POINT OF SALE",
      },
      {
        step: "02",
        title: "Instant KDS Routing",
        description: "Items automatically split into digital tickets routed to corresponding kitchen preparation stations (grill, salad, bar).",
        badge: "KITCHEN",
      },
      {
        step: "03",
        title: "Food Preparation & Dispatch",
        description: "Chefs view preparation times and mark dishes ready; floor staff receive instant push alerts to serve the table.",
        badge: "EXPEDITION",
      },
      {
        step: "04",
        title: "Payment & Stock Reconciliation",
        description: "The bill is settled through multiple tender modes while inventory algorithms decrement raw ingredients in real time.",
        badge: "SETTLEMENT",
      },
    ],
    gallery: [
      {
        id: "dinebyte-pos",
        title: "High-Velocity POS Billing Terminal",
        subtitle: "Ponnees Kitchen live deployment with categorized fast-punch menu, parcel fees, and instant GST calculation.",
        type: "desktop",
        badge: "CLOUD POS",
        description: "Live touch POS register showing real-time menu categories, fast-add items, parcel packaging fees, and sub-second payment settlement.",
        image: "/images/products/dinebyte/dinebyte-pos-billing.jpg",
      },
      {
        id: "dinebyte-tables",
        title: "Dine-In & Table Management Dashboard",
        subtitle: "Arya Bhavan live floor plan with real-time table occupancy, section filters, and session lifecycles.",
        type: "desktop",
        badge: "TABLE DASHBOARD",
        description: "Interactive floor plan tracking section occupancies (Indoor, AC Hall, Outdoor), guest seating, and bill settlements.",
        image: "/images/products/dinebyte/dinebyte-table-management.jpg",
      },
      {
        id: "dinebyte-waiter",
        title: "Mobile Table-Side Captain Companion",
        subtitle: "Handheld waiter application showing live table readiness, guest count, and instant order routing.",
        type: "mobile",
        badge: "MOBILE APP",
        description: "Tactile mobile interface for waiters to seat guests, track table turns, and relay KOTs directly to the kitchen.",
        image: "/images/products/dinebyte/dinebyte-mobile-tables.jpg",
      },
      {
        id: "dinebyte-seat-guests",
        title: "Mobile Guest Seating & Order Dispatch",
        subtitle: "Table-side guest seating dialog with party size selection and direct order firing.",
        type: "mobile",
        badge: "ORDER DISPATCH",
        description: "Streamlined guest onboarding modal with party size pills, special notes, and one-tap order taking.",
        image: "/images/products/dinebyte/dinebyte-mobile-seat-guests.jpg",
      },
    ],
    faqs: [
      {
        question: "How does DineByte handle delivery aggregators like Swiggy and Zomato?",
        answer: "DineByte features supported delivery aggregator workflows that bring online orders into your central operations queue alongside dine-in and takeaway tickets, simplifying kitchen coordination and dispatch tracking.",
      },
      {
        question: "Can DineByte function if our restaurant's internet connection drops?",
        answer: "Yes. DineByte's POS billing and local KOT printing architecture ensure that front-of-house billing and kitchen tickets continue operating uninterrupted, synchronizing all transaction data to the cloud once connectivity resumes.",
      },
      {
        question: "Does the platform support recipe management and raw material inventory?",
        answer: "Yes. You can link menu items to specific recipe ingredient proportions. Whenever a dish is billed, the platform automatically deducts corresponding raw materials from your stock ledger.",
      },
      {
        question: "Can we use DineByte for a multi-outlet chain with centralized reporting?",
        answer: "Certainly. DineByte's multi-tenant architecture enables headquarters to manage menus, pricing, and master recipes centrally while comparing outlet-level sales, margins, and inventory performance side by side.",
      },
    ],
  },
  {
    id: "evobyte",
    slug: "evobyte",
    name: "EvoByte",
    code: "PROD-03",
    category: "Multi-Industry Network Marketing & Business Management SaaS",
    tagline: "One Platform. Multiple Businesses. Endless Possibilities.",
    shortDesc: "EvoByte is a flexible multi-client, multi-industry network marketing and business management platform designed to help businesses manage products, members, distributors, referrals, sales, commissions and business performance.",
    fullDesc: "Engineered with modular network topology engines and independent tenant isolation, EvoByte powers direct-selling, affiliate networks, and distributor organizations across fashion, cosmetics, FMCG, healthcare, electronics, and specialty consumer products.",
    appType: "Web Application + Mobile Application",
    previewNote: "Production interface showcase of EvoByte network marketing console, e-commerce operations, and member referral app.",
    stats: [
      { label: "Architecture", value: "Multi-Tenant Cloud Engine" },
      { label: "Commission Types", value: "Direct, Binary, Matrix, Slabs" },
      { label: "Network Models", value: "Unilevel, Binary & Custom" },
      { label: "Isolation", value: "Tenant-Level Data Sovereignty" },
    ],
    applications: [
      {
        name: "Enterprise Administration Web Portal",
        type: "Web Application",
        description: "Back-office command center for enterprise brands and administrators to manage member networks, configure commission payout structures, and analyze product movement.",
        targetAudience: "NITHBYTE Super Admins & Company Business Owners",
        features: [
          "NITHBYTE Super Administrator console for multi-business onboarding",
          "Company administrator tenant configuration and white-label branding",
          "Comprehensive product catalog and category management",
          "Member, distributor, and customer registration registries",
          "Interactive genealogy tree visualizer with drill-down exploration",
          "Configurable network structures (Direct, Unilevel, Binary, Matrix)",
          "Dynamic commission engine (Direct referral, Level-based, Sales-based, Team ranks)",
          "Order processing, invoice generation, and transaction ledger",
          "Automated payout calculations and digital wallet management",
          "Business analytics, member retention curves, and sales forecasting",
          "Complete tenant-level data isolation and compliance audit logs",
        ],
      },
      {
        name: "Member & Distributor Mobile Application",
        type: "Mobile Application",
        description: "All-in-one handheld companion for network members to monitor team growth, browse product catalogs, place wholesale orders, and track commission earnings.",
        targetAudience: "Independent Distributors, Affiliates & Members",
        features: [
          "Fast member registration and secure biometric authentication",
          "Personalized profile management and digital member ID card",
          "Unique referral link generator and QR code sharing",
          "Rich product catalog with image galleries, variants, and wholesale pricing",
          "Direct product ordering, personal shopping, and order history tracking",
          "Live downline network tree view and team growth monitoring",
          "Member dashboard displaying personal sales volume (PV) and group volume (GV)",
          "Real-time commission ledger, payout summaries, and rank progress trackers",
          "Direct company announcements, product launches, and notification alerts",
        ],
      },
    ],
    configurableOptions: [
      {
        title: "Configurable Network Structures",
        description: "Adaptable topology engines built to match your brand's unique direct-selling compensation model.",
        items: [
          "Direct Referral Model (Single-tier affiliate and customer rewards)",
          "Unilevel Structure (Unlimited width with configurable depth limits)",
          "Binary Structure (Dual-leg balanced network with weaker-leg pairing)",
          "Matrix Structure (Fixed width and depth configurations e.g., 3x7, 5x5)",
          "Hybrid & Custom Business Network Topologies",
        ],
      },
      {
        title: "Configurable Commission Engines",
        description: "Automated mathematical calculation rules that execute transparently across transactions.",
        items: [
          "Direct Referral Commission (Instant reward on sponsored member sales)",
          "Level-Based Commission (Tiered percentage distribution across downline levels)",
          "Sales-Based Volume Commission (Rewards triggered by Personal/Group Volume)",
          "Team Performance & Fast-Start Incentives (Milestone bonuses)",
          "Rank-Based Recognition & Executive Pool Distributions",
        ],
      },
    ],
    modules: [
      {
        id: "genealogy-engine",
        title: "Genealogy Tree & Topology Engine",
        description: "Interactive visual network map supporting hundreds of thousands of member nodes.",
        features: [
          "Dynamic SVG tree renderer with search, pan, zoom, and downline filtering",
          "Node-level inspection displaying member volume, active status, and join date",
          "Automated placement rules for binary and matrix network balancing",
          "Network health indicators identifying high-growth and dormant team branches",
        ],
      },
      {
        id: "payout-wallet",
        title: "Automated Commission & Payout Ledger",
        description: "High-precision financial calculation engine handling complex commission rules.",
        features: [
          "Real-time wallet accruals with pending, approved, and disbursed status tracking",
          "Automated tax deductions (TDS) and processing fee accounting",
          "Batch bank payout export files formatted for direct corporate disbursement",
          "Transparent member earnings statement showing itemized commission breakdowns",
        ],
      },
      {
        id: "commerce-catalog",
        title: "Product Commerce & Order Management",
        description: "Integrated e-commerce storefront tailored for direct distributor purchases.",
        features: [
          "Configurable retail vs. wholesale member pricing tiers",
          "Point-value (PV/BV) allocation per SKU for compensation tracking",
          "Automated shipping label generation and courier tracking integration",
          "Repeat subscription orders and monthly auto-ship configuration",
        ],
      },
    ],
    roles: [
      {
        title: "NITHBYTE Super Administrator",
        description: "Platform architects overseeing enterprise onboarding, infrastructure scaling, and tenant security.",
        responsibilities: [
          "Provisioning dedicated tenant environments and database schemas",
          "Configuring platform-level feature toggles and core compensation engines",
          "Monitoring API throughput, system uptimes, and global security policies",
        ],
      },
      {
        title: "Company Administrator",
        description: "Business owner or operational director running their specific direct-selling brand.",
        responsibilities: [
          "Setting brand colors, logos, and custom onboarding workflows",
          "Managing product master, category trees, and inventory stock",
          "Configuring commission percentages, rank qualifications, and payout cycles",
          "Reviewing consolidated business metrics, top leaders, and revenue reports",
        ],
      },
      {
        title: "Member / Distributor",
        description: "Independent business builder generating sales, sponsoring new members, and earning commissions.",
        responsibilities: [
          "Sharing referral links to onboard new retail customers and team members",
          "Placing personal orders and retail fulfillment requests through the app",
          "Tracking network growth, volume milestones, and commission disbursements",
        ],
      },
    ],
    benefits: [
      {
        title: "Multi-Industry Flexibility",
        description: "Deploy for cosmetics, wellness, fashion, electronics, FMCG, or specialty direct-selling businesses without code restructuring.",
        highlight: "Industry Agnostic",
      },
      {
        title: "Independent Business Environments",
        description: "Each client operates within a strictly isolated, secure tenant environment with custom branding and data isolation.",
        highlight: "Tenant Data Sovereignty",
      },
      {
        title: "Centralized Member Management",
        description: "Maintain complete visibility over registrations, active certifications, downline relationships, and member KYC records.",
        highlight: "Complete Network Control",
      },
      {
        title: "Digital Referral Tracking",
        description: "Eliminate attribution disputes with tamper-proof digital referral links, QR codes, and automated sponsor binding.",
        highlight: "Frictionless Referrals",
      },
      {
        title: "Configurable Commission Structures",
        description: "Support any approved compensation plan—binary, matrix, unilevel, or hybrid—with automated calculation precision.",
        highlight: "Mathematical Accuracy",
      },
      {
        title: "Product & Order Management",
        description: "Combine direct selling with a robust e-commerce catalog featuring member pricing, point volume, and order tracking.",
        highlight: "Native E-Commerce",
      },
      {
        title: "Business Performance Visibility",
        description: "Equip leadership with real-time analytics on sales velocity, member retention rates, and payout ratios.",
        highlight: "Predictive Analytics",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Business Configuration",
        description: "Company administrators define compensation plans (Unilevel, Binary, Matrix), commission tiers, and upload product catalogs with point values.",
        badge: "ONBOARDING",
      },
      {
        step: "02",
        title: "Member Sponsoring",
        description: "Distributors invite prospects using personalized referral links and QR codes; newcomers register through the mobile app.",
        badge: "EXPANSION",
      },
      {
        step: "03",
        title: "Product Purchases & Orders",
        description: "Customers and distributors purchase products at retail or member discounts, generating Personal and Group Volume (PV/GV).",
        badge: "SALES",
      },
      {
        step: "04",
        title: "Automated Commission Distribution",
        description: "The calculation engine evaluates network rules, allocates commissions to digital wallets, and prepares payout reconciliations.",
        badge: "SETTLEMENT",
      },
    ],
    gallery: [
      {
        id: "evobyte-networking-admin",
        title: "Referral & Networking Administration",
        subtitle: "MANAMM Operations • 12-Stage Career & Benefit Roadmap, Zero-Fee Compliance & Stage Audits.",
        type: "desktop",
        badge: "ADMIN CONSOLE",
        description: "Back-office administration console for tracking 12-stage career progression, zero-fee compliance audits, and benefit disbursements.",
        image: "/images/products/evobyte/evobyte-networking-admin.jpg",
      },
      {
        id: "evobyte-operational-dashboard",
        title: "E-Commerce & Operational Dashboard",
        subtitle: "MANAMM Operations • Catalog Provisions, Fulfillment Health & Gross Sales Volume.",
        type: "desktop",
        badge: "OPS DASHBOARD",
        description: "Centralized e-commerce metrics showing catalog scale (7,500+ items), active orders, fulfillment status, and recent bookings.",
        image: "/images/products/evobyte/evobyte-operational-dashboard.png",
      },
      {
        id: "evobyte-mobile-networking",
        title: "Member Networking & Community Circle",
        subtitle: "MANAMM Member App • Referral Progression, Direct Circle Invites & Milestone Tracking.",
        type: "mobile",
        badge: "MEMBER NETWORK",
        description: "Personalized referral hub for members with unique invite codes, milestone progression meters, and qualification summaries.",
        image: "/images/products/evobyte/evobyte-mobile-networking.jpg",
      },
      {
        id: "evobyte-mobile-store",
        title: "Multi-Category Member Store Directory",
        subtitle: "MANAMM Member App • Categorized Product Catalog, Aisle Search & Instant Cart Add.",
        type: "mobile",
        badge: "STORE DIRECTORY",
        description: "Multi-aisle department directory with categorized product browsing, price filters, and instant cart additions.",
        image: "/images/products/evobyte/evobyte-mobile-store.jpg",
      },
      {
        id: "evobyte-mobile-home",
        title: "Direct Delivery Home Storefront",
        subtitle: "MANAMM Member App • Department Promotions, Farm-to-Table Selections & Smart Search.",
        type: "mobile",
        badge: "HOME STOREFRONT",
        description: "Customer home feed featuring promotional banners, verified artisan selections, and category discovery.",
        image: "/images/products/evobyte/evobyte-mobile-home.jpg",
      },
    ],
    faqs: [
      {
        question: "Can EvoByte support different network compensation plans for different businesses?",
        answer: "Yes. EvoByte is engineered specifically with configurable network topologies. Whether your model uses direct referral bonuses, unilevel depth, binary matching legs, matrix structures, or hybrid plans, the engine adapts to your exact mathematical specifications.",
      },
      {
        question: "How does EvoByte ensure data privacy between different companies using the platform?",
        answer: "EvoByte enforces strict tenant-level data isolation. Each business organization operates within its own secure partition, guaranteeing that members, products, sales numbers, and genealogy trees are completely confidential.",
      },
      {
        question: "Can members order physical products directly through the mobile application?",
        answer: "Yes. The member mobile application includes a built-in e-commerce storefront with product images, descriptions, member-specific pricing, and order status tracking.",
      },
      {
        question: "Can administrators export commission payout sheets for bank transfers?",
        answer: "Yes. The web administration portal allows administrators to review accrued commissions, apply automated statutory tax deductions, and export batch payout schedules for corporate bank execution.",
      },
    ],
  },
  {
    id: "chitbyte",
    slug: "chitbyte",
    name: "ChitByte",
    code: "PROD-04",
    category: "Digital Chit Fund Management Platform",
    tagline: "Simplifying Chit Fund Operations. Connecting Every Customer.",
    shortDesc: "ChitByte is a complete digital chit fund management ecosystem designed to connect chit fund business owners, collection staff and customers through three integrated applications.",
    fullDesc: "Designed to modernize chit fund enterprises, ChitByte replaces manual register notebooks and collection receipt slips with an immutable, transparent digital platform. It connects business administration, field collection agents, and chit subscribers into a synchronized three-part ecosystem.",
    appType: "Web Application + Two Mobile Applications (Owner App & Customer App)",
    previewNote: "Production interface showcase of ChitByte business ledger, agent collection terminal, and foreman operations.",
    stats: [
      { label: "Architecture", value: "3-Tier Digital Ecosystem" },
      { label: "Apps Included", value: "Web + Owner App + Customer App" },
      { label: "Collection Speed", value: "Instant SMS/Digital Receipts" },
      { label: "Ledger", value: "End-of-Day Daily Reconciliation" },
    ],
    applications: [
      {
        name: "Central Business Management Web Application",
        type: "Web Application",
        description: "Comprehensive administrative headquarters for chit fund owners and accountants to manage schemes, monitor agent collections, execute auctions, and audit ledgers.",
        targetAudience: "Chit Fund Business Owners, Branch Managers & Accountants",
        features: [
          "Executive business dashboard displaying daily collection totals and active chit values",
          "Customer registration, KYC documentation, and membership management",
          "Flexible chit scheme creation: Weekly, monthly, and custom duration schemes",
          "Automated installment scheduling and member passbook generation",
          "Real-time outstanding dues, payment defaulters, and overdue tracking",
          "Daily collection agent allocation and cash hand-over reconciliation",
          "Auction management module with bidding logs, dividend splits, and winner records",
          "Prized chit payout management with security verification and installment offsets",
          "Operational expense tracking and profit/loss balance sheets",
          "End-of-day daily cash reconciliation and bank deposit tracking",
          "Automated financial statements, customer ledger cards, and balance summaries",
          "Multi-user role permissions, branch controls, and business branding settings",
        ],
      },
      {
        name: "Owner Mobile Application",
        type: "Mobile Application",
        description: "Executive handheld command center giving business owners and field collection supervisors instant visibility into daily cash flows, overdue accounts, and auction outcomes.",
        targetAudience: "Chit Fund Business Owners & Field Supervisors",
        features: [
          "At-a-glance business dashboard showing live collection meters and cash on hand",
          "Today's total collections breakdown by agent, route, and scheme",
          "Outstanding dues summary with quick-dial phone links to delinquent subscribers",
          "Instant customer search and comprehensive membership record inspection",
          "Door-to-door spot collection recording with immediate receipt generation",
          "Digital receipt viewing, WhatsApp sharing, and SMS dispatch",
          "Live auction monitoring, winner confirmation, and payout approvals",
          "Daily, weekly, and monthly consolidated financial progress reports",
          "Real-time notifications whenever agents complete significant collections",
          "Operational activity monitoring across all collection routes",
        ],
      },
      {
        name: "Customer Mobile Application",
        type: "Mobile Application",
        description: "Transparent digital passbook for chit subscribers to track their memberships, inspect installment schedules, view digital receipts, and stay updated on auction dividends.",
        targetAudience: "Chit Subscribers & Retail Customers",
        features: [
          "Secure customer mobile login with OTP authentication",
          "Personal profile management and registered nominee records",
          "Active chit memberships overview with total chit value and duration",
          "Transparent installment details showing monthly dividend deductions",
          "Upcoming payment due dates with countdown indicators",
          "Complete historical ledger of paid installments with digital receipts",
          "Pending installment information and overdue notices",
          "Downloadable and shareable digital payment receipts",
          "Auction results archive with winning bids, prize money, and dividend details",
          "Push reminders for upcoming installments to avoid late charges",
          "Direct business announcements, holiday notices, and festive schemes",
          "Payment references and online payment request submission where enabled",
        ],
      },
    ],
    modules: [
      {
        id: "scheme-lifecycle",
        title: "Chit Scheme Creation & Lifecycle Management",
        description: "Configure versatile chit plans with automated installment calendars.",
        features: [
          "Weekly, fortnightly, monthly, or customized installment frequency models",
          "Automated member allocation across chit groups with ticket numbers",
          "Dynamic dividend calculation automatically reducing subscriber installment payable",
          "Foreclosure, transfer of membership, and substitution management",
        ],
      },
      {
        id: "agent-collection",
        title: "Doorstep Agent Collection & Digital Receipts",
        description: "Equip field collectors with digital verification tools, eliminating paper receipt books.",
        features: [
          "Agent route assignment with list of scheduled customer door-visits",
          "Instant spot collection logging with automated SMS or WhatsApp receipt dispatch",
          "Daily cash hand-over verification preventing agent collection discrepancies",
          "Defaulter prioritization alerts showing days overdue and penalty calculations",
        ],
      },
      {
        id: "auction-payouts",
        title: "Reverse Auction & Winner Disbursement",
        description: "Conduct transparent chit auctions with compliant bidding records and payout safeguards.",
        features: [
          "Auction bidding log recording minimum discount thresholds and final bid amounts",
          "Automated dividend calculation distributed equally among non-prized subscribers",
          "Surety and guarantor verification workflow prior to prize money disbursement",
          "Payout voucher generation with deduction of pending dues or future security reserves",
        ],
      },
    ],
    roles: [
      {
        title: "Business Administrator / Owner",
        description: "Chit fund proprietor or executive directing overall financial health, scheme launches, and auctions.",
        responsibilities: [
          "Creating new chit schemes, ticket sizes, and group schedules",
          "Conducting monthly chit auctions and approving prize disbursements",
          "Auditing daily cash reconciliation and monitoring non-performing subscribers",
        ],
      },
      {
        title: "Field Collection Agent",
        description: "On-ground representative visiting subscribers daily or monthly to collect installments.",
        responsibilities: [
          "Navigating assigned daily routes and collecting cash or digital payments",
          "Generating and sharing instant digital receipts with customers",
          "Reconciling collected amounts with the head office cashier at end-of-day",
        ],
      },
      {
        title: "Chit Subscriber / Customer",
        description: "Enrolled participant saving or bidding within chit schemes.",
        responsibilities: [
          "Paying scheduled installments on time via agents or digital payments",
          "Tracking passbook balances, earned dividends, and upcoming auctions",
          "Participating in chit auctions and submitting documentation for prize claims",
        ],
      },
    ],
    benefits: [
      {
        title: "Centralized Chit Fund Management",
        description: "Bring all branches, groups, auction ledgers, and subscriber accounts into a unified cloud database.",
        highlight: "Unified Enterprise Ledger",
      },
      {
        title: "Organized Installment Tracking",
        description: "Automate complex installment calendars, dividend deductions, and fine calculations with zero manual calculation errors.",
        highlight: "Automated Calculations",
      },
      {
        title: "Digital Collection Recording",
        description: "Replace prone-to-loss physical receipt notebooks with tamper-proof digital collection logs and instant receipt sharing.",
        highlight: "Zero Paperwork Loss",
      },
      {
        title: "Easier Customer Account Access",
        description: "Give subscribers full transparency into their investments through a dedicated digital mobile passbook.",
        highlight: "Customer Trust & Loyalty",
      },
      {
        title: "Digital Receipt Management",
        description: "Every payment generates a verifiable digital receipt accessible anytime through the customer and owner mobile applications.",
        highlight: "Verifiable Audit Trail",
      },
      {
        title: "Better Outstanding Dues Visibility",
        description: "Identify overdue payments instantly with aged-debtor reports and automated payment reminder notifications.",
        highlight: "Accelerated Recoveries",
      },
      {
        title: "Connected Owner & Customer Experience",
        description: "Foster seamless transparency between the chit fund office, field collection agents, and participating subscribers.",
        highlight: "Three-Way Digital Sync",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Scheme Launch & Enrollment",
        description: "The business creates a chit scheme (e.g., 20 members, 20 months), assigns tickets, and enrolls verified subscribers.",
        badge: "ADMIN SETUP",
      },
      {
        step: "02",
        title: "Daily Doorstep Collection",
        description: "Collection agents visit customers, record installment payments via the mobile app, and instantly issue digital receipts.",
        badge: "AGENT VISIT",
      },
      {
        step: "03",
        title: "Chit Auction & Dividend Allocation",
        description: "The monthly auction is conducted; the winning bid determines the prize pool, and remaining dividends are credited to subscriber accounts.",
        badge: "AUCTION STAGE",
      },
      {
        step: "04",
        title: "Reconciliation & Prize Payout",
        description: "Daily cash collections are audited and closed, while prize money is safely disbursed to the winning bidder following verification.",
        badge: "SETTLEMENT",
      },
    ],
    gallery: [
      {
        id: "chitbyte-dashboard",
        title: "Financial Overview & Daily Collections Dashboard",
        subtitle: "Durga Chit Fund Management System • Financial Overview, Gross Receipts & Period Filters.",
        type: "desktop",
        badge: "ADMIN CONSOLE",
        description: "Comprehensive financial overview tracking scheme balances, gross collections by cash/UPI, and real ledger totals.",
        image: "/images/products/chitbyte/chitbyte-dashboard.png",
      },
      {
        id: "chitbyte-schemes",
        title: "Chit Schemes & Savings Batches Engine",
        subtitle: "Weekly & Monthly Savings Batches, Approved Scheme Templates & Member Enrollment.",
        type: "desktop",
        badge: "SCHEMES ENGINE",
        description: "Versatile scheme lifecycle console supporting weekly and monthly templates, member capacity quotas, and batch ledgers.",
        image: "/images/products/chitbyte/chitbyte-schemes.png",
      },
      {
        id: "chitbyte-mobile-collection",
        title: "Fast Mobile Field Collection Terminal",
        subtitle: "One-Handed Daily Receipt Entry • Step-by-Step Customer Ledger Snapshot & Instant Recording.",
        type: "mobile",
        badge: "COLLECTION APP",
        description: "Field collection terminal for rapid customer search, ledger snapshot inspection, quick-punch amounts, and digital receipts.",
        image: "/images/products/chitbyte/chitbyte-mobile-collection.png",
      },
      {
        id: "chitbyte-mobile-settings",
        title: "Foreman Operations & System Configuration",
        subtitle: "Durga Chit Fund Mobile Hub • Registers, Daily Reconciliation, Auctions & Payouts.",
        type: "mobile",
        badge: "FOREMAN APP",
        description: "Executive foreman mobile operations hub with daily registers, bank reconciliation, auction recording, and prize payouts.",
        image: "/images/products/chitbyte/chitbyte-mobile-settings.png",
      },
    ],
    faqs: [
      {
        question: "How does ChitByte prevent collection theft or reconciliation mismatches by field agents?",
        answer: "When a collection agent records a payment in the mobile app, an instant digital receipt is generated with timestamp and payment mode, and delivered to the subscriber. At the end of the day, the web console reconciles the agent's logged collections against the physical cash handed over before closing the day's books.",
      },
      {
        question: "Does ChitByte support different scheme durations, like weekly or daily collections?",
        answer: "Yes. ChitByte supports flexible scheme schedules including monthly, weekly, and custom installment frequency intervals, accommodating both traditional monthly groups and high-frequency daily collection schemes.",
      },
      {
        question: "Can customers view their dividend deductions and upcoming auction dates in the app?",
        answer: "Yes. The Customer Mobile Application serves as a real-time digital passbook where subscribers can see their exact installment amount payable after dividend credits, along with scheduled auction dates and past auction winning amounts.",
      },
      {
        question: "What documentation does ChitByte produce for prized chit payouts?",
        answer: "ChitByte maintains an end-to-end auction log recording the winning bidder, discount percentage, guarantor details, security pledges, and net payout calculation after adjusting any pending dues or advance installments.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}

