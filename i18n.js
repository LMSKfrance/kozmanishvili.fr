/* ============================================================
   Alexander Kozmanishvili — Shared i18n System
   Centralized translations (EN/FR) used across all pages
   ============================================================ */

const translations = {
    en: {
        /* Navigation */
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.resume': 'Résumé',
        'nav.contact': 'Contact',
        
        /* Hero */
        'hero.title': 'Senior Product Designer',
        'hero.location': 'Lyon, France',
        'hero.description': 'I design clinical platforms, operational systems and design systems, bringing clarity and consistency to products at scale.',
        
        /* Work section */
        'work.selected': 'SELECTED WORK',
        'work.services': 'Services & Disciplines',
        
        /* HECA */
        'work.heca.number': '01 / 05',
        'work.heca.title': 'Heca CRM & Design System',
        'work.heca.role': 'Senior Product Designer · 2023–Present',
        'work.heca.context': 'Redesigning an employee-facing CRM for 40+ internal users — and building their foundational design system from zero.',
        'work.heca.role.label': 'End-to-end ownership. HCD research → Figma → production handoff.',
        'work.heca.ux': 'Token-first system — semantic colors, spacing scale, and component variants before any screen design.',
        'work.heca.outcome': '40% faster workflows · 35% satisfaction increase · 50% less handoff time.',
        'work.heca.cta': 'Read case study →',
        
        /* Symmetra */
        'work.symmetra.number': '02 / 05',
        'work.symmetra.title': 'Symmetra Claims Workflow',
        'work.symmetra.role': 'Lead Product Designer · 2020–2023',
        'work.symmetra.context': 'Redesigning the claims handling workflow for an insurtech platform serving 100,000+ users across 4 product lines.',
        'work.symmetra.role.label': 'Research lead, IA, design system architecture, and mentorship of 3 junior designers.',
        'work.symmetra.ux': 'Reduced an 11-step linear flow to 5 steps across 3 screens. Smart defaults and progressive disclosure removed cognitive load.',
        'work.symmetra.outcome': 'Claims handling 12→7 min · errors down 50% · support tickets down 40%.',
        'work.symmetra.cta': 'Read case study →',
        
        /* Clinical */
        'work.clinical.number': '03 / 05',
        'work.clinical.title': 'Clinical Workflow Platform',
        'work.clinical.role': 'Product Designer · 2017–2020',
        'work.clinical.context': 'Replacing paper-based clinical workflows for a healthcare client where staff had abandoned the digital system.',
        'work.clinical.role.label': 'First designer at the agency. Contextual research, information architecture, interface design.',
        'work.clinical.ux': 'Reframed the brief from "improve the UI" to "redesign the IA around the patient journey, not the admin org chart."',
        'work.clinical.outcome': 'Full staff adoption · paper backup usage eliminated · admin time reduced.',
        'work.clinical.cta': 'Read case study →',
        
        /* Concilium */
        'work.concilium.number': '04 / 05',
        'work.concilium.title': 'Concilium — Clinical Decision Support',
        'work.concilium.role': 'Product Designer · Self-directed · 2026',
        'work.concilium.context': 'A concept cardiology platform. The treatment decision lives across the EHR, labs, PACS and the guidelines — never in one place at once.',
        'work.concilium.role.label': 'Information architecture, a disciplined clinical UI system, and a prototype of the core compare-and-commit flow.',
        'work.concilium.ux': 'Treated comparison as a first-class primitive and kept AI on the surface with its evidence — a second reader, never the decider.',
        'work.concilium.outcome': 'One decision surface · evidence-led AI · human-committed choices.',
        'work.concilium.cta': 'Read case study →',
        
        /* About */
        'about.title': 'IDENTITY',
        'about.heading': 'Systems-first product designer focused on enterprise-scale environments.',
        'about.intro1': 'My practice focuses on reducing cognitive friction in high-stakes environments. I specialise in healthcare, fintech, and complex B2B SaaS platforms — building design systems and employee-facing tools that scale.',
        'about.intro2': 'I work embedded in cross-functional trios with product and engineering, using Human-Centered Design research and Lean UX to validate decisions with real users before scaling across global product ecosystems.',
        'about.education': 'Education',
        'about.education.text': 'Bachelor, Visual Communications & HCI\nTbilisi State Academy of Art, 2011\nFrench ENIC-NARIC: Level 6 / EQF Level 6 (Cadre européen des certifications)',
        'about.certifications': 'Certifications',
        'about.certifications.text': 'IDF — Methods to Design Better Products & Services (2024)<br>IDF — Gestalt Psychology & Web Design (2024)<br>IDF — Mobile Interface Design (2023)',
        'about.expertise': 'Expertise',
        'about.expertise.text': 'Design Systems, WCAG 2.1 Compliance, HCD Research, Workflow Optimization, Component Architecture, Lean UX, Figma (Advanced).',
        'about.languages': 'Languages',
        'about.languages.text': 'English (fluent) · French (intermediate) · Georgian (native)',
        'about.resume.cta': 'View full résumé →',
        'about.methodology': 'Methodology',
        'about.systems': 'Systems Thinking',
        'about.systems.text': 'I treat UI not as a collection of pages but as a system of reusable logic. Every component is documented, version-controlled, and accessibility-audited before reaching production.',
        'about.validation': 'Evidence-Based Validation',
        'about.validation.text': 'Design is a hypothesis. I use contextual inquiry and iterative usability testing to validate decisions with real users before scaling — ensuring operational efficiency matches the clinical and business reality.',
        'about.delivery': 'Delivery Focus',
        'about.delivery.text': 'Design only succeeds if it ships. I specialize in the handoff phase — building documentation and token-linked components that let engineering build with velocity and confidence. Handoff time cut in half. Production bugs down 60%.',
        
        /* Footer */
        'footer.heading': 'Let\'s connect',
        'footer.email': 'Email',
        'footer.linkedin': 'LinkedIn',
        'footer.resume': 'Résumé',
        'footer.copyright': 'Alexander Kozmanishvili · Senior Product Designer · © 2026',
        'footer.location': 'LYON, FRANCE',
        
        /* Case studies common */
        'case.back': '← Back to portfolio',
        'case.next': 'Next case study →',
        
        /* HECA Case Study */
        'heca.case.title': 'Heca CRM & Design System',
        'heca.case.tagline': '"You\'re covered."',
        'heca.case.subtitle': 'An end-to-end rebuild of an insurance brokerage platform — from 200+ scattered patterns to a single token-driven system serving case management and quoting alike.',
        'heca.case.client': 'Heca S.r.l. Unipersonale',
        'heca.case.role': 'Senior Product Designer',
        'heca.case.timeline': '18 Months · 2023–Present',
        'heca.case.platform': 'Enterprise Web · Internal Tool',
        'heca.case.section1': '01 — The Problem',
        'heca.case.section1.title': '200+ inconsistent components. Zero shared system.',
        'heca.case.section2': '02 — Discovery',
        'heca.case.section2.title': 'Start with the system, not the screen.',
        'heca.case.section3': '03 — System Architecture',
        'heca.case.section3.title': 'Token-first. Component-second. Documentation-always.',
        'heca.case.section4': '04 — Component Library',
        'heca.case.section4.title': '60+ components. Every state. Every variant.',
        'heca.case.section5': '05 — CRM Redesign',
        'heca.case.section5.title': 'The system in production.',
        'heca.case.section6': '06 — Impact',
        'heca.case.section6.title': 'A shared language that paid back in velocity.',
        'heca.case.section7': '07 — Reflection',
        'heca.case.section7.title': 'What worked, and what I\'d do differently.',
        
        /* Symmetra Case Study */
        'symmetra.case.title': 'Eleven steps to settle a claim. We made it five.',
        'symmetra.case.subtitle': 'Redesigning the claims handling workflow for a regulated insurtech platform serving 100,000+ users across four product lines — and architecting the design system that scaled the new flow across every role.',
        'symmetra.case.role': 'Lead Product Designer',
        'symmetra.case.timeline': '2020 – 2023',
        'symmetra.case.team': 'Lead · mentored 3 designers',
        'symmetra.case.discipline': 'HCD Research · Interaction · Systems',
        'symmetra.case.scale': '100k+ users · 4 product lines',
        'symmetra.case.section1': '01 — Overview',
        'symmetra.case.section1.title': 'A claims platform that had grown too complex to use well.',
        'symmetra.case.section2': '02 — The Problem',
        'symmetra.case.section2.title': 'Eleven sequential steps, each a chance to stall or err.',
        'symmetra.case.section3': '03 — Before',
        'symmetra.case.section3.title': 'The interface claims handlers actually used.',
        'symmetra.case.section4': '04 — Research',
        'symmetra.case.section4.title': 'Three rounds of contextual research, iterated into design.',
        'symmetra.case.section5': '05 — Design Process',
        'symmetra.case.section5.title': 'Three phases, twelve handlers, three rounds of testing.',
        'symmetra.case.section6': '06 — The Five-Step Flow',
        'symmetra.case.section6.title': 'Collapse eleven steps into five — across three screens.',
        'symmetra.case.section7': '07 — Design System',
        'symmetra.case.section7.title': 'One system, every role, four product lines.',
        'symmetra.case.section8': '08 — States & Edge Cases',
        'symmetra.case.section8.title': 'In a regulated tool, the edges are the product.',
        'symmetra.case.section9': '09 — Across the Workspace',
        'symmetra.case.section9.title': 'The same library, composed into every surface.',
        'symmetra.case.section10': '10 — Outcome',
        'symmetra.case.section10.title': 'Faster, more accurate, easier to onboard.',
        
        /* Clinical Case Study */
        'clinical.case.title': 'The staff had quietly gone back to paper.',
        'clinical.case.subtitle': 'Redesigning clinical workflows for a healthcare client whose medical staff had abandoned the digital system — by rebuilding the information architecture around the patient journey, not the org chart.',
        'clinical.case.role': 'Product Designer',
        'clinical.case.timeline': '2017 – 2020',
        'clinical.case.team': 'First designer at agency',
        'clinical.case.sector': 'Healthcare · Clinical',
        'clinical.case.compliance': 'GDPR · clinical data',
        'clinical.case.section1': '01 — Overview',
        'clinical.case.section1.title': 'A digital system that clinicians had voted against — with their feet.',
        'clinical.case.section2': '02 — The Problem',
        'clinical.case.section2.title': 'Paper backups, double entry, and errors born of context-switching.',
        'clinical.case.section3': '03 — Research',
        'clinical.case.section3.title': 'I shadowed nurses and doctors across three full shifts.',
        'clinical.case.section4': '04 — UX Thinking',
        'clinical.case.section4.title': 'Redesign the architecture around the patient journey.',
        'clinical.case.section5': '05 — UI System',
        'clinical.case.section5.title': 'Every screen leads with the decision, not the data.',
        'clinical.case.section6': '06 — Outcome',
        'clinical.case.section6.title': 'The paper disappeared — because it was no longer needed.',
        
        /* Concilium Case Study */
        'concilium.case.title': 'Concilium — a single surface for the treatment decision.',
        'concilium.case.subtitle': 'A concept clinical-decision-support platform for cardiology. The hard question — which treatment, for this patient, and why — is scattered across the EHR, the lab system, PACS and the guidelines. Concilium pulls it onto one decision surface, with AI as a second reader, never the decider.',
        'concilium.case.role': 'Product Designer',
        'concilium.case.year': '2026',
        'concilium.case.type': 'Concept · self-directed',
        'concilium.case.sector': 'Healthcare · Cardiology',
        'concilium.case.scope': 'IA · UI system · prototype',
        'concilium.case.section1': '01 — Overview',
        'concilium.case.section1.title': 'A decision a cardiologist makes in minutes, supported by data that lives in five systems.',
        'concilium.case.section2': '02 — The Problem',
        'concilium.case.section2.title': 'The evidence exists. It just never sits in one place at the same time.',
        'concilium.case.section3': '03 — Information Architecture',
        'concilium.case.section3.title': 'Structured around the clinician\'s path: triage → understand → decide.',
        'concilium.case.section4': '04 — The Decision Engine',
        'concilium.case.section4.title': 'The Concilium: three regimens, one comparison, a defensible choice.',
        'concilium.case.section5': '05 — Imaging & AI',
        'concilium.case.section5.title': 'A dark reading room, with the model\'s findings flagged — not hidden.',
        'concilium.case.section6': '06 — Design System',
        'concilium.case.section6.title': 'One system, so a number means the same thing everywhere.',
        'concilium.case.section7': '07 — Reflection',
        'concilium.case.section7.title': 'What a decision surface earns you.',
    },
    fr: {
        /* Navigation */
        'nav.work': 'Projets',
        'nav.about': 'À propos',
        'nav.resume': 'CV',
        'nav.contact': 'Contact',
        
        /* Hero */
        'hero.title': 'Designer Produit Senior',
        'hero.location': 'Lyon, France',
        'hero.description': 'Je conçois des plateformes cliniques, des systèmes opérationnels et des design systems, apportant clarté et cohérence à des produits à l\'échelle.',
        
        /* Work section */
        'work.selected': 'PROJETS SÉLECTIONNÉS',
        'work.services': 'Services et disciplines',
        
        /* HECA */
        'work.heca.number': '01 / 05',
        'work.heca.title': 'Heca CRM et Design System',
        'work.heca.role': 'Designer Produit Senior · 2023–Présent',
        'work.heca.context': 'Refonte d\'un CRM pour employés avec 40+ utilisateurs internes — et création du design system fondationnel à partir de zéro.',
        'work.heca.role.label': 'Propriété de bout en bout. Recherche HCD → Figma → livraison en production.',
        'work.heca.ux': 'Système axé sur les tokens — couleurs sémantiques, échelle d\'espacement et variantes de composants avant toute conception d\'écran.',
        'work.heca.outcome': 'Flux 40% plus rapides · satisfaction augmentée de 35% · temps de livraison réduit de 50%.',
        'work.heca.cta': 'Lire l\'étude de cas →',
        
        /* Symmetra */
        'work.symmetra.number': '02 / 05',
        'work.symmetra.title': 'Workflow de réclamations Symmetra',
        'work.symmetra.role': 'Designer Produit Senior · 2020–2023',
        'work.symmetra.context': 'Refonte du workflow de traitement des réclamations pour une plateforme insurtech desservant 100 000+ utilisateurs sur 4 lignes de produits.',
        'work.symmetra.role.label': 'Chef de recherche, IA, architecture du système de conception et mentorat de 3 designers juniors.',
        'work.symmetra.ux': 'Réduction d\'un flux linéaire de 11 étapes à 5 étapes sur 3 écrans. Les paramètres par défaut intelligents et la divulgation progressive ont réduit la charge cognitive.',
        'work.symmetra.outcome': 'Traitement des réclamations 12→7 min · erreurs réduites de 50% · tickets de support réduits de 40%.',
        'work.symmetra.cta': 'Lire l\'étude de cas →',
        
        /* Clinical */
        'work.clinical.number': '03 / 05',
        'work.clinical.title': 'Plateforme de workflow clinique',
        'work.clinical.role': 'Designer Produit · 2017–2020',
        'work.clinical.context': 'Remplacement des flux de travail cliniques basés sur papier pour un client du secteur sanitaire où le personnel avait abandonné le système numérique.',
        'work.clinical.role.label': 'Premier designer de l\'agence. Recherche contextuelle, architecture de l\'information, conception d\'interface.',
        'work.clinical.ux': 'Reformulation du brief de « améliorer l\'interface » à « redesigner l\'IA autour du parcours patient, pas de l\'organigramme administratif ».',
        'work.clinical.outcome': 'Adoption complète du personnel · utilisation d\'archives papier éliminée · temps administratif réduit.',
        'work.clinical.cta': 'Lire l\'étude de cas →',
        
        /* Concilium */
        'work.concilium.number': '04 / 05',
        'work.concilium.title': 'Concilium — Support de décision clinique',
        'work.concilium.role': 'Designer Produit · Auto-dirigé · 2026',
        'work.concilium.context': 'Une plateforme cardiologique conceptuelle. La décision de traitement s\'étend sur le dossier électronique, les labos, la PACS et les directives — jamais au même endroit en même temps.',
        'work.concilium.role.label': 'Architecture de l\'information, système d\'interface clinique discipliné et prototype du flux central de comparaison et validation.',
        'work.concilium.ux': 'Traitement de la comparaison comme une primitive de première classe et maintien de l\'IA à la surface avec ses preuves — un deuxième lecteur, jamais le décideur.',
        'work.concilium.outcome': 'Une surface de décision · IA basée sur les preuves · choix engagés par l\'humain.',
        'work.concilium.cta': 'Lire l\'étude de cas →',
        
        /* About */
        'about.title': 'IDENTITÉ',
        'about.heading': 'Designer produit axé sur les systèmes et les environnements d\'entreprise à grande échelle.',
        'about.intro1': 'Ma pratique se concentre sur la réduction des frictions cognitives dans les environnements à enjeux élevés. Je me spécialise dans les plateformes de santé, fintech et B2B SaaS complexes — créant des systèmes de conception et des outils destinés aux employés qui se mettent à l\'échelle.',
        'about.intro2': 'Je travaille intégré dans des trios fonctionnels avec le produit et l\'ingénierie, utilisant la recherche Human-Centered Design et Lean UX pour valider les décisions avec les utilisateurs réels avant de les mettre à l\'échelle sur les écosystèmes de produits mondiaux.',
        'about.education': 'Formation',
        'about.education.text': 'Licence, Communications visuelles et HCI\nAcadémie d\'art d\'État de Tbilissi, 2011\nFrançaise ENIC-NARIC : Niveau 6 / Niveau 6 EQF (Cadre européen des certifications)',
        'about.certifications': 'Certifications',
        'about.certifications.text': 'IDF — Méthodes pour concevoir de meilleurs produits et services (2024)<br>IDF — Psychologie de la Gestalt et conception web (2024)<br>IDF — Conception d\'interface mobile (2023)',
        'about.expertise': 'Expertise',
        'about.expertise.text': 'Design Systems, Conformité WCAG 2.1, Recherche HCD, Optimisation de workflows, Architecture de composants, Lean UX, Figma (Avancé).',
        'about.languages': 'Langues',
        'about.languages.text': 'Anglais (courant) · Français (intermédiaire) · Géorgien (natif)',
        'about.resume.cta': 'Voir le CV complet →',
        'about.methodology': 'Méthodologie',
        'about.systems': 'Pensée systémique',
        'about.systems.text': 'Je traite l\'interface utilisateur non comme une collection de pages mais comme un système de logique réutilisable. Chaque composant est documenté, contrôlé en version et audité pour l\'accessibilité avant d\'aller en production.',
        'about.validation': 'Validation basée sur les preuves',
        'about.validation.text': 'La conception est une hypothèse. J\'utilise l\'enquête contextuelle et les tests d\'utilisabilité itératifs pour valider les décisions auprès des utilisateurs réels avant de les mettre à l\'échelle — en assurant que l\'efficacité opérationnelle correspond à la réalité clinique et commerciale.',
        'about.delivery': 'Focus sur la livraison',
        'about.delivery.text': 'La conception ne réussit que si elle est livrée. Je me spécialise dans la phase de livraison — créant une documentation et des composants liés aux tokens qui permettent à l\'ingénierie de construire avec vélocité et confiance. Temps de livraison réduit de moitié. Bugs de production réduits de 60%.',
        
        /* Footer */
        'footer.heading': 'Échangeons.',
        'footer.email': 'Email',
        'footer.linkedin': 'LinkedIn',
        'footer.resume': 'CV',
        'footer.copyright': 'Alexander Kozmanishvili · Designer Produit Senior · © 2026',
        'footer.location': 'LYON, FRANCE',
        
        /* Case studies common */
        'case.back': '← Retour au portfolio',
        'case.next': 'Étude de cas suivante →',
        
        /* HECA Case Study */
        'heca.case.title': 'Heca CRM et Design System',
        'heca.case.tagline': '« Vous êtes couverts. »',
        'heca.case.subtitle': 'Une refonte complète d\'une plateforme de courtage d\'assurance — de 200+ modèles dispersés à un seul système axé sur les tokens servant la gestion des dossiers et les devis.',
        'heca.case.client': 'Heca S.r.l. Unipersonale',
        'heca.case.role': 'Designer Produit Senior',
        'heca.case.timeline': '18 mois · 2023–Présent',
        'heca.case.platform': 'Web d\'entreprise · Outil interne',
        'heca.case.section1': '01 — Le problème',
        'heca.case.section1.title': '200+ composants incohérents. Aucun système partagé.',
        'heca.case.section2': '02 — Découverte',
        'heca.case.section2.title': 'Commencez par le système, pas l\'écran.',
        'heca.case.section3': '03 — Architecture du système',
        'heca.case.section3.title': 'Token-first. Composant-second. Documentation-toujours.',
        'heca.case.section4': '04 — Bibliothèque de composants',
        'heca.case.section4.title': '60+ composants. Chaque état. Chaque variante.',
        'heca.case.section5': '05 — Refonte du CRM',
        'heca.case.section5.title': 'Le système en production.',
        'heca.case.section6': '06 — Impact',
        'heca.case.section6.title': 'Un langage partagé qui a payé en vélocité.',
        'heca.case.section7': '07 — Réflexion',
        'heca.case.section7.title': 'Ce qui a fonctionné et ce que je ferais différemment.',
        
        /* Symmetra Case Study */
        'symmetra.case.title': 'Onze étapes pour régler une réclamation. Nous les avons réduites à cinq.',
        'symmetra.case.subtitle': 'Refonte du flux de traitement des réclamations pour une plateforme insurtech réglementée desservant 100 000+ utilisateurs sur quatre lignes de produits — et architecture du système de conception qui a mis à l\'échelle le nouveau flux à chaque rôle.',
        'symmetra.case.role': 'Designer Produit Principal',
        'symmetra.case.timeline': '2020 – 2023',
        'symmetra.case.team': 'Principal · mentorat de 3 designers',
        'symmetra.case.discipline': 'Recherche HCD · Interaction · Systèmes',
        'symmetra.case.scale': '100k+ utilisateurs · 4 lignes de produits',
        'symmetra.case.section1': '01 — Aperçu',
        'symmetra.case.section1.title': 'Une plateforme de réclamations devenue trop complexe à utiliser correctement.',
        'symmetra.case.section2': '02 — Le problème',
        'symmetra.case.section2.title': 'Onze étapes séquentielles, chacune une occasion de s\'arrêter ou d\'échouer.',
        'symmetra.case.section3': '03 — Avant',
        'symmetra.case.section3.title': 'L\'interface que les gestionnaires de réclamations utilisaient réellement.',
        'symmetra.case.section4': '04 — Recherche',
        'symmetra.case.section4.title': 'Trois tours de recherche contextuelle, itérés dans la conception.',
        'symmetra.case.section5': '05 — Processus de conception',
        'symmetra.case.section5.title': 'Trois phases, douze gestionnaires, trois tours de tests.',
        'symmetra.case.section6': '06 — Le flux à cinq étapes',
        'symmetra.case.section6.title': 'Réduire onze étapes à cinq — sur trois écrans.',
        'symmetra.case.section7': '07 — Design System',
        'symmetra.case.section7.title': 'Un système, chaque rôle, quatre lignes de produits.',
        'symmetra.case.section8': '08 — États et cas limites',
        'symmetra.case.section8.title': 'Dans un outil réglementé, les bords sont le produit.',
        'symmetra.case.section9': '09 — Dans tout l\'espace de travail',
        'symmetra.case.section9.title': 'La même bibliothèque, composée dans chaque surface.',
        'symmetra.case.section10': '10 — Résultat',
        'symmetra.case.section10.title': 'Plus rapide, plus précis, plus facile à intégrer.',
        
        /* Clinical Case Study */
        'clinical.case.title': 'Le personnel était discrètement retourné au papier.',
        'clinical.case.subtitle': 'Refonte des flux de travail cliniques pour un client du secteur de la santé dont le personnel médical avait abandonné le système numérique — en reconstruisant l\'architecture de l\'information autour du parcours patient, pas de l\'organigramme.',
        'clinical.case.role': 'Designer Produit',
        'clinical.case.timeline': '2017 – 2020',
        'clinical.case.team': 'Premier designer de l\'agence',
        'clinical.case.sector': 'Santé · Clinique',
        'clinical.case.compliance': 'RGPD · données cliniques',
        'clinical.case.section1': '01 — Aperçu',
        'clinical.case.section1.title': 'Un système numérique que les cliniciens avaient rejeté — avec leurs pieds.',
        'clinical.case.section2': '02 — Le problème',
        'clinical.case.section2.title': 'Sauvegarde papier, double entrée et erreurs nées du changement de contexte.',
        'clinical.case.section3': '03 — Recherche',
        'clinical.case.section3.title': 'J\'ai observé les infirmières et les médecins pendant trois quarts de travail complets.',
        'clinical.case.section4': '04 — Réflexion UX',
        'clinical.case.section4.title': 'Redesigner l\'architecture autour du parcours patient.',
        'clinical.case.section5': '05 — Système UI',
        'clinical.case.section5.title': 'Chaque écran commence par la décision, pas les données.',
        'clinical.case.section6': '06 — Résultat',
        'clinical.case.section6.title': 'Le papier a disparu — parce qu\'il n\'était plus nécessaire.',
        
        /* Concilium Case Study */
        'concilium.case.title': 'Concilium — une seule surface pour la décision thérapeutique.',
        'concilium.case.subtitle': 'Une plateforme conceptuelle de support de décision clinique en cardiologie. La question difficile — quel traitement, pour ce patient, et pourquoi — est dispersée sur le dossier électronique, le système de laboratoire, la PACS et les directives. Concilium la place sur une surface décisionnelle unique, avec l\'IA comme deuxième lecteur, jamais le décideur.',
        'concilium.case.role': 'Designer Produit',
        'concilium.case.year': '2026',
        'concilium.case.type': 'Concept · auto-dirigé',
        'concilium.case.sector': 'Santé · Cardiologie',
        'concilium.case.scope': 'IA · système UI · prototype',
        'concilium.case.section1': '01 — Aperçu',
        'concilium.case.section1.title': 'Une décision qu\'un cardiologue prend en quelques minutes, soutenue par des données réparties dans cinq systèmes.',
        'concilium.case.section2': '02 — Le problème',
        'concilium.case.section2.title': 'La preuve existe. Elle ne s\'assoit jamais au même endroit en même temps.',
        'concilium.case.section3': '03 — Architecture de l\'information',
        'concilium.case.section3.title': 'Structurée autour du parcours du clinicien : triage → comprendre → décider.',
        'concilium.case.section4': '04 — Le moteur décisionnel',
        'concilium.case.section4.title': 'Le Concilium : trois régimes, une comparaison, un choix défendable.',
        'concilium.case.section5': '05 — Imagerie et IA',
        'concilium.case.section5.title': 'Une salle de lecture sombre, avec les conclusions du modèle signalées — pas cachées.',
        'concilium.case.section6': '06 — Design System',
        'concilium.case.section6.title': 'Un système, afin qu\'un nombre signifie la même chose partout.',
        'concilium.case.section7': '07 — Réflexion',
        'concilium.case.section7.title': 'Ce qu\'une surface décisionnelle vous rapporte.',
    }
};

