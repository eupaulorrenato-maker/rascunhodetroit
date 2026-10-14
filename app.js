/**
 * Motor City Shield Exteriors - Comprehensive Interactive Controller
 * Combines 50+ friendly UX with deep technical symptom diagnostics, upgrades, photo attachments, and custom notes.
 */

class MotorCityShieldApp {
  constructor() {
    this.data = window.MOTOR_CITY_DATA;
    this.state = {
      currentView: 'decision-screen', // 'decision-screen' | 'simple-form' | 'diagnostic' | 'simple-success' | 'diagnostic-results'
      
      // Simple Form State (Path A)
      simpleForm: {
        service: 'Roofing',
        name: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        preferredTime: 'Morning (9am - 12pm)',
        notes: ''
      },

      // Comprehensive Diagnostic State (Path B)
      diag: {
        step: 1, // 1: Specialty & Profile, 2: Technical Symptoms, 3: Upgrades & Add-ons, 4: Photos & Custom Notes, 5: Materials
        totalSteps: 5,
        specialty: 'roof', // 'roof' | 'siding' | 'deck'
        homeStyle: '',
        homeAge: '13-19',
        layers: '1',
        symptoms: [],
        upgrades: [],
        photos: [], // { name, src }
        customNotes: '',
        timeline: '2-4weeks',
        insurance: 'no',
        materialId: '',
        // Contact lock-in
        contactName: '',
        contactPhone: '',
        contactZip: '',
        contactCity: '',
        contactAddress: ''
      }
    };

    this.init();
  }

  init() {
    this.showView('decision-screen');
    this.setupListeners();
    this.renderDiagnosticStep();
  }

  setupListeners() {
    // Simple form zip auto-detection
    const simpleZip = document.getElementById('simple-zip');
    if (simpleZip) {
      simpleZip.addEventListener('input', (e) => {
        const val = e.target.value.trim().slice(0, 5);
        this.state.simpleForm.zip = val;
        const matched = this.data.detroitZipMap[val];
        const badge = document.getElementById('simple-zip-badge');
        if (badge) {
          if (matched) {
            this.state.simpleForm.city = matched;
            badge.textContent = `✓ Local Area: ${matched}`;
            badge.className = "text-sm font-semibold text-emerald-700 block mt-1";
          } else if (val.length === 5) {
            this.state.simpleForm.city = "Greater Detroit Area";
            badge.textContent = "✓ Greater Detroit Metro Service Area";
            badge.className = "text-sm font-semibold text-sky-700 block mt-1";
          } else {
            badge.textContent = "";
          }
        }
      });
    }

    // Diagnostic zip auto-detection
    const diagZip = document.getElementById('diag-contact-zip');
    if (diagZip) {
      diagZip.addEventListener('input', (e) => {
        const val = e.target.value.trim().slice(0, 5);
        this.state.diag.contactZip = val;
        const matched = this.data.detroitZipMap[val];
        const badge = document.getElementById('diag-zip-badge');
        if (badge) {
          if (matched) {
            this.state.diag.contactCity = matched;
            badge.textContent = `✓ Confirmed Detroit Area: ${matched}`;
            badge.className = "text-xs font-semibold text-emerald-700 block mt-1";
          } else if (val.length === 5) {
            this.state.diag.contactCity = "Greater Detroit";
            badge.textContent = "✓ Greater Detroit Service Area";
            badge.className = "text-xs font-semibold text-sky-700 block mt-1";
          } else {
            badge.textContent = "";
          }
        }
      });
    }

    // Interactive Photo Uploader
    const photoInput = document.getElementById('diag-photo-input');
    if (photoInput) {
      photoInput.addEventListener('change', (e) => this.handlePhotoFiles(e.target.files));
    }
  }

