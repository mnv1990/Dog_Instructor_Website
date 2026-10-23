(() => {
  const currentSection = document.querySelector('[data-agenda-current]');
  const emptySection = document.querySelector('[data-agenda-empty]');
  const image = document.querySelector('[data-agenda-image]');
  const backdrop = document.querySelector('[data-agenda-backdrop]');
  const dialogImage = document.querySelector('[data-agenda-dialog-image]');
  const originalLink = document.querySelector('[data-agenda-original]');
  const title = document.querySelector('[data-agenda-title]');
  const description = document.querySelector('[data-agenda-description]');
  const caption = document.querySelector('[data-agenda-caption]');
  const updated = document.querySelector('[data-agenda-updated]');
  const events = document.querySelector('[data-agenda-events]');
  const eventsBlock = document.querySelector('[data-agenda-events-block]');
  const note = document.querySelector('[data-agenda-note]');
  const dialog = document.querySelector('[data-agenda-dialog]');
  const openButton = document.querySelector('[data-agenda-open]');
  const closeButton = document.querySelector('[data-agenda-close]');

  const normalizeAssetPath = (value) => {
    if (typeof value !== 'string' || !value.trim()) return '';
    if (/^(https?:|data:|blob:)/i.test(value)) return value;
    return value.replace(/^\/+/, '');
  };

  const formatDate = (value) => {
    if (!value) return '';
    const parsed = new Date(`${value}T12:00:00`);
    if (Number.isNaN(parsed.getTime())) return value;
    return new Intl.DateTimeFormat('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(parsed);
  };

  const renderEvents = (items) => {
    if (!events || !eventsBlock) return;
    events.textContent = '';

    if (!Array.isArray(items) || items.length === 0) {
      eventsBlock.hidden = true;
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const li = document.createElement('li');
      const day = document.createElement('span');
      const content = document.createElement('span');
      const eventTitle = document.createElement('strong');

      day.className = 'agenda-event-day';
      day.textContent = String(item.day || '').padStart(2, '0');
      content.className = 'agenda-event-copy';
      eventTitle.textContent = item.title || '';
      content.append(eventTitle);

      if (item.location) {
        const location = document.createElement('small');
        location.textContent = item.location;
        content.append(location);
      }

      li.append(day, content);
      fragment.append(li);
    });

    events.append(fragment);
    eventsBlock.hidden = false;
  };

  const applyAgenda = (data) => {
    if (!data || typeof data !== 'object') return;

    if (data.published === false) {
      if (currentSection) currentSection.hidden = true;
      if (emptySection) emptySection.hidden = false;
      return;
    }

    if (currentSection) currentSection.hidden = false;
    if (emptySection) emptySection.hidden = true;

    const src = normalizeAssetPath(data.image);
    if (src) {
      [image, backdrop, dialogImage].forEach((node) => {
        if (node) node.src = src;
      });
      if (originalLink) originalLink.href = src;
    }

    const alt = data.alt || 'Agenda aggiornata delle attività di Valentina';
    if (image) image.alt = alt;
    if (dialogImage) dialogImage.alt = alt;
    if (title && data.title) title.textContent = data.title;
    if (description && data.description) description.textContent = data.description;
    if (caption) caption.textContent = data.title ? `${data.title} · apri l’immagine per leggerla a piena dimensione.` : 'Apri l’immagine per leggerla a piena dimensione.';
    if (updated) updated.textContent = formatDate(data.updated) || 'Data non indicata';

    if (note) {
      note.textContent = data.note || '';
      note.hidden = !data.note;
    }

    renderEvents(data.events);
  };

  if (window.location.protocol !== 'file:') {
    fetch('data/agenda.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error(`Agenda non disponibile: ${response.status}`);
        return response.json();
      })
      .then(applyAgenda)
      .catch(() => {
        // Il contenuto statico nell’HTML resta disponibile se il file dati non è raggiungibile.
      });
  }

  if (dialog && openButton && closeButton && typeof dialog.showModal === 'function') {
    openButton.addEventListener('click', () => dialog.showModal());
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  } else if (openButton && originalLink) {
    openButton.addEventListener('click', () => originalLink.click());
  }
})();
