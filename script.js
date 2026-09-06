(() => {
  const filters = document.querySelector('.paper-filters');
  const buttons = Array.from(document.querySelectorAll('[data-filter]'));
  const papers = Array.from(document.querySelectorAll('.paper[data-topic]'));
  const ongoing = document.getElementById('ongoing-work');
  const status = document.getElementById('filter-status');
  if (!filters || !ongoing || !status || !papers.length) return;

  const applyFilter = (topic) => {
    if (!buttons.some((button) => button.dataset.filter === topic)) return;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === topic)));
    papers.forEach((paper) => { paper.hidden = topic !== 'all' && paper.dataset.topic !== topic; });
    ongoing.hidden = !papers.some((paper) => ongoing.contains(paper) && !paper.hidden);
    const visible = papers.filter((paper) => !paper.hidden);
    const published = visible.filter((paper) => !ongoing.contains(paper)).length;
    const submissions = visible.length - published;
    status.textContent = `${published} published or workshop papers and ${submissions} submissions under review shown.`;
  };
  buttons.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  document.querySelectorAll('[data-research-filter]').forEach((link) => {
    link.addEventListener('click', () => applyFilter(link.dataset.researchFilter));
  });
  // A direct paper anchor must remain visible after switching topic filters.
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target && target.matches('.paper') && target.hidden) applyFilter('all');
  });
  filters.hidden = false;
  applyFilter('all');
})();
