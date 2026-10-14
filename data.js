/**
 * Motor City Shield Exteriors - Data & Technical Knowledge Base
 * Rich technical options, damage symptoms, upgrades, materials, and Detroit-specific climate factors.
 */

window.MOTOR_CITY_DATA = {
  company: {
    name: "Motor City Shield Exteriors",
    tagline: "Honest Exterior Craftsmanship. Built for Michigan Winters.",
    phone: "(313) 558-8920",
    email: "estimating@motorcityshield.com",
    address: "Serving Wayne, Oakland & Macomb Counties",
    license: "Michigan State Licensed Builder #2101294812",
    experience: "Over 20 Years Serving Greater Detroit Families"
  },

  detroitZipMap: {
    "48201": "Midtown Detroit (Wayne)",
    "48202": "New Center / North End (Wayne)",
    "48206": "Boston-Edison Historic District (Wayne)",
    "48214": "Indian Village / West Village (Wayne)",
    "48221": "University District / Palmer Woods (Wayne)",
    "48226": "Downtown Detroit (Wayne)",
    "48067": "Royal Oak (Oakland)",
    "48073": "Royal Oak (Oakland)",
    "48009": "Birmingham (Oakland)",
    "48302": "Bloomfield Hills (Oakland)",
    "48220": "Ferndale (Oakland)",
    "48230": "Grosse Pointe (Wayne)",
    "48236": "Grosse Pointe Woods / Farms (Wayne)",
    "48124": "Dearborn (Wayne)",
    "48150": "Livonia (Wayne)",
    "48084": "Troy (Oakland)",
    "48326": "Auburn Hills (Oakland)",
    "48080": "St. Clair Shores (Macomb)",
    "48044": "Macomb Township (Macomb)",
    "48310": "Sterling Heights (Macomb)"
  },

  specialties: {
    roof: {
      name: "Roofing",
      headline: "Roof Repair, Tear-Off & Replacement",
      subhead: "Stop leaks and protect your home from harsh Michigan snow and ice dams.",
      icon: "shield",
      michiganCode: "Michigan Residential Code R905 requires ice barrier protection at least 24 inches inside the exterior wall line. R908 limits roof overlays to a maximum of 2 layers.",

      // Home styles for Detroit
      styles: [
        { id: "craftsman", name: "Craftsman / Bungalow", desc: "Common in Boston-Edison & Detroit. Moderate slopes with dormers." },
        { id: "colonial", name: "Classic 2-Story Colonial", desc: "Common in Grosse Pointe, Birmingham & Troy. Gable or hip roof." },
        { id: "tudor", name: "Historic English Tudor", desc: "Steep pitches and complex valley intersections." },
        { id: "ranch", name: "Suburban Ranch", desc: "Low-pitch roof with long continuous ridge lines." },
        { id: "flat-porch", name: "Flat Roof / Covered Porch Addition", desc: "Low-slope or flat roof requiring waterproof rubber EPDM membrane." }
      ],

      // Technical symptoms / problems list
      symptoms: [
        {
          id: "active-leak",
          title: "Active Leak or Ceiling Water Stains",
          desc: "Water is currently dripping or causing brown stains on ceilings, walls, or attic rafters.",
          severity: "Critical",
          icon: "droplet"
        },
        {
          id: "ice-dams",
          title: "Ice Damming & Gutter Icicles",
          desc: "Snow melts on the roof, refreezes at the cold eaves, and backs water up under the shingles.",
          severity: "High",
          icon: "snowflake"
        },
        {
          id: "missing-shingles",
          title: "Missing, Creased or Blown-Off Shingles",
          desc: "High Michigan storm winds broke shingle adhesive seals or tore shingles off the roof deck.",
          severity: "High",
          icon: "wind"
        },
        {
          id: "flashing-failure",
          title: "Chimney, Valley or Skylight Flashing Failure",
          desc: "Rusted or cracked metal flashing around the chimney, dormers, or roof valleys letting water in.",
          severity: "High",
          icon: "alert-triangle"
        },
        {
          id: "granule-loss",
          title: "Granule Loss / Sandy Gutters / Bare Spots",
          desc: "Asphalt shingles are shedding their protective stone granules, leaving brittle fiberglass exposed to UV.",
          severity: "Medium",
          icon: "sun"
        },
        {
          id: "curling-shingles",
          title: "Curling, Cupping or Clawing Shingle Tabs",
          desc: "Shingles have dried out with age and are lifting at the edges, prone to cracking in cold weather.",
          severity: "High",
          icon: "activity"
        },
        {
          id: "ventilation-attic",
          title: "Poor Attic Ventilation / Humidity or Mold Odor",
          desc: "Trapped heat and moisture in the attic causing condensation on rafters during freezing winter days.",
          severity: "Medium",
          icon: "wind"
        },
        {
          id: "sagging-decking",
          title: "Sagging Roofline or Spongy Decking Wood",
          desc: "Underlying plywood sheathing has softened or rotted from long-term trapped moisture.",
          severity: "Critical",
          icon: "alert-octagon"
        }
      ],

      // Optional technical upgrades & add-ons
      upgrades: [
        {
          id: "gutters-6in",
          name: "6-inch Seamless Heavy-Gauge Gutters + Micro-Mesh Leaf Guards",
          cost: "+$1,400 – $2,600",
          desc: "Carries 40% more snowmelt and heavy rainfall than standard 5-inch gutters, keeping water away from foundation."
        },
        {
          id: "extended-ice-shield",
          name: "6-Foot Extended Ice & Water Shield Protection",
          cost: "+$450 – $850",
          desc: "Surpasses standard Michigan 24-inch code: doubles waterproof rubber membrane along eaves and valleys for extreme ice protection."
        },
        {
          id: "ridge-vent-system",
          name: "High-Flow Ridge Ventilation + Baffled Intake Soffit Airflow",
          cost: "+$350 – $650",
          desc: "Balances attic airflow to flush out summer heat and prevent winter ice dams from forming in the first place."
        },
        {
          id: "skylight-replace",
          name: "New Velux® Leak-Proof Skylight with Solar Blinds",
          cost: "+$1,200 – $2,100",
          desc: "Replaces old cloudy, leaking skylights with fresh energy-efficient tempered glass and factory flashings."
        },
        {
          id: "plywood-resheath",
          name: "New 1/2-inch CDX Roof Decking Plywood Sheathing",
          cost: "+$85 – $110 / sheet",
          desc: "Replaces rotten, cracked, or thin 1x6 tongue-and-groove pine boards with solid structural exterior plywood."
        }
      ],

      // Material Tiers
      materials: [
        {
          id: "standard-shingle",
          tier: "Good Value",
          name: "Standard 30-Year Architectural Shingles",
          brand: "GAF Timberline HDZ® (Class 3)",
          badge: "Most Popular",
          benefits: [
            "Dimensional wood-shake look with shadow lines",
            "130 MPH LayerLock™ high-wind warranty",
            "Class 3 hail impact resistance",
            "Algae-resistant StainGuard Plus™ protection"
          ],
          estRange: "$6,500 – $9,800",
          desc: "The reliable, attractive standard installed on thousands of Metro Detroit homes."
        },
        {
          id: "storm-shingle",
          tier: "Better Protection",
          name: "Class 4 Impact & Freeze-Resistant Shingles",
          brand: "CertainTeed NorthGate® ClimateFlex®",
          badge: "Best for Michigan Winters",
          benefits: [
            "Rubberized SBS polymer asphalt stays pliable down to -20°F",
            "Highest hail impact rating (Class 4) — potential insurance discount",
            "Superior grip against ice dam tear-off",
            "Extended non-prorated lifetime manufacturer warranty"
          ],
          estRange: "$8,900 – $13,500",
          desc: "Engineered specifically for harsh northern climates. Resists cracking during rapid Michigan freeze-thaw cycles."
        },
        {
          id: "standing-seam",
          tier: "Best Lifetime",
          name: "Commercial-Grade Standing Seam Metal",
          brand: "24-Gauge Galvalume Steel with Kynar 500®",
          badge: "Lasts 50+ Years",
          benefits: [
            "Snow sheds off effortlessly (virtually impossible to ice dam)",
            "Concealed fasteners eliminate all screw leak vulnerabilities",
            "Rated for 150+ MPH Category 5 storm winds",
            "Drastically increases property appraisal and curb appeal"
          ],
          estRange: "$16,000 – $25,000",
          desc: "The permanent roofing solution. Zero maintenance, impervious to rot, and lasts a lifetime."
        }
      ]
    },

    siding: {
      name: "Siding",
      headline: "Siding Repair, Insulation & Replacement",
      subhead: "Lower your winter heating bills, boost curb appeal, and eliminate exterior maintenance.",
      icon: "home",
      michiganCode: "Michigan Building Code requires a continuous weather-resistant barrier (house wrap) and proper flashing around all window and door penetrations.",

      styles: [
        { id: "lap-siding", name: "Traditional Horizontal Lap / Clapboard", desc: "Classic 4\" to 7\" exposure. Timeless look for Detroit Colonials and Ranches." },
        { id: "board-batten", name: "Modern Board & Batten (Vertical)", desc: "Vertical wide panels with narrow battens. Clean, modern farmhouse look." },
        { id: "cedar-shake", name: "Shake & Shingle Accents", desc: "Textured cedar look, perfect for gables, front porches, and dormers." },
        { id: "dutch-lap", name: "Dutch Lap Profile", desc: "Distinctive beveled notch along the top edge for dramatic shadow lines." }
      ],

      symptoms: [
        {
          id: "loose-siding",
          title: "Loose, Cracked, or Wind-Blown Panels",
          desc: "Siding has unclipped in high winds, cracked during winter freezes, or has holes from stray debris.",
          severity: "High",
          icon: "wind"
        },
        {
          id: "wood-rot-trim",
          title: "Wood Rot Around Window Casings & Door Headers",
          desc: "Water is penetrating behind old exterior trim, softening or rotting the wooden structural framing.",
          severity: "Critical",
          icon: "alert-octagon"
        },
        {
          id: "drafts-heating",
          title: "Drafty Rooms & High Winter DTE Heating Bills",
          desc: "Cold winter drafts seep through wall cavities because old siding lacks continuous exterior insulation.",
          severity: "High",
          icon: "snowflake"
        },
        {
          id: "faded-chalking",
          title: "Faded, Chalking, or Brittle Old Vinyl",
          desc: "Decades of sun and cold have broken down the vinyl polymers, making panels brittle and dull.",
          severity: "Medium",
          icon: "sun"
        },
        {
          id: "moisture-mold",
          title: "Moisture, Green Algae or Mold on North Walls",
          desc: "Damp exterior walls staying wet, creating mildew and potentially trapping moisture in the wall sheathing.",
          severity: "Medium",
          icon: "droplet"
        },
        {
          id: "pest-damage",
          title: "Woodpecker, Rodent, or Pest Intrusion",
          desc: "Animals pecking or chewing through old wood or unsealed soffits, nesting inside wall cavities.",
          severity: "High",
          icon: "alert-triangle"
        }
      ],

      upgrades: [
        {
          id: "foam-insulation-wrap",
          name: "1-inch Continuous Neopor® Rigid Foam Insulation",
          cost: "+$1.40 / sq. ft.",
          desc: "Wraps your entire home in a continuous R-5 thermal blanket, stopping cold wall drafts and cutting DTE heating costs."
        },
        {
          id: "pvc-trim-casing",
          name: "Custom-Bent Cellular PVC Trim Wrap (Window Casings & Fascia)",
          cost: "+$1,600 – $2,800",
          desc: "Permanently wraps all exterior wood window frames, rake boards, and door headers in rot-proof, paint-free white PVC."
        },
        {
          id: "gable-accent",
          name: "Board & Batten or Cedar Shake Gable Accents",
          cost: "+$850 – $1,600",
          desc: "Adds architectural character and dimension to front roof gables for maximum street appeal."
        },
        {
          id: "tyvek-drainwrap",
          name: "DuPont™ Tyvek® DrainWrap™ Moisture Barrier",
          cost: "+$450 – $800",
          desc: "Engineered drainage grooves channel bulk rainwater and snowmelt safely away before it touches wood framing."
        }
      ],

      materials: [
        {
          id: "standard-vinyl",
          tier: "Good Value",
          name: "Heavy-Gauge Premium Vinyl (.046 Gauge)",
          brand: "CertainTeed MainStreet™",
          badge: "Budget Friendly",
          benefits: [
            "Never needs painting, scraping, or staining",
            "Tested to withstand 130 MPH winds",
            "Clean woodgrain finish with rich fade-resistant colors",
            "Lifetime limited transferable warranty"
          ],
          estRange: "$7,500 – $11,500",
          desc: "Cost-effective, clean, and durable. Keeps your home looking fresh with virtually zero annual upkeep."
        },
        {
          id: "insulated-vinyl",
          tier: "Better Protection",
          name: "Contoured Insulated Vinyl (Warm Wall System)",
          brand: "ProVia CedarMAX® (EPS Foam Backed)",
          badge: "Best Heating Bill Savings",
          benefits: [
            "Rigid EPS foam fused directly to panel provides R-3.0 insulation",
            "High impact resistance against hail, baseballs, and weed trimmers",
            "Muffles outdoor neighborhood and traffic noise significantly",
            "Straight, flat wall lines that won't wave or rattle in high wind"
          ],
          estRange: "$10,500 – $15,800",
          desc: "Wraps your home in an insulated blanket. Keeps interior rooms noticeably warmer during Michigan Januarys."
        },
        {
          id: "fiber-cement",
          tier: "Best Lifetime",
          name: "James Hardie® Fiber Cement Siding",
          brand: "HardiePlank® Statement Collection",
          badge: "Unmatched Durability",
          benefits: [
            "Non-combustible (Class A fire rating) & 100% pest/woodpecker proof",
            "Engineered specifically for Northern HZ5® freeze-thaw climate",
            "Will never melt, warp, or rot like plastic or untreated wood",
            "Baked-on ColorPlus® ceramic finish resists UV fading for 15+ years"
          ],
          estRange: "$14,500 – $22,500",
          desc: "The gold standard in exterior siding. Delivers authentic historic woodwork depth with aerospace longevity."
        }
      ]
    },

    deck: {
      name: "Decking",
      headline: "Custom Deck Building, Resurfacing & Structural Repairs",
      subhead: "Enjoy safe, splinter-free outdoor living with materials engineered for Michigan freezes.",
      icon: "layout",
      michiganCode: "Michigan Building Code strictly mandates deck post footings extend at least 42 inches below grade to prevent winter frost heave.",

      styles: [
        { id: "ground-walkout", name: "Ground-Level Walkout (<30\" elevation)", desc: "Low profile, seamless transition from patio door to backyard lawn." },
        { id: "second-story", name: "Elevated Second-Story Walkout (>6ft elevation)", desc: "Requires heavy-duty 6x6 support posts, cross-bracing, and secure stairs." },
        { id: "multi-tier", name: "Multi-Tier Cascading Deck", desc: "Dual or triple elevation zones for dining, grilling, and lounge seating." },
        { id: "front-porch", name: "Historic Detroit Front Porch Rebuild", desc: "Tongue-and-groove porch flooring with classic box columns and railings." }
      ],

      symptoms: [
        {
          id: "splintering-rot",
          title: "Wood Splintering, Cracking, or Rotting Boards",
          desc: "Surface boards are rough, peeling, cracking, or soft underfoot — unsafe for bare feet and grandchildren.",
          severity: "High",
          icon: "alert-triangle"
        },
        {
          id: "wobbly-railings",
          title: "Wobbly / Loose Railings or Shaky Staircase",
          desc: "Perimeter guardrails shift when leaned on, stair stringers squeak or feel unstable.",
          severity: "Critical",
          icon: "alert-octagon"
        },
        {
          id: "frost-heave",
          title: "Deck Shifting / Sinking / Frost Heave Tilt",
          desc: "Ground posts have tilted or sunk because footings were poured shallower than the 42-inch Michigan frost line.",
          severity: "Critical",
          icon: "activity"
        },
        {
          id: "ledger-rot",
          title: "Soft Wood / Moisture at House Connection (Ledger Board)",
          desc: "Missing Z-flashing where the deck attaches to the house, allowing rainwater to rot the home's rim joist.",
          severity: "Critical",
          icon: "droplet"
        },
        {
          id: "corroded-fasteners",
          title: "Rusted Screws, Nails or Corroded Metal Joist Hangers",
          desc: "Fasteners corroding beneath the surface, weakening the structural framing support.",
          severity: "High",
          icon: "wrench"
        },
        {
          id: "tired-of-staining",
          title: "Tired of Power-Washing, Scraping & Staining Every Year",
          desc: "The underlying wood frame is solid, but you want maintenance-free composite boards on top.",
          severity: "Medium",
          icon: "sun"
        }
      ],

      upgrades: [
        {
          id: "stair-lights-led",
          name: "Low-Voltage LED Stair Riser & Post Cap Lighting",
          cost: "+$850 – $1,600",
          desc: "Warm ambient illumination automatically turns on at dusk for safe nighttime navigation and backyard entertaining."
        },
        {
          id: "under-deck-drainage",
          name: "Trex RainEscape® Under-Deck Dry Patio Ceiling",
          cost: "+$2,200 – $4,500",
          desc: "Channels rain away from an elevated 2nd-story deck, creating a 100% dry, shaded outdoor patio room underneath."
        },
        {
          id: "aluminum-cable-rail",
          name: "Textured Black Aluminum Spindles or Marine Stainless Cable Rail",
          cost: "+$1,200 – $2,400",
          desc: "Sleek, modern architectural railing that preserves open views of your backyard without rotting or rusting."
        },
        {
          id: "built-in-bench",
          name: "Integrated Composite Bench Seating & Privacy Screen Wall",
          cost: "+$1,100 – $2,100",
          desc: "Built-in perimeter seating with a matching 6-foot horizontal slat privacy wall from neighbors."
        },
        {
          id: "helical-piers",
          name: "Titan 54-inch Steel Helical Screw Foundation Piers",
          cost: "+$250 / pier",
          desc: "Engineered deep foundation driven well below the frost line without tearing up your lawn with excavators."
        }
      ],

      materials: [
        {
          id: "pressure-treated",
          tier: "Good Value",
          name: "Pressure-Treated Southern Yellow Pine",
          brand: "#1 Grade MicroPro Sienna®",
          badge: "Budget Friendly",
          benefits: [
            "Heavy-duty copper preservative protects against subterranean rot",
            "Natural real-wood warmth and authentic grain",
            "Economical upfront installation cost",
            "Requires power-washing and water repellent sealant every 2 years"
          ],
          estRange: "$5,500 – $9,000",
          desc: "Solid, dependable traditional wood. Best for homeowners comfortable with routine seasonal maintenance."
        },
        {
          id: "composite-trex",
          tier: "Better Protection",
          name: "Trex® High-Performance Composite Decking",
          brand: "Trex Transcend® or Select®",
          badge: "Most Popular (Zero Staining)",
          benefits: [
            "100% splinter-free — completely barefoot safe for pets and kids",
            "Never needs painting, staining, or sanding ever",
            "25 to 50-year fade and stain manufacturer warranty",
            "Snow shovels easily off the protective shell without scratching"
          ],
          estRange: "$9,500 – $16,500",
          desc: "Made from 95% recycled sawdust and plastic wrap. Never rots, warps, or splinters under Michigan winter snow piles."
        },
        {
          id: "capped-pvc",
          tier: "Best Lifetime",
          name: "Advanced Capped Cellular PVC Decking",
          brand: "TimberTech® Advanced PVC (Vintage Collection)",
          badge: "Top of the Line",
          benefits: [
            "Zero organic wood content — 100% impervious to moisture and rot",
            "Stays noticeably cooler under bare feet in hot summer sunshine",
            "Superior scratch and stain resistance (unaffected by BBQ grease)",
            "50-year limited lifetime warranty"
          ],
          estRange: "$14,000 – $24,000",
          desc: "The pinnacle of outdoor decking technology. Unmatched woodgrain realism, maximum heat dissipation, and zero rot."
        }
      ]
    }
  }
};