function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updatePageLanguage(lang);
}

function updatePageLanguage(lang) {
    const t = translations[lang] || translations.en;
    
    /* Key-based translations (shared nav, work cards, about, case-study headings) */
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (key.includes('.text') || key.includes('certifications')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    /* Inline translations for long-form case-study prose.
       The element's authored markup is the English source; the French
       lives in data-i18n-fr. We cache the English in data-i18n-en on first
       run so toggling back and forth is lossless. innerHTML is used so inline
       tags (<em>, <strong>, <span>, <br>) are preserved in both languages. */
    document.querySelectorAll('[data-i18n-fr]').forEach(el => {
        if (el.getAttribute('data-i18n-en') === null) {
            el.setAttribute('data-i18n-en', el.innerHTML.trim());
        }
        const en = el.getAttribute('data-i18n-en');
        const fr = el.getAttribute('data-i18n-fr');
        el.innerHTML = (lang === 'fr') ? fr : en;
    });
    
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang-btn');
        if (btnLang === lang) {
            btn.classList.add('text-brand-500');
            btn.classList.remove('text-zinc-600');
        } else {
            btn.classList.remove('text-brand-500');
            btn.classList.add('text-zinc-600');
        }
    });
    
    document.documentElement.lang = lang;
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        updatePageLanguage(getCurrentLanguage());
        initLanguageSwitcher();
    });
} else {
    updatePageLanguage(getCurrentLanguage());
    initLanguageSwitcher();
}

function initLanguageSwitcher() {
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = btn.getAttribute('data-lang-btn');
            setLanguage(lang);
        });
    });
}