  showView(viewId) {
    const screens = [
      'decision-screen',
      'simple-form-screen',
      'diagnostic-screen',
      'simple-success-screen',
      'diagnostic-results-screen'
    ];

    screens.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('active');
        el.style.display = 'none';
      }
    });

    const activeEl = document.getElementById(viewId);
    if (activeEl) {
      activeEl.style.display = 'block';
      setTimeout(() => activeEl.classList.add('active'), 20);
    }

    this.state.currentView = viewId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // PATH A: SIMPLE FORM METHODS
  // ==========================================

  selectSimpleService(serviceName) {
    this.state.simpleForm.service = serviceName;
    const services = ['Roofing', 'Siding', 'Decking', 'Multiple / Not Sure'];
    services.forEach(s => {
      const btn = document.getElementById(`simple-srv-${s.replace(/[\s\/]+/g, '-').toLowerCase()}`);
      if (btn) {
        if (s === serviceName) {
          btn.classList.add('border-sky-600', 'bg-sky-50', 'text-sky-900', 'ring-2', 'ring-sky-500/20');
          btn.classList.remove('border-slate-300', 'bg-white', 'text-slate-700');
        } else {
          btn.classList.remove('border-sky-600', 'bg-sky-50', 'text-sky-900', 'ring-2', 'ring-sky-500/20');
          btn.classList.add('border-slate-300', 'bg-white', 'text-slate-700');
        }
      }
    });
  }

  selectSimpleTime(timeSlot) {
    this.state.simpleForm.preferredTime = timeSlot;
    const slots = ['Morning (9am - 12pm)', 'Afternoon (12pm - 4pm)', 'Late Afternoon (4pm - 7pm)', 'Any Time Works'];
    slots.forEach(slot => {
      const key = slot.split(' ')[0].toLowerCase();
      const el = document.getElementById(`time-slot-${key}`);
      if (el) {
        if (slot === timeSlot) {
          el.classList.add('border-sky-600', 'bg-sky-50', 'font-bold', 'text-sky-900');
          el.classList.remove('border-slate-300', 'bg-white', 'text-slate-700');
        } else {
          el.classList.remove('border-sky-600', 'bg-sky-50', 'font-bold', 'text-sky-900');
          el.classList.add('border-slate-300', 'bg-white', 'text-slate-700');
        }
      }
    });
  }

  submitSimpleForm(event) {
    if (event) event.preventDefault();

    const name = document.getElementById('simple-name')?.value || '';
    const phone = document.getElementById('simple-phone')?.value || '';
    const address = document.getElementById('simple-address')?.value || '';
    const zip = document.getElementById('simple-zip')?.value || '';
    const notes = document.getElementById('simple-notes')?.value || '';

    this.state.simpleForm.name = name;
    this.state.simpleForm.phone = phone;
    this.state.simpleForm.address = address;
    this.state.simpleForm.zip = zip;
    this.state.simpleForm.notes = notes;

    const recapName = document.getElementById('success-name');
    const recapPhone = document.getElementById('success-phone');
    const recapAddress = document.getElementById('success-address');
    const recapService = document.getElementById('success-service');
    const recapTime = document.getElementById('success-time');

    if (recapName) recapName.textContent = name;
    if (recapPhone) recapPhone.textContent = phone;
    if (recapAddress) recapAddress.textContent = address + (zip ? ` (${zip})` : '');
    if (recapService) recapService.textContent = this.state.simpleForm.service;
    if (recapTime) recapTime.textContent = this.state.simpleForm.preferredTime;

    this.showView('simple-success-screen');
  }

  // ==========================================
  // PATH B: COMPREHENSIVE TECHNICAL DIAGNOSTIC
  // ==========================================

  startDiagnostic() {
    this.state.diag.step = 1;
    this.showView('diagnostic-screen');
    this.renderDiagnosticStep();
  }

  setDiagnosticSpecialty(specKey) {
    this.state.diag.specialty = specKey;
    const specData = this.data.specialties[specKey];
    this.state.diag.homeStyle = specData.styles[0].id;
    this.state.diag.materialId = specData.materials[1].id; // Default to 'Better' tier (Most Popular)
    this.renderDiagnosticStep();
  }

  nextDiagnosticStep() {
    if (this.state.diag.step < this.state.diag.totalSteps) {
      this.state.diag.step++;
      this.renderDiagnosticStep();
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      this.generateDiagnosticResults();
    }
  }

  prevDiagnosticStep() {
    if (this.state.diag.step > 1) {
      this.state.diag.step--;
      this.renderDiagnosticStep();
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      this.showView('decision-screen');
    }
  }

  selectHomeStyle(styleId) {
    this.state.diag.homeStyle = styleId;
    this.renderStylesOptions();
  }

  selectAge(ageStr) {
    this.state.diag.homeAge = ageStr;
    const ages = ['0-5', '6-12', '13-19', '20+'];
    ages.forEach(a => {
      const btn = document.getElementById(`age-btn-${a}`);
      if (btn) {
        if (a === ageStr) {
          btn.classList.add('border-sky-600', 'bg-sky-50', 'text-sky-900', 'font-bold');
          btn.classList.remove('border-slate-300', 'bg-white', 'text-slate-700');
        } else {
          btn.classList.remove('border-sky-600', 'bg-sky-50', 'text-sky-900', 'font-bold');
          btn.classList.add('border-slate-300', 'bg-white', 'text-slate-700');
        }
      }
    });
  }

  toggleSymptom(symptomId) {
    const list = this.state.diag.symptoms;
    const idx = list.indexOf(symptomId);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(symptomId);
    }
    this.renderSymptomsList();
  }

  toggleUpgrade(upgradeId) {
    const list = this.state.diag.upgrades;
    const idx = list.indexOf(upgradeId);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(upgradeId);
    }
    this.renderUpgradesList();
  }

  selectMaterial(matId) {
    this.state.diag.materialId = matId;
    this.renderMaterialOptions();
  }

  handlePhotoFiles(files) {
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.state.diag.photos.push({
          id: 'photo_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
          name: file.name,
          src: e.target.result
        });
        this.renderPhotoPreviews();
      };
      reader.readAsDataURL(file);
    }
  }

  removePhoto(photoId) {
    this.state.diag.photos = this.state.diag.photos.filter(p => p.id !== photoId);
    this.renderPhotoPreviews();
  }

  renderPhotoPreviews() {
    const container = document.getElementById('diag-photo-preview-grid');
    if (!container) return;

    if (this.state.diag.photos.length === 0) {
      container.innerHTML = `<span class="text-xs text-slate-500 italic">No photos attached yet (optional).</span>`;
      return;
    }

    container.innerHTML = this.state.diag.photos.map(p => `
      <div class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-slate-300 bg-slate-100 shadow-sm flex-shrink-0 group">
        <img src="${p.src}" alt="${p.name}" class="w-full h-full object-cover" />
        <button type="button" onclick="app.removePhoto('${p.id}')"
                class="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-xs font-bold shadow transition-transform group-hover:scale-110">
          ×
        </button>
        <span class="absolute bottom-0 inset-x-0 bg-slate-900/80 text-[10px] text-white px-1 py-0.5 truncate text-center">${p.name}</span>
      </div>
    `).join('');
  }

  renderDiagnosticStep() {
    const step = this.state.diag.step;
    const total = this.state.diag.totalSteps;

    // Progress Bar
    const progressTrack = document.getElementById('diag-progress-fill');
    const stepLabel = document.getElementById('diag-step-counter');
    if (progressTrack) progressTrack.style.width = `${(step / total) * 100}%`;
    if (stepLabel) stepLabel.textContent = `Step ${step} of ${total}`;

    // Hide all step sections
    for (let i = 1; i <= total; i++) {
      const container = document.getElementById(`diag-step-content-${i}`);
      if (container) {
        container.style.display = i === step ? 'block' : 'none';
      }
    }

    // Step-specific renders
    if (step === 1) {
      this.renderSpecialtySelector();
      this.renderStylesOptions();
    } else if (step === 2) {
      this.renderSymptomsList();
    } else if (step === 3) {
      this.renderUpgradesList();
    } else if (step === 4) {
      this.renderPhotoPreviews();
    } else if (step === 5) {
      this.renderMaterialOptions();
    }

    if (window.lucide) window.lucide.createIcons();
  }

  renderSpecialtySelector() {
    const cur = this.state.diag.specialty;
    const specialties = ['roof', 'siding', 'deck'];
    specialties.forEach(s => {
      const btn = document.getElementById(`diag-spec-${s}`);
      if (btn) {
        if (s === cur) {
          btn.classList.add('border-sky-600', 'bg-sky-50', 'text-sky-900', 'ring-2', 'ring-sky-500/20');
          btn.classList.remove('border-slate-300', 'bg-white', 'text-slate-700');
        } else {
          btn.classList.remove('border-sky-600', 'bg-sky-50', 'text-sky-900', 'ring-2', 'ring-sky-500/20');
          btn.classList.add('border-slate-300', 'bg-white', 'text-slate-700');
        }
      }
    });

    const codeNotice = document.getElementById('diag-spec-code-notice');
    if (codeNotice) {
      codeNotice.textContent = this.data.specialties[cur].michiganCode;
    }
  }

  renderStylesOptions() {
    const spec = this.data.specialties[this.state.diag.specialty];
    const container = document.getElementById('diag-styles-grid');
    if (!container) return;

    container.innerHTML = spec.styles.map(st => {
      const isSelected = this.state.diag.homeStyle === st.id;
      return `
        <div onclick="app.selectHomeStyle('${st.id}')"
             class="choice-card p-3.5 sm:p-4 ${isSelected ? 'selected' : ''}">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h4 class="font-bold text-slate-900 text-sm sm:text-base">${st.name}</h4>
              <p class="text-xs text-slate-600 mt-1 leading-snug">${st.desc}</p>
            </div>
            <div class="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center card-radio-dot flex-shrink-0 mt-0.5">
              <div class="w-2.5 h-2.5 rounded-full bg-white card-radio-dot-inner ${isSelected ? '' : 'opacity-0'}"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderSymptomsList() {
    const spec = this.data.specialties[this.state.diag.specialty];
    const container = document.getElementById('diag-symptoms-grid');
    const headerTitle = document.getElementById('diag-symptoms-header');
    if (!container) return;

    if (headerTitle) {
      headerTitle.textContent = `Select all issues or damage you notice with your ${spec.name.toLowerCase()}:`;
    }

    container.innerHTML = spec.symptoms.map(sym => {
      const isSelected = this.state.diag.symptoms.includes(sym.id);
      const sevColor = sym.severity === 'Critical' ? 'bg-red-100 text-red-800 border-red-300' : sym.severity === 'High' ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-sky-100 text-sky-800 border-sky-300';

      return `
        <div onclick="app.toggleSymptom('${sym.id}')"
             class="choice-card p-4 ${isSelected ? 'selected' : ''}">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg ${isSelected ? 'bg-sky-700 text-white' : 'bg-slate-100 text-slate-600'} flex items-center justify-center flex-shrink-0 mt-0.5">
                <i data-lucide="${sym.icon || 'alert-triangle'}" class="w-4 h-4"></i>
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <h4 class="font-bold text-slate-900 text-sm sm:text-base">${sym.title}</h4>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${sevColor}">
                    ${sym.severity}
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">${sym.desc}</p>
              </div>
            </div>
            <div class="w-6 h-6 rounded border-2 ${isSelected ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300 bg-white'} flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
              <i data-lucide="check" class="w-4 h-4 ${isSelected ? '' : 'hidden'}"></i>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  renderUpgradesList() {
    const spec = this.data.specialties[this.state.diag.specialty];
    const container = document.getElementById('diag-upgrades-grid');
    const title = document.getElementById('diag-upgrades-title');
    if (!container) return;

    if (title) {
      title.textContent = `Recommended Michigan Upgrades & Extras for ${spec.name}:`;
    }

    container.innerHTML = spec.upgrades.map(upg => {
      const isSelected = this.state.diag.upgrades.includes(upg.id);
      return `
        <div onclick="app.toggleUpgrade('${upg.id}')"
             class="choice-card p-4 ${isSelected ? 'selected' : ''}">
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="font-bold text-slate-900 text-sm sm:text-base">${upg.name}</h4>
                <span class="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  ${upg.cost}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">${upg.desc}</p>
            </div>
            <div class="w-6 h-6 rounded border-2 ${isSelected ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300 bg-white'} flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
              <i data-lucide="check" class="w-4 h-4 ${isSelected ? '' : 'hidden'}"></i>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  renderMaterialOptions() {
    const spec = this.data.specialties[this.state.diag.specialty];
    const container = document.getElementById('diag-materials-list');
    if (!container) return;

    container.innerHTML = spec.materials.map(mat => {
      const isSelected = this.state.diag.materialId === mat.id;
      return `
        <div onclick="app.selectMaterial('${mat.id}')"
             class="choice-card p-5 sm:p-6 ${isSelected ? 'selected' : ''}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div>
              <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${mat.badge.includes('Most Popular') || mat.badge.includes('Best for') ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-sky-100 text-sky-800 border border-sky-300'}">
                ${mat.badge}
              </span>
              <h4 class="text-xl font-bold text-slate-900 mt-1">${mat.name}</h4>
              <span class="text-xs text-slate-500 font-medium">${mat.brand}</span>
            </div>
            <div class="text-left sm:text-right">
              <span class="text-xs text-slate-500 block uppercase font-semibold">Typical Installed Range</span>
              <span class="text-lg font-extrabold text-emerald-700 font-mono">${mat.estRange}</span>
            </div>
          </div>

          <p class="text-slate-700 text-sm mt-3 leading-relaxed">${mat.desc}</p>

          <ul class="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-600">
            ${mat.benefits.map(b => `
              <li class="flex items-center gap-2">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 flex-shrink-0"></i>
                <span>${b}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  generateDiagnosticResults() {
    // Collect step 4 values
    this.state.diag.customNotes = document.getElementById('diag-custom-notes')?.value || '';
    this.state.diag.timeline = document.getElementById('diag-timeline')?.value || '2-4weeks';
    this.state.diag.insurance = document.getElementById('diag-insurance')?.value || 'no';

    const spec = this.data.specialties[this.state.diag.specialty];
    const chosenMat = spec.materials.find(m => m.id === this.state.diag.materialId) || spec.materials[1];

    // Evaluate symptoms severity
    const criticalSymptoms = this.state.diag.symptoms.filter(symId => {
      const item = spec.symptoms.find(x => x.id === symId);
      return item && (item.severity === 'Critical' || item.severity === 'High');
    });

    let verdictTitle = "";
    let verdictSubtitle = "";
    let isFullReplace = false;

    if (criticalSymptoms.length >= 2 || this.state.diag.homeAge === '20+') {
      isFullReplace = true;
      verdictTitle = `We Recommend a Full ${spec.name} Replacement`;
      verdictSubtitle = `Multiple structural or moisture vulnerabilities detected. A full tear-off and replacement protects your attic and structural wood permanently.`;
    } else if (criticalSymptoms.length === 1) {
      verdictTitle = `Targeted Component Repair or Sectional Replacement Viable`;
      verdictSubtitle = `Your exterior has localized damage. Our lead technician will inspect the surrounding wood during our free visit to confirm if a targeted repair will hold.`;
    } else {
      verdictTitle = `Precision Maintenance & Minor Repair Recommended`;
      verdictSubtitle = `Your exterior appears structurally solid. Preventative sealing, flashing tune-up, and localized maintenance will preserve your investment.`;
    }

    // Populate Results Screen Elements
    const titleEl = document.getElementById('results-verdict-title');
    const subEl = document.getElementById('results-verdict-sub');
    const symptomsContainer = document.getElementById('results-flagged-symptoms-list');
    const upgradesContainer = document.getElementById('results-selected-upgrades-list');
    const notesBox = document.getElementById('results-user-notes-display');
    const priceRangeEl = document.getElementById('results-price-range');
    const matNameEl = document.getElementById('results-material-title');
    const photoCountEl = document.getElementById('results-photo-count');

    if (titleEl) titleEl.textContent = verdictTitle;
    if (subEl) subEl.textContent = verdictSubtitle;
    if (priceRangeEl) priceRangeEl.textContent = chosenMat.estRange;
    if (matNameEl) matNameEl.textContent = `${chosenMat.name} (${chosenMat.badge})`;
    if (photoCountEl) photoCountEl.textContent = `${this.state.diag.photos.length} photo(s) attached`;

    // Symptoms List
    if (symptomsContainer) {
      if (this.state.diag.symptoms.length > 0) {
        symptomsContainer.innerHTML = this.state.diag.symptoms.map(id => {
          const sItem = spec.symptoms.find(x => x.id === id);
          return sItem ? `
            <li class="flex items-start gap-2 text-slate-700 text-sm">
              <i data-lucide="alert-circle" class="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"></i>
              <span><strong>${sItem.title}:</strong> ${sItem.desc}</span>
            </li>
          ` : '';
        }).join('');
      } else {
        symptomsContainer.innerHTML = `<li class="text-xs text-slate-500 italic">No specific symptoms flagged (general evaluation).</li>`;
      }
    }

    // Upgrades List
    if (upgradesContainer) {
      if (this.state.diag.upgrades.length > 0) {
        upgradesContainer.innerHTML = this.state.diag.upgrades.map(id => {
          const uItem = spec.upgrades.find(x => x.id === id);
          return uItem ? `
            <li class="flex items-start gap-2 text-slate-700 text-sm">
              <i data-lucide="plus-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
              <span><strong>${uItem.name}</strong> (${uItem.cost})</span>
            </li>
          ` : '';
        }).join('');
      } else {
        upgradesContainer.innerHTML = `<li class="text-xs text-slate-500 italic">No additional custom upgrades selected (standard code package).</li>`;
      }
    }

    // Custom notes
    if (notesBox) {
      if (this.state.diag.customNotes.trim()) {
        notesBox.innerHTML = `
          <div class="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-slate-800">
            <span class="font-bold text-amber-900 block mb-1">Your Personal Notes & Details:</span>
            <p class="italic">"${this.state.diag.customNotes}"</p>
          </div>
        `;
      } else {
        notesBox.innerHTML = '';
      }
    }

    this.showView('diagnostic-results-screen');
    if (window.lucide) window.lucide.createIcons();
  }

  submitDiagnosticLead(event) {
    if (event) event.preventDefault();

    const name = document.getElementById('diag-contact-name')?.value || '';
    const phone = document.getElementById('diag-contact-phone')?.value || '';
    const address = document.getElementById('diag-contact-address')?.value || '';
    const zip = document.getElementById('diag-contact-zip')?.value || '';

    this.state.diag.contactName = name;
    this.state.diag.contactPhone = phone;
    this.state.diag.contactAddress = address;
    this.state.diag.contactZip = zip;

    // Show Success Screen
    const recapName = document.getElementById('success-name');
    const recapPhone = document.getElementById('success-phone');
    const recapAddress = document.getElementById('success-address');
    const recapService = document.getElementById('success-service');
    const recapTime = document.getElementById('success-time');

    const spec = this.data.specialties[this.state.diag.specialty];

    if (recapName) recapName.textContent = name;
    if (recapPhone) recapPhone.textContent = phone;
    if (recapAddress) recapAddress.textContent = (address ? address + ', ' : '') + (this.state.diag.contactCity || (zip ? `Zip ${zip}` : 'Detroit Metro'));
    if (recapService) recapService.textContent = `${spec.name} Diagnostic Specification (${this.state.diag.symptoms.length} issues, ${this.state.diag.upgrades.length} upgrades)`;
    if (recapTime) recapTime.textContent = 'Free Inspection Callback';

    this.showView('simple-success-screen');
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.app = new MotorCityShieldApp();
});
